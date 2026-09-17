export interface BusinessStyleData {
  roots: string[];
  suffixes: string[];
  compoundFirst: string[];
  compoundSecond: string[];
  curated: { name: string; industry: string; tagline: string }[];
}

export const BUSINESS_DATA: Record<string, BusinessStyleData> = {
  "startup": {
    "roots": [
      "Veloce",
      "Nova",
      "Apex",
      "Strata",
      "Cloud",
      "Pulse",
      "Hyper",
      "Omni",
      "Sync",
      "Lumina",
      "Kinet",
      "Aura",
      "Zenith",
      "Tensor",
      "Nexus",
      "Vertex",
      "Prism",
      "Quanta",
      "Flux",
      "Cogni",
      "Vectra",
      "Synthet",
      "Optima",
      "Stratos",
      "Aether"
    ],
    "suffixes": [
      "ly",
      "ify",
      "io",
      "base",
      "flow",
      "stack",
      "hub",
      "grid",
      "wave",
      "forge",
      "link",
      "scale",
      "sync",
      "pilot",
      "nest",
      "core",
      "logic",
      "vault",
      "point",
      "sphere"
    ],
    "compoundFirst": [
      "Next",
      "Smart",
      "Peak",
      "Rapid",
      "Bright",
      "Clear",
      "Prime",
      "Bold",
      "Swift",
      "Deep",
      "True",
      "Front",
      "Open",
      "Meta",
      "Hyper",
      "Agile",
      "Fast",
      "Alpha",
      "Zero",
      "Core"
    ],
    "compoundSecond": [
      "Logic",
      "Shift",
      "Scale",
      "Engine",
      "Venture",
      "Matrix",
      "Bridge",
      "Path",
      "Metrics",
      "Layer",
      "Pulse",
      "Stack",
      "Flow",
      "Forge",
      "Grid",
      "Signal",
      "Wave",
      "Hub",
      "Node",
      "Craft"
    ],
    "curated": [
      {
        "name": "ApexFlow",
        "industry": "SaaS / Automation",
        "tagline": "Streamline team operations instantly"
      },
      {
        "name": "NovaSphere",
        "industry": "Cloud Infrastructure",
        "tagline": "Scalable multi-cloud orchestration"
      },
      {
        "name": "SyncNest",
        "industry": "Collaboration",
        "tagline": "Unified workspace for modern distributed teams"
      },
      {
        "name": "LuminaTech",
        "industry": "Data & Analytics",
        "tagline": "Intelligent decision-making through AI insights"
      },
      {
        "name": "StrataLogic",
        "industry": "Enterprise Security",
        "tagline": "Zero-trust architecture for hyper-growth"
      },
      {
        "name": "PulseBase",
        "industry": "Developer Tools",
        "tagline": "Real-time telemetry and API observability"
      },
      {
        "name": "VeloceLabs",
        "industry": "AI Research",
        "tagline": "Accelerating foundational neural models"
      },
      {
        "name": "OmniGrid",
        "industry": "Energy & Tech",
        "tagline": "Decentralized smart grid management"
      },
      {
        "name": "ZenithWave",
        "industry": "FinTech",
        "tagline": "Next-generation cross-border treasury settlements"
      },
      {
        "name": "TensorSync",
        "industry": "Machine Learning",
        "tagline": "Distributed model fine-tuning at scale"
      },
      {
        "name": "PrismScale",
        "industry": "E-Commerce Tech",
        "tagline": "Dynamic personalization for modern retailers"
      },
      {
        "name": "QuantaVault",
        "industry": "Cybersecurity",
        "tagline": "Post-quantum cryptographic key management"
      },
      {
        "name": "FluxBridge",
        "industry": "Web3 / Infra",
        "tagline": "Seamless liquidity bridges between protocols"
      },
      {
        "name": "CogniStack",
        "industry": "Productivity AI",
        "tagline": "Contextual intelligence for knowledge workers"
      },
      {
        "name": "VectraPoint",
        "industry": "Spatial Computing",
        "tagline": "High-precision 3D mapping and tracking"
      },
      {
        "name": "OptimaForge",
        "industry": "DevOps",
        "tagline": "Automated code pipeline optimization"
      },
      {
        "name": "SmartSignal",
        "industry": "IoT Hardware",
        "tagline": "Industrial sensor intelligence platform"
      },
      {
        "name": "DeepMetrics",
        "industry": "Growth Marketing",
        "tagline": "Attribution modeling without user friction"
      },
      {
        "name": "FrontLayer",
        "industry": "Edge Computing",
        "tagline": "Sub-millisecond API caching at global scale"
      },
      {
        "name": "AgileMatrix",
        "industry": "Project Management",
        "tagline": "Autonomous sprint planning and delivery"
      }
    ]
  },
  "company": {
    "roots": [
      "Vanguard",
      "Pinnacle",
      "Sterling",
      "Summit",
      "Heritage",
      "Keystone",
      "Paramount",
      "Ascent",
      "Horizon",
      "Cornerstone",
      "Beacon",
      "Atlas",
      "Crest",
      "Anchor",
      "Dominion",
      "Sovereign",
      "Meridian",
      "Providence",
      "Trafalgar",
      "Onyx"
    ],
    "suffixes": [
      "Group",
      "Partners",
      "Holdings",
      "Ventures",
      "Associates",
      "Capital",
      "Corp",
      "Global",
      "Solutions",
      "Enterprises",
      "Trust",
      "International",
      "Management",
      "Advisors",
      "Industries",
      "Equity",
      "Securities",
      "Alliance",
      "Syndicate",
      "Federation"
    ],
    "compoundFirst": [
      "North",
      "Global",
      "Pacific",
      "Atlantic",
      "First",
      "Beacon",
      "Atlas",
      "Crest",
      "Anchor",
      "Iron",
      "Golden",
      "Grand",
      "Royal",
      "Premier",
      "United",
      "Central",
      "Imperial",
      "Standard",
      "Evergreen",
      "National"
    ],
    "compoundSecond": [
      "Stone",
      "Wood",
      "Point",
      "Ridge",
      "Harbor",
      "Cross",
      "Field",
      "Brook",
      "Gate",
      "Way",
      "Bank",
      "Valley",
      "Hills",
      "Port",
      "Haven",
      "Reach",
      "Land",
      "View",
      "Tower",
      "Bridge"
    ],
    "curated": [
      {
        "name": "Pinnacle Capital Partners",
        "industry": "Finance & Investment",
        "tagline": "Long-term strategic capital allocation"
      },
      {
        "name": "Keystone Global Holdings",
        "industry": "Enterprise Logistics",
        "tagline": "Connecting international supply chains"
      },
      {
        "name": "Vanguard Solutions Group",
        "industry": "Management Consulting",
        "tagline": "Guiding visionary corporate pivots"
      },
      {
        "name": "Horizon Strategic Partners",
        "industry": "Advisory Services",
        "tagline": "Navigating regulatory and market shifts"
      },
      {
        "name": "Beacon Ridge Enterprise",
        "industry": "Commercial Infrastructure",
        "tagline": "Building resilient industrial foundations"
      },
      {
        "name": "Sterling Crest Capital",
        "industry": "Asset Management",
        "tagline": "Disciplined multi-generational wealth preservation"
      },
      {
        "name": "Meridian Sovereign Trust",
        "industry": "Fiduciary & Custody",
        "tagline": "Uncompromising institutional stewardship"
      },
      {
        "name": "Atlas Pacific Holdings",
        "industry": "Maritime & Freight",
        "tagline": "Global trade infrastructure at sea"
      },
      {
        "name": "Providence Mutual Equity",
        "industry": "Insurance & Underwriting",
        "tagline": "Safeguarding enterprise resilience"
      },
      {
        "name": "Paramount Industrial Corp",
        "industry": "Heavy Manufacturing",
        "tagline": "Precision engineering for critical systems"
      },
      {
        "name": "Grand Harbor Securities",
        "industry": "Investment Banking",
        "tagline": "Structuring landmark cross-border transactions"
      },
      {
        "name": "United Crest Alliance",
        "industry": "Aerospace & Defense",
        "tagline": "Advanced aeronautics and defense logistics"
      }
    ]
  },
  "brand": {
    "roots": [
      "Aura",
      "Sol",
      "Lux",
      "Haven",
      "Echo",
      "Velvet",
      "Ember",
      "Zenith",
      "Mira",
      "Flora",
      "Sable",
      "Terra",
      "Nova",
      "Opal",
      "Luna",
      "Saffron",
      "Iris",
      "Zephyr",
      "Linen",
      "Meadow"
    ],
    "suffixes": [
      "Studio",
      "Collective",
      "Co.",
      "Lab",
      "House",
      "Works",
      "Living",
      "Life",
      "Design",
      "Media",
      "Goods",
      "Atelier",
      "Wear",
      "Aesthetics",
      "Botanicals",
      "Home",
      "Society",
      "Press",
      "Room",
      "Line"
    ],
    "compoundFirst": [
      "Silver",
      "Golden",
      "Wild",
      "Pure",
      "True",
      "Modern",
      "Urban",
      "Gentle",
      "Raw",
      "Fine",
      "Quiet",
      "Soft",
      "Warm",
      "Noble",
      "Free",
      "Clean",
      "Slow",
      "Bare",
      "Calm",
      "Deep"
    ],
    "compoundSecond": [
      "Bloom",
      "Thread",
      "Grain",
      "Craft",
      "Leaf",
      "Root",
      "Stone",
      "Light",
      "Line",
      "Spark",
      "Earth",
      "Wood",
      "Clay",
      "Moss",
      "Water",
      "Branch",
      "Tide",
      "Fold",
      "Nest",
      "Mist"
    ],
    "curated": [
      {
        "name": "Velvet & Vine",
        "industry": "Lifestyle & Botanicals",
        "tagline": "Artisanal botanicals for mindful living spaces"
      },
      {
        "name": "Echo Collective",
        "industry": "Creative Agency",
        "tagline": "Stories shaped through thoughtful digital design"
      },
      {
        "name": "Lumina Studio",
        "industry": "Brand Identity",
        "tagline": "Illuminating authentic brand essences"
      },
      {
        "name": "Urban Grain Co.",
        "industry": "Sustainable Furniture",
        "tagline": "Handcrafted reclaimed timber for contemporary homes"
      },
      {
        "name": "Golden Hour Media",
        "industry": "Production Studio",
        "tagline": "Cinematic visual storytelling that inspires"
      },
      {
        "name": "Pure Root Living",
        "industry": "Organic Wellness",
        "tagline": "Holistic living rooted in sustainable nature"
      },
      {
        "name": "Quiet Stone Goods",
        "industry": "Ceramics & Homeware",
        "tagline": "Minimalist stoneware crafted with patient care"
      },
      {
        "name": "Warm Thread Atelier",
        "industry": "Ethical Apparel",
        "tagline": "Conscious textiles woven from organic fibers"
      },
      {
        "name": "Sable & Sage",
        "industry": "Aromatherapy & Skincare",
        "tagline": "Restorative botanical balms and fragrances"
      },
      {
        "name": "Slow Tide Design",
        "industry": "Coastal Interiors",
        "tagline": "Breezy architecture inspired by ocean rhythms"
      },
      {
        "name": "Bare Clay Ceramics",
        "industry": "Tableware",
        "tagline": "Unpretentious pottery for the modern dining table"
      },
      {
        "name": "True North Roasters",
        "industry": "Specialty Coffee",
        "tagline": "Single-origin ethical roasts from mountain farms"
      }
    ]
  },
  "shop": {
    "roots": [
      "Penny",
      "Clover",
      "Willow",
      "Bramble",
      "Copper",
      "Rustic",
      "Honey",
      "Cobble",
      "Ivy",
      "Oak",
      "Cinnamon",
      "Briar",
      "Ginger",
      "Hazel",
      "Marigold",
      "Peppermint",
      "Cider",
      "Bespoke",
      "Cricket",
      "Hearth"
    ],
    "suffixes": [
      "Market",
      "Corner",
      "Emporium",
      "Barn",
      "Boutique",
      "Pantry",
      "Depot",
      "Merchant",
      "Store",
      "Co.",
      "Larder",
      "Workshop",
      "Exchange",
      "Trading Post",
      "Bakehouse",
      "Outpost",
      "Cabinet",
      "Parloir",
      "Cottage",
      "Vault"
    ],
    "compoundFirst": [
      "The Little",
      "Old Town",
      "Cozy",
      "Curious",
      "Daily",
      "Sunny",
      "Wholesome",
      "Secret",
      "Heritage",
      "Rustic",
      "Golden",
      "Happy",
      "Sweet",
      "Friendly",
      "Timber",
      "Country",
      "Harbor",
      "Village",
      "Green",
      "Corner"
    ],
    "compoundSecond": [
      "Nest",
      "Post",
      "Yard",
      "Oven",
      "Shed",
      "Patch",
      "Haven",
      "Cabin",
      "Mill",
      "Cupboard",
      "Basket",
      "Bench",
      "Stall",
      "Lane",
      "Row",
      "Hook",
      "Pot",
      "Tree",
      "Cask",
      "Shoppe"
    ],
    "curated": [
      {
        "name": "The Bramble Boutique",
        "industry": "Fashion & Apparel",
        "tagline": "Curated independent apparel for curious spirits"
      },
      {
        "name": "Cobblestone Provisions",
        "industry": "Gourmet Grocer",
        "tagline": "Fine cheeses, heritage jams, and artisan sourdough"
      },
      {
        "name": "The Honey & Hearth",
        "industry": "Home & Gift",
        "tagline": "Hand-poured beeswax candles and wool blankets"
      },
      {
        "name": "Willow & Wick",
        "industry": "Candles & Scents",
        "tagline": "Soy candles evoking enchanted forest glades"
      },
      {
        "name": "The Rusty Anchor Tavern",
        "industry": "Craft Brewery & Pub",
        "tagline": "Local ales, hearty stews, and maritime camaraderie"
      },
      {
        "name": "Penny Farthing Books",
        "industry": "Independent Bookstore",
        "tagline": "Rare editions, cozy corners, and fresh coffee"
      },
      {
        "name": "The Old Town Apothecary",
        "industry": "Herbal Teas & Tonics",
        "tagline": "Traditional loose leaf infusions and herbal salves"
      },
      {
        "name": "The Copper Kettle",
        "industry": "Tea Room & Bakery",
        "tagline": "Afternoon tea served with warm scones and clotted cream"
      },
      {
        "name": "Hazelwood Haberdashery",
        "industry": "Vintage Accessories",
        "tagline": "Fine silk scarves, leather bags, and pocket watches"
      },
      {
        "name": "The Daily Harvest Market",
        "industry": "Farm-to-Table Farmstand",
        "tagline": "Organic heirloom produce picked this morning"
      },
      {
        "name": "Briar & Blossom Florist",
        "industry": "Bespoke Floristry",
        "tagline": "Seasonal field bouquets tailored for celebrations"
      },
      {
        "name": "The Timber & Thread Co.",
        "industry": "Outdoor Outfitters",
        "tagline": "Durable waxed canvas jackets and hiking packs"
      }
    ]
  }
};
