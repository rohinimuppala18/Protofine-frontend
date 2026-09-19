export interface ProduceListing {
  id: string;
  crop: string;
  category: string;
  quantity: string;
  numericQuantity: number;
  location: string;
  availability: string;
  grade: string;
  farmGateNotes: string;
}

export interface BuyerOffer {
  id: string;
  buyerName: string;
  buyerType: string;
  quantity: string;
  numericQuantity: number;
  pricePerKg: number;
  location: string;
  verified: boolean;
  verificationDetails: string[];
  rating: number;
  completedProcurements: number;
  pickupDate: string;
  pickupMode: string;
  notes: string;
  selectionBadge: string;
  selectionReason: string;
  supportingSignals: string[];
}

export interface Scenario {
  listing: ProduceListing;
  buyers: BuyerOffer[];
}

export const DEMO_SCENARIOS: Record<string, Scenario> = {
  tomatoes: {
    listing: {
      id: "prod-tomatoes-01",
      crop: "Tomatoes",
      category: "Perishable Vegetables",
      quantity: "5,000 kg",
      numericQuantity: 5000,
      location: "Hyderabad",
      availability: "18 Sept",
      grade: "Grade A Hybrid (Table & Processing)",
      farmGateNotes: "Crated in standard 25kg crates, ready for morning dock pickup"
    },
    buyers: [
      {
        id: "buyer-01",
        buyerName: "FreshMart Foods",
        buyerType: "Regional Supermarket Chain",
        quantity: "3,000 kg",
        numericQuantity: 3000,
        pricePerKg: 30,
        location: "Hyderabad",
        verified: true,
        verificationDetails: [
          "FSSAI Food Operator License Active",
          "GST Entity Verified",
          "Dedicated Refrig Transport Fleet",
          "Average 24h Payment Settlement"
        ],
        rating: 4.9,
        completedProcurements: 42,
        pickupDate: "20 Sept, 07:00 AM",
        pickupMode: "Buyer fleet arrives at farm gate",
        notes: "Partial lot purchase. Looking for consistent Grade A hybrid.",
        selectionBadge: "Selected: Higher unit price (partial lot)",
        selectionReason: "Offers higher unit price of ₹30/kg, but only takes 3,000 kg lot.",
        supportingSignals: [
          "₹30/kg unit price offered",
          "3,000 kg partial lot matched",
          "Pickup: 20 Sept",
          "Remaining 2,000 kg requires second buyer"
        ]
      },
      {
        id: "buyer-02",
        buyerName: "UrbanGrocers",
        buyerType: "Urban Quick-Commerce Hub",
        quantity: "2,000 kg",
        numericQuantity: 2000,
        pricePerKg: 29,
        location: "Secunderabad",
        verified: true,
        verificationDetails: [
          "GST Entity Verified",
          "Direct Distribution Center Dock",
          "Cold-chain compliant transit"
        ],
        rating: 4.8,
        completedProcurements: 28,
        pickupDate: "21 Sept, 08:30 AM",
        pickupMode: "Coordinated logistics partner pickup",
        notes: "Immediate dispatch to dark stores. Quality inspection on arrival.",
        selectionBadge: "Selected: Quick-commerce hub (partial lot)",
        selectionReason: "Offers ₹29/kg for 2,000 kg with rapid dispatch to urban distribution center.",
        supportingSignals: [
          "₹29/kg unit rate",
          "2,000 kg partial lot matched",
          "Pickup: 21 Sept",
          "Remaining 3,000 kg requires second buyer"
        ]
      },
      {
        id: "buyer-03",
        buyerName: "HarvestHub Retail",
        buyerType: "Wholesale Produce Consortium",
        quantity: "5,000 kg",
        numericQuantity: 5000,
        pricePerKg: 28,
        location: "Warangal",
        verified: true,
        verificationDetails: [
          "FSSAI Food Operator License Active",
          "GST Entity Verified",
          "Direct Mandi / Hub Clearance",
          "Escrow-ready payment workflow"
        ],
        rating: 4.7,
        completedProcurements: 65,
        pickupDate: "20 Sept, 10:00 AM",
        pickupMode: "Full lot containerized truck pickup",
        notes: "Takes full 5,000 kg lot in single transaction. Less logistics friction.",
        selectionBadge: "Selected for full-lot match",
        selectionReason: "Matches the complete 5,000 kg lot in one transaction.",
        supportingSignals: [
          "Full 5,000 kg quantity matched",
          "Single pickup",
          "Pickup: 20 Sept",
          "₹28/kg illustrative offer"
        ]
      }
    ]
  },
  onions: {
    listing: {
      id: "prod-onions-01",
      crop: "Red Onions",
      category: "Bulb Vegetables",
      quantity: "8,000 kg",
      numericQuantity: 8000,
      location: "Nashik",
      availability: "22 Sept",
      grade: "Grade A Medium (45mm - 55mm)",
      farmGateNotes: "Mesh bag packed, cured & dried in ventilated shed"
    },
    buyers: [
      {
        id: "buyer-10",
        buyerName: "Sahyadri AgriHub",
        buyerType: "State Produce Aggregator",
        quantity: "8,000 kg",
        numericQuantity: 8000,
        pricePerKg: 26,
        location: "Nashik Central",
        verified: true,
        verificationDetails: [
          "State APMC License Verified",
          "GST Entity Active",
          "Electronic Weight Slip Verification"
        ],
        rating: 4.9,
        completedProcurements: 112,
        pickupDate: "23 Sept, 09:00 AM",
        pickupMode: "Full 8-ton truck pickup at shed",
        notes: "Takes entire 8,000 kg inventory in single dispatch.",
        selectionBadge: "Selected for full-lot match",
        selectionReason: "Matches the complete 8,000 kg lot in one transaction.",
        supportingSignals: [
          "Full 8,000 kg quantity matched",
          "Single pickup",
          "Pickup: 23 Sept",
          "₹26/kg illustrative offer"
        ]
      },
      {
        id: "buyer-11",
        buyerName: "MetroVeggies Supply",
        buyerType: "Inter-City Wholesaler",
        quantity: "4,000 kg",
        numericQuantity: 4000,
        pricePerKg: 27,
        location: "Pune",
        verified: true,
        verificationDetails: [
          "FSSAI & GST Active",
          "Multi-hub sorting facility"
        ],
        rating: 4.8,
        completedProcurements: 38,
        pickupDate: "24 Sept, 06:00 AM",
        pickupMode: "Shared regional freight route",
        notes: "Premium price for first 4 tons of high-uniformity bulbs.",
        selectionBadge: "Selected: Higher unit price (partial lot)",
        selectionReason: "Offers higher unit price of ₹27/kg, but only absorbs 4,000 kg.",
        supportingSignals: [
          "₹27/kg premium unit rate",
          "Partial 4,000 kg lot matched",
          "Pickup: 24 Sept",
          "Remaining 4,000 kg requires second buyer"
        ]
      }
    ]
  }
};

export const PILOT_ROADMAP = [
  {
    step: "01",
    title: "Choose one crop",
    focus: "Targeted crop selection",
    description: "Start with a high-velocity, perishable crop (e.g. tomatoes or onions) where price discovery and pickup timing directly impact freshness and deal viability."
  },
  {
    step: "02",
    title: "Choose one region",
    focus: "Geographic density",
    description: "Select a single agricultural corridor with existing transit infrastructure (such as the Hyderabad peri-urban belt) to keep logistics predictable."
  },
  {
    step: "03",
    title: "Onboard a focused group",
    focus: "Curated participants",
    description: "Recruit 30–50 active commercial growers and 8–12 verified wholesale and retail buyers who routinely trade along that transit corridor."
  },
  {
    step: "04",
    title: "Measure matches & transactions",
    focus: "Empirical validation",
    description: "Measure whether transparent offer comparison accelerates decisions and increases scheduled pickup completion without off-platform friction."
  },
  {
    step: "05",
    title: "Learn and expand",
    focus: "Iterative discipline",
    description: "Refine verification workflows, pickup scheduling, and dispute prevention mechanisms before expanding to adjacent regions or crop types."
  }
];

export const PILOT_METRICS = [
  {
    id: "metric-listings",
    label: "Produce listings created",
    question: "Are farmers willing to digitize their harvest availability in advance?",
    pilotTarget: "50+ verified listings in pilot phase"
  },
  {
    id: "metric-discovery",
    label: "Buyer discovery rate",
    question: "Do listings reach buyers with matching volume and geography?",
    pilotTarget: "> 85% of listings viewed by 3+ verified buyers"
  },
  {
    id: "metric-offers",
    label: "Offers received per listing",
    question: "Does the platform generate meaningful competition and choice?",
    pilotTarget: "Average of 2 to 4 transparent offers per listing"
  },
  {
    id: "metric-conversion",
    label: "Offer-to-deal conversion",
    question: "Do transparent terms lead to faster bilateral agreements?",
    pilotTarget: "Track % of accepted offers reaching binding confirmation"
  },
  {
    id: "metric-pickup",
    label: "Completed pickup rate",
    question: "Does pre-arranged coordination prevent post-harvest transport failure?",
    pilotTarget: "> 90% of confirmed deals picked up on schedule"
  },
  {
    id: "metric-time",
    label: "Time from listing to deal",
    question: "Does structured comparison reduce time spent calling brokers?",
    pilotTarget: "Reduce cycle from days to hours"
  }
];

export const PRODUCT_PRINCIPLES = [
  {
    pillar: "TRANSPARENCY",
    title: "Visible terms before commitment",
    description: "Make net price per kilogram, exact pickup date, pickup party responsibility, and payment terms clear before either party makes a commitment."
  },
  {
    pillar: "VERIFICATION",
    title: "Signals you can inspect",
    description: "Give farmers and buyers verifiable background signals—business registration, food licenses, and procurement history—not just an unverified mobile number."
  },
  {
    pillar: "COORDINATION",
    title: "Commercial deal linked to logistics",
    description: "A deal is incomplete until produce is loaded. Connect the agreed offer directly with pickup timing, location coordinates, and dispatch verification."
  }
];

export const WHY_NOW_POINTS = [
  {
    number: "01",
    title: "DEMAND IS FRAGMENTED",
    body: "Potential buyers and available produce may not always be easy to discover through one channel. Farmers frequently rely on a small circle of local intermediaries, while buyers scramble across separate mandis to source volume."
  },
  {
    number: "02",
    title: "OFFERS NEED CONTEXT",
    body: "A price alone does not describe the entire deal. Volume requirement, pickup date, transport cost absorption, and payment timeliness determine whether an offer is truly viable."
  },
  {
    number: "03",
    title: "LOGISTICS MATTER",
    body: "Finding a buyer is only one part of completing a transaction. Without clear coordination on pickup time, location, and loading expectations, agreed trades frequently stall or spoil."
  }
];
