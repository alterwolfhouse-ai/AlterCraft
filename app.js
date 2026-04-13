const serviceLines = [
  {
    title: "Custom Furniture Manufacturing",
    price: "Custom quote by design and finish",
    summary:
      "Beds, sofas, TV units, storage walls, study desks, dining setups, and room-specific furniture built to actual measurement, finish preference, and daily use instead of standard catalogue sizing.",
    tags: ["Beds and headboards", "Sofas and seating", "TV units and storage", "Dining and seating"],
  },
  {
    title: "Panel Work",
    price: "Starting range: Rs. 180 - 650 / sq.ft.",
    summary:
      "Feature walls, TV back panels, fluted surfaces, bedroom backdrops, and finish-led wall compositions that add depth, definition, and a stronger premium feel to the room.",
    tags: ["Feature walls", "TV panels", "Veneer or laminate finish"],
  },
  {
    title: "Ceiling Work",
    price: "Starting range: Rs. 120 - 350 / sq.ft.",
    summary:
      "False ceilings designed to clean up the overhead view, frame lighting properly, and give living rooms, bedrooms, and workspaces a more finished architectural identity.",
    tags: ["Gypsum details", "Lighting integration", "Room zoning"],
  },
  {
    title: "Modular Wardrobes",
    price: "Starting range: Rs. 85,000 - 350,000+",
    summary:
      "Wardrobes planned around hanging, folding, drawers, loft usage, luggage storage, and the overall room composition so the storage feels useful without looking heavy.",
    tags: ["Sliding shutters", "Loft storage", "Custom internal layout"],
  },
  {
    title: "Modular Kitchens",
    price: "Starting range: Rs. 150,000 - 650,000+",
    summary:
      "Modular kitchens designed for prep flow, appliance placement, tall storage, serviceability, and a finish language that stays practical as well as premium.",
    tags: ["Base and wall units", "Tall storage", "Hardware and finish planning"],
  },
  {
    title: "Interior Design and Execution",
    price: "Project quote after scope freeze",
    summary:
      "For clients who want one coordinated team to shape the room visually and then execute the furniture, wardrobes, ceilings, panels, and modular elements in the same direction.",
    tags: ["Layout alignment", "Material coordination", "Execution oversight"],
  },
];

const whyAltercraft = [
  {
    title: "Custom-made for your exact measurements",
    summary:
      "Nothing is forced into a room just because a standard size exists. Wardrobes, kitchens, beds, TV units, and storage pieces are planned around your dimensions, circulation, and real use.",
  },
  {
    title: "Furniture and interiors designed together",
    summary:
      "When wardrobes, panel walls, beds, ceilings, and finishes are planned together, the space feels more premium, more intentional, and far less patched together.",
  },
  {
    title: "Design guidance that stays practical",
    summary:
      "We help you choose finishes, textures, hardware, storage layouts, and detailing that look strong on day one and still make sense in daily use and maintenance.",
  },
  {
    title: "Execution that respects the final look",
    summary:
      "Alignment, proportion, edge detailing, finish balance, and utility are treated like part of the design, not something left to chance during installation.",
  },
];

const craftSystems = [
  {
    step: "01",
    title: "Measured site understanding",
    summary:
      "Openings, walls, beam conditions, movement zones, and usable dimensions are understood first so drawings, costing, and production all start from the same reality.",
    points: ["Site measure", "Clearances", "Layout freeze"],
  },
  {
    step: "02",
    title: "Sheet-smart planning",
    summary:
      "Wardrobes, shutters, beds, storage units, and panel walls are planned around material logic so the estimate and the final build both feel more grounded.",
    points: ["Board mapping", "Less waste", "Cost discipline"],
  },
  {
    step: "03",
    title: "Hardware and movement systems",
    summary:
      "Handles, drawer channels, hinges, lift-ups, and access patterns are chosen around utility, finish, and the way the space gets used every day.",
    points: ["Handles", "Channels", "Utility fit"],
  },
  {
    step: "04",
    title: "Finish language across the room",
    summary:
      "We connect laminates, veneer notes, wall surfaces, upholstery, and profile details so the room reads like one finished direction instead of separate purchases.",
    points: ["Laminate story", "Texture balance", "Visual continuity"],
  },
  {
    step: "05",
    title: "Fabrication with modular discipline",
    summary:
      "Production is treated like a controlled build process instead of random site improvisation, which keeps fit, alignment, and repeatability sharper.",
    points: ["Workshop prep", "Pre-fit logic", "Cleaner execution"],
  },
  {
    step: "06",
    title: "Installation and close-out",
    summary:
      "The final look depends on installation quality, not only manufacturing, so alignment, edge finish, touch-ups, and utility are part of the finish standard.",
    points: ["Installation", "Finish checks", "Cleaner handover"],
  },
];

const projectSlots = [
  {
    kicker: "Interior focal surface",
    title: "Panel Work",
    pricing: "Starting from Rs. 180 / sq.ft.",
    hint: "Wood grid ceilings, sculpted relief panels, and vertical framing details that make an entry or lounge feel intentionally designed the moment someone walks in.",
    note: "This visual works because the feature wall is not overloaded. The sculpted central panel, warm timber framing, and clean symmetry create a premium first impression without making the space feel busy.",
    tags: ["Feature panel", "Entrance wall", "Premium focal surface"],
    href: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20panel%20work%20or%20a%20TV%20wall%20similar%20to%20the%20website%20shop%20card.",
    cta: "Enquire for similar work",
    image: "./assets/portfolio/panel-work-feature.jpeg",
  },
  {
    kicker: "Lighting and room framing",
    title: "Ceiling Work",
    pricing: "Starting from Rs. 120 / sq.ft.",
    hint: "Layered false ceiling lines, indirect lighting, and chandelier positioning that give the space stronger scale, rhythm, and hospitality-grade polish.",
    note: "This ceiling-led space shows how lighting bands, recessed layers, and a central chandelier axis can lift the entire room. It is a strong example of ceiling work becoming the architecture of the space.",
    tags: ["False ceiling", "Indirect lighting", "Luxury ceiling detail"],
    href: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20to%20discuss%20ceiling%20work%20similar%20to%20the%20portfolio.",
    cta: "Discuss ceiling work",
    image: "./assets/portfolio/ceiling-work-lobby.jpeg",
  },
  {
    kicker: "Storage-led interiors",
    title: "Modular Wardrobe",
    pricing: "Projects usually start from Rs. 85,000",
    hint: "Walk-in wardrobe planning with glass shutters, open display, island storage, and a ceiling design that makes the dressing zone feel high-end and organized.",
    note: "This image is a strong wardrobe USP because it combines storage, visibility, lighting, and movement. The result feels like a premium dressing room rather than just a row of cabinets.",
    tags: ["Walk-in wardrobe", "Glass shutters", "Island storage"],
    href: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20a%20modular%20wardrobe%20similar%20to%20the%20website%20shop%20card.",
    cta: "Plan this wardrobe",
    image: "./assets/portfolio/modular-wardrobe-walkin.jpeg",
  },
  {
    kicker: "Workflow-first kitchen",
    title: "Modular Kitchen",
    pricing: "Projects usually start from Rs. 150,000",
    hint: "Island kitchens with layered lighting, clean base-and-wall storage, premium stone look surfaces, and enough movement space for family use.",
    note: "This kitchen image sells a complete package: strong island presence, practical storage lines, under-cabinet lighting, and a finish palette that looks premium without losing usability.",
    tags: ["Island kitchen", "Modular storage", "Premium finish"],
    href: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20to%20discuss%20a%20modular%20kitchen%20similar%20to%20the%20portfolio.",
    cta: "Discuss kitchen scope",
    image: "./assets/portfolio/modular-kitchen-island.jpeg",
  },
  {
    kicker: "Bedroom composition",
    title: "Custom Bedroom Furniture",
    pricing: "Custom quote by layout and finish",
    hint: "Master bedroom suites where the bed, upholstered headboard, floating side tables, wall finish, and ceiling lighting need to feel calm and connected.",
    note: "This bedroom visual is strong because it feels composed from every angle. The bed, wall treatment, side tables, lighting, and study corner all speak the same quiet luxury language.",
    tags: ["Bedroom suite", "Headboard wall", "Floating side tables"],
    href: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20a%20custom%20bed%20similar%20to%20the%20website%20shop%20card.",
    cta: "Build this bedroom set",
    image: "./assets/portfolio/custom-bedroom-suite.jpeg",
  },
  {
    kicker: "Living-room statement",
    title: "Living Room and TV Unit",
    pricing: "Custom quote by scope and finish",
    hint: "Open-plan living and dining layouts with ceiling design, TV focal walls, dining placement, and circulation all working together in one balanced composition.",
    note: "This is a strong living-room image because it shows more than a TV wall. It shows how ceiling design, dining flow, sofa placement, and the main visual anchor can all work together in one refined space.",
    tags: ["TV focal wall", "Living-dining layout", "Integrated interiors"],
    href: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20panel%20work%20or%20a%20TV%20wall%20similar%20to%20the%20website%20shop%20card.",
    cta: "Discuss living-room work",
    image: "./assets/portfolio/living-room-tv-unit.jpeg",
  },
];

const flipkartLinks = {
  brand: "https://www.flipkart.com/furniture/beds-more/beds/altercraft~brand/pr?sid=wwe,7p7,4yf",
  search: "https://www.flipkart.com/search?q=alter%20craft%20bed",
  frosty:
    "https://www.flipkart.com/altercraft-frosty-series-engineered-wood-king-drawer-box-bed-203-cm-x-186-4-6-66-ft-6-12-ft/p/itma4ffd0dee88fe",
};

const whatsappLinks = {
  bed:
    "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20a%20custom%20bed%20similar%20to%20the%20website%20shop%20card.",
  sofa:
    "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20a%20custom%20sofa%20or%20lounge%20seating%20similar%20to%20the%20website%20shop%20card.",
  wardrobe:
    "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20a%20modular%20wardrobe%20similar%20to%20the%20website%20shop%20card.",
  study:
    "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20a%20study%20table%20or%20desk%20similar%20to%20the%20website%20shop%20card.",
  panel:
    "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20panel%20work%20or%20a%20TV%20wall%20similar%20to%20the%20website%20shop%20card.",
  mandir:
    "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20a%20mandir%20unit%20similar%20to%20the%20website%20shop%20card.",
};

const productPages = {
  bed: "/products/frosty-white-bed/",
  studyTable: "/products/ac-study-table/",
  centreTable: "/products/centre-table/",
  wardrobe1: "/products/one-door-wardrobe-frosty-white/",
  wardrobe3: "/products/three-door-wardrobe-frosty-white/",
  wardrobe4: "/products/four-door-wardrobe-american-teak/",
  shoeRack: "/products/shoe-rack-natural-white/",
};

const productCatalog = [
  {
    slug: "frosty-white-bed",
    category: "Beds",
    label: "Listed bedroom product",
    title: "Frosty White Bed",
    priceValue: 18900,
    mrpValue: 22900,
    bookingAdvance: 3900,
    summary:
      "A clean, low-height engineered wood bed in frosty white, positioned for modern bedrooms that need a simple product-led buying path.",
    image: "/assets/products/frosty-white-bed.png",
    alt: "Frosty white bed product image",
    highlights: [
      "Minimal white bedroom look with easy styling appeal",
      "Good for compact and mid-size bedrooms",
      "Clear product page for website browsing and order discussion",
    ],
    specs: [
      { label: "Best for", value: "Modern bedrooms and furnished homes" },
      { label: "Material", value: "Engineered wood" },
      { label: "Finish", value: "Frosty white" },
      { label: "Order mode", value: "Direct enquiry with booking support" },
    ],
    buildNotes: [
      "This page is meant to show a real product with visible pricing and a direct enquiry path.",
      "Final pricing can change if the buyer needs a different size, finish, or storage format.",
      "Online payment is available for booking, and Cash on Delivery is available on eligible ready-made furniture orders in serviceable pin codes.",
    ],
    checkoutNote: "Booking amount secures order confirmation. Balance is settled before dispatch or as agreed for custom changes.",
    deliveryNote: "Delivery timeline is shared after stock or production confirmation.",
    primaryHref: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20to%20enquire%20about%20the%20Frosty%20White%20Bed%20shown%20on%20your%20website.",
    primaryLabel: "Enquire this bed",
    secondaryHref: whatsappLinks.bed,
    secondaryLabel: "Ask for bedroom support",
  },
  {
    slug: "ac-study-table",
    category: "Study tables",
    label: "Listed workspace product",
    title: "AC Study Table",
    priceValue: 7490,
    mrpValue: 8990,
    bookingAdvance: 1500,
    summary:
      "A clean study table with lower shelf support, suitable for work corners, student rooms, and compact home-office setups.",
    image: "/assets/products/ac-study-table.png",
    alt: "AC study table product image",
    highlights: [
      "Straight desk format with open shelf storage",
      "Useful for study corners, bedrooms, and office nooks",
      "Simple product flow for small-ticket website buyers",
    ],
    specs: [
      { label: "Best for", value: "Study corners and work-from-home use" },
      { label: "Material", value: "Engineered wood build direction" },
      { label: "Storage", value: "Lower open shelf support" },
      { label: "Order mode", value: "Direct enquiry and booking support" },
    ],
    buildNotes: [
      "The price shown is for the base direction and can change with size or storage changes.",
      "This page helps show smaller-ticket products clearly to buyers and payment reviewers.",
      "Online payment, UPI, and bank transfer are available for order confirmation, and Cash on Delivery is available on eligible ready-made furniture orders in serviceable pin codes.",
    ],
    checkoutNote: "Booking amount confirms the product order. Any custom size or finish change is quoted before final billing.",
    deliveryNote: "Dispatch timing is confirmed after order review and stock check.",
    primaryHref: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20to%20enquire%20about%20the%20AC%20Study%20Table%20shown%20on%20your%20website.",
    primaryLabel: "Enquire this desk",
    secondaryHref: whatsappLinks.study,
    secondaryLabel: "Share desk size requirement",
  },
  {
    slug: "centre-table",
    category: "Centre tables",
    label: "Listed living-room product",
    title: "Centre Table",
    priceValue: 5490,
    mrpValue: 6990,
    bookingAdvance: 1200,
    summary:
      "A clean centre table with a white top and wood-tone support, suitable for living rooms, lounges, and compact seating areas.",
    image: "/assets/products/centre-table.png",
    alt: "Centre table with white top and brown base",
    highlights: [
      "Compact table footprint for everyday living rooms",
      "Simple two-tone finish that fits modern interiors",
      "Useful add-on product for furnished home buyers",
    ],
    specs: [
      { label: "Best for", value: "Living rooms and lounge spaces" },
      { label: "Material", value: "Engineered wood or laminated board direction" },
      { label: "Finish", value: "White top with wood-tone support" },
      { label: "Order mode", value: "Direct enquiry and confirmation" },
    ],
    buildNotes: [
      "The fixed website price covers the listed product variant shown here.",
      "This product page makes living-room furniture visible as an actual purchasable category on the site.",
      "Online payment is available for booking, and Cash on Delivery is available on eligible ready-made furniture orders in serviceable pin codes.",
    ],
    checkoutNote: "Booking amount confirms the selected product. Final invoice stays aligned to the confirmed product configuration.",
    deliveryNote: "Dispatch timing is shared after order confirmation.",
    primaryHref: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20to%20enquire%20about%20the%20centre%20table%20shown%20on%20your%20website.",
    primaryLabel: "Enquire this table",
    secondaryHref: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20the%20living-room%20table%20catalog%20with%20size%20options.",
    secondaryLabel: "Ask for size options",
  },
  {
    slug: "one-door-wardrobe-frosty-white",
    category: "Wardrobes",
    label: "Listed storage product",
    title: "1 Door Wooden Wardrobe",
    priceValue: 8990,
    mrpValue: 10990,
    bookingAdvance: 2000,
    summary:
      "A compact single-door wardrobe product for bedrooms, PG setups, and smaller spaces where vertical storage matters.",
    image: "/assets/products/one-door-wardrobe-frosty-white.png",
    alt: "One door frosty white wardrobe",
    highlights: [
      "1 drawer and multi-shelf compact storage format",
      "Easy bedroom storage solution for smaller rooms",
      "Real listed product page with clear pricing",
    ],
    specs: [
      { label: "Best for", value: "Compact bedrooms and rental use" },
      { label: "Material", value: "Engineered wood" },
      { label: "Storage", value: "4 shelves and 1 drawer" },
      { label: "Finish", value: "Frosty white / marble tone direction" },
    ],
    buildNotes: [
      "This product comes from your actual Flipkart asset set and helps the website show compact storage products clearly.",
      "Final pricing can vary if a different color, hardware, or internal change is required.",
      "Online payment is available for booking, and Cash on Delivery is available on eligible ready-made furniture orders in serviceable pin codes.",
    ],
    checkoutNote: "Booking advance confirms the product slot. Custom finish or storage adjustments are quoted before final balance.",
    deliveryNote: "Delivery or dispatch is confirmed after product review and availability check.",
    primaryHref: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20to%20enquire%20about%20the%201%20door%20wooden%20wardrobe%20shown%20on%20your%20website.",
    primaryLabel: "Enquire this wardrobe",
    secondaryHref: whatsappLinks.wardrobe,
    secondaryLabel: "Share wardrobe requirement",
  },
  {
    slug: "three-door-wardrobe-frosty-white",
    category: "Wardrobes",
    label: "Listed storage product",
    title: "3 Door Wooden Wardrobe",
    priceValue: 17900,
    mrpValue: 21490,
    bookingAdvance: 3900,
    summary:
      "A three-door engineered wood wardrobe for bedrooms that need more storage volume, hanging space, and daily organization.",
    image: "/assets/products/three-door-wardrobe-frosty-white.png",
    alt: "Three door frosty white wardrobe",
    highlights: [
      "8 shelves and 1 hanging rod configuration",
      "Lockable wardrobe format for family bedroom use",
      "Real listed storage page with visible price guidance",
    ],
    specs: [
      { label: "Best for", value: "Bedroom clothing and utility storage" },
      { label: "Material", value: "Engineered wood" },
      { label: "Dimensions", value: "45D x 109W x 181H cm" },
      { label: "Finish", value: "Frosty white" },
    ],
    buildNotes: [
      "This page uses the actual product description structure you stored in the Flipkart folder.",
      "Wardrobe pricing changes if hardware, finish, or dimensions change from the shown product line.",
      "Online payment is available for booking, and Cash on Delivery is available on eligible ready-made furniture orders in serviceable pin codes.",
    ],
    checkoutNote: "Booking amount confirms the wardrobe order. Final billing reflects the confirmed finish, delivery location, and any approved upgrades.",
    deliveryNote: "Delivery timing is shared after order confirmation and stock or production validation.",
    primaryHref: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20to%20enquire%20about%20the%203%20door%20wardrobe%20shown%20on%20your%20website.",
    primaryLabel: "Enquire this wardrobe",
    secondaryHref: whatsappLinks.wardrobe,
    secondaryLabel: "Ask for room-fit wardrobe",
  },
  {
    slug: "four-door-wardrobe-american-teak",
    category: "Wardrobes",
    label: "Large storage product",
    title: "4 Door Wardrobe American Teak",
    priceValue: 28900,
    mrpValue: 33990,
    bookingAdvance: 5900,
    summary:
      "A larger wardrobe format with four doors and drawer storage, positioned for master bedrooms and bigger storage requirements.",
    image: "/assets/products/four-door-wardrobe-american-teak.png",
    alt: "Four door wardrobe American teak finish",
    highlights: [
      "4-door format for larger bedroom storage needs",
      "Drawer support for easier organization",
      "Warm American teak finish for premium-looking rooms",
    ],
    specs: [
      { label: "Best for", value: "Master bedrooms and larger storage loads" },
      { label: "Material", value: "Engineered wood wardrobe system" },
      { label: "Format", value: "4 doors with drawer storage" },
      { label: "Finish", value: "American teak" },
    ],
    buildNotes: [
      "This page gives your website a clearer large-ticket wardrobe product flow instead of only service-led browsing.",
      "Final price changes with internal layout, lock set, handle style, and any finish variation.",
      "Online payment is available for booking, and Cash on Delivery is available on eligible ready-made furniture orders in serviceable pin codes.",
    ],
    checkoutNote: "Booking amount secures the order and material planning. Balance follows the confirmed delivery or production schedule.",
    deliveryNote: "Dispatch or delivery window is confirmed after review of order details and service area.",
    primaryHref: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20to%20enquire%20about%20the%204%20door%20American%20Teak%20wardrobe%20shown%20on%20your%20website.",
    primaryLabel: "Enquire this 4 door wardrobe",
    secondaryHref: whatsappLinks.wardrobe,
    secondaryLabel: "Ask for wardrobe options",
  },
  {
    slug: "shoe-rack-natural-white",
    category: "Shoe racks",
    label: "Compact utility product",
    title: "Shoe Rack Natural White",
    priceValue: 5490,
    mrpValue: 6790,
    bookingAdvance: 1200,
    summary:
      "A compact natural white shoe rack for entry corners, utility zones, and homes that need quick everyday shoe organization.",
    image: "/assets/products/shoe-rack-natural-white.png",
    alt: "Natural white shoe rack product image",
    highlights: [
      "Drawer plus cabinet storage in a compact format",
      "Useful for entry spaces and everyday utility zones",
      "Clear smaller-ticket product page for the website",
    ],
    specs: [
      { label: "Best for", value: "Entry spaces and compact homes" },
      { label: "Material", value: "Engineered wood or laminated board direction" },
      { label: "Storage", value: "Drawer and cabinet combination" },
      { label: "Finish", value: "Natural white" },
    ],
    buildNotes: [
      "This page helps show that the website also carries compact utility products with pricing.",
      "Final pricing can change if size, drawer format, or dual-tone finish changes.",
      "Online payment is available for booking, and Cash on Delivery is available on eligible ready-made furniture orders in serviceable pin codes.",
    ],
    checkoutNote: "Booking amount confirms the shoe rack order. Final invoice follows the approved product configuration.",
    deliveryNote: "Dispatch timing is shared once the order is reviewed and confirmed.",
    primaryHref: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20to%20enquire%20about%20the%20Natural%20White%20Shoe%20Rack%20shown%20on%20your%20website.",
    primaryLabel: "Enquire this shoe rack",
    secondaryHref: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20please%20share%20your%20shoe%20rack%20catalog%20with%20pricing.",
    secondaryLabel: "Ask for more utility units",
  },
  {
    slug: "legno-oak-three-door-wardrobe",
    category: "Wardrobes",
    label: "Alternate wardrobe finish",
    title: "3 Door Wardrobe Legno Oak",
    priceValue: 19900,
    mrpValue: 23990,
    bookingAdvance: 4200,
    summary:
      "A three-door wardrobe in a warmer oak finish for bedrooms that need a richer wood-tone look with practical internal storage.",
    image: "/assets/products/legno-oak-three-door-wardrobe.png",
    alt: "Three door wardrobe in Legno Oak finish",
    highlights: [
      "Warm oak look for more premium bedroom styling",
      "8 shelves and 1 rod storage direction",
      "Useful for customers comparing white and wood-tone options",
    ],
    specs: [
      { label: "Best for", value: "Bedrooms needing warmer finish direction" },
      { label: "Material", value: "Engineered wood" },
      { label: "Dimensions", value: "45D x 112.4W x 180.5H cm" },
      { label: "Finish", value: "Legno Oak" },
    ],
    buildNotes: [
      "This alternate wardrobe page strengthens the website product flow by showing real finish variation.",
      "Final pricing can change with hardware or internal modifications.",
      "Online payment is available for booking, and Cash on Delivery is available on eligible ready-made furniture orders in serviceable pin codes.",
    ],
    checkoutNote: "Booking amount confirms the selected finish and product slot. Any approved changes are reflected before balance payment.",
    deliveryNote: "Delivery timing is confirmed after product review and availability planning.",
    primaryHref: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20to%20enquire%20about%20the%203%20door%20Legno%20Oak%20wardrobe%20shown%20on%20your%20website.",
    primaryLabel: "Enquire oak wardrobe",
    secondaryHref: whatsappLinks.wardrobe,
    secondaryLabel: "Compare wardrobe options",
  },
];

const CART_KEY = "altercraft-cart-v1";
const CHECKOUT_PATH = "/checkout/";
const CART_PATH = "/cart/";
const WEBSITE_DISCOUNT_PERCENT = 10;
const WEBSITE_PAYMENT_OPTIONS =
  "Online payment, UPI / bank transfer, and Cash on Delivery on eligible listed furniture products in serviceable pin codes.";
const CUSTOM_PAYMENT_RULE =
  "Custom furniture changes, made-to-order scope, wardrobes, kitchens, and interior execution work are confirmed on advance or milestone payment.";
const SUPPORT_EMAIL = "support@altercraft.in";
const ORDER_AUTOMATION_ENDPOINT = "https://formsubmit.co/ajax/support@altercraft.in";
const ORDER_AUTOMATION_LABEL = "support@altercraft.in order desk";

function formatInr(value) {
  return `Rs. ${new Intl.NumberFormat("en-IN").format(value)}`;
}

function getOfferPrice(product) {
  return Math.round((product.priceValue * (100 - WEBSITE_DISCOUNT_PERCENT)) / 100 / 10) * 10;
}

function getSavings(product) {
  return product.priceValue - getOfferPrice(product);
}

function getCartCount(cart) {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartSubtotal(cart) {
  return cart.reduce((total, item) => {
    const product = productCatalog.find((entry) => entry.slug === item.slug);
    if (!product) return total;
    return total + getOfferPrice(product) * item.quantity;
  }, 0);
}

function getCartStorage() {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(CART_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed.filter((item) => item?.slug && item?.quantity) : [];
  } catch (_error) {
    return [];
  }
}

function setCartStorage(cart) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function upsertCartItem(slug, quantity = 1) {
  const cart = getCartStorage();
  const existing = cart.find((item) => item.slug === slug);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ slug, quantity });
  }

  setCartStorage(cart);
  updateCartIndicators();
}

function updateCartItemQuantity(slug, quantity) {
  const nextCart = getCartStorage()
    .map((item) => (item.slug === slug ? { ...item, quantity } : item))
    .filter((item) => item.quantity > 0);

  setCartStorage(nextCart);
  updateCartIndicators();
}

function removeCartItem(slug) {
  const nextCart = getCartStorage().filter((item) => item.slug !== slug);
  setCartStorage(nextCart);
  updateCartIndicators();
}

function buildCheckoutMessage(cart, customer = {}) {
  const lines = [
    "Hi Altercraft, I want to place an order from the website.",
    "",
    "Product summary:",
  ];

  cart.forEach((item) => {
    const product = productCatalog.find((entry) => entry.slug === item.slug);
    if (!product) return;
    lines.push(`- ${product.title} x ${item.quantity} = ${formatInr(getOfferPrice(product) * item.quantity)}`);
  });

  lines.push("");
  lines.push(`Subtotal: ${formatInr(getCartSubtotal(cart))}`);

  if (customer.name) lines.push(`Name: ${customer.name}`);
  if (customer.phone) lines.push(`Phone: ${customer.phone}`);
  if (customer.email) lines.push(`Email: ${customer.email}`);
  if (customer.address) lines.push(`Address: ${customer.address}`);
  if (customer.city) lines.push(`City: ${customer.city}`);
  if (customer.pincode) lines.push(`Pincode: ${customer.pincode}`);
  if (customer.paymentMethod) lines.push(`Preferred payment method: ${customer.paymentMethod}`);

  lines.push("");
  lines.push("Please confirm the selected payment method, delivery availability, and order details.");

  return encodeURIComponent(lines.join("\n"));
}

function buildOrderReference() {
  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
    String(now.getHours()).padStart(2, "0"),
    String(now.getMinutes()).padStart(2, "0"),
    String(now.getSeconds()).padStart(2, "0"),
  ].join("");

  return `AC-${stamp}`;
}

function buildCheckoutOrder(cart, customer = {}) {
  const items = cart
    .map((item) => {
      const product = productCatalog.find((entry) => entry.slug === item.slug);
      if (!product) return null;

      const unitPriceValue = getOfferPrice(product);
      const lineTotalValue = unitPriceValue * item.quantity;

      return {
        slug: product.slug,
        title: product.title,
        quantity: item.quantity,
        unitPriceValue,
        unitPriceLabel: formatInr(unitPriceValue),
        lineTotalValue,
        lineTotalLabel: formatInr(lineTotalValue),
      };
    })
    .filter(Boolean);

  const subtotalValue = items.reduce((total, item) => total + item.lineTotalValue, 0);

  return {
    reference: buildOrderReference(),
    createdAt: new Date().toISOString(),
    source: "altercraft.in checkout",
    paymentMethod: customer.paymentMethod || "Online Payment / UPI / Bank Transfer",
    subtotalValue,
    subtotalLabel: formatInr(subtotalValue),
    customer: {
      name: customer.name || "",
      phone: customer.phone || "",
      email: customer.email || "",
      address: customer.address || "",
      city: customer.city || "",
      pincode: customer.pincode || "",
    },
    items,
  };
}

function buildOrderEmailBody(order) {
  const lines = [
    `Altercraft website order reference: ${order.reference}`,
    "",
    "Product summary:",
  ];

  order.items.forEach((item) => {
    lines.push(`- ${item.title} x ${item.quantity} = ${item.lineTotalLabel}`);
  });

  lines.push("");
  lines.push(`Subtotal: ${order.subtotalLabel}`);
  lines.push(`Payment method: ${order.paymentMethod}`);

  if (order.customer.name) lines.push(`Name: ${order.customer.name}`);
  if (order.customer.phone) lines.push(`Phone: ${order.customer.phone}`);
  if (order.customer.email) lines.push(`Email: ${order.customer.email}`);
  if (order.customer.address) lines.push(`Address: ${order.customer.address}`);
  if (order.customer.city) lines.push(`City: ${order.customer.city}`);
  if (order.customer.pincode) lines.push(`Pincode: ${order.customer.pincode}`);

  lines.push("");
  lines.push(`Support desk: ${ORDER_AUTOMATION_LABEL}`);
  lines.push("Please review product availability, serviceability, and the selected payment method.");

  return lines.join("\n");
}

function buildOrderSubject(order) {
  const subjectPrefix =
    order.paymentMethod === "Cash on Delivery" ? "COD order request" : "Payment link request";
  return `Altercraft ${subjectPrefix} ${order.reference}`;
}

function buildOrderMailtoLink(order) {
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(buildOrderSubject(order))}&body=${encodeURIComponent(buildOrderEmailBody(order))}`;
}

function buildAutomationPayload(order) {
  const payload = {
    _subject: buildOrderSubject(order),
    _template: "table",
    _captcha: "false",
    order_reference: order.reference,
    order_source: order.source,
    order_created_at: order.createdAt,
    payment_method: order.paymentMethod,
    customer_name: order.customer.name || "Website customer",
    customer_phone: order.customer.phone || "Not shared",
    customer_email: order.customer.email || "Not shared",
    customer_city: order.customer.city || "Not shared",
    customer_address: order.customer.address || "Not shared",
    customer_pincode: order.customer.pincode || "Not shared",
    order_total: order.subtotalLabel,
    order_items: order.items.map((item) => `${item.title} x ${item.quantity} = ${item.lineTotalLabel}`).join(" | "),
    message: buildOrderEmailBody(order),
  };

  if (order.customer.email) {
    payload._replyto = order.customer.email;
  }

  return payload;
}

function getCheckoutPrimaryLabel(paymentMethod) {
  return paymentMethod === "Cash on Delivery"
    ? "Place COD Order"
    : "Place Order & Get Payment Link";
}

function getCheckoutSuccessMessage(paymentMethod) {
  return paymentMethod === "Cash on Delivery"
    ? "Your COD order has been submitted. Altercraft will review pincode eligibility and confirm the order by phone or email."
    : "Your order has been submitted. Altercraft will review it and share the payment link or bank details by phone or email.";
}

async function submitCheckoutOrder(order) {
  try {
    const response = await fetch(ORDER_AUTOMATION_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(buildAutomationPayload(order)),
    });

    let data = null;

    try {
      data = await response.json();
    } catch (_error) {
      data = null;
    }

    if (!response.ok || String(data?.success || "").toLowerCase() === "false") {
      throw new Error(
        data?.message ||
          `Order automation returned ${response.status}. Please use the support email fallback.`,
      );
    }

    return {
      ok: true,
      message: data?.message || getCheckoutSuccessMessage(order.paymentMethod),
    };
  } catch (error) {
    return {
      ok: false,
      message:
        error instanceof Error
          ? error.message
          : "Unable to submit the order automatically right now.",
      supportHref: buildOrderMailtoLink(order),
    };
  }
}

const shopHighlights = [
  {
    label: "Product page ready",
    brand: "AlterCraft",
    title: "Frosty White Bed",
    price: "Fixed price: Rs. 17,010",
    summary:
      "The first product signal now opens a proper priced product page built around your actual Flipkart-style bedroom asset.",
    image: "/assets/products/frosty-white-bed.png",
    href: productPages.bed,
    brandHref: flipkartLinks.brand,
    cta: "View product page",
    secondaryCta: "View Flipkart bed page",
    secondaryHref: flipkartLinks.frosty,
    tags: ["Product page", "Bedroom", "Bed listing"],
  },
  {
    label: "Work-ready",
    title: "AC Study Table",
    price: "Fixed price: Rs. 6,740",
    summary: "A real listed desk product with clean visuals, clear pricing, and a direct enquiry route.",
    image: "/assets/products/ac-study-table.png",
    href: productPages.studyTable,
    cta: "View product page",
    tags: ["Study table", "Workspace", "Compact product"],
  },
  {
    label: "Living room",
    title: "Centre Table",
    price: "Fixed price: Rs. 4,940",
    summary: "A clean living-room table product that helps the site show smaller furniture SKUs with pricing too.",
    image: "/assets/products/centre-table.png",
    href: productPages.centreTable,
    cta: "View product page",
    tags: ["Centre table", "Living room", "Compact furniture"],
  },
  {
    label: "Compact storage",
    title: "1 Door Wooden Wardrobe",
    price: "Fixed price: Rs. 8,090",
    summary: "A compact bedroom wardrobe product with drawer and shelf support for smaller storage requirements.",
    image: "/assets/products/one-door-wardrobe-frosty-white.png",
    href: productPages.wardrobe1,
    cta: "View product page",
    tags: ["1 door wardrobe", "Compact storage", "Bedroom"],
  },
  {
    label: "Space-led",
    title: "3 Door Wooden Wardrobe",
    price: "Fixed price: Rs. 16,110",
    summary: "A larger wardrobe product with hanging and shelf storage for mainstream bedroom buyers.",
    image: "/assets/products/three-door-wardrobe-frosty-white.png",
    href: productPages.wardrobe3,
    cta: "View product page",
    tags: ["3 door wardrobe", "Bedroom storage", "Frosty white"],
  },
  {
    label: "Large storage",
    title: "4 Door Wardrobe American Teak",
    price: "Fixed price: Rs. 26,010",
    summary: "A higher-capacity wardrobe page with warmer finish direction for premium bedroom storage.",
    image: "/assets/products/four-door-wardrobe-american-teak.png",
    href: productPages.wardrobe4,
    cta: "View product page",
    tags: ["4 door wardrobe", "American teak", "Large storage"],
  },
  {
    label: "Utility product",
    title: "Shoe Rack Natural White",
    price: "Fixed price: Rs. 4,940",
    summary: "A compact shoe rack product that gives the website another practical, lower-ticket furniture option with pricing.",
    image: "/assets/products/shoe-rack-natural-white.png",
    href: productPages.shoeRack,
    cta: "View product page",
    tags: ["Shoe rack", "Utility", "Entry storage"],
  },
];

const furnitureCategories = [
  {
    title: "Frosty White Bed",
    label: "Bedroom bestseller",
    price: "Fixed price: Rs. 17,010",
    summary: "A clean frosty-white bed page for buyers who want a simple, modern bedroom product.",
    image: "/assets/products/frosty-white-bed.png",
    href: productPages.bed,
    cta: "View bed page",
  },
  {
    title: "AC Study Table",
    label: "Work-from-home",
    price: "Fixed price: Rs. 6,740",
    summary: "A compact study table with a real product page and a simple enquiry route.",
    image: "/assets/products/ac-study-table.png",
    href: productPages.studyTable,
    cta: "View desk page",
  },
  {
    title: "Centre Table",
    label: "Living-room essential",
    price: "Fixed price: Rs. 4,940",
    summary: "A simple living-room table product that adds an easy furniture-buy path to the website.",
    image: "/assets/products/centre-table.png",
    href: productPages.centreTable,
    cta: "View centre table",
  },
  {
    title: "1 Door Wooden Wardrobe",
    label: "Compact storage",
    price: "Fixed price: Rs. 8,090",
    summary: "A compact wardrobe product for smaller bedrooms and tighter storage needs.",
    image: "/assets/products/one-door-wardrobe-frosty-white.png",
    href: productPages.wardrobe1,
    cta: "View 1 door wardrobe",
  },
  {
    title: "3 Door Wooden Wardrobe",
    label: "Bedroom storage",
    price: "Fixed price: Rs. 16,110",
    summary: "A mainstream 3-door wardrobe page with visible pricing and practical storage scope.",
    image: "/assets/products/three-door-wardrobe-frosty-white.png",
    href: productPages.wardrobe3,
    cta: "View 3 door wardrobe",
  },
  {
    title: "4 Door Wardrobe American Teak",
    label: "Large storage",
    price: "Fixed price: Rs. 26,010",
    summary: "A warmer, larger wardrobe option for bigger bedroom storage plans.",
    image: "/assets/products/four-door-wardrobe-american-teak.png",
    href: productPages.wardrobe4,
    cta: "View 4 door wardrobe",
  },
  {
    title: "Shoe Rack Natural White",
    label: "Utility product",
    price: "Fixed price: Rs. 4,940",
    summary: "A practical utility-storage page that makes the website product catalog feel broader and more real.",
    image: "/assets/products/shoe-rack-natural-white.png",
    href: productPages.shoeRack,
    cta: "View shoe rack",
  },
];

const fitForProjects = [
  {
    title: "New Home Move-Ins",
    summary:
      "For homeowners who want beds, sofas, wardrobes, kitchens, TV units, and key interior work planned together instead of piece by piece.",
  },
  {
    title: "Room-Wise Upgrades",
    summary:
      "For clients upgrading one bedroom, one living room, one kitchen, or one storage-heavy area without compromising on finish quality.",
  },
  {
    title: "Office and Studio Setups",
    summary:
      "For workspaces that need practical storage, workstations, paneling, ceiling detailing, and a sharper design identity.",
  },
  {
    title: "Premium Renovation Work",
    summary:
      "For older spaces that need a more modern, useful, and better detailed look without the chaos of random vendor coordination.",
  },
];

const faqItems = [
  {
    question: "Do you only make furniture or also handle interior work?",
    answer:
      "Altercraft is positioned for both. We manufacture custom furniture and also execute modular wardrobes, modular kitchens, panel work, ceiling work, and related interior detailing.",
  },
  {
    question: "Can everything be customized?",
    answer:
      "Yes. Sizes, finishes, storage layouts, shutter types, hardware direction, and overall styling can be shaped around the room, budget zone, and utility requirement.",
  },
  {
    question: "Do you also make custom sofas and seating?",
    answer:
      "Yes. Altercraft can build custom sofas, lounge seating, upholstered pieces, and living-room furniture that match the room size, finish direction, and comfort requirement.",
  },
  {
    question: "Do you take smaller room-wise projects too?",
    answer:
      "Yes. The site is written for both full-home scope and focused room-wise work, whether that is a wardrobe, kitchen, TV unit wall, bedroom package, or one interior upgrade.",
  },
  {
    question: "What changes the final price most?",
    answer:
      "The biggest factors are size, material selection, finish type, hardware quality, internal layout complexity, execution scope, and site-specific conditions.",
  },
  {
    question: "Do you offer Cash on Delivery?",
    answer:
      "Yes, Cash on Delivery is available on eligible listed furniture products in serviceable pin codes. Custom furniture, modular work, and interior execution bookings are confirmed on advance or milestone payment.",
  },
  {
    question: "What should a client send before asking for a quote?",
    answer:
      "Room dimensions, rough photos or videos, reference styles you like, expected scope, and your preferred finish direction are enough for a strong first discussion.",
  },
];

const heroFocusWords = [
  "Precision Measurement",
  "Sheet Planning",
  "Hardware Selection",
  "Finish Coordination",
  "Workshop Discipline",
  "Clean Installation",
  "Room-Level Harmony",
];

const plannerProfiles = {
  wardrobe: {
    title: "Wardrobe-first room strategy",
    summary:
      "Best when storage pressure is high and the room still needs to feel calm, premium, and visually balanced.",
    recommendations: [
      "Freeze wardrobe width, depth, and shutter logic before finalizing the rest of the room.",
      "Use internal layout planning to avoid wasting premium finish budget on bad storage decisions.",
    ],
    tags: ["Wardrobe planning", "Storage-first", "Clean elevation"],
  },
  kitchen: {
    title: "Kitchen workflow strategy",
    summary:
      "Best when movement, access, appliance planning, and storage discipline matter as much as the visual finish.",
    recommendations: [
      "Plan the workflow triangle, tall storage, and appliance zones before choosing the outer finish language.",
      "Use finish choices that feel premium but still suit daily cleaning and practical use.",
    ],
    tags: ["Kitchen flow", "Tall units", "Hardware planning"],
  },
  panel: {
    title: "Feature-panel design strategy",
    summary:
      "Best when the room needs one strong visual anchor that instantly upgrades its identity and perceived finish level.",
    recommendations: [
      "Make one wall do the heavy visual work instead of over-designing every surface in the room.",
      "Use texture, groove rhythm, or veneer tone to add depth without crowding the space.",
    ],
    tags: ["Feature wall", "Visual anchor", "Texture depth"],
  },
  ceiling: {
    title: "Ceiling-led finish strategy",
    summary:
      "Best when the room feels incomplete overhead and needs cleaner framing, better lighting rhythm, and stronger spatial definition.",
    recommendations: [
      "Design the ceiling around lighting intent and room proportions, not just decorative patterns.",
      "Keep the detailing elegant enough to support the room rather than visually overpower it.",
    ],
    tags: ["Lighting frame", "Room proportion", "Ceiling detail"],
  },
  bedroom: {
    title: "Custom bedroom composition",
    summary:
      "Best when the room needs the bed, side tables, wardrobe, paneling, and finish story to feel like one cohesive set.",
    recommendations: [
      "Treat the bed wall, side units, and storage as one composition instead of isolated purchases.",
      "Use finish and texture continuity so the room feels restful and intentional.",
    ],
    tags: ["Bedroom package", "Headboard wall", "Coherent styling"],
  },
  living: {
    title: "Living-room signature upgrade",
    summary:
      "Best when the goal is a stronger TV wall, cleaner display storage, and a more composed room-level visual language.",
    recommendations: [
      "Let the TV unit and panel wall create one central design statement for the room.",
      "Balance open display with concealed storage so the room stays premium in daily use.",
    ],
    tags: ["TV unit", "Display balance", "Living upgrade"],
  },
  office: {
    title: "Workspace fit-out strategy",
    summary:
      "Best for offices and studios that need practical productivity, cleaner brand presence, and sharper furniture planning together.",
    recommendations: [
      "Prioritize ergonomic work zones and storage flow before layering visual finish enhancements.",
      "Use paneling and workstation geometry to reinforce a professional identity without clutter.",
    ],
    tags: ["Workstations", "Professional finish", "Studio planning"],
  },
  "full-home": {
    title: "Full-home coordination strategy",
    summary:
      "Best when wardrobes, kitchens, furniture, panel work, and ceiling details need to speak the same visual language across multiple rooms.",
    recommendations: [
      "Sequence the project by priority rooms so the budget creates visible value from the start.",
      "Keep material and finish logic connected across the home to avoid a mixed-vendor feeling.",
    ],
    tags: ["Multi-room scope", "Finish consistency", "Coordinated execution"],
  },
};

const propertyProfiles = {
  apartment: {
    label: "Apartment",
    recommendation: "Use measured storage, lighter visual massing, and tighter detailing so the space feels open and efficient.",
  },
  villa: {
    label: "Villa or Independent Floor",
    recommendation: "Lean into stronger feature moments, layered finishes, and scale-sensitive furniture sizing.",
  },
  office: {
    label: "Office or Studio",
    recommendation: "Balance brand presence, utility, durability, and cleaner day-to-day workflow through the layout.",
  },
  retail: {
    label: "Retail or Commercial Space",
    recommendation: "Let the space communicate confidence fast through paneling, display logic, and better customer-facing surfaces.",
  },
};

const styleProfiles = {
  "warm-modern": {
    label: "Warm Modern",
    summary: "Recommend wood warmth, softer contrast, and layered lighting to keep the room polished but welcoming.",
  },
  "luxury-minimal": {
    label: "Luxury Minimal",
    summary: "Recommend stronger restraint, cleaner lines, sharper alignments, and finish quality that carries the premium feel.",
  },
  "soft-neutral": {
    label: "Soft Neutral",
    summary: "Recommend quiet tones, calm contrast, and subtle detailing that makes the room feel lighter and more relaxed.",
  },
  "dark-premium": {
    label: "Dark Premium",
    summary: "Recommend moodier finishes, controlled lighting, and bold surfaces that feel rich rather than heavy.",
  },
  "modern-indian": {
    label: "Modern Indian",
    summary: "Recommend a contemporary layout language with warmth, usability, and enough character to avoid a generic showroom feel.",
  },
};

const priorityProfiles = {
  storage: {
    label: "Storage first",
    recommendation: "Bias the layout toward real storage efficiency, access, and long-term usability before decorative extras.",
  },
  balanced: {
    label: "Balanced result",
    recommendation: "Split attention evenly between function, room feel, and material expression for a more rounded outcome.",
  },
  impact: {
    label: "Visual impact",
    recommendation: "Put more budget and design energy into the biggest visual statement surfaces and hero pieces.",
  },
};

const budgetProfiles = {
  1: {
    label: "Smart essential",
    recommendation: "Protect layout quality and the most visible finish move, then keep the rest disciplined and efficient.",
  },
  2: {
    label: "Balanced premium",
    recommendation: "Aim for stronger finish harmony, better hardware choices, and one or two premium detailing moments.",
  },
  3: {
    label: "Design-forward",
    recommendation: "Use the budget to lift materials, detailing rhythm, and project cohesion rather than just increasing quantity.",
  },
  4: {
    label: "Statement finish",
    recommendation: "Treat the space like a signature result with stronger material layering, hero surfaces, and higher finish ambition.",
  },
};

const timelineProfiles = {
  urgent: {
    label: "Need to start soon",
    recommendation: "Freeze measurements and finish direction quickly so production decisions do not drift.",
  },
  month: {
    label: "Within 30 days",
    recommendation: "This timeline suits a focused scope where layout and material decisions can be finalized decisively.",
  },
  quarter: {
    label: "Within 2 to 3 months",
    recommendation: "Use this time to refine room hierarchy, finishes, and the exact mix of furniture and interior work.",
  },
  research: {
    label: "Still researching",
    recommendation: "Start by defining the must-have scope so you do not compare vendors on surface-level pricing alone.",
  },
};

function renderServices() {
  const container = document.querySelector("#service-grid");
  if (!container) return;

  container.innerHTML = serviceLines
    .map(
      (service) => `
        <article class="service-card reveal">
          <div class="service-price">${service.price}</div>
          <h3>${service.title}</h3>
          <p>${service.summary}</p>
          <div class="service-list">
            ${service.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderWhyAltercraft() {
  const container = document.querySelector("#why-grid");
  if (!container) return;

  container.innerHTML = whyAltercraft
    .map(
      (item) => `
        <article class="why-card reveal">
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
        </article>
      `,
    )
    .join("");
}

function renderTechnology() {
  const container = document.querySelector("#technology-grid");
  if (!container) return;

  container.innerHTML = craftSystems
    .map(
      (item) => `
        <article class="technology-card reveal">
          <span class="technology-step">Step ${item.step}</span>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="technology-points">
            ${item.points.map((point) => `<span>${point}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function createPortfolioVisual(project, mode = "spotlight") {
  if (project.image) {
    return `<img src="${project.image}" alt="${project.title}" loading="lazy" />`;
  }

  const placeholderClass = mode === "modal" ? "portfolio-modal-placeholder" : "portfolio-placeholder";
  return `
    <div class="${placeholderClass}">
      <div class="${mode === "modal" ? "portfolio-modal-top" : "portfolio-placeholder-top"}">
        <span class="portfolio-placeholder-badge">Project Focus</span>
      </div>
      <div>
        <h3 class="portfolio-placeholder-title">${project.title}</h3>
        <p class="portfolio-placeholder-note">${project.hint}</p>
      </div>
    </div>
  `;
}

function setupPortfolio() {
  const spotlight = document.querySelector("#portfolio-spotlight");
  const rail = document.querySelector("#portfolio-rail");
  const modal = document.querySelector("#portfolio-modal");
  const modalMedia = document.querySelector("#portfolio-modal-media");
  const modalTitle = document.querySelector("#portfolio-modal-title");
  const modalNote = document.querySelector("#portfolio-modal-note");
  const modalTags = document.querySelector("#portfolio-modal-tags");
  const modalKicker = document.querySelector("#portfolio-modal-kicker");
  const modalClose = document.querySelector("#portfolio-modal-close");

  if (
    !spotlight ||
    !rail ||
    !modal ||
    !modalMedia ||
    !modalTitle ||
    !modalNote ||
    !modalTags ||
    !modalKicker ||
    !modalClose ||
    !projectSlots.length
  ) {
    return;
  }

  let activeIndex = 0;
  let rotationTimer = 0;

  const openModal = (index) => {
    const project = projectSlots[index];
    modalMedia.innerHTML = createPortfolioVisual(project, "modal");
    modalTitle.textContent = project.title;
    modalNote.textContent = `${project.note} ${project.hint}`;
    modalKicker.textContent = project.kicker;
    modalTags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.hidden = true;
    document.body.style.removeProperty("overflow");
  };

  const restartRotation = () => {
    window.clearInterval(rotationTimer);
    rotationTimer = window.setInterval(() => {
      activeIndex = (activeIndex + 1) % projectSlots.length;
      render();
    }, 4200);
  };

  const render = () => {
    const project = projectSlots[activeIndex];

    spotlight.innerHTML = `
      <div class="portfolio-media">
        ${createPortfolioVisual(project)}
      </div>
      <div class="portfolio-copy">
        <div class="portfolio-meta">
          <div class="portfolio-meta-row">
            <span class="portfolio-kicker">${project.kicker}</span>
            <span class="portfolio-pricing">${project.pricing}</span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.note}</p>
        </div>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="portfolio-actions">
          <button class="button" type="button" data-open-portfolio="true">Open Preview</button>
          <a class="button button--ghost" href="${project.href}" target="_blank" rel="noreferrer">
            ${project.cta}
          </a>
        </div>
        <div class="portfolio-controls">
          <button class="portfolio-control" type="button" data-direction="-1">Prev</button>
          <div class="portfolio-counter">${String(activeIndex + 1).padStart(2, "0")} / ${String(projectSlots.length).padStart(2, "0")}</div>
          <button class="portfolio-control" type="button" data-direction="1">Next</button>
        </div>
      </div>
    `;

    rail.innerHTML = projectSlots
      .map(
        (item, index) => `
          <button
            class="portfolio-card ${index === activeIndex ? "is-active" : ""}"
            type="button"
            data-portfolio-index="${index}"
            aria-label="Open ${item.title} portfolio slot"
          >
            <div class="portfolio-card-top">
              <small>${item.kicker}</small>
              <span class="project-price">${item.pricing}</span>
            </div>
            <h3 class="portfolio-card-title">${item.title}</h3>
            <p>${item.note}</p>
            <div class="portfolio-card-tags">
              ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
          </button>
        `,
      )
      .join("");

    spotlight.querySelectorAll("[data-direction]").forEach((button) => {
      button.addEventListener("click", () => {
        const direction = Number(button.getAttribute("data-direction") || 0);
        activeIndex = (activeIndex + direction + projectSlots.length) % projectSlots.length;
        render();
        restartRotation();
      });
    });

    spotlight.querySelector('[data-open-portfolio="true"]')?.addEventListener("click", () => {
      openModal(activeIndex);
    });

    rail.querySelectorAll("[data-portfolio-index]").forEach((button) => {
      button.addEventListener("click", () => {
        activeIndex = Number(button.getAttribute("data-portfolio-index") || 0);
        render();
        restartRotation();
      });
    });
  };

  modal.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.dataset.closeModal === "true") {
      closeModal();
    }
  });

  modalClose.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });

  render();
  restartRotation();
}

function renderShopHighlights() {
  const feature = document.querySelector("#shop-feature");
  const grid = document.querySelector("#shop-grid");
  if (!feature || !grid || !shopHighlights.length) return;

  const [featured, ...items] = shopHighlights;

  feature.innerHTML = `
    <div class="shop-feature-media">
      <img src="${featured.image}" alt="${featured.brand} ${featured.title}" loading="lazy" />
    </div>
    <div class="shop-feature-copy">
      <span class="shop-badge">${featured.label}</span>
      <div class="shop-brand-row">
        <a
          class="shop-brand-link"
          href="${featured.brandHref}"
          target="_blank"
          rel="noreferrer"
        >
          ${featured.brand}
        </a>
        <span>Flipkart brand page</span>
      </div>
      <h3>
        <a
          class="shop-brand-link-inline"
          href="${featured.brandHref}"
          target="_blank"
          rel="noreferrer"
        >
          ${featured.brand}
        </a>
        ${featured.title}
      </h3>
      <div class="shop-price">${featured.price}</div>
      <p>${featured.summary}</p>
      <div class="shop-tags">
        ${featured.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <div class="shop-actions">
        <a class="button" href="${featured.href}" target="_blank" rel="noreferrer">
          ${featured.cta}
        </a>
        <a
          class="button button--ghost"
          href="${featured.secondaryHref}"
          target="_blank"
          rel="noreferrer"
        >
          ${featured.secondaryCta}
        </a>
      </div>
    </div>
  `;

  grid.innerHTML = items
    .map(
      (item) => `
        <article class="shop-card reveal">
          <div class="shop-card-media">
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
          </div>
          <div class="shop-card-copy">
            <div class="shop-card-topline">
              <span>${item.label}</span>
              <strong>${item.price}</strong>
            </div>
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
            <div class="shop-tags">
              ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <a class="shop-link" href="${item.href}" target="_blank" rel="noreferrer">
              ${item.cta}
            </a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderCategories() {
  const container = document.querySelector("#category-grid");
  if (!container) return;

  container.innerHTML = furnitureCategories
    .map(
      (category) => `
        <article class="category-card category-card--visual reveal">
          <div class="category-media">
            <img src="${category.image}" alt="${category.title}" loading="lazy" />
          </div>
          <div class="category-copy">
            <div class="category-topline">
              <span>${category.label}</span>
              <strong>${category.price}</strong>
            </div>
            <h3>${category.title}</h3>
            <p>${category.summary}</p>
            <a class="category-link" href="${category.href}" target="_blank" rel="noreferrer">
              ${category.cta}
            </a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderProductCatalog() {
  const container = document.querySelector("#product-catalog-grid");
  if (!container) return;

  container.innerHTML = productCatalog
    .map(
      (product) => `
        <article class="catalog-card reveal">
          <div class="catalog-card-media">
            <img src="${product.image}" alt="${product.alt}" loading="lazy" />
          </div>
          <div class="catalog-card-copy">
            <div class="catalog-card-topline">
              <span>${product.label}</span>
              <div class="catalog-price-stack">
                <strong>${formatInr(getOfferPrice(product))}</strong>
                <small>Was ${formatInr(product.priceValue)}</small>
              </div>
            </div>
            <h3>${product.title}</h3>
            <p>${product.summary}</p>
            <ul class="catalog-mini-list">
              ${product.highlights.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <div class="catalog-discount">Fixed website price with ${WEBSITE_DISCOUNT_PERCENT}% off</div>
            <div class="catalog-actions">
              <a class="button" href="./${product.slug}/">View product page</a>
              <button class="button button--ghost" type="button" data-add-to-cart="${product.slug}">Add to Cart</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderProductDetail() {
  const container = document.querySelector("#product-detail");
  if (!container) return;

  const slug =
    container.getAttribute("data-product-slug") ||
    (typeof window !== "undefined" ? window.ALTERCRAFT_PRODUCT_SLUG : "");

  const product = productCatalog.find((item) => item.slug === slug);

  if (!product) {
    container.innerHTML = `
      <section class="section">
        <div class="page-banner reveal">
          <span class="eyebrow">Product Not Found</span>
          <h1>We could not find that product page.</h1>
          <p>Please return to the product catalog and choose another item.</p>
          <div class="section-actions">
            <a class="button" href="../">Back to Products</a>
            <a class="button button--ghost" href="../..">Back to Home</a>
          </div>
        </div>
      </section>
    `;
    return;
  }

  const related = productCatalog.filter((item) => item.slug !== product.slug).slice(0, 3);

  container.innerHTML = `
    <section class="section product-page">
      <div class="product-breadcrumbs reveal">
        <a href="../..">Home</a>
        <span>/</span>
        <a href="../">Products</a>
        <span>/</span>
        <strong>${product.title}</strong>
      </div>

      <div class="product-hero reveal">
        <div class="product-hero-media">
          <img src="${product.image}" alt="${product.alt}" loading="eager" />
        </div>
        <div class="product-hero-copy">
          <span class="product-label">${product.label}</span>
          <h1>${product.title}</h1>
          <div class="product-price-panel">
            <div class="product-price-badge">${formatInr(getOfferPrice(product))}</div>
            <div class="product-price-meta">
              <span>Was ${formatInr(product.priceValue)}</span>
              <strong>${WEBSITE_DISCOUNT_PERCENT}% off</strong>
            </div>
          </div>
          <p>${product.summary}</p>

          <div class="product-actions">
            <button class="button" type="button" data-buy-now="${product.slug}">Buy Now</button>
            <button class="button button--ghost" type="button" data-add-to-cart="${product.slug}">Add to Cart</button>
            <a class="button button--ghost" href="${product.secondaryHref}" target="_blank" rel="noreferrer">${product.secondaryLabel}</a>
          </div>

          <div class="product-note-box">
            <strong>Fixed Price</strong>
            <p>
              This product page shows a fixed website price for the listed furniture item. Any change in size, finish, or product variant is quoted separately before billing.
            </p>
          </div>
          <div class="product-note-box">
            <strong>Payment Options</strong>
            <p>
              ${WEBSITE_PAYMENT_OPTIONS} ${CUSTOM_PAYMENT_RULE}
            </p>
          </div>
        </div>
      </div>

      <div class="product-detail-grid">
        <article class="product-card-block reveal">
          <span class="panel-kicker">Price and Checkout</span>
          <h2>Order summary</h2>
          <div class="product-spec-grid">
            <div class="product-spec">
              <span>Fixed Price</span>
              <strong>${formatInr(getOfferPrice(product))}</strong>
            </div>
            <div class="product-spec">
              <span>Previous Price</span>
              <strong>${formatInr(product.priceValue)}</strong>
            </div>
            <div class="product-spec">
              <span>You Save</span>
              <strong>${formatInr(getSavings(product))}</strong>
            </div>
            <div class="product-spec">
              <span>Booking Amount</span>
              <strong>${formatInr(product.bookingAdvance)}</strong>
            </div>
            <div class="product-spec">
              <span>Payment Options</span>
              <strong>Online or COD</strong>
            </div>
            <div class="product-spec">
              <span>COD Availability</span>
              <strong>Eligible pincodes only</strong>
            </div>
          </div>
        </article>

        <article class="product-card-block reveal">
          <span class="panel-kicker">What You Get</span>
          <h2>Core product highlights</h2>
          <ul class="product-list">
            ${product.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>

        <article class="product-card-block reveal">
          <span class="panel-kicker">Key Details</span>
          <h2>Specifications and scope</h2>
          <div class="product-spec-grid">
            ${product.specs
              .map(
                (item) => `
                  <div class="product-spec">
                    <span>${item.label}</span>
                    <strong>${item.value}</strong>
                  </div>
                `,
              )
              .join("")}
          </div>
        </article>

        <article class="product-card-block reveal product-card-block--wide">
          <span class="panel-kicker">Ordering and Payment</span>
          <h2>How this product flows on Altercraft</h2>
          <ul class="product-list">
            ${product.buildNotes.map((item) => `<li>${item}</li>`).join("")}
            <li>${WEBSITE_PAYMENT_OPTIONS}</li>
            <li>${CUSTOM_PAYMENT_RULE}</li>
            <li>${product.checkoutNote}</li>
            <li>${product.deliveryNote}</li>
          </ul>
        </article>
      </div>

      <section class="product-flow reveal">
        <div class="section-heading">
          <p class="eyebrow">Buyer Journey</p>
          <h2>Simple checkout flow for customers and payment review.</h2>
          <p>This page makes the buying journey easy to understand: product, fixed price, cart, checkout, and payment confirmation.</p>
        </div>
        <div class="product-flow-grid">
          <article class="product-flow-step">
            <span>01</span>
            <h3>Browse product and price</h3>
            <p>The customer first sees the listed product, fixed website price, and the exact furniture category.</p>
          </article>
          <article class="product-flow-step">
            <span>02</span>
            <h3>Add to cart or buy now</h3>
            <p>The buyer can add the item to cart or move straight to checkout from the product page.</p>
          </article>
          <article class="product-flow-step">
            <span>03</span>
            <h3>Review order and address</h3>
            <p>The customer reviews the order summary, quantity, address, and contact details on the checkout page.</p>
          </article>
          <article class="product-flow-step">
            <span>04</span>
            <h3>Pay online or choose Cash on Delivery</h3>
            <p>Altercraft confirms online payment for bookings or verifies Cash on Delivery eligibility for listed furniture products before final order confirmation.</p>
          </article>
        </div>
      </section>

      <section class="related-products reveal">
        <div class="section-heading">
          <p class="eyebrow">Also Browse</p>
          <h2>Other Altercraft product pages</h2>
          <p>These pages help buyers and reviewers see that the website carries multiple furniture categories with visible fixed pricing.</p>
        </div>
        <div class="catalog-grid product-related-grid">
          ${related
            .map(
              (item) => `
                <article class="catalog-card">
                  <div class="catalog-card-media">
                    <img src="${item.image}" alt="${item.alt}" loading="lazy" />
                  </div>
                  <div class="catalog-card-copy">
                    <div class="catalog-card-topline">
                      <span>${item.category}</span>
                      <div class="catalog-price-stack">
                        <strong>${formatInr(getOfferPrice(item))}</strong>
                        <small>Was ${formatInr(item.priceValue)}</small>
                      </div>
                    </div>
                    <h3>${item.title}</h3>
                    <p>${item.summary}</p>
                    <div class="catalog-discount">Fixed website price with ${WEBSITE_DISCOUNT_PERCENT}% off</div>
                    <div class="catalog-actions">
                      <a class="button" href="../${item.slug}/">View product page</a>
                      <button class="button button--ghost" type="button" data-add-to-cart="${item.slug}">Add to Cart</button>
                    </div>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    </section>
  `;
}

function updateCartIndicators() {
  const cart = getCartStorage();
  const count = getCartCount(cart);

  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = String(count);
    node.hidden = count === 0;
  });
}

function setupProductActions() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const addSlug = target.closest("[data-add-to-cart]")?.getAttribute("data-add-to-cart");
    if (addSlug) {
      upsertCartItem(addSlug, 1);
      target.textContent = "Added";
      window.setTimeout(() => {
        target.textContent = target.classList.contains("button--ghost") ? "Add to Cart" : "View product page";
      }, 1200);
      return;
    }

    const buyNowSlug = target.closest("[data-buy-now]")?.getAttribute("data-buy-now");
    if (buyNowSlug) {
      setCartStorage([{ slug: buyNowSlug, quantity: 1 }]);
      updateCartIndicators();
      window.location.href = CHECKOUT_PATH;
      return;
    }

    const increaseSlug = target.closest("[data-cart-increase]")?.getAttribute("data-cart-increase");
    if (increaseSlug) {
      const cart = getCartStorage();
      const item = cart.find((entry) => entry.slug === increaseSlug);
      updateCartItemQuantity(increaseSlug, (item?.quantity || 0) + 1);
      renderCartPage();
      return;
    }

    const decreaseSlug = target.closest("[data-cart-decrease]")?.getAttribute("data-cart-decrease");
    if (decreaseSlug) {
      const cart = getCartStorage();
      const item = cart.find((entry) => entry.slug === decreaseSlug);
      updateCartItemQuantity(decreaseSlug, Math.max((item?.quantity || 1) - 1, 0));
      renderCartPage();
      return;
    }

    const removeSlug = target.closest("[data-cart-remove]")?.getAttribute("data-cart-remove");
    if (removeSlug) {
      removeCartItem(removeSlug);
      renderCartPage();
    }
  });
}

function renderCartPage() {
  const container = document.querySelector("#cart-page");
  if (!container) return;

  const cart = getCartStorage();
  const items = cart
    .map((item) => {
      const product = productCatalog.find((entry) => entry.slug === item.slug);
      if (!product) return "";

      return `
        <article class="cart-item">
          <div class="cart-item-media">
            <img src="${product.image}" alt="${product.alt}" loading="lazy" />
          </div>
          <div class="cart-item-copy">
            <div class="cart-item-topline">
              <span>${product.category}</span>
              <strong>${formatInr(getOfferPrice(product))}</strong>
            </div>
            <h3>${product.title}</h3>
            <p>${product.summary}</p>
            <div class="cart-controls">
              <button class="cart-qty" type="button" data-cart-decrease="${product.slug}">-</button>
              <span class="cart-qty-readout">${item.quantity}</span>
              <button class="cart-qty" type="button" data-cart-increase="${product.slug}">+</button>
              <button class="cart-remove" type="button" data-cart-remove="${product.slug}">Remove</button>
            </div>
          </div>
          <div class="cart-line-total">${formatInr(getOfferPrice(product) * item.quantity)}</div>
        </article>
      `;
    })
    .join("");

  if (!cart.length) {
    container.innerHTML = `
      <section class="section">
        <div class="page-banner reveal is-visible">
          <p class="eyebrow">Your Cart</p>
          <h1>Your cart is empty.</h1>
          <p>Add products from the catalog to continue toward checkout.</p>
          <div class="section-actions">
            <a class="button" href="/products/">Browse Products</a>
            <a class="button button--ghost" href="/">Back to Home</a>
          </div>
        </div>
      </section>
    `;
    updateCartIndicators();
    return;
  }

  container.innerHTML = `
    <section class="section">
      <div class="section-heading reveal is-visible">
        <p class="eyebrow">Your Cart</p>
        <h1>Review products before checkout.</h1>
        <p>Update quantity, check totals, and move to checkout when ready.</p>
      </div>
      <div class="cart-layout">
        <div class="cart-list">${items}</div>
        <aside class="cart-summary">
          <span class="panel-kicker">Order Summary</span>
          <h2>${getCartCount(cart)} item${getCartCount(cart) === 1 ? "" : "s"} in cart</h2>
          <div class="cart-summary-line">
            <span>Subtotal</span>
            <strong>${formatInr(getCartSubtotal(cart))}</strong>
          </div>
          <div class="cart-summary-line">
            <span>Payment options</span>
            <strong>Online or Cash on Delivery</strong>
          </div>
          <div class="cart-summary-line">
            <span>Next step</span>
            <strong>Choose payment method and confirm address</strong>
          </div>
          <a class="button" href="${CHECKOUT_PATH}">Proceed to Checkout</a>
          <a class="button button--ghost" href="/products/">Continue Shopping</a>
          <p class="pricing-note">${WEBSITE_PAYMENT_OPTIONS} ${CUSTOM_PAYMENT_RULE}</p>
        </aside>
      </div>
    </section>
  `;

  updateCartIndicators();
}

function renderCheckoutPage() {
  const container = document.querySelector("#checkout-page");
  if (!container) return;

  const cart = getCartStorage();

  if (!cart.length) {
    container.innerHTML = `
      <section class="section">
        <div class="page-banner reveal is-visible">
          <p class="eyebrow">Checkout</p>
          <h1>No product selected yet.</h1>
          <p>Add a product to cart or use Buy Now from any product page to continue.</p>
          <div class="section-actions">
            <a class="button" href="/products/">Browse Products</a>
            <a class="button button--ghost" href="${CART_PATH}">Open Cart</a>
          </div>
        </div>
      </section>
    `;
    return;
  }

  const lines = cart
    .map((item) => {
      const product = productCatalog.find((entry) => entry.slug === item.slug);
      if (!product) return "";

      return `
        <div class="checkout-line">
          <span>${product.title} x ${item.quantity}</span>
          <strong>${formatInr(getOfferPrice(product) * item.quantity)}</strong>
        </div>
      `;
    })
    .join("");

  container.innerHTML = `
    <section class="section">
      <div class="section-heading reveal is-visible">
        <p class="eyebrow">Checkout</p>
        <h1>Review order, choose payment method, and place the order.</h1>
        <p>This checkout submits the order to Altercraft. Online payment customers receive payment instructions after review, and COD orders are confirmed after eligibility checks.</p>
      </div>

      <div class="checkout-layout">
        <div class="checkout-summary-card">
          <span class="panel-kicker">Order Summary</span>
          <h2>Selected furniture items</h2>
          ${lines}
          <div class="checkout-line checkout-line--total">
            <span>Total</span>
            <strong>${formatInr(getCartSubtotal(cart))}</strong>
          </div>
          <p class="pricing-note">Fixed website prices are shown above. ${WEBSITE_PAYMENT_OPTIONS} ${CUSTOM_PAYMENT_RULE}</p>
        </div>

        <form class="checkout-form" id="checkout-form">
          <div class="planner-grid">
            <label class="planner-field">
              <span>Full Name</span>
              <input type="text" name="name" required />
            </label>
            <label class="planner-field">
              <span>Phone</span>
              <input type="tel" name="phone" required />
            </label>
            <label class="planner-field">
              <span>Email</span>
              <input type="email" name="email" />
            </label>
            <label class="planner-field">
              <span>City</span>
              <input type="text" name="city" required />
            </label>
            <label class="planner-field checkout-field-wide">
              <span>Address</span>
              <textarea name="address" rows="4" required></textarea>
            </label>
            <label class="planner-field">
              <span>Pincode</span>
              <input type="text" name="pincode" required />
            </label>
          </div>

          <div class="payment-methods">
            <span class="planner-field-label">Payment Method</span>
            <label class="payment-method-card">
              <input type="radio" name="paymentMethod" value="Online Payment / UPI / Bank Transfer" checked />
              <div class="payment-method-copy">
                <strong>Online Payment / UPI / Bank Transfer</strong>
                <span>Recommended for bookings, custom approvals, and milestone payments.</span>
              </div>
            </label>
            <label class="payment-method-card">
              <input type="radio" name="paymentMethod" value="Cash on Delivery" />
              <div class="payment-method-copy">
                <strong>Cash on Delivery</strong>
                <span>Available on eligible listed furniture products in serviceable pin codes after order confirmation.</span>
              </div>
            </label>
          </div>

          <div class="checkout-routing-note">
            <strong>Order routing</strong>
            <p>
              Orders from this checkout go to <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>.
              Online payment customers receive a payment link or bank details after review. COD
              orders are checked for product and pincode eligibility before confirmation.
            </p>
          </div>

          <div class="checkout-actions">
            <button class="button" id="checkout-submit" type="submit">Place Order & Get Payment Link</button>
            <a class="button button--ghost" href="${CART_PATH}">Back to Cart</a>
          </div>
          <div class="checkout-status" id="checkout-status" hidden></div>
          <p class="pricing-note">By continuing, the customer moves from product selection to address verification, payment method confirmation, order submission, and final approval.</p>
        </form>
      </div>
    </section>
  `;

  const form = container.querySelector("#checkout-form");
  const submitButton = container.querySelector("#checkout-submit");
  const status = container.querySelector("#checkout-status");

  if (form && submitButton && status) {
    const setStatus = (variant, message, extraHref = "") => {
      status.hidden = false;
      status.className = `checkout-status checkout-status--${variant}`;
      status.innerHTML = extraHref
        ? `<strong>${message}</strong><a href="${extraHref}">Email order details to ${SUPPORT_EMAIL}</a>`
        : `<strong>${message}</strong>`;
    };

    const clearStatus = () => {
      status.hidden = true;
      status.className = "checkout-status";
      status.innerHTML = "";
    };

    const updateButtonCopy = () => {
      const formData = new FormData(form);
      submitButton.textContent = getCheckoutPrimaryLabel(
        String(formData.get("paymentMethod") || "Online Payment / UPI / Bank Transfer"),
      );
    };

    form.addEventListener("input", () => {
      clearStatus();
      updateButtonCopy();
    });

    form.addEventListener("change", () => {
      clearStatus();
      updateButtonCopy();
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const customer = {
        name: String(formData.get("name") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        address: String(formData.get("address") || "").trim(),
        city: String(formData.get("city") || "").trim(),
        pincode: String(formData.get("pincode") || "").trim(),
        paymentMethod: String(
          formData.get("paymentMethod") || "Online Payment / UPI / Bank Transfer",
        ),
      };

      const order = buildCheckoutOrder(cart, customer);
      submitButton.disabled = true;
      submitButton.textContent = "Submitting Order...";
      setStatus("pending", "Submitting your order to Altercraft order desk.");

      const result = await submitCheckoutOrder(order);

      if (result.ok) {
        setCartStorage([]);
        updateCartIndicators();
        form.reset();
        setStatus("success", `${getCheckoutSuccessMessage(order.paymentMethod)} Reference: ${order.reference}.`);
        container.querySelector(".checkout-summary-card")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        setStatus(
          "error",
          `Automatic order submission is unavailable at the moment. Reference: ${order.reference}.`,
          result.supportHref,
        );
      }

      submitButton.disabled = false;
      updateButtonCopy();
    });

    updateButtonCopy();
  }
}

function renderFitForProjects() {
  const container = document.querySelector("#fit-grid");
  if (!container) return;

  container.innerHTML = fitForProjects
    .map(
      (item) => `
        <article class="fit-card reveal">
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
        </article>
      `,
    )
    .join("");
}

function renderFaqs() {
  const container = document.querySelector("#faq-list");
  if (!container) return;

  container.innerHTML = faqItems
    .map(
      (item, index) => `
        <details class="faq-item reveal" ${index === 0 ? "open" : ""}>
          <summary>${item.question}</summary>
          <p>${item.answer}</p>
        </details>
      `,
    )
    .join("");
}

function buildPlannerResult(values) {
  const project = plannerProfiles[values.project];
  const property = propertyProfiles[values.property];
  const style = styleProfiles[values.style];
  const priority = priorityProfiles[values.priority];
  const budget = budgetProfiles[values.budget];
  const timeline = timelineProfiles[values.timeline];

  const meta = [
    { label: "Project lens", value: project.title },
    { label: "Style direction", value: style.label },
    { label: "Budget attitude", value: budget.label },
    { label: "Timeline", value: timeline.label },
  ];

  const recommendations = [
    project.recommendations[0],
    project.recommendations[1],
    property.recommendation,
    priority.recommendation,
    budget.recommendation,
    timeline.recommendation,
  ];

  const tags = [
    ...project.tags,
    style.label,
    property.label,
    priority.label,
  ];

  const summary = `${project.summary} ${style.summary}`;
  const whatsappText = encodeURIComponent(
    `Hi Altercraft, I used the website planner.\n\nProject: ${project.title}\nProperty: ${property.label}\nStyle: ${style.label}\nPriority: ${priority.label}\nBudget attitude: ${budget.label}\nTimeline: ${timeline.label}\n\nI want to discuss this scope.`,
  );

  return {
    title: `${project.title} for your ${property.label.toLowerCase()}`,
    summary,
    meta,
    recommendations,
    tags,
    whatsappText,
  };
}

function setupPlanner() {
  const form = document.querySelector("#planner-form");
  const budgetReadout = document.querySelector("#budget-readout");
  const title = document.querySelector("#planner-title");
  const summary = document.querySelector("#planner-summary");
  const meta = document.querySelector("#planner-meta");
  const list = document.querySelector("#planner-recommendations");
  const tags = document.querySelector("#planner-tags");
  const whatsapp = document.querySelector("#planner-whatsapp");

  if (!form || !budgetReadout || !title || !summary || !meta || !list || !tags || !whatsapp) {
    return;
  }

  const readValues = () => {
    const formData = new FormData(form);
    return {
      project: String(formData.get("project") || "wardrobe"),
      property: String(formData.get("property") || "apartment"),
      style: String(formData.get("style") || "warm-modern"),
      timeline: String(formData.get("timeline") || "urgent"),
      priority: String(formData.get("priority") || "storage"),
      budget: Number(formData.get("budget") || 2),
    };
  };

  const render = () => {
    const values = readValues();
    const result = buildPlannerResult(values);

    budgetReadout.textContent = budgetProfiles[values.budget].label;
    title.textContent = result.title;
    summary.textContent = result.summary;
    meta.innerHTML = result.meta
      .map(
        (item) => `
          <article class="planner-meta-card">
            <span>${item.label}</span>
            <strong>${item.value}</strong>
          </article>
        `,
      )
      .join("");

    list.innerHTML = result.recommendations
      .map((item) => `<li>${item}</li>`)
      .join("");

    tags.innerHTML = result.tags
      .map((item) => `<span>${item}</span>`)
      .join("");

    whatsapp.href = `https://wa.me/918826436093?text=${result.whatsappText}`;
  };

  form.addEventListener("input", render);
  form.addEventListener("change", render);
  render();
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupHeroFocus() {
  const target = document.querySelector("#hero-focus");
  if (!target) return;

  let index = 0;
  window.setInterval(() => {
    index = (index + 1) % heroFocusWords.length;
    target.classList.remove("is-swapping");
    window.requestAnimationFrame(() => {
      target.textContent = heroFocusWords[index];
      target.classList.add("is-swapping");
    });
  }, 2400);
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  items.forEach((item) => observer.observe(item));
}

function setupScrollUI() {
  const progress = document.querySelector(".scroll-progress");
  const links = Array.from(document.querySelectorAll('.site-nav a[href^="#"], .dock-nav a[href^="#"]'));
  const uniqueHrefs = [...new Set(links.map((link) => link.getAttribute("href")).filter(Boolean))];
  const sections = uniqueHrefs
    .map((href) => document.querySelector(href))
    .filter(Boolean);

  if (!progress || !links.length || !sections.length) return;

  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;

    let activeId = sections[0].id;
    const marker = window.scrollY + window.innerHeight * 0.3;
    sections.forEach((section) => {
      if (section.offsetTop <= marker) {
        activeId = section.id;
      }
    });

    links.forEach((link) => {
      const href = link.getAttribute("href") || "";
      link.classList.toggle("is-active", href === `#${activeId}`);
    });
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function setupInteractiveGlow() {
  const root = document.documentElement;
  window.addEventListener(
    "pointermove",
    (event) => {
      root.style.setProperty("--mouse-x", `${event.clientX}px`);
      root.style.setProperty("--mouse-y", `${event.clientY}px`);
    },
    { passive: true },
  );
}

function setYear() {
  const year = document.querySelector("#year");
  if (!year) return;
  year.textContent = new Date().getFullYear();
}

renderTechnology();
renderServices();
renderWhyAltercraft();
setupPortfolio();
renderShopHighlights();
renderCategories();
renderProductCatalog();
renderProductDetail();
renderCartPage();
renderCheckoutPage();
renderFitForProjects();
renderFaqs();
setupPlanner();
setupNav();
setupProductActions();
setupHeroFocus();
setupReveal();
setupScrollUI();
setupInteractiveGlow();
setYear();
updateCartIndicators();

