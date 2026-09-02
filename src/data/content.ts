export interface ChallengeCard {
  bg: string;
  caption: string;
  icon: string;
}

export const CHALLENGES: ChallengeCard[] = [
  {
    bg: "/img/image-1-2.png",
    caption: "Industrial digitalization increases system complexity",
    icon: "/img/vector-40.svg",
  },
  {
    bg: "/img/image.png",
    caption: "OT and IT convergence creates coordination and responsibility gaps",
    icon: "/img/vector-44.svg",
  },
  {
    bg: "/img/image-2.png",
    caption: "Cybersecurity threats against industrial environments are growing",
    icon: "/img/vector-42.svg",
  },
  {
    bg: "/img/image-1-3.png",
    caption:
      "Downtime is expensive; insecure design, non-redundant systems and poor engineering...",
    icon: "/img/vector-50.svg",
  },
  {
    bg: "/img/image-1.png",
    caption:
      "Buggy logic, weak maintainability and unclear architecture create long-term cost and...",
    icon: "/img/vector-7.svg",
  },
];

export interface ServicePanel {
  number: string;
  title: string;
  nextIcon: string;
  image?: string;
  listA: string[];
  listB: string[];
}

const LIST_A = [
  "Basic Engineering for automation systems",
  "Automation concepts and system architecture",
  "Functional Specifications, URS and Software Design Specifications",
  "PLC, SCADA, HMI and DCS engineering",
  "Siemens, ABB and Rockwell systems",
];

const LIST_B = [
  "Interface integration for package units and third-party systems",
  "Hardware design specifications and automation concepts",
  "FAT, SAT and commissioning support",
  "Troubleshooting and production support",
];

export const SERVICE_PANELS: ServicePanel[] = [
  {
    number: "01",
    title: "Industrial Automation Engineering",
    nextIcon: "/img/vector-18.svg",
    // No exported asset for this panel image in the source design file (see
    // delivery notes) — a placeholder fill is used until the real asset is supplied.
    image: undefined,
    listA: LIST_A,
    listB: LIST_B,
  },
  {
    number: "02",
    title: "OT Security & Industrial Cybersecurity",
    nextIcon: "/img/vector.svg",
    image: "/img/image-5.png",
    listA: LIST_A,
    listB: LIST_B,
  },
  {
    number: "03",
    title: "GxP & Regulated Industry Support",
    nextIcon: "/img/vector-47.svg",
    image: "/img/image-6-2.png",
    listA: LIST_A,
    listB: LIST_B,
  },
  {
    number: "04",
    title: "Project Delivery & Lifecycle Support",
    nextIcon: "/img/vector-28.svg",
    image: "/img/image-2-2.png",
    listA: LIST_A,
    listB: LIST_B,
  },
];

export interface ProjectCard {
  image: string;
  title: string;
  focus: string;
  technologies: string;
  outcome: string;
}

export const PROJECTS: ProjectCard[] = [
  {
    image: "/img/image-14.png",
    title: "Pharmaceutical OT Security & Vulnerability Remediation",
    focus:
      "OT security assessments, vulnerability and patch-gap analysis, hardening, change control and validation support in a regulated pharmaceutical environment.",
    technologies:
      "IEC 62443-oriented assessments, Windows systems, SCADA/OT assets, firewall reviews, stakeholder coordination.",
    outcome:
      "improved visibility, prioritization and implementation of security measures in GxP-relevant environments.",
  },
  {
    image: "/img/image-15.png",
    title: "Regulated IT/OT Infrastructure & Active Directory Concept",
    focus:
      "definition of user requirements and security/compliance expectations for a greenfield Active Directory in a regulated IT/OT environment.",
    technologies:
      "access control, availability, data integrity, role models, traceability, audit readiness.",
    outcome:
      "clear and audit-ready requirement structure bridging quality, IT infrastructure and OT-related needs.",
  },
  {
    image: "/img/image-19.png",
    title: "Process Automation, PCS 7 Migration & Batch Integration",
    focus:
      "lead engineering, migration and programming for process automation projects with Siemens PCS 7 and SIMATIC Batch.",
    technologies:
      "PCS 7, TIA-related interfaces, APL/ABL, S88 / batch logic, package unit integration, FAT/SAT.",
    outcome:
      "structured migration, reliable control logic and integrated production processes.",
  },
  {
    image: "/img/image-17.png",
    title: "Industrial Edge, OPC UA & Secure Connectivity",
    focus:
      "protection of industrial edge and IoT-related components, secure communication and attack-surface reduction in production-related environments.",
    technologies:
      "OPC UA security, certificates, gateway hardening, Zero Trust remote access concepts, logging and monitoring.",
    outcome:
      "more secure industrial connectivity with improved protection for edge-related assets.",
  },
];

export interface DiagramNode {
  icon: string;
  label: string;
}

export const DIAGRAM_NODES: DiagramNode[] = [
  { icon: "/img/vector-21.svg", label: "Automation" },
  { icon: "/img/vector-57.svg", label: "OT Security" },
  { icon: "/img/vector-55.svg", label: "Validation" },
  { icon: "/img/vector-31.svg", label: "Commissioning" },
  { icon: "/img/vector-27.svg", label: "Support" },
  { icon: "/img/vector-20.svg", label: "Coordination" },
];

export interface AccordionItem {
  question: string;
  answer?: string;
}

export const CAPABILITY_ITEMS: AccordionItem[] = [
  {
    question: "Modular Architecture",
    answer:
      "Systems should be engineered for maintainability, structured growth and future extensions. Reusable modules should be highlighted where relevant.",
  },
  { question: "Digital Commissioning & FAT Support" },
  { question: "OT/IT Interface Expertise" },
  { question: "Downtime & Cyber Risk Awareness" },
  { question: "Lifecycle Support" },
  { question: "Transparent Handling of Extensions" },
];

export const FAQ_ITEMS: AccordionItem[] = [
  {
    question: "What does ProTechX Systems do?",
    answer:
      "ProTechX Systems provides industrial automation engineering, OT security consulting, IT/OT interface support and project delivery services for industrial environments. We help customers design, secure, implement and support reliable automation systems.",
  },
  {
    question:
      "What makes ProTechX Systems different from a traditional automation supplier?",
  },
  {
    question:
      "What makes ProTechX Systems different from a typical IT security company?",
  },
  { question: "Are you vendor-neutral?" },
  { question: "Can a small company handle larger industrial projects?" },
];
