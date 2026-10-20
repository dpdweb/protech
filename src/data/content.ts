

export interface ChallengeCard {
  bg: string;
  caption: string;
  icon: string;
}

export const CHALLENGES: ChallengeCard[] = [
  {
    bg: "/img/challenges/industrial_digitalization_increases_system_complexity.webp",
    caption: "Industrial digitalization increases system complexity",
    icon: "/img/challenges/icon1.svg",
  },
  {
    bg: "/img/challenges/ot_and_it_convergence_creates_coordination_and_responsibility-gaps.webp",
    caption: "OT and IT convergence creates coordination and responsibility gaps",
    icon: "/img/challenges/icon2.svg",
  },
  {
    bg: "/img/challenges/cybersecurity_threats_against_industrial_environments_are_growing.webp",
    caption: "Cybersecurity threats against industrial environments are growing",
    icon: "/img/challenges/icon3.svg",
  },
  {
    bg: "/img/challenges/downtime_is_expensive_insecure_design_non_redundant_systems_and_poor_engineering.webp",
    caption:
      "Downtime is expensive; insecure design, non-redundant systems and poor engineering increase operational risk",
    icon: "/img/challenges/icon4.svg",
  },
  {
    bg: "/img/challenges/buggy_logic_weak_maintainability_and_unclear_architecture_create_long_term_cost.webp",
    caption:
      "Buggy logic, weak maintainability and unclear architecture create long-term cost and reliability issues",
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

const LIST_A_01 = [
  "Basic Engineering for automation systems",
  "Automation concepts and system architecture",
  "Functional Specifications, URS and Software Design Specifications",
  "PLC, SCADA, HMI and DCS engineering",
  "Siemens, ABB and Rockwell systems"
];

const LIST_B_01 = [
  "Interface integration for package units and third-party systems",
  "Hardware design specifications and automation concepts",
  "FAT, SAT and commissioning support",
  "Troubleshooting and production support",
];

const LIST_A_02 = [
  "OT security assessments for industrial environments",
  "IEC 62443-oriented risk assessments",
  "Vulnerability and patch gap analysis",
  "Defense-in-Depth concepts and network segmentation",
  "Secure remote access concepts"
];

const LIST_B_02 = [
  "Active Directory hardening for IT/OT environments",
  "Firewall and industrial network security reviews",
  "Security remediation planning for legacy systems",
  "Coordination between automation, IT security and operations",
  "Practical cybersecurity solutions with operational focus"
];

const LIST_A_03 = [
  "Automation support for regulated environments",
  "Change control and validation support",
  "Validation impact assessments",
  "Risk-based technical documentation"
];

const LIST_B_03 = [
  "Audit-ready engineering documentation",
  "GMP/GxP-oriented project support",
  "Coordination with Quality and Validation teams"
];

const LIST_A_04 = [
  "Lead engineering and technical project coordination",
  "Planning and structuring of automation projects",
  "Coordination of engineering teams and subcontractors",
  "Technical documentation review and management"
];

const LIST_B_04 = [
  "Interface management between customer, engineering and operations",
  "Support for tenders and technical proposals",
  "Site coordination during commissioning and startup",
  "Lifecycle services and long-term technical support"
];

export const SERVICE_PANELS: ServicePanel[] = [
  {
    number: "01",
    title: "Industrial Automation Engineering",
    nextIcon: "/img/services/vector-18.svg",
    // No exported asset for this panel image in the source design file (see
    // delivery notes) — a placeholder fill is used until the real asset is supplied.
    image: "/img/services/industrial_automation_engineering.webp",
    listA: LIST_A_01,
    listB: LIST_B_01,
  },
  {
    number: "02",
    title: "OT Security & Industrial Cybersecurity",
    nextIcon: "/img/services/vector.svg",
    image: "/img/services/ot_security_industrial_cybersecurity.webp",
    listA: LIST_A_02,
    listB: LIST_B_02,
  },
  {
    number: "03",
    title: "GxP & Regulated Industry Support",
    nextIcon: "/img/services/vector-47.svg",
    image: "/img/services/gxp_regulated_industry_support.webp",
    listA: LIST_A_03,
    listB: LIST_B_03,
  },
  {
    number: "04",
    title: "Project Delivery & Lifecycle Support",
    nextIcon: "/img/services/vector-28.svg",
    image: "/img/services/project_delivery_lifecycle_support.webp",
    listA: LIST_A_04,
    listB: LIST_B_04,
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
    image: "/img/project_experience/pharmaceutical_ot_security_vulnerability_remediation.webp",
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
    image: "/img/project_experience/regulated_itot_infrastructure_active_directory_concept.webp",
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
    image: "/img/project_experience/process_automation_pcs_7_migration_batch_integration.webp",
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
    image: "/img/project_experience/industrial_edge_opc_ua_secure_connectivity.webp",
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


export type AccordionItemA = {
  question: string;
  answer: string;
  sections?: {
    title: string;
    description: string;
  }[];
};

export const CAPABILITY_ITEMS: AccordionItemA[] = [
  {
    question: "OT Security Assessments for Industrial Environments",
    answer:
      "ProTechX Systems assesses industrial environments from both an automation and cybersecurity perspective. The focus is not only on theoretical risk, but on real operational impact, system criticality, exposure, maintainability and practical remediation options.",
    sections: [
      {
        title: "IEC 62443-Oriented Risk Assessments",
        description:
          "We perform structured OT risk assessments based on IEC 62443 principles and industrial cybersecurity best practices. Where relevant, we also consider regional Middle East requirements and frameworks such as UAE IA and Saudi OTCC to align international standards with local expectations.",
      },
      {
        title: "Vulnerability and Patch Gap Analysis",
        description:
          "We review operating systems, applications, firmware, patch levels and known vulnerabilities in production-related environments. This includes compatibility checks, vendor coordination and operational risk evaluation before recommending remediation measures, especially in regulated or production-critical systems.",
      },
      {
        title: "Defense-in-Depth Concepts and Network Segmentation",
        description:
          "We support layered protection concepts for industrial environments, including zones, conduits, VLANs, DMZ concepts and firewall segmentation. The objective is to reduce unnecessary communication paths and limit the impact of faults, malware or unauthorized access.",
      },
      {
        title: "Secure Remote Access Concepts",
        description:
          "We design and review secure remote access concepts for industrial systems, vendors and support teams. This may include VPN, multi-factor authentication, privileged access restrictions, session control, logging and Zero Trust-oriented access models.",
      },
      {
        title: "Active Directory Hardening for IT/OT Environments",
        description:
          "We support Active Directory hardening for industrial and regulated environments, including role models, group policies, access control and traceability. Where suitable, this can also include modern Microsoft and Azure-related concepts, while keeping OT availability and operational constraints in mind.",
      },
    ],
  },
];


export interface AccordionItem {
  question: string;
  answer?: string;
}


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
      "We combine automation engineering with OT security, documentation quality, structured delivery and IT/OT interface understanding. This allows us to support both system functionality and long-term resilience.",
  },
  {
    question:
      "What makes ProTechX Systems different from a typical IT security company?",
    answer:
      "We understand automation systems, production constraints, PLCs, SCADA, DCS, commissioning and regulated environments. Our cybersecurity work is grounded in real operational experience, not only generic IT security theory.",
  },
  {
    question: "Are you vendor-neutral?",
    answer:
      "Yes. We are not tied to one automation platform or cybersecurity vendor. Technology decisions are based on project requirements, existing infrastructure, lifecycle needs and cost efficiency.",
  },
  {
    question: "Can a small company handle larger industrial projects?",
    answer:
      "Yes. ProTechX Systems is founder-led but supported by a trusted network of specialists, suppliers and implementation partners where needed. Customers benefit from one technical contact while maintaining scalable delivery capability.",
  },
  {
    question: "Which automation systems do you work with?",
    answer:
      "We work with leading automation platforms including Siemens, ABB, Rockwell, Honeywell and Beckhoff. The selected technology always depends on the customer's existing infrastructure and project requirements.",
  },
  {
    question: "Can you integrate package units and third-party systems?",
    answer:
      "Yes. We support the integration of package units, third-party systems and higher-level applications using technologies such as OPC UA, Profinet, Profibus, Industrial Ethernet and other industry-standard communication protocols.",
  },
  {
    question: "Do you support FAT, SAT and commissioning?",
    answer:
      "Yes. We support Factory Acceptance Tests, Site Acceptance Tests and commissioning with practical site experience. Where possible, simulation and digital twin approaches are used to reduce commissioning risks.",
  },
  {
    question: "Do you work with IEC 62443?",
    answer:
      "Yes. We use IEC 62443-oriented principles for OT security assessments, network segmentation, risk analysis and practical cybersecurity improvements for industrial environments.",
  },
  {
    question: "Can you support GCC cybersecurity requirements?",
    answer:
      "Yes. ProTechX Systems understands both international best practices and regional Middle East cybersecurity requirements, including UAE IA and Saudi OTCC expectations for industrial environments.",
  },
  {
    question: "What if our OT systems cannot be patched?",
    answer:
      "That is common in industrial environments. We support practical alternatives such as segmentation, isolation, monitoring, controlled access and compensating security controls until long-term modernization becomes possible.",
  },
  {
    question: "Do you support pharma and GxP environments?",
    answer:
      "Yes. We have experience supporting pharmaceutical and other regulated industries with validation support, audit-ready documentation, FAT/SAT, commissioning and structured change control.",
  },
  {
    question: "Can you support documentation and validation?",
    answer:
      "Yes. We support URS, Functional Specifications, Software Design Specifications, validation impact assessments and audit-ready technical documentation throughout the project lifecycle.",
  },
  {
    question: "Can ProTechX Systems take a lead engineering role?",
    answer:
      "Yes. We provide technical leadership, engineering coordination, project planning, interface management and execution support throughout the entire project lifecycle.",
  },
  {
    question: "Do you offer lifecycle or long-term support?",
    answer:
      "Yes. We continue supporting customers after project delivery through troubleshooting, optimization, remote and onsite support, managed service concepts and long-term technical assistance.",
  },
  {
    question:
      "Do you follow international engineering and compliance standards?",
    answer:
      "Yes. ProTechX Systems follows recognized engineering best practices and, where applicable, supports projects aligned with frameworks such as IEC 62443, NIS2, UAE IA, Saudi OTCC and GxP expectations. Every project is adapted to the customer's regulatory and operational requirements.",
  },
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
    text: "Designing secure and scalable systems for both smaller skids/package units and larger production environments",
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
    tooltip: "Network security, segmentation and Threat mitigation",
  },
  {
    icon: "/img/capabilities/validation.svg",
    label: "Validation",
    tooltip: "IQ/OQ/PQ Compliance, Documentation",
  },
  {
    icon: "/img/capabilities/commissioning.svg",
    label: "Commissioning",
    tooltip: "Site execution, testing, handover and performance",
  },
  {
    icon: "/img/capabilities/support.svg",
    label: "Support",
    tooltip: "Functional, Cybersecurity safety, IOT",
  },
  {
    icon: "/img/capabilities/coordination.svg",
    label: "Coordination",
    tooltip: "Procurement support, expediting, FAT/SAT, logistics",
  },
];



export interface Position {
  top: string;
  left: string;
}

export interface AutomationPair {
  icon: string;
  text: string;
  iconRest: Position;
  iconHover: Position;
  textRest: Position;
  textHover: Position;
  iconSize: string;
  textWidth: string;
  iconRestMd?: Position;
  iconHoverMd?: Position;
  textRestMd?: Position;
  textHoverMd?: Position;
  iconSizeMd?: string;
  textWidthMd?: string;
  // Mobile: static, no hover state — just one fixed position each.
  iconMobile: Position;
  textMobile: Position;
  iconSizeMobile: string;
  textWidthMobile: string;
}

export const AUTOMATION_PAIRS: AutomationPair[] = [
  {
    icon: "/img/automations/icon-ot-it.webp",
    text: "Connecting OT and IT in a practical, delivery-oriented way",
    iconRest: { top: "8%", left: "2%" },
    iconHover: { top: "10%", left: "32%" },
    textRest: { top: "-30%", left: "2%" },
    textHover: { top: "10%", left: "6%" },
    iconSize: "w-[60px]",
    textWidth: "250px",
    iconRestMd: { top: "6%", left: "6%" },
    iconHoverMd: { top: "14%", left: "28%" },
    textRestMd: { top: "-14%", left: "6%" },
    textHoverMd: { top: "16%", left: "10%" },
    iconSizeMd: "w-[46px]",
    textWidthMd: "190px",
    iconMobile: { top: "24%", left: "8%" },
    textMobile: { top: "57%", left: "3%" },
    iconSizeMobile: "w-[60px]",
    textWidthMobile: "95%",
  },
  {
    icon: "/img/automations/icon-modular-network.webp",
    text: "Designing secure and scalable systems for both smaller skids/package units and larger production environments",
    iconRest: { top: "80%", left: "65%" },
    iconHover: { top: "30%", left: "65%" },
    textRest: { top: "35%", left: "76%" },
    textHover: { top: "20%", left: "70%" },
    iconSize: "w-[100px]",
    textWidth: "410px",
    iconRestMd: { top: "78%", left: "70%" },
    iconHoverMd: { top: "32%", left: "68%" },
    textRestMd: { top: "40%", left: "78%" },
    textHoverMd: { top: "22%", left: "68%" },
    iconSizeMd: "w-[70px]",
    textWidthMd: "260px",
    iconMobile: { top: "16%", left: "80%" },
    textMobile: { top: "43%", left: "3%" },
    iconSizeMobile: "w-[70px]",
    textWidthMobile: "95%",
  },
  {
    icon: "/img/automations/icon-gear-cluster.webp",
    text: "Using a modular engineering approach for maintainability and future expansion",
    iconRest: { top: "4%", left: "78%" },
    iconHover: { top: "80%", left: "70%" },
    textRest: { top: "92%", left: "82%" },
    textHover: { top: "58%", left: "70%" },
    iconSize: "w-[70px]",
    textWidth: "300px",
    iconRestMd: { top: "6%", left: "80%" },
    iconHoverMd: { top: "70%", left: "72%" },
    textRestMd: { top: "88%", left: "80%" },
    textHoverMd: { top: "60%", left: "68%" },
    iconSizeMd: "w-[52px]",
    textWidthMd: "300px",
    iconMobile: { top: "10%", left: "20%" },
    textMobile: { top: "79%", left: "3%" },
    iconSizeMobile: "w-[50px]",
    textWidthMobile: "95%",
  },
];

export const AUTOMATION_SOLO1_CALLOUT = {
  text: "Combining industrial automation engineering and cybersecurity thinking",
  rest: { top: "45%", left: "2%" },
  hover: { top: "45%", left: "10%" },
  textWidth: "300px",
  restMd: { top: "48%", left: "4%" },
  hoverMd: { top: "48%", left: "8%" },
  textWidthMd: "300px",
  mobile: { top: "32%", left: "3%" },
  textWidthMobile: "95%",
};

export const AUTOMATION_SOLO2_CALLOUT = {
  text: "Selecting technologies in a vendor-neutral way based on project needs",
  rest: { top: "80%", left: "2%" },
  hover: { top: "70%", left: "35%" },
  textWidth: "330px",
  restMd: { top: "82%", left: "6%" },
  hoverMd: { top: "74%", left: "32%" },
  textWidthMd: "300px",
  mobile: { top: "68%", left: "3%" },
  textWidthMobile: "95%",
};





export interface FounderChip {
  icon: string;
  label: string;
}

export interface FounderExperience {
  logo: string;
  company: string;
  role: string;
  description: string;
}

export const FOUNDER = {
  eyebrow: "People driven by a safer and more efficient industry",
  heading: "The Founder Behind ProTechX",
  name: "John Redlin",
  title: "Founder & General Manager",
  subtitle: "Industrial Automation & OT Security",
  bio: "John Redlin is the founder of ProTechX Systems Consultancies FZCO in Dubai. With 10+ years of industrial engineering and automation experience, he supports customers across automation, Siemens PCS 7, OT security and regulated GxP environments. Born in Berlin, he holds a bachelor degree in Mechatronics from a German university in Hannover. From Dubai Silicon Oasis, he supports companies worldwide. His motivation is to provide sound technical advice and reliable, maintainable automation that helps companies keep production running smoothly and safely.",
  imageDesktop: "/img/founder/founder.webp",
  imageMobile: "/img/founder/founder-mobile.webp",
  imageAlt: "John Redlin, Founder & General Manager of ProTechX Systems",
  linkedinUrl: "https://www.linkedin.com/in/john-redlin-424608212/", // replace with the real URL
  chips: [
    { icon: "/img/founder/f_location_icon.webp", label: "Based in Dubai, UAE" },
    { icon: "/img/founder/f_gear_icon.webp", label: "German Engineering Background" },
    { icon: "/img/founder/f_expertise_icon.webp", label: "Siemens PCS 7, TIA Portal, GxP" },
    { icon: "/img/founder/f_personal_icon.webp", label: "Founder-led Quality Control" },
  ] as FounderChip[],
  experience: [
    {
      logo: "/img/founder/logo-josef-meissner.webp",
      company: "Josef Meissner",
      role: "Lead Automation Engineer",
      description: "PCS 7 architecture, HMI/SCADA, FAT & SAT",
    },
    {
      logo: "/img/founder/logo-dynavax.webp",
      company: "Dynavax",
      role: "IT/OT Security Engineer",
      description: "IEC 62443 Risk Assessments, Patch-gap analysis, remediation",
    },
    {
      logo: "/img/founder/logo-siemens-energy.webp",
      company: "Siemens Energy",
      role: "PCS 7/SIMATIC Batch Engineer",
      description: "PDS, DCS, Batch integration, FAT support",
    },
    {
      logo: "/img/founder/logo-gsk.webp",
      company: "GSK",
      role: "Pharma Automation",
      description: "PCS 7 commissioning and managed service in vaccine production",
    },
  ] as FounderExperience[],
};