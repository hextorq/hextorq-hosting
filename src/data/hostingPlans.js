export const SHARED_FIXED_PLANS = [
  {
    id: 'fixed-launch',
    name: 'Launch',
    tagline: 'For predictable, lightweight application workloads.',
    monthlyPrice: 79,
    yearlyPrice: 69,
    currency: '₹',
    badge: null,
    resourceModel: 'Fixed Resource Allocation',
    limitsBehavior: 'Hard ceiling at plan quota with graceful throttling',
    specs: {
      vcpu: '1 vCPU',
      ram: '1 GB RAM',
      storage: '10 GB NVMe',
      bandwidth: '500 GB Transfer',
      apps: '1 Frontend + 1 Backend',
      ssl: 'Free Let\'s Encrypt SSL',
      backups: 'Weekly Backups',
      support: 'Standard Email Support'
    },
    features: [
      '1 Frontend (React, Vite, Next.js, Static)',
      '1 Backend (Node.js, Python, PHP, Go API)',
      'Isolated Container Sandbox',
      'Automated Git-push Deployments',
      'Free Automated SSL Certificates',
      'HTTP/2 & HTTP/3 Protocol Support',
      'Basic Performance Metrics',
      '99.9% Infrastructure Availability'
    ],
    ctaText: 'Deploy Launch App',
    popular: false
  },
  {
    id: 'fixed-growth',
    name: 'Growth',
    tagline: 'Ideal for scaling business websites and production APIs.',
    monthlyPrice: 149,
    yearlyPrice: 129,
    currency: '₹',
    badge: null,
    resourceModel: 'Fixed Resource Allocation',
    limitsBehavior: 'Hard ceiling at plan quota with graceful throttling',
    specs: {
      vcpu: '2 vCPU',
      ram: '2 GB RAM',
      storage: '25 GB NVMe',
      bandwidth: '1.5 TB Transfer',
      apps: '1 Frontend + 1 Backend',
      ssl: 'Free Let\'s Encrypt SSL',
      backups: 'Daily Automated Backups',
      support: 'Standard + Chat Support'
    },
    features: [
      '1 Frontend + 1 Backend Architecture',
      '2 vCPU Dedicated Quota',
      '2 GB Dedicated Memory',
      '25 GB Gen4 NVMe Storage',
      'Custom Domain & Wildcard SSL',
      'Daily Automated Backups (7-day retention)',
      'Environment Variable Vault',
      'Real-time Access & Error Logs'
    ],
    ctaText: 'Deploy Growth App',
    popular: false
  },
  {
    id: 'fixed-business',
    name: 'Business',
    tagline: 'Maximum fixed resources for high-throughput single apps.',
    monthlyPrice: 299,
    yearlyPrice: 249,
    currency: '₹',
    badge: 'MOST POPULAR',
    resourceModel: 'Fixed Resource Allocation',
    limitsBehavior: 'Hard ceiling at plan quota with priority queuing',
    specs: {
      vcpu: '4 vCPU',
      ram: '4 GB RAM',
      storage: '50 GB NVMe',
      bandwidth: '3 TB Transfer',
      apps: '1 Frontend + 1 Backend',
      ssl: 'Free Wildcard SSL',
      backups: 'Daily Backups (30-day retention)',
      support: 'Priority Technical Support'
    },
    features: [
      '1 Frontend + 1 Backend Architecture',
      '4 vCPU High-Performance Quota',
      '4 GB High-Speed DDR5 RAM',
      '50 GB Gen4 NVMe Storage',
      'Continuous Zero-Downtime Deploys',
      'Web Application Firewall (WAF) included',
      '30-Day Backup Snapshots with Instant Restore',
      'Priority 1-Hour SLA Support'
    ],
    ctaText: 'Deploy Business App',
    popular: true
  }
];

export const SHARED_BURST_PLANS = [
  {
    id: 'flex-launch',
    name: 'Flex Launch',
    tagline: 'Baseline resources with automatic burst capacity during traffic surges.',
    monthlyPrice: 199,
    yearlyPrice: 169,
    currency: '₹',
    badge: 'FLEXIBLE CAPACITY',
    resourceModel: 'Adaptive Burst Allocation',
    burstCapacity: 'Up to 2.5x Base CPU/RAM',
    limitsBehavior: 'No hard ceiling during spikes while shared pool capacity is available',
    specs: {
      vcpu: '1 vCPU base (burstable to 2.5 vCPU)',
      ram: '1 GB RAM base (burstable to 2.5 GB)',
      storage: '10 GB High-IOPS NVMe',
      bandwidth: '1 TB Transfer',
      apps: '1 Frontend + 1 Backend',
      ssl: 'Free Let\'s Encrypt SSL',
      backups: 'Daily Backups',
      support: 'Standard Email & Ticket Support'
    },
    features: [
      '1 Frontend + 1 Backend Application',
      'Dynamic Resource Burst Engine',
      'No sudden 503 errors during traffic spikes',
      'Fair-share capacity pooling from Tier-3 node',
      'Automated Git-push Deployments',
      'Free Auto-renewing SSL',
      'Instant burst metrics dashboard',
      'Standard Support SLA'
    ],
    ctaText: 'Start Flex Launch',
    popular: false
  },
  {
    id: 'flex-growth',
    name: 'Flex Growth',
    tagline: 'The sweet spot for ecommerce launches, media sites, and viral APIs.',
    monthlyPrice: 349,
    yearlyPrice: 299,
    currency: '₹',
    badge: 'POPULAR BURST',
    resourceModel: 'Adaptive Burst Allocation',
    burstCapacity: 'Up to 3x Base CPU/RAM',
    limitsBehavior: 'Smooth automatic expansion into available shared infrastructure',
    specs: {
      vcpu: '2 vCPU base (burstable to 6 vCPU)',
      ram: '2 GB RAM base (burstable to 6 GB)',
      storage: '25 GB High-IOPS NVMe',
      bandwidth: '3 TB Transfer',
      apps: '1 Frontend + 1 Backend',
      ssl: 'Free Wildcard SSL',
      backups: 'Daily Automated Backups',
      support: 'Priority Support Queue'
    },
    features: [
      '1 Frontend + 1 Backend Application',
      'Generous 3x surge absorption headroom',
      'Automatic resource reclamation when traffic drops',
      '25 GB Gen4 PCIe 4.0 NVMe Storage',
      'Intelligent edge caching & HTTP/3',
      'DDoS Protection up to 500 Gbps',
      'Priority burst allocation tier',
      'Priority 24/7 technical support'
    ],
    ctaText: 'Start Flex Growth',
    popular: true
  },
  {
    id: 'flex-business',
    name: 'Flex Business',
    tagline: 'High-tier burst priority for mission-critical client workloads.',
    monthlyPrice: 599,
    yearlyPrice: 499,
    currency: '₹',
    badge: 'MAX BURST PRIORITY',
    resourceModel: 'Adaptive Burst Allocation',
    burstCapacity: 'Up to 4x Base CPU/RAM',
    limitsBehavior: 'Tier-1 priority access to shared node overflow buffer',
    specs: {
      vcpu: '4 vCPU base (burstable to 12 vCPU)',
      ram: '4 GB RAM base (burstable to 12 GB)',
      storage: '50 GB High-IOPS NVMe',
      bandwidth: '5 TB Transfer',
      apps: '1 Frontend + 1 Backend',
      ssl: 'Free Wildcard SSL',
      backups: 'Daily Backups with On-Demand Snapshots',
      support: '24/7 Dedicated Support Queue'
    },
    features: [
      '1 Frontend + 1 Backend Application',
      'Highest burst scheduling priority across the cluster',
      '4 vCPU base scaling seamlessly to 12 vCPU',
      '4 GB DDR5 RAM scaling up to 12 GB during load',
      '50 GB ultra-low latency NVMe storage',
      'On-demand snapshot restore points',
      'Advanced rate limiting and bot mitigation',
      'Fastest response SLA with senior engineers'
    ],
    ctaText: 'Start Flex Business',
    popular: false
  }
];

export const SUPPORTED_STACKS = {
  frontends: [
    { name: 'React', desc: 'Single-page applications & SPA build outputs', icon: 'Atom' },
    { name: 'Vite', desc: 'Lightning-fast modern frontend bundler', icon: 'Zap' },
    { name: 'Next.js', desc: 'Static exports & hybrid frontend targets', icon: 'Layers' },
    { name: 'Vue & Nuxt', desc: 'Modern reactive component applications', icon: 'Code' },
    { name: 'Svelte / Astro', desc: 'Lean, content-driven websites', icon: 'Flame' },
    { name: 'Static HTML/JS', desc: 'Classic HTML5, CSS3, JavaScript bundles', icon: 'FileCode' }
  ],
  backends: [
    { name: 'Node.js', desc: 'Express, NestJS, Fastify, Koa APIs', icon: 'Server' },
    { name: 'Python', desc: 'FastAPI, Flask, Django, REST APIs', icon: 'Terminal' },
    { name: 'PHP', desc: 'Laravel, Symfony, modern PHP microservices', icon: 'Cpu' },
    { name: 'Go (Golang)', desc: 'Compiled lightweight high-concurrency APIs', icon: 'Binary' },
    { name: 'Custom APIs', desc: 'Any backend speaking HTTP on exposed ports', icon: 'Workflow' }
  ]
};
