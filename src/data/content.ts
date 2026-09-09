export interface ChallengeCard {
  bg: string;
  caption: string;
  icon: string;
}

export const CHALLENGES: ChallengeCard[] = [
  {
    bg: "/img/challenges/industrial_digitalization_increases_system_complexity.jpg",
    caption: "Industrial digitalization increases system complexity",
    icon: "/img/challenges/icon1.svg",
  },
  {
    bg: "/img/challenges/ot_and_it_convergence_creates_coordination_and_responsibility-gaps.jpg",
    caption: "OT and IT convergence creates coordination and responsibility gaps",
    icon: "/img/challenges/icon2.svg",
  },
  {
    bg: "/img/challenges/cybersecurity_threats_against_industrial_environments_are_growing.jpg",
    caption: "Cybersecurity threats against industrial environments are growing",
    icon: "/img/challenges/icon3.svg",
  },
  {
    bg: "/img/challenges/downtime_is_expensive_insecure_design_non_redundant_systems_and_poor_engineering.jpg",
    caption:
      "Downtime is expensive; insecure design, non-redundant systems and poor engineering...",
    icon: "/img/challenges/icon4.svg",
  },
  {
    bg: "/img/challenges/buggy_logic_weak_maintainability_and_unclear_architecture_create_long_term_cost.jpg",
    caption:
      "Buggy logic, weak maintainability and unclear architecture create long-term cost and...",
    icon: "/img/challenges/icon5.svg",
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
    nextIcon: "/img/services/vector-18.svg",
    // No exported asset for this panel image in the source design file (see
    // delivery notes) — a placeholder fill is used until the real asset is supplied.
    image: "/img/services/industrial_automation_engineering.jpg",
    listA: LIST_A,
    listB: LIST_B,
  },
  {
    number: "02",
    title: "OT Security & Industrial Cybersecurity",
    nextIcon: "/img/services/vector.svg",
    image: "/img/services/ot_security_industrial_cybersecurity.jpg",
    listA: LIST_A,
    listB: LIST_B,
  },
  {
    number: "03",
    title: "GxP & Regulated Industry Support",
    nextIcon: "/img/services/vector-47.svg",
    image: "/img/services/gxp_regulated_industry_support.jpg",
    listA: LIST_A,
    listB: LIST_B,
  },
  {
    number: "04",
    title: "Project Delivery & Lifecycle Support",
    nextIcon: "/img/services/vector-28.svg",
    image: "/img/services/project_delivery_lifecycle_support.png",
    listA: LIST_A,
    listB: LIST_B,
  },
];

export interface ProjectCard {
  image: string;
  icon: string;
  title: string;
  focus: string;
  technologies: string;
  outcome: string;
}

export const PROJECTS: ProjectCard[] = [
  {
    image: "/img/project_experience/pharmaceutical_ot_security_vulnerability_remediation.jpg",
    icon: "/img/project_experience/icon1.svg",
    title: "Pharmaceutical OT Security & Vulnerability Remediation",
    focus:
      "OT security assessments, vulnerability and patch-gap analysis, hardening, change control and validation support in a regulated pharmaceutical environment.",
    technologies:
      "IEC 62443-oriented assessments, Windows systems, SCADA/OT assets, firewall reviews, stakeholder coordination.",
    outcome:
      "improved visibility, prioritization and implementation of security measures in GxP-relevant environments.",
  },
  {
    image: "/img/project_experience/regulated_itot_infrastructure_active_directory_concept.jpg",
    icon: "/img/project_experience/icon2.svg",
    title: "Regulated IT/OT Infrastructure & Active Directory Concept",
    focus:
      "definition of user requirements and security/compliance expectations for a greenfield Active Directory in a regulated IT/OT environment.",
    technologies:
      "access control, availability, data integrity, role models, traceability, audit readiness.",
    outcome:
      "clear and audit-ready requirement structure bridging quality, IT infrastructure and OT-related needs.",
  },
  {
    image: "/img/project_experience/process_automation_pcs_7_migration_batch_integration.jpg",
    icon: "/img/project_experience/icon3.svg",
    title: "Process Automation, PCS 7 Migration & Batch Integration",
    focus:
      "lead engineering, migration and programming for process automation projects with Siemens PCS 7 and SIMATIC Batch.",
    technologies:
      "PCS 7, TIA-related interfaces, APL/ABL, S88 / batch logic, package unit integration, FAT/SAT.",
    outcome:
      "structured migration, reliable control logic and integrated production processes.",
  },
  {
    image: "/img/project_experience/industrial_edge_opc_ua_secure_connectivity.jpg",
    icon: "/img/project_experience/icon4.svg",
    title: "Industrial Edge, OPC UA & Secure Connectivity",
    focus:
      "protection of industrial edge and IoT-related components, secure communication and attack-surface reduction in production-related environments.",
    technologies:
      "OPC UA security, certificates, gateway hardening, Zero Trust remote access concepts, logging and monitoring.",
    outcome:
      "more secure industrial connectivity with improved protection for edge-related assets.",
  },
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
  { question: "Digital Commissioning & FAT Support", answer: "We provide comprehensive digital commissioning and FAT support to ensure smooth project execution and successful deployment." },
  { question: "OT/IT Interface Expertise", answer: "Our team has deep expertise in bridging OT and IT systems, ensuring seamless integration and communication." },
  { question: "Downtime & Cyber Risk Awareness", answer: "We help organizations understand and mitigate risks associated with downtime and cyber threats in their industrial environments." },
  { question: "Lifecycle Support", answer: "We offer ongoing support throughout the lifecycle of automation systems, ensuring optimal performance and compliance." },
  { question: "Transparent Handling of Extensions", answer: "Our approach emphasizes transparency in managing system extensions, ensuring clear communication and predictable outcomes." },
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
          answer:
      "ProTechX Systems provides industrial automation engineering, OT security consulting, IT/OT interface support and project delivery services for industrial environments. We help customers design, secure, implement and support reliable automation systems.",
  },
  {
    question:
      "What makes ProTechX Systems different from a typical IT security company?",
          answer:
      "ProTechX Systems provides industrial automation engineering, OT security consulting, IT/OT interface support and project delivery services for industrial environments. We help customers design, secure, implement and support reliable automation systems.",
  },
  { question: "Are you vendor-neutral?", answer: "Yes, we are vendor-neutral and work with multiple technology providers to deliver the best solutions for our customers." },
  { question: "Can a small company handle larger industrial projects?", answer: "Yes, we have experience working with companies of all sizes to deliver successful industrial automation projects." },
];



export interface AutomationIcon {
  image: string;
  position: string; // Tailwind absolute-position classes
  size: string; // Tailwind width class
}

export interface AutomationCallout {
  text: string;
  position: string; // Tailwind absolute-position classes
  align: "left" | "right" | "center";
}

export const AUTOMATION_ICONS: AutomationIcon[] = [
  {
    image: "/img/automation/icon-ot-it.jpg",
    position: "top-[30%] left-[21%]",
    size: "w-[7%]",
  },
  {
    image: "/img/automation/icon-security-hex.jpg",
    position: "top-[33%] left-[56%]",
    size: "w-[7.5%]",
  },
  {
    image: "/img/automation/icon-gears.jpg",
    position: "top-[73%] left-[67%]",
    size: "w-[6%]",
  },
];

export const AUTOMATION_CALLOUTS: AutomationCallout[] = [
  {
    text: "Connecting OT and IT in a practical, delivery-oriented way",
    position: "top-[35%] left-[3%] w-[19%]",
    align: "left",
  },
  {
    text: "Designing secure and scalable systems for both smaller skids/package units and larger production environments.",
    position: "top-[29%] right-[3%] w-[30%]",
    align: "left",
  },
  {
    text: "Combining industrial automation engineering and cybersecurity thinking",
    position: "top-[65%] left-[7%] w-[23%]",
    align: "left",
  },
  {
    text: "Using a modular engineering approach for maintainability and future expansion",
    position: "top-[59%] right-[5%] w-[23%]",
    align: "left",
  },
  {
    text: "Selecting technologies in a vendor-neutral way based on project needs",
    position: "top-[81%] left-1/2 w-[25%] -translate-x-1/2",
    align: "center",
  },
];


export interface DiagramNode {
  icon: string;
  label: string;
  tooltip: string;
}

export const DIAGRAM_NODES: DiagramNode[] = [
  {
    icon: "/img/capabilities/automation.svg",
    label: "Automation",
    tooltip: "Control systems, PLCs, SCADA, Robotics",
  },
  {
    icon: "/img/capabilities/ot_security.svg",
    label: "OT Security",
    tooltip: "IQ/OQ/PQ Compliance, Documentation",
  },
  {
    icon: "/img/capabilities/validation.svg",
    label: "Validation",
    tooltip: "Functional, Cybersecurity safety, IOT",
  },
  {
    icon: "/img/capabilities/commissioning.svg",
    label: "Commissioning",
    tooltip: "Network security, segmentation and Threat mitigation",
  },
  {
    icon: "/img/capabilities/support.svg",
    label: "Support",
    tooltip: "Site execution, testing, handover and performance",
  },
  {
    icon: "/img/capabilities/coordination.svg",
    label: "Coordination",
    tooltip: "Procurement support, expediting, FAT/SAT, logistics",
  },
];
