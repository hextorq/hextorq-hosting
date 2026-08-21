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
    id: 'flex-starter',
    name: 'Starter',
    category: 'flex',
    tagline: 'Base resources with elastic burst headroom when traffic surges.',
    monthlyPrice: 589,
    yearlyPrice: 519,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: null,
    highlight: false,
    specs: {
      vcpu: '1 vCPU base',
      ram: '2 GB RAM base',
      storage: '50 GB NVMe',
      frontend: '1 Frontend',
      backend: '1 Backend',
      type: 'Elastic Burst Model'
    },
    burstNote: 'Automatically draws from the parent server’s spare capacity under load, then settles back to baseline.',
    features: [
      '1 Frontend + 1 Backend Architecture',
      '1 vCPU Base Allocation + Dynamic Burst',
      '2 GB RAM Base + Burst Memory Pool',
      '50 GB NVMe Solid-State Storage',
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
    name: 'Growth',
    category: 'flex',
    tagline: 'Enhanced base capacity plus elastic burst when demand surges.',
    monthlyPrice: 959,
    yearlyPrice: 839,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'POPULAR',
    highlight: true,
    specs: {
      vcpu: '1 vCPU base',
      ram: '4 GB RAM base',
      storage: '100 GB NVMe',
      frontend: '1 Frontend',
      backend: '1 Backend',
      type: 'Elastic Burst Model'
    },
    burstNote: 'Automatically draws from the parent server’s spare capacity under load, then settles back to baseline.',
    features: [
      '1 Frontend + 1 Backend Architecture',
      '1 vCPU Base Allocation + High Burst Pool',
      '4 GB RAM Base + Elastic Burst Memory',
      '100 GB NVMe High-Speed Storage',
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
    id: 'flex-scale',
    name: 'Scale',
    category: 'flex',
    tagline: 'Higher base resources with strong shared burst headroom.',
    monthlyPrice: 1329,
    yearlyPrice: 1169,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: null,
    highlight: false,
    specs: {
      vcpu: '2 vCPU base',
      ram: '6 GB RAM base',
      storage: '150 GB NVMe',
      frontend: '1 Frontend',
      backend: '1 Backend',
      type: 'Elastic Burst Model'
    },
    burstNote: 'Automatically draws from the parent server’s spare capacity under load, then settles back to baseline.',
    features: [
      '1 Frontend + 1 Backend Architecture',
      '2 vCPU Base Allocation + Heavy Burst',
      '6 GB RAM Base + Generous Burst Buffer',
      '150 GB NVMe Storage Partition',
      'Automatic Burst Absorber for Spikes',
      'Free Automated SSL Certificate',
      'Daily Backups + One-Click Rollbacks',
      'Priority Support Queue',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Growing production apps and busier client SaaS MVPs',
    ctaText: 'Start 14-Day Trial'
  },
  {
    id: 'flex-max',
    name: 'Max',
    category: 'flex',
    tagline: 'Top-tier base resources with maximum shared burst headroom.',
    monthlyPrice: 1699,
    yearlyPrice: 1499,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'MAX BURST',
    highlight: false,
    specs: {
      vcpu: '2 vCPU base',
      ram: '8 GB RAM base',
      storage: '200 GB NVMe',
      frontend: '1 Frontend',
      backend: '1 Backend',
      type: 'Elastic Burst Model'
    },
    burstNote: 'Automatically draws from the parent server’s spare capacity under load, then settles back to baseline.',
    features: [
      '1 Frontend + 1 Backend Architecture',
      '2 vCPU Base Allocation + Maximum Burst',
      '8 GB RAM Base + Generous Burst Buffer',
      '200 GB NVMe Storage Partition',
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
    id: 'vps-1',
    name: 'VPS-1',
    category: 'vps',
    tagline: 'Affordable fixed-resource compute for staging, lightweight services, and micro-tools.',
    monthlyPrice: 349,
    yearlyPrice: 289,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: null,
    highlight: false,
    specs: {
      vcpu: '1 vCore',
      ram: '2 GB RAM',
      storage: '40 GB NVMe',
      bandwidth: '500 Mbps'
    },
    features: [
      '1 Dedicated vCore',
      '2 GB Dedicated RAM',
      '40 GB NVMe High-Speed Disk',
      '500 Mbps Public Bandwidth',
      'Unlimited Traffic',
      'Daily Backup (Previous 24 Hours)',
      'Host Any Number of Sites/Apps',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Developers, side projects, bots, and staging environments',
    ctaText: 'Start 14-Day Trial'
  },
  {
    id: 'vps-2',
    name: 'VPS-2',
    category: 'vps',
    tagline: 'Great for production APIs, small databases, and multi-site hosting.',
    monthlyPrice: 809,
    yearlyPrice: 679,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'POPULAR',
    highlight: true,
    specs: {
      vcpu: '2 vCores',
      ram: '8 GB RAM',
      storage: '75 GB NVMe',
      bandwidth: '1 Gbps'
    },
    features: [
      '2 Dedicated vCores',
      '8 GB Dedicated RAM',
      '75 GB NVMe Storage',
      '1 Gbps Public Bandwidth',
      'Unlimited Traffic',
      'Daily Backup (Previous 24 Hours)',
      'Host Any Number of Sites/Apps',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Production Node/Python APIs, small Postgres/MySQL databases',
    ctaText: 'Start 14-Day Trial'
  },
  {
    id: 'vps-3',
    name: 'VPS-3',
    category: 'vps',
    tagline: 'The standard for multi-service apps, caches, and heavier runtimes.',
    monthlyPrice: 1169,
    yearlyPrice: 979,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: null,
    highlight: false,
    specs: {
      vcpu: '2 vCores',
      ram: '12 GB RAM',
      storage: '100 GB NVMe',
      bandwidth: '2 Gbps'
    },
    features: [
      '2 Dedicated vCores',
      '12 GB Dedicated RAM',
      '100 GB NVMe Storage',
      '2 Gbps Public Bandwidth',
      'Unlimited Traffic',
      'Daily Backup (Previous 24 Hours)',
      'Host Any Number of Sites/Apps',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Multi-service stacks, caches, medium databases',
    ctaText: 'Start 14-Day Trial'
  },
  {
    id: 'vps-4',
    name: 'VPS-4',
    category: 'vps',
    tagline: 'Highest fixed compute for demanding databases and multi-tenant systems.',
    monthlyPrice: 2249,
    yearlyPrice: 1889,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'HIGH COMPUTE',
    highlight: false,
    specs: {
      vcpu: '2 vCores',
      ram: '16 GB RAM',
      storage: '100 GB NVMe',
      bandwidth: '3 Gbps'
    },
    features: [
      '2 Dedicated vCores',
      '16 GB Dedicated RAM',
      '100 GB NVMe Storage',
      '3 Gbps Public Bandwidth',
      'Unlimited Traffic',
      'Daily Backup (Previous 24 Hours)',
      'Host Any Number of Sites/Apps',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Heavy production traffic, multi-tenant SaaS, database clusters',
    ctaText: 'Start 14-Day Trial'
  }
];

export const MANAGED_VPS_PLANS = [
  {
    id: 'managed-vps-1',
    name: 'Managed VPS-1',
    category: 'managed',
    tagline: 'VPS power with full hands-off server setup, security hardening, and OS updates.',
    monthlyPrice: 449,
    yearlyPrice: 379,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: null,
    highlight: false,
    specs: {
      vcpu: '1 vCore',
      ram: '2 GB RAM',
      storage: '40 GB NVMe',
      bandwidth: '500 Mbps',
      management: 'Full Server Care'
    },
    features: [
      'Everything in VPS-1',
      'Initial Server Hardening & Setup',
      'Automated OS & Security Updates',
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
    id: 'managed-vps-2',
    name: 'Managed VPS-2',
    category: 'managed',
    tagline: 'Full management standard for growing businesses and mission-critical apps.',
    monthlyPrice: 1049,
    yearlyPrice: 879,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'POPULAR',
    highlight: true,
    specs: {
      vcpu: '2 vCores',
      ram: '8 GB RAM',
      storage: '75 GB NVMe',
      bandwidth: '1 Gbps',
      management: 'Full Server Care + SLA'
    },
    features: [
      'Everything in VPS-2',
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
    id: 'managed-vps-3',
    name: 'Managed VPS-3',
    category: 'managed',
    tagline: 'Full management for multi-service apps, caches, and heavier runtimes.',
    monthlyPrice: 1519,
    yearlyPrice: 1279,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: null,
    highlight: false,
    specs: {
      vcpu: '2 vCores',
      ram: '12 GB RAM',
      storage: '100 GB NVMe',
      bandwidth: '2 Gbps',
      management: 'Full Server Care + SLA'
    },
    features: [
      'Everything in VPS-3',
      'Full Server Hardening & Firewall Setup',
      'Automated OS, Security & Stack Patching',
      'Continuous Metric & Service Monitoring',
      'Daily Automated Off-Site Backups + Quick Restore',
      'Full Database & Application Migration Support',
      'Dedicated Priority Troubleshooting Queue',
      'Zero Risk 14-Day Free Trial'
    ],
    bestFor: 'Multi-service stacks, caches, medium databases — hands-off',
    ctaText: 'Start 14-Day Trial'
  },
  {
    id: 'managed-vps-4',
    name: 'Managed VPS-4',
    category: 'managed',
    tagline: 'High-compute managed infrastructure with rapid response and customized assistance.',
    monthlyPrice: 2919,
    yearlyPrice: 2449,
    currency: '₹',
    trial: '14-Day Free Trial',
    badge: 'ENTERPRISE CARE',
    highlight: false,
    specs: {
      vcpu: '2 vCores',
      ram: '16 GB RAM',
      storage: '100 GB NVMe',
      bandwidth: '3 Gbps',
      management: 'Priority Hands-on Care'
    },
    features: [
      'Everything in VPS-4',
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
    feature: 'Multi-Site Hosting',
    fixed: 'No (Single full-stack application)',
    flex: 'No (Single full-stack application)',
    vps: 'Yes (Any number of sites/apps)',
    managed: 'Yes (Any number of sites/apps)'
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
    flex: 'From ₹589 / month',
    vps: 'From ₹349 / month',
    managed: 'From ₹449 / month'
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
    a: 'Flex Hosting is our dynamic shared hosting option starting at ₹589/month. Your plan comes with a reliable base allocation of compute and memory, but when incoming traffic surges, your application can temporarily utilize additional available shared capacity. When traffic normalizes, that extra capacity is automatically released.'
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
    a: 'Standard VPS is our fixed-resource product starting at ₹349/month. It gives you a dedicated slice of vCPU cores, RAM, and NVMe storage — with no bursting, no borrowing from a parent server — so you can host any number of sites or applications within your chosen allocation. Choose Self-Hosted, or upgrade to Managed and let HexTorq handle the ops.'
  },
  {
    q: 'What is Managed VPS?',
    a: 'Managed VPS combines the dedicated power and performance of a VPS with hands-off convenience. Our technical team handles the server setup, security hardening, automated OS updates, health monitoring, daily backups, and troubleshooting so you can focus on building your product without the server management burden.'
  },
  {
    q: 'How many sites can I host on a VPS plan?',
    a: 'As many as fit within your chosen resource allocation. Unlike Growth Platform (which is scoped to one frontend + one backend), Standard VPS has no project-count limit — deploy and manage multiple sites or applications on the same instance, Self-Hosted or Managed.'
  },
  {
    q: 'Which runtimes and frameworks are supported?',
    a: 'We support modern full-stack developer runtimes out-of-the-box: Node.js (Express, Nest, Fastify), Python (FastAPI, Django, Flask), Go, PHP/Laravel, and frontend frameworks like React, Next.js, Vite, and Vue.'
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
