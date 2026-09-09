export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-me" },
  { label: "Skills", href: "/skills" },
  { label: "Services", href: "/services" },
  { label: "IT Support", href: "/it-support" },
  { label: "Experience", href: "/experience" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: "github" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { name: "Dribbble", href: "https://dribbble.com", icon: "dribbble" },
];

export const heroStats = [
  { value: "5+", label: "Years Experience", icon: "briefcase" },
  { value: "30+", label: "Projects Completed", icon: "folder" },
  { value: "20+", label: "Happy Clients", icon: "smile" },
];

export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "tools" | "cloud" | "it-infra";
  color?: string;
  iconType: string;
  proficiency?: number;
  description?: string;
}

export const skillsList: SkillItem[] = [
  { name: "JavaScript", category: "frontend", iconType: "js", color: "#F7DF1E", proficiency: 96, description: "ES6+, Async, DOM APIs, Canvas & WebGL integration" },
  { name: "TypeScript", category: "frontend", iconType: "ts", color: "#3178C6", proficiency: 94, description: "Strict typing, generics, AST, declaration files" },
  { name: "React", category: "frontend", iconType: "react", color: "#61DAFB", proficiency: 98, description: "Hooks, Concurrent Mode, Virtual DOM, State Architectures" },
  { name: "Next.js", category: "frontend", iconType: "next", color: "#FFFFFF", proficiency: 95, description: "App Router, SSR, SSG, RSC, Edge Middleware" },
  { name: "Node.js", category: "backend", iconType: "node", color: "#339933", proficiency: 90, description: "Event loop, microservices, streaming APIs, Express & Nest" },
  { name: "HTML5", category: "frontend", iconType: "html5", color: "#E34F26", proficiency: 98, description: "Semantic markup, Accessibility (WCAG), Web Components" },
  { name: "CSS3", category: "frontend", iconType: "css3", color: "#1572B6", proficiency: 96, description: "Flexbox, CSS Grid, Custom properties, Modern Animations" },
  { name: "Tailwind CSS", category: "frontend", iconType: "tailwind", color: "#06B6D4", proficiency: 98, description: "Utility-first CSS, custom design tokens, responsive layouts" },
  { name: "MongoDB", category: "backend", iconType: "mongodb", color: "#47A248", proficiency: 88, description: "Aggregation pipelines, indexing, sharding, Mongoose ODM" },
  { name: "PostgreSQL", category: "backend", iconType: "postgresql", color: "#4169E1", proficiency: 89, description: "Relational modeling, indexing, transactions, Prisma & Drizzle" },
];

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: "code" | "palette" | "database" | "zap";
  features?: string[];
  deliverables?: string[];
}

export const servicesList: ServiceItem[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    description: "Building responsive, performant and modern websites & web applications.",
    icon: "code",
    features: ["Single Page Applications (SPA)", "Server-side Rendering (SSR)", "JAMstack & Headless CMS", "Interactive 3D WebGL visuals"],
    deliverables: ["Clean, documented TypeScript code", "Mobile-first responsive layouts", "High Lighthouse performance audit score", "SEO & Meta tags integration"]
  },
  {
    id: "ui-ux-design",
    number: "02",
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful interfaces that provide exceptional user experiences.",
    icon: "palette",
    features: ["Design Systems & Style Guides", "Wireframing & High-Fidelity Prototypes", "User Journey Mapping & Research", "Micro-interactions & Motion Design"],
    deliverables: ["Figma source files with auto-layout", "Component libraries and design tokens", "Interactive clickable prototypes", "Asset exports in modern formats"]
  },
  {
    id: "api-development",
    number: "03",
    title: "API Development",
    description: "Building robust, scalable and secure APIs to power your digital products.",
    icon: "database",
    features: ["RESTful & GraphQL Architectures", "Secure JWT & OAuth Authentication", "Database Indexing & Query Caching", "Third-party Service Webhooks"],
    deliverables: ["Swagger / OpenAPI 3.0 Documentation", "Automated unit & integration test suites", "Rate limiting and DDoS protection", "Scalable containerized deployment scripts"]
  },
  {
    id: "performance-optimization",
    number: "04",
    title: "Performance Optimization",
    description: "Improving speed, SEO and overall performance for better user experience.",
    icon: "zap",
    features: ["Core Web Vitals Optimization", "Bundle size analysis & Code Splitting", "Asset compression & AVIF/WebP pipelines", "Edge CDN caching & prefetching"],
    deliverables: ["95+ Google PageSpeed Score guarantee", "Sub-second First Contentful Paint (FCP)", "Cumulative Layout Shift (CLS) reduction", "Comprehensive performance audit report"]
  }
];

export interface ITSupportItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: "server" | "shield" | "headset" | "cpu";
  capabilities: string[];
  techStack: string[];
}

export const itSupportServices: ITSupportItem[] = [
  {
    id: "sysadmin-cloud",
    number: "01",
    title: "Enterprise Systems & Cloud Administration",
    description: "Architecting, provisioning, and maintaining high-availability cloud servers and identity directories across hybrid enterprise environments.",
    icon: "server",
    capabilities: [
      "Active Directory, Azure AD / Microsoft Entra ID Domain Management",
      "Hybrid Cloud Server Deployment (Windows Server 2022 & Ubuntu/RHEL Linux)",
      "Group Policy Objects (GPO), RBAC, and Single Sign-On (SSO) Enforcement",
      "Automated PowerShell & Bash Scripting for Systems Maintenance"
    ],
    techStack: ["Windows Server", "Azure AD", "Linux", "PowerShell", "VMware"]
  },
  {
    id: "network-security",
    number: "02",
    title: "Network Engineering & Cybersecurity",
    description: "Hardening enterprise network infrastructure with encrypted tunnels, next-generation firewalls, and proactive zero-trust threat mitigation.",
    icon: "shield",
    capabilities: [
      "Cisco Router & Switch Configuration, VLAN Segmentation, Subnetting",
      "Site-to-Site VPN & Remote Access SSL/TLS Secure Tunnels",
      "Next-Gen Firewall Management (Fortinet, SonicWall, pfSense)",
      "Disaster Recovery, Automated Offsite Backups & Incident Containment"
    ],
    techStack: ["Cisco IOS", "Fortinet", "OpenVPN", "Wireshark", "Veeam"]
  },
  {
    id: "technical-ops",
    number: "03",
    title: "L1 / L2 / L3 Technical Service Desk Operations",
    description: "Leading tier-3 technical escalation workflows, automated ticketing triage, and mission-critical emergency incident resolution under strict SLAs.",
    icon: "headset",
    capabilities: [
      "ITIL v4 Service Management & Tier-3 Escalation Resolution",
      "Automated Incident Ticketing Workflows (Jira Service Desk, ServiceNow)",
      "Root-Cause Analysis (RCA) & Knowledge Base Documentation",
      "99.9% Critical Response SLA Compliance (Under 15-Minute Triage)"
    ],
    techStack: ["ServiceNow", "Jira Service Desk", "Zendesk", "ITIL v4"]
  },
  {
    id: "endpoint-mdm",
    number: "04",
    title: "Endpoint Fleet Management & Cloud MDM",
    description: "Centralized zero-touch fleet provisioning, remote device wiping, security patch compliance, and hardware lifecycle maintenance.",
    icon: "cpu",
    capabilities: [
      "Microsoft Intune & Autopilot Zero-Touch Device Provisioning",
      "Cross-Platform MDM Fleet Management (Windows, macOS, iOS, Android)",
      "Enterprise Patch Management & Vulnerability Remediations",
      "Hardware Diagnostics, BIOS Hardening & Component Failure Replacements"
    ],
    techStack: ["MS Intune", "Autopilot", "JAMF Pro", "BitLocker", "CrowdStrike"]
  }
];

export const itCertifications = [
  { name: "CompTIA Security+", code: "SY0-701", issuer: "CompTIA", category: "Security" },
  { name: "Azure Administrator Associate", code: "AZ-104", issuer: "Microsoft", category: "Cloud" },
  { name: "Cisco Certified Network Associate", code: "CCNA 200-301", issuer: "Cisco", category: "Networking" },
  { name: "CompTIA Network+", code: "N10-008", issuer: "CompTIA", category: "Infrastructure" },
  { name: "AWS Solutions Architect", code: "SAA-C03", issuer: "Amazon Web Services", category: "Cloud" },
  { name: "ITIL v4 Foundation", code: "ITIL4", issuer: "Axelos", category: "ITSM" },
];

export const itMetrics = [
  { value: "99.99%", label: "Uptime Reliability", subtext: "Mission-critical servers & cloud services" },
  { value: "< 15m", label: "Average SLA Triage", subtext: "Priority-1 ticket response guarantee" },
  { value: "2,500+", label: "Endpoints Managed", subtext: "Zero-touch Intune & JAMF fleet" },
  { value: "0", label: "Security Breaches", subtext: "Enforced zero-trust RBAC protocols" },
];

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category?: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  client?: string;
  role?: string;
  year?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  keyFeatures?: string[];
  metrics?: { label: string; value: string }[];
}

export const projectsList: ProjectItem[] = [
  {
    id: "1",
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    subtitle: "Real-time analytics dashboard with interactive charts and advanced filtering.",
    description: "Real-time analytics dashboard with interactive charts and advanced filtering.",
    category: "Web & SaaS",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/images/projects/analytics-dashboard.webp",
    liveUrl: "https://example.com/analytics",
    githubUrl: "https://github.com/example/analytics",
    featured: true,
    client: "TechNova Solutions",
    role: "Lead Frontend Engineer",
    year: "2023 - 2024",
    overview: "A high-performance enterprise analytics platform providing deep insights into multi-channel marketing campaigns, user engagement metrics, and financial forecasts in real time.",
    challenge: "Handling real-time data streams of over 50,000 events per second without causing client-side rendering bottlenecks or frame drops on dashboards containing 20+ interactive charts.",
    solution: "Architected a virtualized rendering pipeline utilizing Web Workers for data processing, canvas-based chart rendering, and an optimized WebSocket subscription manager with debounced reconciliation.",
    keyFeatures: [
      "Sub-100ms real-time event aggregation and stream ingestion",
      "Dynamic multi-dimensional filter builder with regex support",
      "Export capabilities to PDF, CSV, and formatted spreadsheet tables",
      "Role-based permission matrix and enterprise SSO integration"
    ],
    metrics: [
      { label: "Latency Reduction", value: "68%" },
      { label: "Daily Active Users", value: "45K+" },
      { label: "Data Throughput", value: "50K req/s" },
      { label: "Lighthouse Score", value: "99" }
    ]
  },
  {
    id: "2",
    slug: "saas-landing-page",
    title: "SaaS Landing Page",
    subtitle: "Modern and conversion-focused landing page for a SaaS product.",
    description: "Modern and conversion-focused landing page for a SaaS product.",
    category: "Web & SaaS",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/images/projects/saas-landing.webp",
    liveUrl: "https://example.com/saas",
    githubUrl: "https://github.com/example/saas-landing",
    featured: true,
    client: "DataFlow AI",
    role: "Senior UI/UX & Web Developer",
    year: "2023",
    overview: "A visually stunning, conversion-optimized marketing landing page for a modern B2B artificial intelligence software platform, engineered with subtle 3D lighting, smooth scrolling, and micro-interactions.",
    challenge: "The client needed to communicate complex machine learning workflows to non-technical decision makers while maintaining lightning-fast load times across global mobile devices.",
    solution: "Created an interactive product simulator combining lightweight SVG animations, bespoke 3D glassmorphic cards, and an intuitive pricing calculator with instant visual feedback.",
    keyFeatures: [
      "Dynamic interactive product walkthrough with scroll-driven states",
      "Automated currency conversion and annualized pricing toggles",
      "Sub-800ms Time-to-Interactive (TTI) worldwide",
      "Automated A/B headline testing infrastructure"
    ],
    metrics: [
      { label: "Conversion Rate", value: "+34%" },
      { label: "Bounce Rate", value: "-42%" },
      { label: "Page Load Time", value: "0.6s" },
      { label: "Organic Search", value: "+120%" }
    ]
  },
  {
    id: "3",
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    subtitle: "Full-featured e-commerce platform with payment integration and admin panel.",
    description: "Full-featured e-commerce platform with payment integration and admin panel.",
    category: "Web & SaaS",
    tags: ["Next.js", "Stripe", "MongoDB"],
    image: "/images/projects/ecommerce-platform.webp",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce",
    featured: true,
    client: "Aura Luxe Goods",
    role: "Full-Stack Architect",
    year: "2022 - 2023",
    overview: "A luxury digital storefront with bespoke checkout flows, multi-currency payment processing, automated inventory tracking, and a rich real-time merchant control dashboard.",
    challenge: "Minimizing cart abandonment during high-traffic flash sales while handling complex international tax calculations, localized currencies, and fraud prevention checks.",
    solution: "Engineered a headless Next.js commerce architecture powered by Stripe Elements, edge-cached product catalogs, and serverless background workers for immediate webhook reconciliation.",
    keyFeatures: [
      "Frictionless 1-click checkout with Apple Pay & Google Pay",
      "Real-time inventory reserve locks with TTL expiration",
      "Custom product configurator with dynamic 3D-like previews",
      "Full admin portal with order fulfillment and invoice generation"
    ],
    metrics: [
      { label: "Checkout Completion", value: "88.4%" },
      { label: "Annual GMV", value: "$3.2M" },
      { label: "Average Session Duration", value: "4m 12s" },
      { label: "Cart Abandonment", value: "-28%" }
    ]
  },
  {
    id: "4",
    slug: "zero-trust-identity",
    title: "Enterprise Zero-Trust Identity Migration",
    subtitle: "Consolidating 2,500 users from fragmented directories into unified Microsoft Entra ID with FIDO2 MFA.",
    description: "Consolidating 2,500 users from fragmented directories into unified Microsoft Entra ID with FIDO2 MFA.",
    category: "Cloud & SecOps Infrastructure",
    tags: ["Azure AD", "Okta", "Zero-Trust", "PowerShell"],
    image: "/images/projects/analytics-dashboard.webp",
    liveUrl: "https://example.com/identity",
    githubUrl: "https://github.com/example/identity",
    featured: false,
    client: "Global Financial Partners",
    role: "Lead Systems & Identity Architect",
    year: "2023",
    overview: "Led the enterprise-wide identity unification of 2,500 active employees and 80+ third-party contractor accounts into Microsoft Entra ID P2 with strict conditional access.",
    challenge: "Migrating active directories without breaking existing SAML single sign-on tokens or causing user password resets during trading hours.",
    solution: "Developed staged automated PowerShell cutover scripts, password hash synchronization, and conditional access policies enforcing biometric FIDO2 tokens.",
    keyFeatures: [
      "Zero downtime cutover across 2,500 active user mailboxes and cloud accounts",
      "Biometric FIDO2 hardware key enforcement for all privileged administrative accounts",
      "Automated Just-In-Time (JIT) role elevation with session recording",
      "Elimination of 14 redundant legacy domain controllers"
    ],
    metrics: [
      { label: "Account Takeovers", value: "0" },
      { label: "MFA Adoption", value: "100%" },
      { label: "Annual License Savings", value: "$64,000" },
      { label: "Help Desk Reset Calls", value: "-82%" }
    ]
  },
  {
    id: "5",
    slug: "cloud-disaster-recovery",
    title: "Multi-Region Immutable Cloud DR Pipeline",
    subtitle: "Automating cross-region AWS S3 Object Lock backups and sub-hour Route 53 DNS failover.",
    description: "Automating cross-region AWS S3 Object Lock backups and sub-hour Route 53 DNS failover.",
    category: "Cloud & SecOps Infrastructure",
    tags: ["AWS", "Terraform", "S3 Object Lock", "Route 53"],
    image: "/images/projects/ecommerce-platform.webp",
    liveUrl: "https://example.com/dr",
    githubUrl: "https://github.com/example/dr",
    featured: false,
    client: "Apex Healthcare Technology",
    role: "Senior Infrastructure Engineer",
    year: "2023 - 2024",
    overview: "Designed and implemented an immutable disaster recovery pipeline meeting strict HIPAA and SOC 2 Type II audit standards for healthcare client record archives.",
    challenge: "Ensuring petabyte-scale electronic protected health information (ePHI) was completely immune to ransomware deletion or tampering.",
    solution: "Deployed Terraform Infrastructure-as-Code to provision multi-region AWS S3 buckets in Compliance Mode with Object Lock, paired with automated Route 53 health check failovers.",
    keyFeatures: [
      "WORM (Write Once, Read Many) compliance retention preventing malicious file deletion",
      "Cross-region replication to secondary cloud zone with sub-15-minute sync latency",
      "Automated weekly integrity hash validation test routines",
      "Instantaneous Route 53 health-checked DNS failover"
    ],
    metrics: [
      { label: "Recovery Time Objective (RTO)", value: "38 mins" },
      { label: "Recovery Point Objective (RPO)", value: "8 mins" },
      { label: "Storage Durability", value: "99.999999999%" },
      { label: "Compliance Audit Pass", value: "100%" }
    ]
  },
  {
    id: "6",
    slug: "sd-wan-campus",
    title: "Global SD-WAN & Meraki Campus Deployment",
    subtitle: "Connecting 6 international branch offices to headquarters with full-mesh IPsec and 802.1X Wi-Fi 6E.",
    description: "Connecting 6 international branch offices to headquarters with full-mesh IPsec and 802.1X Wi-Fi 6E.",
    category: "Cloud & SecOps Infrastructure",
    tags: ["Cisco Meraki", "Fortinet", "SD-WAN", "802.1X"],
    image: "/images/projects/saas-landing.webp",
    liveUrl: "https://example.com/network",
    githubUrl: "https://github.com/example/network",
    featured: false,
    client: "OmniTech Global",
    role: "Principal Network Architect",
    year: "2022 - 2023",
    overview: "Spearheaded the replacement of aging MPLS circuits with modern Cisco Meraki SD-WAN appliances and high-density Wi-Fi 6E access points across 6 global office locations.",
    challenge: "MPLS circuits were costing over $30,000/month with severe bottlenecks on cloud VoIP and video conferencing traffic.",
    solution: "Architected redundant broadband SD-WAN with dynamic path selection, automated IPsec tunnel failover, and certificate-based 802.1X wireless mutual authentication.",
    keyFeatures: [
      "Annual telecom savings of $210,000 by eliminating expensive legacy MPLS loops",
      "Application-aware traffic shaping prioritizing Zoom and Teams packets",
      "Dynamic machine certificate mutual authentication via RADIUS / SCEP",
      "Zero shared Wi-Fi passwords across the entire multinational campus fleet"
    ],
    metrics: [
      { label: "Telecom Cost Savings", value: "68%" },
      { label: "Bandwidth Capacity", value: "+400%" },
      { label: "VoIP Jitter", value: "< 1.2ms" },
      { label: "Mean Time to Deploy Site", value: "1 Day" }
    ]
  }
];

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  achievements?: string[];
  iconType: "technova" | "codecraft" | "webly" | "pixel";
}

export const experiencesList: ExperienceItem[] = [
  {
    id: "1",
    role: "Senior Developer & Tech Lead",
    company: "TechNova Solutions",
    period: "2022 - Present",
    description: "Leading development of SaaS products, cloud infrastructure reliability, and managing a team of developers.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "AWS", "Docker", "Azure"],
    achievements: [
      "Led architectural migration of legacy SPA to Next.js 14, improving page load speeds by 60%",
      "Mentored junior and mid-level engineers, instituting code review standards and enterprise CI/CD practices",
      "Spearheaded the development of a design system and resilient cloud architecture used across 4 core client-facing enterprise web applications"
    ],
    iconType: "technova"
  },
  {
    id: "2",
    role: "Full Stack Developer & Systems Specialist",
    company: "CodeCraft Labs",
    period: "2020 - 2022",
    description: "Built and maintained multiple client projects using MERN stack with automated cloud deployments.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "GraphQL", "Tailwind", "Linux"],
    achievements: [
      "Engineered full-stack features for over 15 client software applications under strict enterprise SLAs",
      "Designed secure REST and GraphQL API endpoints handling over 2M requests weekly with 99.98% uptime",
      "Implemented automated CI/CD deployment pipelines using GitHub Actions and AWS ECS with automated rollbacks"
    ],
    iconType: "codecraft"
  },
  {
    id: "3",
    role: "Frontend Developer & Systems Admin",
    company: "Webfly Digital",
    period: "2018 - 2020",
    description: "Developed responsive websites, internal agency tools, and managed office infrastructure.",
    technologies: ["JavaScript (ES6+)", "Vue.js", "CSS3/SCSS", "Active Directory", "REST APIs"],
    achievements: [
      "Crafted custom interactive marketing sites with pixel-perfect responsive layouts and high visual polish",
      "Managed internal agency servers, local network DNS/DHCP, and automated employee workstation onboarding",
      "Increased average Google Lighthouse accessibility and performance ratings from 72 to 98"
    ],
    iconType: "webly"
  },
  {
    id: "4",
    role: "Junior Developer & IT Support Specialist",
    company: "Pixel Perfect Studio",
    period: "2017 - 2018",
    description: "Collaborated on client web projects, resolved hardware/software tickets, and maintained backups.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Windows Server", "Hardware Diagnostics"],
    achievements: [
      "Contributed to front-end development of 20+ responsive brand websites and landing pages",
      "Provided Tier-1 and Tier-2 IT technical support across 50+ agency employee Mac/PC workstations",
      "Configured automated local and cloud NAS backup schedules ensuring 100% data recovery readiness"
    ],
    iconType: "pixel"
  }
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const testimonialsList: TestimonialItem[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechNova",
    quote: "Khalid is an exceptional developer who delivers high-quality work on time. His attention to detail and problem-solving skills are top-notch.",
    rating: 5,
    avatar: "/images/testimonials/sarah.webp"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CEO",
    company: "DataFlow",
    quote: "Working with Khalid was a fantastic experience. He understood our requirements perfectly and built a product that exceeded our expectations.",
    rating: 5,
    avatar: "/images/testimonials/michael.webp"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "CTO",
    company: "InnovateLab",
    quote: "His code quality, communication and dedication are outstanding. I highly recommend him for any project.",
    rating: 5,
    avatar: "/images/testimonials/emily.webp"
  },
  {
    id: "4",
    name: "David Vance",
    role: "Chief Information Security Officer (CISO)",
    company: "Apex Global Security",
    quote: "Khalid's implementation of our zero-trust identity architecture and disaster recovery drills was flawless. He achieved SOC 2 Type II audit readiness two months ahead of schedule.",
    rating: 5,
    avatar: "/images/testimonials/michael.webp"
  },
  {
    id: "5",
    name: "Priya Sharma",
    role: "VP of Engineering",
    company: "CloudScale Systems",
    quote: "An exceptional hybrid technologist who bridges frontend craft with deep enterprise cloud reliability. Khalid eliminated our production incident backlog and scaled our systems to 99.99% uptime.",
    rating: 5,
    avatar: "/images/testimonials/sarah.webp"
  },
  {
    id: "6",
    name: "Marcus Brody",
    role: "Director of Global Operations",
    company: "NorthStar Capital",
    quote: "Under Khalid's technical leadership, our IT onboarding process was transformed from 3 days to 12 minutes with zero touch. His cost optimization initiatives saved our firm over $180K annually.",
    rating: 5,
    avatar: "/images/testimonials/emily.webp"
  }
];

export const contactInfo = {
  email: "contact@mdkhalid.dev",
  phone: "+1 (234) 567-8900",
  location: "San Francisco, CA, USA",
  availability: "Mon - Fri (9AM - 6PM PST)",
};
