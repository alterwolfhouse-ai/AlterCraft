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

const shopHighlights = [
  {
    label: "Trending on Flipkart",
    brand: "AlterCraft",
    title: "Frosty Series King Bed",
    price: "Live Flipkart product listing",
    summary:
      "The first product signal now points directly to your live Flipkart presence, so furniture buyers can move from discovery to marketplace trust in one click.",
    image: "https://images.unsplash.com/photo-1578898886655-c70a4aa75f5d?w=1200",
    href: flipkartLinks.frosty,
    brandHref: flipkartLinks.brand,
    cta: "Open on Flipkart",
    secondaryCta: "View brand page",
    secondaryHref: flipkartLinks.brand,
    tags: ["Live listing", "King bed", "Trending now"],
  },
  {
    label: "Brand page",
    title: "More AlterCraft Beds",
    price: "Browse the Altercraft brand grid on Flipkart",
    summary: "Use this as the marketplace bridge for visitors who want a quick online shopping path.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    href: flipkartLinks.brand,
    cta: "Browse Flipkart",
    tags: ["Online shop", "Beds", "Marketplace trust"],
  },
  {
    label: "Living comfort",
    title: "Custom Sofa and Lounge Seating",
    price: "Starting from Rs. 32,000",
    summary: "Sofas, lounge seating, and room-sized upholstery pieces designed around comfort, proportion, and the way the living room actually gets used.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
    href: whatsappLinks.sofa,
    cta: "Discuss sofa design",
    tags: ["Sofas", "Lounge seating", "Living room"],
  },
  {
    label: "Made to order",
    title: "Storage Bed Collection",
    price: "Starting from Rs. 28,500",
    summary: "Hydraulic storage beds and room-matched bed sets built around finish, sizing, and utility.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
    href: whatsappLinks.bed,
    cta: "Customize this",
    tags: ["Hydraulic storage", "Bedroom", "Custom sizing"],
  },
  {
    label: "Space-led",
    title: "Sliding Wardrobe",
    price: "Starting from Rs. 48,000",
    summary: "Clean shutters, organized internals, and wardrobe elevations that fit the room properly.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    href: whatsappLinks.wardrobe,
    cta: "Plan wardrobe",
    tags: ["Wardrobes", "Bedroom storage", "Custom internals"],
  },
  {
    label: "Work-ready",
    title: "Study Desk",
    price: "Starting from Rs. 13,500",
    summary: "Compact and executive desk options that keep work corners useful without looking temporary.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800",
    href: whatsappLinks.study,
    cta: "Build my desk",
    tags: ["Study table", "Office corner", "Storage"],
  },
  {
    label: "Feature finish",
    title: "Panel and TV Wall",
    price: "Starting from Rs. 11,500",
    summary: "Statement surfaces for TV units, bedroom backdrops, and feature walls that finish the room faster.",
    image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800",
    href: whatsappLinks.panel,
    cta: "Enquire now",
    tags: ["Panels", "TV walls", "Feature surface"],
  },
];

const furnitureCategories = [
  {
    title: "Beds and Headboards",
    label: "Bedroom bestsellers",
    price: "Live bed traffic via Flipkart",
    summary: "Custom bed sets, upholstered headboards, and side tables built around room size and finish direction.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    href: flipkartLinks.brand,
    cta: "Shop bed styles",
  },
  {
    title: "Storage Beds",
    label: "Room-fit custom",
    price: "Starting from Rs. 28,500",
    summary: "Hydraulic storage beds, platform beds, and finish-led bedroom sets sized for the room properly.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
    href: whatsappLinks.bed,
    cta: "Request custom bed",
  },
  {
    title: "Modular Wardrobes",
    label: "Storage-led",
    price: "Starting from Rs. 48,000",
    summary: "Sliding and swing wardrobes with better internals, cleaner lines, and a room-matched finish story.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800",
    href: whatsappLinks.wardrobe,
    cta: "Plan wardrobe",
  },
  {
    title: "Sofas and Lounge Seating",
    label: "Living-room comfort",
    price: "Starting from Rs. 32,000",
    summary: "Custom sofas, sectionals, and lounge seating planned around room size, fabric direction, and the overall living-room composition.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
    href: whatsappLinks.sofa,
    cta: "Plan sofa seating",
  },
  {
    title: "Study Tables and Desks",
    label: "Work-from-home",
    price: "Starting from Rs. 9,500",
    summary: "Study desks and compact workstations that keep corners productive while still looking premium.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800",
    href: whatsappLinks.study,
    cta: "Customize desk",
  },
  {
    title: "Statement Panels and TV Walls",
    label: "Feature surfaces",
    price: "Starting from Rs. 11,500",
    summary: "Panel systems, TV walls, and decorative surfaces that create instant visual anchor points.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
    href: whatsappLinks.panel,
    cta: "Enquire panel work",
  },
  {
    title: "Mandirs and Sacred Units",
    label: "Special custom builds",
    price: "Starting from Rs. 21,500",
    summary: "Sacred units that feel detailed, intentional, and scaled correctly for the home they sit in.",
    image: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800",
    href: whatsappLinks.mandir,
    cta: "Discuss design",
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
renderFitForProjects();
renderFaqs();
setupPlanner();
setupNav();
setupHeroFocus();
setupReveal();
setupScrollUI();
setupInteractiveGlow();
setYear();
