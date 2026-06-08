// Single source of truth for company facts, navigation and content.
// Update values here and they propagate across the whole site.

export const SITE = {
  name: "Orrizonte Technologies",
  legalName: "Orrizonte Technologies Pvt Ltd",
  // Canonical production URL — update when the domain goes live.
  url: "https://www.orrizonte.in",
  tagline: "Empowering Tomorrow's Solutions Today",
  description:
    "Orrizonte Technologies is a consulting-led technology firm. Our enterprise architecture, AI, SAP, cloud and ed-tech consulting is led by architects who have built national-scale platforms trusted by over a billion citizens.",
  ethos: "None of us is as strong as all of us.",
  email: "info@orrizonte.in",
  phone: "+91 98103 77928",
  phoneHref: "+919810377928",
  address: {
    line1: "Assotech Business Cresterra",
    line2: "Sector 135, Noida",
    region: "Uttar Pradesh",
    postalCode: "201304",
    country: "India",
  },
  locations: ["Bengaluru", "Mumbai", "NCR (Noida / Delhi)"],
  teamSize: "44+",
  social: {
    linkedin: "https://www.linkedin.com/company/orrizonte-technologies",
  },
  // Paste the token from Google Search Console → "HTML tag" verification
  // (just the content value, not the whole tag). Leave empty until then.
  googleSiteVerification: "",
};

export const NAV = [
  { label: "Consulting", href: "/consulting" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Headline proof points — used on home + about. No individuals named.
export const PROOF = [
  { value: "1B+", label: "Citizens served by platforms our architects built" },
  { value: "20+", label: "Years of senior architecture experience" },
  { value: "44+", label: "Engineers, architects & specialists" },
  { value: "3", label: "Delivery centres across India" },
];

export const SERVICES = [
  {
    slug: "software-development",
    title: "Software Development",
    short:
      "Robust, scalable, custom software — from requirement analysis to deployment and support.",
    points: [
      "Requirement analysis & solution design",
      "Custom & product development",
      "UI/UX design",
      "DevOps & deployment",
      "QA, testing & security",
      "Maintenance, support & documentation",
    ],
  },
  {
    slug: "ai-ed-tech",
    title: "AI & Ed-Tech Solutions",
    short:
      "AI/AR learning platforms and GenAI products that transform how people learn and teach.",
    points: [
      "GenAI & RAG applications",
      "AI/AR learning platforms",
      "Personalised learning & teacher-assist tools",
      "LLM & NLP integration",
      "Computer vision (OpenCV)",
      "ML pipelines (TensorFlow, PyTorch, Keras)",
    ],
  },
  {
    slug: "sap",
    title: "SAP Solutions",
    short:
      "End-to-end SAP — implementations, S/4HANA migrations, analytics and digital experience.",
    points: [
      "SAP ECC & S/4HANA implementation & migration",
      "Custom development, integrations & support",
      "BI/BOBJ, Analytics & SAP HANA",
      "Fiori & SAPUI5 mobility",
      "CRM, C/4HANA (Hybris) & SuccessFactors",
      "SCM, SRM, Ariba & SAP CAR",
    ],
  },
  {
    slug: "iot-energy",
    title: "IoT Energy Solutions",
    short:
      "Smart, efficient and sustainable IoT systems that power the future intelligently.",
    points: [
      "Smart energy monitoring & metering",
      "Sensor & device integration",
      "Edge-to-cloud data pipelines",
      "Predictive maintenance",
      "Sustainability & efficiency analytics",
      "Real-time dashboards",
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    short:
      "Turn raw data into decisions with advanced analytics, BI and data engineering.",
    points: [
      "Data warehousing & engineering",
      "Business intelligence & dashboards",
      "Predictive & prescriptive analytics",
      "Vector databases for AI (Chroma, Qdrant)",
      "SQL & NoSQL at scale",
      "Data governance & quality",
    ],
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation & BPO",
    short:
      "Access top, vetted talent in the latest technologies — and outsource non-core functions.",
    points: [
      "On-demand engineering talent",
      "Dedicated delivery teams",
      "Architecture & DevOps specialists",
      "Process outsourcing (IT, support, back-office)",
      "Flexible engagement models",
      "Rapid scale-up & scale-down",
    ],
  },
];

export const INDUSTRIES = [
  {
    title: "Health & Public Sector",
    body: "Architects on our team led national health platforms serving over a billion citizens. We bring that same rigour to secure, large-scale public systems.",
  },
  {
    title: "Education & Ed-Tech",
    body: "AI/AR learning platforms, GenAI tutors and teacher-assist tools deployed with universities and ed-tech leaders.",
  },
  {
    title: "E-commerce & Retail",
    body: "Scalable storefronts, SAP retail (CAR, Hybris) and real-time supply-chain optimisation.",
  },
  {
    title: "Energy & Sustainability",
    body: "IoT-driven smart energy systems for efficient, sustainable and intelligently managed operations.",
  },
];

// Clients / current engagements shown by name (organisations, not individuals).
export const CLIENTS = [
  "Wadhwani Foundation",
  "Skill Titans (OLL × CNBC-TV18)",
  "Bambinos",
  "Sardar Patel University, Mandi (H.P.)",
  "Dr. K. N. Modi University",
  "Bloom Value",
  "Vaco",
  "Cypress Solutions",
];

export const TECH = {
  Languages: ["Java", "Python", "TypeScript", "Node.js", "C++", "Angular", "React"],
  "AI / ML": ["TensorFlow", "PyTorch", "Keras", "OpenCV", "FFmpeg", "LLMs / RAG"],
  Data: ["PostgreSQL", "MySQL", "MS SQL", "MongoDB", "Cassandra", "DynamoDB", "Redis", "Chroma", "Qdrant"],
  "Cloud & DevOps": ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Kafka"],
  Enterprise: ["SAP S/4HANA", "SAP HANA", "Oracle", "Adobe"],
};
