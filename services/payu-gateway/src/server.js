import crypto from "node:crypto";
import http from "node:http";

const PRODUCT_CATALOG = new Map(
  [
    ["frosty-white-bed", ["Frosty White Bed", 18900]],
    ["ac-study-table", ["AC Study Table", 7490]],
    ["centre-table", ["Centre Table", 5490]],
    ["one-door-wardrobe-frosty-white", ["1 Door Wooden Wardrobe", 8990]],
    ["three-door-wardrobe-frosty-white", ["3 Door Wooden Wardrobe", 17900]],
    ["four-door-wardrobe-american-teak", ["4 Door Wardrobe American Teak", 28900]],
    ["shoe-rack-natural-white", ["Shoe Rack Natural White", 5490]],
    ["legno-oak-three-door-wardrobe", ["3 Door Wardrobe Legno Oak", 19900]],
  ].map(([slug, [title, priceValue]]) => [
    slug,
    {
      slug,
      title,
      priceValue,
      offerPrice: Math.round((priceValue * 90) / 100 / 10) * 10,
    },
  ]),
);

const config = {
  port: Number(process.env.PORT || 10000),
  payuEnv: process.env.PAYU_ENV === "production" ? "production" : "test",
  payuKey: process.env.PAYU_KEY || "",
  payuSalt: process.env.PAYU_SALT || "",
  siteBaseUrl: trimSlash(process.env.SITE_BASE_URL || "https://www.altercraft.in"),
  publicBaseUrl: trimSlash(process.env.PUBLIC_BASE_URL || ""),
  allowedOrigins: splitList(
    process.env.ALLOWED_ORIGINS ||
      "https://www.altercraft.in,https://altercraft.in,http://127.0.0.1:8088,http://localhost:8088",
  ),
  orderNotifyEndpoint: process.env.ORDER_NOTIFY_ENDPOINT || "",
};

const payuPaymentUrl =
  config.payuEnv === "production" ? "https://secure.payu.in/_payment" : "https://test.payu.in/_payment";

function trimSlash(value) {
  return String(value || "").replace(/\/+$/, "");
}

function splitList(value) {
  return String(value || "")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function sha512(value) {
  return crypto.createHash("sha512").update(value, "utf8").digest("hex").toLowerCase();
}

function generateRequestHash(fields) {
  const parts = [
    fields.key,
    fields.txnid,
    fields.amount,
    fields.productinfo,
    fields.firstname,
    fields.email,
    fields.udf1 || "",
    fields.udf2 || "",
    fields.udf3 || "",
    fields.udf4 || "",
    fields.udf5 || "",
  ];

  return sha512(`${parts.join("|")}||||||${config.payuSalt}`);
}

function generateResponseHash(fields) {
  const parts = [
    config.payuSalt,
    fields.status || "",
    "",
    "",
    "",
    "",
    "",
    fields.udf5 || "",
    fields.udf4 || "",
    fields.udf3 || "",
    fields.udf2 || "",
    fields.udf1 || "",
    fields.email || "",
    fields.firstname || "",
    fields.productinfo || "",
    fields.amount || "",
    fields.txnid || "",
    fields.key || "",
  ];

  return sha512(parts.join("|"));
}

function isConfigured() {
  return Boolean(config.payuKey && config.payuSalt && config.publicBaseUrl);
}

function sendJson(response, statusCode, payload, origin = "") {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    ...corsHeaders(origin),
  });
  response.end(JSON.stringify(payload));
}

function corsHeaders(origin = "") {
  const allowedOrigin = config.allowedOrigins.includes(origin) ? origin : config.allowedOrigins[0] || "*";
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Accept",
    Vary: "Origin",
  };
}

async function readBody(request) {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;
    if (size > 64 * 1024) {
      throw new Error("Request body is too large.");
    }
    chunks.push(chunk);
  }

  return Buffer.concat(chunks).toString("utf8");
}

function readJson(rawBody) {
  if (!rawBody.trim()) return {};
  return JSON.parse(rawBody);
}

function readForm(rawBody) {
  return Object.fromEntries(new URLSearchParams(rawBody));
}

function cleanText(value, fallback = "") {
  return String(value || fallback)
    .replace(/[\r\n|]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 250);
}

function normalizePhone(value) {
  return String(value || "").replace(/[^\d+]/g, "").slice(0, 20);
}

function amountLabel(value) {
  return Number(value).toFixed(2);
}

function buildLineItems(cart = []) {
  if (!Array.isArray(cart) || cart.length === 0) {
    throw new Error("Cart is empty.");
  }

  const items = cart.map((item) => {
    const slug = cleanText(item.slug);
    const product = PRODUCT_CATALOG.get(slug);
    const quantity = Math.min(Math.max(Number(item.quantity || 1), 1), 10);

    if (!product) {
      throw new Error(`Unknown product: ${slug}`);
    }

    return {
      slug,
      title: product.title,
      quantity,
      unitPrice: product.offerPrice,
      lineTotal: product.offerPrice * quantity,
    };
  });

  return {
    items,
    total: items.reduce((sum, item) => sum + item.lineTotal, 0),
  };
}

function buildTxnId() {
  return `AC${Date.now()}${crypto.randomInt(100, 999)}`;
}

async function notifyOrder(order, fields) {
  if (!config.orderNotifyEndpoint) return;

  const payload = {
    _subject: `AlterCraft PayU payment started ${fields.txnid}`,
    _template: "table",
    _captcha: "false",
    order_reference: fields.udf1,
    payu_txnid: fields.txnid,
    payment_method: "PayU Online Payment",
    order_total: fields.amount,
    customer_name: fields.firstname,
    customer_email: fields.email,
    customer_phone: fields.phone,
    customer_city: cleanText(order.customer?.city),
    customer_pincode: cleanText(order.customer?.pincode),
    order_items: fields.productinfo,
  };

  try {
    await fetch(config.orderNotifyEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.warn("Order notification failed", error);
  }
}

async function handleInitiate(request, response, origin) {
  if (!isConfigured()) {
    sendJson(response, 503, { ok: false, message: "PayU gateway is not configured." }, origin);
    return;
  }

  const body = readJson(await readBody(request));
  const order = body.order || {};
  const customer = order.customer || {};
  const { items, total } = buildLineItems(order.items);
  const txnid = buildTxnId();
  const orderReference = cleanText(order.reference, txnid);
  const productinfo = cleanText(items.map((item) => `${item.title} x ${item.quantity}`).join(", "));
  const firstname = cleanText(customer.name, "AlterCraft Customer");
  const email = cleanText(customer.email, "support@altercraft.in");
  const phone = normalizePhone(customer.phone);

  if (!phone) {
    throw new Error("Customer phone is required for PayU checkout.");
  }

  const fields = {
    key: config.payuKey,
    txnid,
    amount: amountLabel(total),
    productinfo,
    firstname,
    email,
    phone,
    surl: `${config.publicBaseUrl}/payu/success`,
    furl: `${config.publicBaseUrl}/payu/failure`,
    udf1: orderReference,
    udf2: cleanText(items.map((item) => item.slug).join(",")),
    udf3: cleanText(customer.pincode),
    udf4: cleanText(customer.city),
    udf5: "altercraft.in",
    address1: cleanText(customer.address),
    city: cleanText(customer.city),
    country: "India",
    zipcode: cleanText(customer.pincode),
  };

  fields.hash = generateRequestHash(fields);

  await notifyOrder(order, fields);

  sendJson(response, 200, {
    ok: true,
    action: payuPaymentUrl,
    fields,
  }, origin);
}

function redirectAfterPayu(response, status, txnid, verified) {
  const url = new URL("/checkout/", config.siteBaseUrl);
  url.searchParams.set("payment", status);
  if (txnid) url.searchParams.set("txnid", txnid);
  if (!verified) url.searchParams.set("verified", "false");

  response.writeHead(303, {
    Location: url.toString(),
    "Cache-Control": "no-store",
  });
  response.end();
}

async function handlePayuReturn(request, response, status) {
  const fields = readForm(await readBody(request));
  const expectedHash = generateResponseHash(fields);
  const receivedHash = String(fields.hash || "").toLowerCase();
  const verified = Boolean(receivedHash && receivedHash === expectedHash);
  const safeStatus = verified && status === "success" && fields.status === "success" ? "success" : "failure";

  redirectAfterPayu(response, safeStatus, fields.txnid || "", verified);
}

async function handleRequest(request, response) {
  const origin = request.headers.origin || "";
  const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);

  if (request.method === "OPTIONS") {
    response.writeHead(204, corsHeaders(origin));
    response.end();
    return;
  }

  try {
    if (request.method === "GET" && url.pathname === "/health") {
      sendJson(response, 200, {
        ok: true,
        configured: isConfigured(),
        environment: config.payuEnv,
      }, origin);
      return;
    }

    if (request.method === "POST" && url.pathname === "/payu/initiate") {
      await handleInitiate(request, response, origin);
      return;
    }

    if (request.method === "POST" && url.pathname === "/payu/success") {
      await handlePayuReturn(request, response, "success");
      return;
    }

    if (request.method === "POST" && url.pathname === "/payu/failure") {
      await handlePayuReturn(request, response, "failure");
      return;
    }

    sendJson(response, 404, { ok: false, message: "Not found." }, origin);
  } catch (error) {
    sendJson(response, 400, {
      ok: false,
      message: error instanceof Error ? error.message : "Unable to process request.",
    }, origin);
  }
}

http.createServer(handleRequest).listen(config.port, () => {
  console.log(`AlterCraft PayU gateway listening on ${config.port}`);
});
