import { Brain, Code2, FileCheck2, Globe, Network, Radar, ShieldCheck, Terminal, type LucideIcon } from "lucide-react";

// Single source of truth: every value below comes from the CV. Edit here only.
export const profile = {
  name: "Mohamed AIT LAKHDAR",
  role: "Cybersecurity Engineering Student",
  location: "Agadir, Morocco",
  email: "mohamedaitlakhdar04@gmail.com",
  linkedin: "https://linkedin.com/in/mohamed-ait-lakhdar-810391263/",
  phones: [
    { label: "Morocco", display: "+212 672 362 599", href: "tel:+212672362599" },
    { label: "France", display: "+33 7 00 00 00 00", href: "tel:+33700000000" },
  ],
  cv: "/Mohamed_AIT_LAKHDAR_CV.pdf",
  objective:
    "End-of-studies internship (PFE) starting February 2027, in cybersecurity, SOC/SIEM, cloud security, infrastructure security or GRC.",
};

export const status: [string, string][] = [
  ["role", "IT Security & Digital Trust engineering student, ENSIASD"],
  ["focus", "SOC/SIEM, network security, GRC"],
  ["seeking", "PFE (final-year internship) from February 2027"],
  //["where", "France or Morocco"],
];

export const highlights: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Radar, title: "SOC & SIEM", text: "Wazuh and Splunk for security monitoring, event analysis and detection." },
  { icon: Network, title: "Network Security", text: "Snort, Suricata and Wireshark for intrusion detection and attack analysis." },
  { icon: FileCheck2, title: "GRC", text: "ISO 27001/27002/27005, risk management, IS audit and ISMS." },
  { icon: ShieldCheck, title: "Currently", text: "Engineering student at ENSIASD, IT Security & Digital Trust (2024 – 2027)." },
];

type Item = { period: string; role: string; org: string; place?: string; points?: string[]; tags?: string[] };

export const experience: Item[] = [
  {
    period: "Jun 2026 – Sep 2026",
    role: "Cybersecurity Intern",
    org: "GDE (Golden Digital Edition)",
    points: [
      "Designed and deployed a virtualized SOC platform based on Wazuh for security monitoring and event detection.",
      "Implemented File Integrity Monitoring (FIM), Active Response mechanisms and e-mail security notifications.",
      "Enriched events with threat intelligence using AbuseIPDB and AlienVault OTX.",
    ],
    tags: ["Wazuh", "FIM", "Active Response", "AbuseIPDB", "AlienVault OTX"],
  },
  {
    period: "Jun 2025 – Jul 2025",
    role: "Cybersecurity Intern",
    org: "Digital ID",
    points: [
      "Deployed a Snort-based IDS/IPS and wrote detection rules for several attack scenarios (scan, brute force, DoS).",
      "Simulated attacks and analyzed traffic with Nmap, Hydra, Metasploit and Wireshark.",
      "Centralized and analyzed security events with Splunk.",
    ],
    tags: ["Snort", "Splunk", "Nmap", "Hydra", "Metasploit", "Wireshark"],
  },
  {
    period: "Apr 2024 – Jun 2024",
    role: "Technical Internship",
    org: "Vala Blue",
    points: [
      "Designed and developed a web application with Node.js, React.js and MongoDB.",
      "Built user and reservation management features.",
      "Integrated the backend, frontend and database.",
    ],
    tags: ["Node.js", "React.js", "MongoDB"],
  },
  {
    period: "Jun 2023 – Jul 2023",
    role: "Introductory Internship",
    org: "AgriData Consulting",
    points: [
      "Designed the UI/UX of AgriForum, an application for the agricultural sector.",
      "Improved the user experience using Figma, WebDev and WinDev.",
    ],
    tags: ["Figma", "WebDev", "WinDev"],
  },
];

export const education: Item[] = [
  {
    period: "2024 – 2027",
    role: "Engineering Degree, IT Security & Digital Trust",
    org: "ENSIASD (National School of Artificial Intelligence and Data Sciences)",
    place: "Taroudant, Morocco",
  },
  { period: "2022 – 2024", role: "DUT, Computer Engineering", org: "École Supérieure de Technologie d'Agadir", place: "Agadir, Morocco" },
  { period: "2021 – 2022", role: "Scientific Baccalaureate, Physics & Chemistry", org: "Lycée Arrachad", place: "Agadir, Morocco" },
];

export const projects: { title: string; text: string; tags: string[] }[] = [
  {
    title: "SOC & Security Monitoring Platform",
    text: "Monitoring platform deployed in a virtualized environment: event collection and analysis, FIM, Active Response, notifications and threat intelligence enrichment.",
    tags: ["Wazuh", "FIM", "Active Response", "Threat Intelligence"],
  },
  {
    title: "IDS & SIEM Lab",
    text: "Virtualized environment for detecting network attacks (ICMP, SYN flood, SSH brute force) with traffic analysis and log monitoring through a SIEM.",
    tags: ["Snort", "Splunk", "Network Security"],
  },
  {
    title: "Intrusion Detection with ML & Deep Learning",
    text: "Development and evaluation of machine learning and deep learning models for network attack detection on the UNSW-NB15 dataset.",
    tags: ["Random Forest", "XGBoost", "MLP", "LSTM", "UNSW-NB15"],
  },
  {
    title: "ISO 27001 Audit Simulator",
    text: "Web application that simulates security audits, risk assessment and compliance reporting based on ISO 27001/27002.",
    tags: ["ISO 27001", "ISO 27002", "Risk Assessment"],
  },
  {
    title: "E-commerce Web Application",
    text: "Full-stack e-commerce platform with product and user management.",
    tags: ["Laravel", "Bootstrap", "MySQL"],
  },
];

export const skills: { icon: LucideIcon; title: string; items: string[] }[] = [
  { icon: ShieldCheck, title: "Cybersecurity", items: ["SOC/SIEM", "Security monitoring", "Event analysis", "IDS/IPS", "Incident detection", "Penetration testing", "Network security", "Cryptography"] },
  { icon: FileCheck2, title: "GRC", items: ["ISO 27001", "ISO 27002", "ISO 27005", "Risk management", "IS audit", "Compliance", "ISMS"] },
  { icon: Radar, title: "SIEM & Security Tools", items: ["Wazuh", "Splunk", "Snort", "Suricata", "Wireshark", "Nmap", "Metasploit", "Hydra"] },
  { icon: Globe, title: "Threat Intelligence", items: ["AbuseIPDB", "AlienVault OTX", "IOC", "Event enrichment"] },
  { icon: Brain, title: "AI & Data Science", items: ["Machine Learning", "Deep Learning (MLP, LSTM)", "Data Mining"] },
  { icon: Code2, title: "Programming", items: ["Python", "Java", "C", "JavaScript"] },
  { icon: Terminal, title: "Web Development", items: ["Node.js", "React.js", "Express.js", "Flask", "Laravel", "MongoDB", "MySQL"] },
  { icon: Network, title: "Virtualization & Tools", items: ["VMware", "VirtualBox", "Git", "VS Code", "Linux", "Eclipse"] },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Fluent" },
];
