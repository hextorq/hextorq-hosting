export const SUPPORT_EMAIL = 'hosting@hextorq.tech';
export const DOMAIN_URL = 'hosting.hextorq.tech';

export const FIXED_SHARED_PLANS = [
  {
    id: 'fixed-launch',
    name: 'Launch',
    category: 'fixed',
    tagline: 'Ideal for starter projects, personal sites, and lightweight full-stack APIs.',
    monthlyPrice: 79,
    yearlyPrice: 69,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: null,
    highlight: false,
    specs: {
      vcpu: '1 vCPU',
      ram: '1 GB RAM',
      storage: '10 GB NVMe',
      frontend: '1 Frontend',
      backend: '1 Backend',
      type: 'Fixed Allocation'
    },
    features: [
      '1 Frontend (React, Vite, Next, Vue, Svelte, HTML)',
      '1 Backend (Node.js, Python, PHP, Go, APIs)',
      '1 vCPU Dedicated Compute Allocation',
      '1 GB RAM Isolated Memory',
      '10 GB High-Speed NVMe Storage',
      'Free Automated SSL Certificate',
      'Automated Weekly Backups',
      'Standard Email Support',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Personal blogs, portfolios, & small single-app projects',
    ctaText: 'Start 14-Day Trial'
  },
  {
    id: 'fixed-growth',
    name: 'Growth',
    category: 'fixed',
    tagline: 'The sweet spot for growing web applications and client projects.',
    monthlyPrice: 149,
    yearlyPrice: 129,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'POPULAR',
    highlight: true,
    specs: {
      vcpu: '2 vCPU',
      ram: '2 GB RAM',
      storage: '25 GB NVMe',
      frontend: '1 Frontend',
      backend: '1 Backend',
      type: 'Fixed Allocation'
    },
    features: [
      '1 Frontend (React, Vite, Next, Vue, Svelte, HTML)',
      '1 Backend (Node.js, Python, PHP, Go, APIs)',
      '2 vCPU Dedicated Compute Allocation',
      '2 GB RAM Isolated Memory',
      '25 GB High-Speed NVMe Storage',
      'Free Automated SSL Certificate',
      'Daily Automated Backups',
      'Fast 24/7 Email & Chat Support',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Production web apps, client SaaS MVPs, and APIs',
    ctaText: 'Start 14-Day Trial'
  },
  {
    id: 'fixed-business',
    name: 'Business',
    category: 'fixed',
    tagline: 'High predictable capacity for demanding business web applications.',
    monthlyPrice: 299,
    yearlyPrice: 259,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'HIGH CAPACITY',
    highlight: false,
    specs: {
      vcpu: '4 vCPU',
      ram: '4 GB RAM',
      storage: '50 GB NVMe',
      frontend: '1 Frontend',
      backend: '1 Backend',
      type: 'Fixed Allocation'
    },
    features: [
      '1 Frontend (React, Vite, Next, Vue, Svelte, HTML)',
      '1 Backend (Node.js, Python, PHP, Go, APIs)',
      '4 vCPU Dedicated Compute Allocation',
      '4 GB RAM Isolated Memory',
      '50 GB High-Speed NVMe Storage',
      'Free Automated SSL Certificate',
      'Daily Backups + Instant Rollback',
      'Priority Infrastructure Support',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'High-traffic commercial apps and database-heavy backends',
    ctaText: 'Start 14-Day Trial'
  }
];

export const FLEX_SHARED_PLANS = [
  {
    id: 'flex-launch',
    name: 'Flex Launch',
    category: 'flex',
    tagline: 'Base resources with elastic burst headroom when traffic surges.',
    monthlyPrice: 199,
    yearlyPrice: 169,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: null,
    highlight: false,
    specs: {
      vcpu: '1 vCPU base',
      ram: '1 GB RAM base',
      storage: '10 GB NVMe',
      frontend: '1 Frontend',
      backend: '1 Backend',
      type: 'Elastic Burst Model'
    },
    burstNote: 'Additional shared capacity available when infrastructure capacity allows.',
    features: [
      '1 Frontend + 1 Backend Architecture',
      '1 vCPU Base Allocation + Dynamic Burst',
      '1 GB RAM Base + Burst Memory Pool',
      '10 GB NVMe Solid-State Storage',
      'Automatic Burst Absorber for Spikes',
      'Free Automated SSL Certificate',
      'Daily Automated Backups',
      'Standard Support via Email',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Marketing launches, periodic traffic campaigns, viral spikes',
    ctaText: 'Start 14-Day Trial'
  },
  {
    id: 'flex-growth',
    name: 'Flex Growth',
    category: 'flex',
    tagline: 'Enhanced base capacity plus elastic burst when demand surges.',
    monthlyPrice: 349,
    yearlyPrice: 299,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'RECOMMENDED FLEX',
    highlight: true,
    specs: {
      vcpu: '2 vCPU base',
      ram: '2 GB RAM base',
      storage: '25 GB NVMe',
      frontend: '1 Frontend',
      backend: '1 Backend',
      type: 'Elastic Burst Model'
    },
    burstNote: 'Additional shared capacity available when infrastructure capacity allows.',
    features: [
      '1 Frontend + 1 Backend Architecture',
      '2 vCPU Base Allocation + High Burst Pool',
      '2 GB RAM Base + Elastic Burst Memory',
      '25 GB NVMe High-Speed Storage',
      'Automatic Burst Absorber for Spikes',
      'Free Automated SSL Certificate',
      'Daily Snapshots & Fast Restore',
      '24/7 Fast Support Response',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'E-commerce flash sales, SaaS products with dynamic load',
    ctaText: 'Start 14-Day Trial'
  },
  {
    id: 'flex-business',
    name: 'Flex Business',
    category: 'flex',
    tagline: 'Top-tier base resources with maximum shared burst headroom.',
    monthlyPrice: 599,
    yearlyPrice: 509,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'MAX BURST',
    highlight: false,
    specs: {
      vcpu: '4 vCPU base',
      ram: '4 GB RAM base',
      storage: '50 GB NVMe',
      frontend: '1 Frontend',
      backend: '1 Backend',
      type: 'Elastic Burst Model'
    },
    burstNote: 'Additional shared capacity available when infrastructure capacity allows.',
    features: [
      '1 Frontend + 1 Backend Architecture',
      '4 vCPU Base Allocation + Heavy Burst',
      '4 GB RAM Base + Generous Burst Buffer',
      '50 GB NVMe Storage Partition',
      'Automatic Burst Absorber for Spikes',
      'Free Automated SSL Certificate',
      'Daily Backups + One-Click Rollbacks',
      'Priority Support Queue',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Enterprise web apps and intensive API services with spikey load',
    ctaText: 'Start 14-Day Trial'
  }
];

export const VPS_PLANS = [
  {
    id: 'vps-nano',
    name: 'Nano VPS',
    category: 'vps',
    tagline: 'Affordable virtual compute for staging, lightweight services, and micro-tools.',
    monthlyPrice: 399,
    yearlyPrice: 339,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'ENTRY LEVEL',
    highlight: false,
    specs: {
      vcpu: '1 vCPU',
      ram: '1 GB RAM',
      storage: '25 GB NVMe',
      bandwidth: '1 TB Bandwidth',
      rootAccess: 'Full Root / SSH',
      ipv4: '1 Dedicated IPv4',
      ipv6: '1 Dedicated /64 IPv6'
    },
    features: [
      '1 Dedicated Virtual CPU',
      '1 GB Dedicated RAM',
      '25 GB NVMe High-Speed Disk',
      '1 TB Monthly Bandwidth',
      'Full Root Access & SSH Keys',
      'Custom Linux Distribution',
      'Docker & Container Support',
      '1 Dedicated IPv4 + IPv6 Subnet',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Developers, side projects, bots, and staging environments',
    ctaText: 'Start 14-Day Trial'
  },
  {
    id: 'vps-start',
    name: 'Start VPS',
    category: 'vps',
    tagline: 'Great for production APIs, lightweight databases, and Docker container stacks.',
    monthlyPrice: 599,
    yearlyPrice: 499,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: null,
    highlight: false,
    specs: {
      vcpu: '1 vCPU',
      ram: '2 GB RAM',
      storage: '40 GB NVMe',
      bandwidth: '2 TB Bandwidth',
      rootAccess: 'Full Root / SSH',
      ipv4: '1 Dedicated IPv4',
      ipv6: '1 Dedicated /64 IPv6'
    },
    features: [
      '1 Dedicated Virtual CPU',
      '2 GB Dedicated RAM',
      '40 GB NVMe Storage',
      '2 TB Monthly Bandwidth',
      'Full Root Access & SSH Keys',
      'Docker, Docker Compose, & Podman',
      'Ubuntu, Debian, Rocky, AlmaLinux',
      '1 Dedicated IPv4 + IPv6 Subnet',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Production Node/Python APIs, lightweight Postgres/MySQL',
    ctaText: 'Start 14-Day Trial'
  },
  {
    id: 'vps-pro',
    name: 'Pro VPS',
    category: 'vps',
    tagline: 'The developer standard for multi-service apps, Redis caches, and heavy runtimes.',
    monthlyPrice: 999,
    yearlyPrice: 849,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'MOST POPULAR',
    highlight: true,
    specs: {
      vcpu: '2 vCPU',
      ram: '4 GB RAM',
      storage: '80 GB NVMe',
      bandwidth: '4 TB Bandwidth',
      rootAccess: 'Full Root / SSH',
      ipv4: '1 Dedicated IPv4',
      ipv6: '1 Dedicated /64 IPv6'
    },
    features: [
      '2 Dedicated Virtual CPU Cores',
      '4 GB Dedicated RAM',
      '80 GB NVMe Storage',
      '4 TB Monthly Bandwidth',
      'Full Root Access & Custom Firewall',
      'Run Multiple Apps & Containers',
      'Automated Weekly Snapshots',
      '1 Dedicated IPv4 + IPv6 Subnet',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Multi-service stacks, Redis, Elasticsearch, medium databases',
    ctaText: 'Start 14-Day Trial'
  },
  {
    id: 'vps-business',
    name: 'Business VPS',
    category: 'vps',
    tagline: 'Heavy compute for demanding SQL databases, microservices, and multi-tenant systems.',
    monthlyPrice: 1699,
    yearlyPrice: 1449,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'HIGH COMPUTE',
    highlight: false,
    specs: {
      vcpu: '4 vCPU',
      ram: '8 GB RAM',
      storage: '160 GB NVMe',
      bandwidth: '6 TB Bandwidth',
      rootAccess: 'Full Root / SSH',
      ipv4: '1 Dedicated IPv4',
      ipv6: '1 Dedicated /64 IPv6'
    },
    features: [
      '4 Dedicated Virtual CPU Cores',
      '8 GB Dedicated RAM',
      '160 GB NVMe Storage',
      '6 TB Monthly Bandwidth',
      'Full Root Access & Kernel Tuning',
      'Advanced Networking & Firewall',
      'Automated Snapshots & Backups',
      '1 Dedicated IPv4 + IPv6 Subnet',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Heavy production traffic, multi-tenant SaaS, database clusters',
    ctaText: 'Start 14-Day Trial'
  },
  {
    id: 'vps-scale',
    name: 'Scale VPS',
    category: 'vps',
    tagline: 'Maximum power for large workloads, high-concurrency systems, and big data.',
    monthlyPrice: 2999,
    yearlyPrice: 2549,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'SCALE POWER',
    highlight: false,
    specs: {
      vcpu: '6 vCPU',
      ram: '16 GB RAM',
      storage: '320 GB NVMe',
      bandwidth: '8 TB Bandwidth',
      rootAccess: 'Full Root / SSH',
      ipv4: '2 Dedicated IPv4',
      ipv6: '1 Dedicated /64 IPv6'
    },
    features: [
      '6 Dedicated Virtual CPU Cores',
      '16 GB Dedicated RAM',
      '320 GB NVMe Storage',
      '8 TB Monthly Bandwidth',
      'Full Root Access & Custom ISO Support',
      '2 Dedicated IPv4 Addresses',
      'Priority Infrastructure Routing',
      'Advanced Snapshot Retention',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'High-throughput workloads, large database nodes, enterprise apps',
    ctaText: 'Start 14-Day Trial'
  }
];

export const MANAGED_VPS_PLANS = [
  {
    id: 'managed-start',
    name: 'Managed Start',
    category: 'managed',
    tagline: 'VPS power with full hands-off server setup, security hardening, and OS updates.',
    monthlyPrice: 1299,
    yearlyPrice: 1099,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: null,
    highlight: false,
    specs: {
      vcpu: '1 vCPU',
      ram: '2 GB RAM',
      storage: '40 GB NVMe',
      bandwidth: '2 TB Bandwidth',
      management: 'Full Server Care'
    },
    features: [
      'Everything in Start VPS',
      'Initial Server Hardening & Setup',
      'Automated OS & Kernel Security Updates',
      'Proactive Uptime & Health Monitoring',
      'Automated Daily Off-Site Backups',
      'Assisted Initial Site/App Migration',
      '24/7 Managed Support Assistance',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Businesses wanting VPS speed without hiring sysadmins',
    ctaText: 'Start 14-Day Trial'
  },
  {
    id: 'managed-pro',
    name: 'Managed Pro',
    category: 'managed',
    tagline: 'Full management standard for growing businesses and mission-critical apps.',
    monthlyPrice: 1999,
    yearlyPrice: 1699,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'MOST POPULAR',
    highlight: true,
    specs: {
      vcpu: '2 vCPU',
      ram: '4 GB RAM',
      storage: '80 GB NVMe',
      bandwidth: '4 TB Bandwidth',
      management: 'Full Server Care + SLA'
    },
    features: [
      'Everything in Pro VPS',
      'Full Server Hardening & Firewall Setup',
      'Automated OS, Security & Stack Patching',
      'Continuous Metric & Service Monitoring',
      'Daily Automated Off-Site Backups + Quick Restore',
      'Full Database & Application Migration Support',
      'Dedicated Priority Troubleshooting Queue',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Growing online stores, business apps, and busy SaaS platforms',
    ctaText: 'Start 14-Day Trial'
  },
  {
    id: 'managed-business',
    name: 'Managed Business',
    category: 'managed',
    tagline: 'High-compute managed infrastructure with rapid response and customized assistance.',
    monthlyPrice: 3199,
    yearlyPrice: 2719,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'ENTERPRISE CARE',
    highlight: false,
    specs: {
      vcpu: '4 vCPU',
      ram: '8 GB RAM',
      storage: '160 GB NVMe',
      bandwidth: '6 TB Bandwidth',
      management: 'Priority Hands-on Care'
    },
    features: [
      'Everything in Business VPS',
      'Custom Stack Optimization & Tuning',
      'Zero-Downtime OS & Security Patching',
      '24/7 Real-Time Incident Intervention',
      'Multi-Point Disaster Recovery Strategy',
      'White-Glove Migration & Launch Support',
      'Dedicated Senior Engineer Access',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'High-value business systems, intensive e-commerce, enterprise tools',
    ctaText: 'Start 14-Day Trial'
  }
];

export const CONFIGURATOR_OPTIONS = {
  cpu: [
    { value: 1, label: '1 vCPU', priceMultiplier: 100 },
    { value: 2, label: '2 vCPU', priceMultiplier: 250 },
    { value: 4, label: '4 vCPU', priceMultiplier: 550 },
    { value: 6, label: '6 vCPU', priceMultiplier: 900 },
    { value: 8, label: '8 vCPU', priceMultiplier: 1350 }
  ],
  ram: [
    { value: 1, label: '1 GB RAM', priceMultiplier: 80 },
    { value: 2, label: '2 GB RAM', priceMultiplier: 180 },
    { value: 4, label: '4 GB RAM', priceMultiplier: 380 },
    { value: 8, label: '8 GB RAM', priceMultiplier: 760 },
    { value: 16, label: '16 GB RAM', priceMultiplier: 1480 },
    { value: 32, label: '32 GB RAM', priceMultiplier: 2800 }
  ],
  storage: [
    { value: 25, label: '25 GB NVMe', priceMultiplier: 100 },
    { value: 50, label: '50 GB NVMe', priceMultiplier: 180 },
    { value: 80, label: '80 GB NVMe', priceMultiplier: 280 },
    { value: 160, label: '160 GB NVMe', priceMultiplier: 520 },
    { value: 320, label: '320 GB NVMe', priceMultiplier: 980 },
    { value: 640, label: '640 GB NVMe', priceMultiplier: 1850 }
  ],
  os: [
    { id: 'ubuntu', name: 'Ubuntu 24.04 LTS', type: 'Linux', priceAddon: 0, icon: 'ubuntu' },
    { id: 'debian', name: 'Debian 12 Bookworm', type: 'Linux', priceAddon: 0, icon: 'debian' },
    { id: 'rocky', name: 'Rocky Linux 9', type: 'Linux', priceAddon: 0, icon: 'rocky' },
    { id: 'alma', name: 'AlmaLinux 9', type: 'Linux', priceAddon: 0, icon: 'almalinux' },
    { id: 'windows', name: 'Windows Server 2022', type: 'Windows', priceAddon: 650, icon: 'windows' }
  ],
  locations: [
    { id: 'in', name: 'India', city: 'Mumbai', region: 'Asia-South', flag: '🇮🇳' },
    { id: 'sg', name: 'Singapore', city: 'Singapore', region: 'Asia-SE', flag: '🇸🇬' },
    { id: 'de', name: 'Germany', city: 'Frankfurt', region: 'EU-Central', flag: '🇩🇪' },
    { id: 'uk', name: 'United Kingdom', city: 'London', region: 'EU-West', flag: '🇬🇧' },
    { id: 'us', name: 'United States', city: 'Virginia', region: 'US-East', flag: '🇺🇸' }
  ]
};

export const COMPARISON_DATA = [
  {
    feature: 'Architecture Target',
    fixed: '1 Frontend + 1 Backend',
    flex: '1 Frontend + 1 Backend',
    vps: 'Multiple Apps / Full Server',
    managed: 'Multiple Apps / Fully Managed'
  },
  {
    feature: 'Resource Model',
    fixed: 'Strict, predictable fixed allocation',
    flex: 'Base allocation + shared burst buffer',
    vps: 'Dedicated virtual compute partition',
    managed: 'Dedicated virtual partition + ops care'
  },
  {
    feature: 'Root & SSH Access',
    fixed: 'No (Application runtime container)',
    flex: 'No (Application runtime container)',
    vps: 'Yes (Full root & custom SSH keys)',
    managed: 'Optional (Managed by our sysadmins)'
  },
  {
    feature: 'Multiple Services / Docker',
    fixed: 'No (Single full-stack application)',
    flex: 'No (Single full-stack application)',
    vps: 'Yes (Docker, Compose, multiple daemons)',
    managed: 'Yes (Set up and maintained for you)'
  },
  {
    feature: 'Server Administration',
    fixed: 'Zero maintenance required',
    flex: 'Zero maintenance required',
    vps: 'Self-managed by customer',
    managed: '100% Managed by Hextorq engineers'
  },
  {
    feature: 'Operating System Selection',
    fixed: 'Managed container environment',
    flex: 'Managed container environment',
    vps: 'Ubuntu, Debian, Rocky, Alma, Windows',
    managed: 'Customer choice + hardened by team'
  },
  {
    feature: '14-Day Free Trial',
    fixed: 'Yes (All Fixed Plans)',
    flex: 'Yes (All Flex Plans)',
    vps: 'Yes (All VPS Plans)',
    managed: 'Yes (All Managed Plans)'
  },
  {
    feature: 'Best For',
    fixed: 'Stable, predictable applications & budgets',
    flex: 'Applications with occasional traffic surges',
    vps: 'Developers needing complete control',
    managed: 'Businesses wanting VPS power hands-off'
  },
  {
    feature: 'Starting Price',
    fixed: 'From ₹79 / month',
    flex: 'From ₹199 / month',
    vps: 'From ₹399 / month',
    managed: 'From ₹1,299 / month'
  }
];

export const FAQS = [
  {
    q: 'What is Hextorq Shared Hosting?',
    a: 'Hextorq Shared Hosting is modern application hosting built around a complete full-stack web application: exactly ONE frontend (such as React, Vite, Next.js, Vue, or static HTML) plus ONE backend (such as Node.js, Python, PHP, or Go APIs). It eliminates the hassle of traditional cPanel hosting while giving you dedicated compute resources.'
  },
  {
    q: 'Can I host a frontend and backend together?',
    a: 'Yes! That is the core architecture of Hextorq Shared Hosting. Instead of forcing you to purchase separate static hosting for your frontend and a separate server for your backend, every Hextorq Shared Hosting plan gives you an integrated deployment environment designed for 1 Frontend + 1 Backend working together seamlessly.'
  },
  {
    q: 'What is Fixed Shared Hosting?',
    a: 'Fixed Shared Hosting provides strictly predictable compute, RAM, and NVMe resources at an affordable, predictable price starting at ₹79/month. Your application operates strictly within its defined limits, making it ideal for stable, consistent workloads with no billing surprises.'
  },
  {
    q: 'What is Flex Hosting?',
    a: 'Flex Hosting is our dynamic shared hosting option starting at ₹199/month. Your plan comes with a reliable base allocation of compute and memory, but when incoming traffic surges, your application can temporarily utilize additional available shared capacity. When traffic normalizes, that extra capacity is automatically released.'
  },
  {
    q: 'How does resource bursting work?',
    a: 'When an unexpected spike in web traffic or API requests hits your Flex plan, our resource controller allows your container to expand beyond its baseline compute and memory limits by tapping into available pooled headroom on the node. Once demand subsides, your application returns cleanly to its baseline allocation.'
  },
  {
    q: 'Is burst capacity guaranteed?',
    a: 'No. To maintain transparent and honest expectations: additional shared capacity is available when underlying infrastructure capacity allows. We do not make false claims of "unlimited CPU" or "guaranteed unlimited bursting". Flex hosting offers flexible headroom when available, which is perfect for absorbing common traffic surges.'
  },
  {
    q: 'What happens when my fixed resources are exhausted?',
    a: 'On a Fixed Shared Hosting plan, if your application exceeds its allocated CPU or RAM limits, requests may be queued or temporarily throttled until capacity frees up. If your traffic is growing consistently, you can upgrade to a higher tier or switch to a Flex or VPS plan seamlessly with zero downtime.'
  },
  {
    q: 'What is VPS hosting?',
    a: 'VPS (Virtual Private Server) is our higher-control product starting at ₹399/month. Positioned as "Your Server. Your Rules.", VPS gives you your own isolated virtual server with dedicated vCPU cores, dedicated RAM, NVMe storage, full root SSH access, and complete freedom to install custom software, run Docker containers, host multiple applications, or tune the OS.'
  },
  {
    q: 'What is Managed VPS?',
    a: 'Managed VPS combines the dedicated power and performance of a VPS with hands-off convenience. Our technical team handles the server setup, security hardening, automated OS updates, health monitoring, daily backups, and troubleshooting so you can focus on building your product without the server management burden.'
  },
  {
    q: 'Do I get root access on VPS?',
    a: 'Yes. On all standard VPS plans, you receive 100% full root access via SSH and your custom SSH keys. You can install custom packages, configure your web servers (Nginx, Caddy, Apache), run Docker Compose, manage systemd services, and configure firewall rules.'
  },
  {
    q: 'Can I run Node.js?',
    a: 'Yes! Node.js (including modern versions with Express, Fastify, NestJS, etc.) is fully supported across all Hextorq plans—including Fixed Shared Hosting, Flex Shared Hosting, and VPS.'
  },
  {
    q: 'Can I run Python?',
    a: 'Yes! Python runtimes (including FastAPI, Django, Flask, and Celery workers) are supported on Hextorq Shared Hosting and VPS plans.'
  },
  {
    q: 'Can I upgrade later?',
    a: 'Absolutely. You can easily scale between Launch, Growth, and Business tiers, switch between Fixed and Flex hosting, or transition from Shared Hosting to a standalone VPS as your traffic and application complexity scale.'
  },
  {
    q: 'How does the 14-day free trial work?',
    a: 'Every single plan on Hextorq Hosting—Fixed Shared, Flexible Shared, standard VPS, and Managed VPS—comes with a 14-Day Free Trial. You can test and deploy your application for a full two weeks at zero upfront risk. If you enjoy the service, you simply continue with the plan after the trial ends.'
  },
  {
    q: 'When does billing begin?',
    a: 'Billing begins only after your 14-day free trial period concludes. There are no surprise upfront charges. If you decide not to proceed before the 14th day, no plan subscription charges apply.'
  }
];

export const WORKLOAD_CATEGORIES = [
  {
    title: 'Frontend Frameworks',
    items: ['React.js', 'Vite Applications', 'Next.js', 'Vue.js', 'Svelte', 'Static HTML / CSS']
  },
  {
    title: 'Backend Runtimes',
    items: ['Node.js (Express, Nest, Fastify)', 'Python (FastAPI, Django, Flask)', 'PHP & Laravel', 'Go Microservices', 'REST & GraphQL APIs']
  },
  {
    title: 'Application Workloads',
    items: ['SaaS MVPs', 'E-Commerce Portals', 'Business Web Applications', 'Client Portfolios', 'Developer Labs & APIs']
  }
];

export const LOCATION_NODES = [
  {
    id: 'in',
    name: 'India',
    city: 'Mumbai',
    country: 'India',
    flag: '🇮🇳',
    coordinates: { x: '68%', y: '52%' },
    status: 'Operational',
    description: 'Ultra-low latency routing for South Asian traffic and developer hubs.'
  },
  {
    id: 'sg',
    name: 'Singapore',
    city: 'Singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    coordinates: { x: '75%', y: '62%' },
    status: 'Operational',
    description: 'Southeast Asia gateway with high-throughput tier-1 transit.'
  },
  {
    id: 'de',
    name: 'Germany',
    city: 'Frankfurt',
    country: 'Germany',
    flag: '🇩🇪',
    coordinates: { x: '49%', y: '36%' },
    status: 'Operational',
    description: 'Central European internet exchange hub with strict data compliance.'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    city: 'London',
    country: 'United Kingdom',
    flag: '🇬🇧',
    coordinates: { x: '46%', y: '32%' },
    status: 'Operational',
    description: 'Western Europe edge exchange with dense transatlantic peering.'
  },
  {
    id: 'us',
    name: 'United States',
    city: 'Virginia',
    country: 'United States',
    flag: '🇺🇸',
    coordinates: { x: '26%', y: '39%' },
    status: 'Operational',
    description: 'US East coast backbone providing high-bandwidth North American connectivity.'
  }
];
