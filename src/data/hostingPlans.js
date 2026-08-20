export const SHARED_FIXED_PLANS = [
  {
    id: 'fixed-launch',
    name: 'Launch',
    tagline: 'Predictable resources for predictable workloads.',
    monthlyPrice: 79,
    yearlyPrice: 69,
    currency: '₹',
    badge: null,
    resourceModel: 'Fixed Resource Allocation',
    limitsBehavior: 'Hard resource quota with safe request queueing',
    specs: {
      vcpu: '1 vCPU',
      ram: '1 GB RAM',
      storage: '10 GB NVMe',
      bandwidth: '500 GB Transfer',
      apps: '1 Frontend + 1 Backend',
      ssl: 'Free SSL Included',
      backups: 'Weekly Backups',
      support: 'Standard Email Support'
    },
    features: [
      '1 Frontend (React, Vite, Next.js, Vue, Static)',
      '1 Backend (Node.js, Python, PHP, Go API)',
      'Isolated Container Sandbox',
      'Git Deployment Support',
      'Free Automated SSL Certificate',
      'HTTP/2 & HTTP/3 Protocol Support',
      'Real-time Access Logs',
      'Predictable Monthly Billing'
    ],
    ctaText: 'Deploy Launch',
    popular: false
  },
  {
    id: 'fixed-growth',
    name: 'Growth',
    tagline: 'Ideal for standard business websites and production APIs.',
    monthlyPrice: 149,
    yearlyPrice: 129,
    currency: '₹',
    badge: null,
    resourceModel: 'Fixed Resource Allocation',
    limitsBehavior: 'Hard resource quota with safe request queueing',
    specs: {
      vcpu: '2 vCPU',
      ram: '2 GB RAM',
      storage: '25 GB NVMe',
      bandwidth: '1.5 TB Transfer',
      apps: '1 Frontend + 1 Backend',
      ssl: 'Free SSL Included',
      backups: 'Daily Automated Backups',
      support: 'Standard + Chat Support'
    },
    features: [
      '1 Frontend + 1 Backend Architecture',
      '2 vCPU Defined Quota',
      '2 GB Defined Memory',
      '25 GB NVMe Solid-State Storage',
      'Custom Domain with Auto SSL',
      'Daily Automated Backups',
      'Environment Variables Vault',
      'Deployment Support Included'
    ],
    ctaText: 'Deploy Growth',
    popular: false
  },
  {
    id: 'fixed-business',
    name: 'Business',
    tagline: 'Maximum fixed resources for high-throughput single applications.',
    monthlyPrice: 299,
    yearlyPrice: 249,
    currency: '₹',
    badge: 'POPULAR FIXED',
    resourceModel: 'Fixed Resource Allocation',
    limitsBehavior: 'Hard resource quota with priority request queueing',
    specs: {
      vcpu: '4 vCPU',
      ram: '4 GB RAM',
      storage: '50 GB NVMe',
      bandwidth: '3 TB Transfer',
      apps: '1 Frontend + 1 Backend',
      ssl: 'Free Wildcard SSL',
      backups: 'Daily Backups with Retention',
      support: 'Priority Technical Support'
    },
    features: [
      '1 Frontend + 1 Backend Architecture',
      '4 vCPU High-Performance Quota',
      '4 GB High-Speed Memory',
      '50 GB NVMe Solid-State Storage',
      'Zero-Downtime Rolling Deploys',
      'Web Application Firewall (WAF) included',
      'Daily Backup Snapshots with Quick Restore',
      'Priority Technical Support'
    ],
    ctaText: 'Deploy Business',
    popular: true
  }
];

export const SHARED_BURST_PLANS = [
  {
    id: 'flex-launch',
    name: 'Flex Launch',
    tagline: 'Baseline resources with flexible shared capacity during demand increases.',
    monthlyPrice: 199,
    yearlyPrice: 169,
    currency: '₹',
    badge: 'FLEXIBLE',
    resourceModel: 'Flexible / Burst Allocation',
    burstCapacity: 'Available Shared Headroom',
    limitsBehavior: 'Draws additional shared capacity during temporary traffic spikes',
    specs: {
      vcpu: '1 vCPU base',
      ram: '1 GB RAM base',
      storage: '10 GB NVMe',
      bandwidth: '1 TB Transfer',
      apps: '1 Frontend + 1 Backend',
      ssl: 'Free SSL Included',
      backups: 'Daily Backups',
      support: 'Standard Email & Ticket Support'
    },
    features: [
      '1 Frontend + 1 Backend Architecture',
      'Flexible Resource Bursting',
      'Absorbs Temporary Traffic Surges',
      'Fair-Use Shared Headroom Pool',
      'Automated Git Deployments',
      'Free Auto-renewing SSL',
      'Burst Activity Indicators',
      'Standard Technical Support'
    ],
    ctaText: 'Start Flex Launch',
    popular: false
  },
  {
    id: 'flex-growth',
    name: 'Flex Growth',
    tagline: 'The sweet spot for variable traffic, media sites, and ecommerce launches.',
    monthlyPrice: 349,
    yearlyPrice: 299,
    currency: '₹',
    badge: 'POPULAR FLEX',
    resourceModel: 'Flexible / Burst Allocation',
    burstCapacity: 'High Shared Headroom Tier',
    limitsBehavior: 'Automatic temporary expansion into available shared node headroom',
    specs: {
      vcpu: '2 vCPU base',
      ram: '2 GB RAM base',
      storage: '25 GB NVMe',
      bandwidth: '3 TB Transfer',
      apps: '1 Frontend + 1 Backend',
      ssl: 'Free Wildcard SSL',
      backups: 'Daily Automated Backups',
      support: 'Priority Support Queue'
    },
    features: [
      '1 Frontend + 1 Backend Architecture',
      '2 vCPU Base + Burst Headroom',
      '2 GB RAM Base + Burst Headroom',
      '25 GB NVMe Solid-State Storage',
      'Capacity Returns to Pool When Traffic Drops',
      'DDoS Mitigation Included',
      'Daily Automated Backups',
      'Priority Technical Support'
    ],
    ctaText: 'Start Flex Growth',
    popular: true
  },
  {
    id: 'flex-business',
    name: 'Flex Business',
    tagline: 'High-tier burst capacity for mission-critical client workloads.',
    monthlyPrice: 599,
    yearlyPrice: 499,
    currency: '₹',
    badge: 'FLEX BUSINESS',
    resourceModel: 'Flexible / Burst Allocation',
    burstCapacity: 'Maximum Shared Headroom Tier',
    limitsBehavior: 'Priority access to shared node overflow buffer during surges',
    specs: {
      vcpu: '4 vCPU base',
      ram: '4 GB RAM base',
      storage: '50 GB NVMe',
      bandwidth: '5 TB Transfer',
      apps: '1 Frontend + 1 Backend',
      ssl: 'Free Wildcard SSL',
      backups: 'Daily Backups with Retention',
      support: 'Dedicated Support Queue'
    },
    features: [
      '1 Frontend + 1 Backend Architecture',
      '4 vCPU Base + Burst Headroom',
      '4 GB RAM Base + Burst Headroom',
      '50 GB NVMe Solid-State Storage',
      'Priority Burst Scheduling Across Node',
      'Web Application Firewall & DDoS Defense',
      'On-demand Backup Snapshot Points',
      'Dedicated Senior Support Queue'
    ],
    ctaText: 'Start Flex Business',
    popular: false
  }
];

export const SUPPORTED_STACKS = {
  frontends: [
    { name: 'React', desc: 'Single-page applications & SPA build outputs', icon: 'Atom' },
    { name: 'Vite', desc: 'Fast modern frontend build toolchain', icon: 'Zap' },
    { name: 'Next.js', desc: 'Modern web applications & static exports', icon: 'Layers' },
    { name: 'Vue', desc: 'Progressive reactive component framework', icon: 'Code' },
    { name: 'Svelte', desc: 'Lean, compiler-driven web components', icon: 'Flame' },
    { name: 'Static HTML', desc: 'Classic HTML5, CSS3, JavaScript bundles', icon: 'FileCode' }
  ],
  backends: [
    { name: 'Node.js', desc: 'Express, NestJS, Fastify, Koa APIs', icon: 'Server' },
    { name: 'Python', desc: 'FastAPI, Flask, Django REST APIs', icon: 'Terminal' },
    { name: 'PHP', desc: 'Modern PHP services & Laravel APIs', icon: 'Cpu' },
    { name: 'Go', desc: 'Compiled lightweight high-concurrency APIs', icon: 'Binary' },
    { name: 'Custom API', desc: 'Any backend speaking HTTP on exposed ports', icon: 'Workflow' }
  ]
};
