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
    price: "Starting from Rs. 24,500",
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
      "Advance payments, when applicable, are used for order confirmation and production booking.",
    ],
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
    price: "Starting from Rs. 7,900",
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
      "Online payments are accepted for order confirmation and production release.",
    ],
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
    price: "Starting from Rs. 5,900",
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
      "The starting price covers the standard product direction shown here.",
      "This product page makes living-room furniture visible as an actual purchasable category on the site.",
      "Payments are accepted for booking and confirmed orders where applicable.",
    ],
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
    price: "Starting from Rs. 10,900",
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
      "Payments are collected for confirmed order booking and release into production where applicable.",
    ],
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
    price: "Starting from Rs. 19,500",
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
      "Online payments are used for booking and confirmed order progress where applicable.",
    ],
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
    price: "Starting from Rs. 29,500",
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
      "Advance payments support booking confirmation and production planning.",
    ],
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
    price: "Starting from Rs. 6,400",
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
      "Payments are accepted for order confirmation where applicable.",
    ],
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
    price: "Starting from Rs. 21,500",
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
      "Payments are accepted for confirmed order booking and release.",
    ],
    primaryHref: "https://wa.me/918826436093?text=Hi%20Altercraft%2C%20I%20want%20to%20enquire%20about%20the%203%20door%20Legno%20Oak%20wardrobe%20shown%20on%20your%20website.",
    primaryLabel: "Enquire oak wardrobe",
    secondaryHref: whatsappLinks.wardrobe,
    secondaryLabel: "Compare wardrobe options",
  },
];

const shopHighlights = [
  {
    label: "Product page ready",
    brand: "AlterCraft",
    title: "Frosty White Bed",
    price: "Starting from Rs. 24,500",
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
    price: "Starting from Rs. 7,900",
    summary: "A real listed desk product with clean visuals, clear pricing, and a direct enquiry route.",
    image: "/assets/products/ac-study-table.png",
    href: productPages.studyTable,
    cta: "View product page",
    tags: ["Study table", "Workspace", "Compact product"],
  },
  {
    label: "Living room",
    title: "Centre Table",
    price: "Starting from Rs. 5,900",
    summary: "A clean living-room table product that helps the site show smaller furniture SKUs with pricing too.",
    image: "/assets/products/centre-table.png",
    href: productPages.centreTable,
    cta: "View product page",
    tags: ["Centre table", "Living room", "Compact furniture"],
  },
  {
    label: "Compact storage",
    title: "1 Door Wooden Wardrobe",
    price: "Starting from Rs. 10,900",
    summary: "A compact bedroom wardrobe product with drawer and shelf support for smaller storage requirements.",
    image: "/assets/products/one-door-wardrobe-frosty-white.png",
    href: productPages.wardrobe1,
    cta: "View product page",
    tags: ["1 door wardrobe", "Compact storage", "Bedroom"],
  },
  {
    label: "Space-led",
    title: "3 Door Wooden Wardrobe",
    price: "Starting from Rs. 19,500",
    summary: "A larger wardrobe product with hanging and shelf storage for mainstream bedroom buyers.",
    image: "/assets/products/three-door-wardrobe-frosty-white.png",
    href: productPages.wardrobe3,
    cta: "View product page",
    tags: ["3 door wardrobe", "Bedroom storage", "Frosty white"],
  },
  {
    label: "Large storage",
    title: "4 Door Wardrobe American Teak",
    price: "Starting from Rs. 29,500",
    summary: "A higher-capacity wardrobe page with warmer finish direction for premium bedroom storage.",
    image: "/assets/products/four-door-wardrobe-american-teak.png",
    href: productPages.wardrobe4,
    cta: "View product page",
    tags: ["4 door wardrobe", "American teak", "Large storage"],
  },
  {
    label: "Utility product",
    title: "Shoe Rack Natural White",
    price: "Starting from Rs. 6,400",
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
    price: "Starting from Rs. 24,500",
    summary: "A clean frosty-white bed page for buyers who want a simple, modern bedroom product.",
    image: "/assets/products/frosty-white-bed.png",
    href: productPages.bed,
    cta: "View bed page",
  },
  {
    title: "AC Study Table",
    label: "Work-from-home",
    price: "Starting from Rs. 7,900",
    summary: "A compact study table with a real product page and a simple enquiry route.",
    image: "/assets/products/ac-study-table.png",
    href: productPages.studyTable,
    cta: "View desk page",
  },
  {
    title: "Centre Table",
    label: "Living-room essential",
    price: "Starting from Rs. 5,900",
    summary: "A simple living-room table product that adds an easy furniture-buy path to the website.",
    image: "/assets/products/centre-table.png",
    href: productPages.centreTable,
    cta: "View centre table",
  },
  {
    title: "1 Door Wooden Wardrobe",
    label: "Compact storage",
    price: "Starting from Rs. 10,900",
    summary: "A compact wardrobe product for smaller bedrooms and tighter storage needs.",
    image: "/assets/products/one-door-wardrobe-frosty-white.png",
    href: productPages.wardrobe1,
    cta: "View 1 door wardrobe",
  },
  {
    title: "3 Door Wooden Wardrobe",
    label: "Bedroom storage",
    price: "Starting from Rs. 19,500",
    summary: "A mainstream 3-door wardrobe page with visible pricing and practical storage scope.",
    image: "/assets/products/three-door-wardrobe-frosty-white.png",
    href: productPages.wardrobe3,
    cta: "View 3 door wardrobe",
  },
  {
    title: "4 Door Wardrobe American Teak",
    label: "Large storage",
    price: "Starting from Rs. 29,500",
    summary: "A warmer, larger wardrobe option for bigger bedroom storage plans.",
    image: "/assets/products/four-door-wardrobe-american-teak.png",
    href: productPages.wardrobe4,
    cta: "View 4 door wardrobe",
  },
  {
    title: "Shoe Rack Natural White",
    label: "Utility product",
    price: "Starting from Rs. 6,400",
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
              <strong>${product.price}</strong>
            </div>
            <h3>${product.title}</h3>
            <p>${product.summary}</p>
            <ul class="catalog-mini-list">
              ${product.highlights.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <div class="catalog-actions">
              <a class="button" href="./${product.slug}/">View product page</a>
              <a class="button button--ghost" href="${product.secondaryHref}" target="_blank" rel="noreferrer">${product.secondaryLabel}</a>
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
          <div class="product-price-badge">${product.price}</div>
          <p>${product.summary}</p>

          <div class="product-actions">
            <a class="button" href="${product.primaryHref}" target="_blank" rel="noreferrer">${product.primaryLabel}</a>
            <a class="button button--ghost" href="${product.secondaryHref}" target="_blank" rel="noreferrer">${product.secondaryLabel}</a>
          </div>

          <div class="product-note-box">
            <strong>Pricing note</strong>
            <p>
              Prices shown are starting estimates for website review and customer guidance. Final pricing depends on size, finish, hardware, storage mix, and site conditions.
            </p>
          </div>
        </div>
      </div>

      <div class="product-detail-grid">
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
            <li>Customers can enquire on WhatsApp, confirm scope, and make booking or milestone payments online where applicable.</li>
          </ul>
        </article>
      </div>

      <section class="product-flow reveal">
        <div class="section-heading">
          <p class="eyebrow">Buyer Journey</p>
          <h2>Simple product flow for customers and payment review.</h2>
          <p>This page makes the buying journey easy to understand: product, price, enquiry, confirmation, and booking payment.</p>
        </div>
        <div class="product-flow-grid">
          <article class="product-flow-step">
            <span>01</span>
            <h3>Browse product and price</h3>
            <p>The customer first sees the product category, starting price, and practical scope.</p>
          </article>
          <article class="product-flow-step">
            <span>02</span>
            <h3>Confirm size or variant</h3>
            <p>Buyers confirm whether they need the standard direction or a custom size, finish, or storage change.</p>
          </article>
          <article class="product-flow-step">
            <span>03</span>
            <h3>Share details on WhatsApp</h3>
            <p>Room size, requirement, or exact product preference is shared with the Altercraft team.</p>
          </article>
          <article class="product-flow-step">
            <span>04</span>
            <h3>Pay booking advance</h3>
            <p>Online payment is taken for booking confirmation, order processing, or agreed milestone release.</p>
          </article>
        </div>
      </section>

      <section class="related-products reveal">
        <div class="section-heading">
          <p class="eyebrow">Also Browse</p>
          <h2>Other Altercraft product pages</h2>
          <p>These pages help buyers and reviewers see that the website carries multiple product categories with visible pricing.</p>
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
                      <strong>${item.price}</strong>
                    </div>
                    <h3>${item.title}</h3>
                    <p>${item.summary}</p>
                    <a class="button" href="../${item.slug}/">View product page</a>
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
renderFitForProjects();
renderFaqs();
setupPlanner();
setupNav();
setupHeroFocus();
setupReveal();
setupScrollUI();
setupInteractiveGlow();
setYear();

