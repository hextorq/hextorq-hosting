export const ARCHITECTURE_COMPARISON = [
  {
    feature: 'Architecture Purpose',
    fixedShared: '1 Frontend + 1 Backend dedicated app container',
    flexShared: '1 Frontend + 1 Backend with adaptive resource scaling',
    vps: 'Complete standalone virtual server with root OS',
    managedVps: 'Full virtual server with white-glove engineering management'
  },
  {
    feature: 'Resource Ceiling',
    fixedShared: 'Strict plan quota (predictable cost)',
    flexShared: 'Dynamic burst into shared capacity pool',
    vps: '100% Dedicated virtual compute limits',
    managedVps: '100% Dedicated with autoscaling advisories'
  },
  {
    feature: 'Burst Capability',
    fixedShared: 'None (Hard allocation)',
    flexShared: '2.5x to 4x surge absorption',
    vps: 'Manual upgrade or dynamic scale plans',
    managedVps: 'Engineered scale & load balancing'
  },
  {
    feature: 'Root & SSH Access',
    fixedShared: 'No (Isolated secure container sandbox)',
    flexShared: 'No (Isolated secure container sandbox)',
    vps: 'Full Root / SSH Key Authentication',
    managedVps: 'Full Root + Sudo management team access'
  },
  {
    feature: 'Operating System Selection',
    fixedShared: 'Managed runtime environment',
    flexShared: 'Managed runtime environment',
    vps: 'Ubuntu, Debian, Rocky, Alma, Windows',
    managedVps: 'Hardened Linux distributions optimized by team'
  },
  {
    feature: 'Multiple Applications',
    fixedShared: 'Single Application (1 Front + 1 Back)',
    flexShared: 'Single Application (1 Front + 1 Back)',
    vps: 'Unlimited applications (based on specs)',
    managedVps: 'Unlimited applications with multi-stack setups'
  },
  {
    feature: 'Docker / Custom Daemons',
    fixedShared: 'Standard runtimes (Node, Python, PHP, Go)',
    flexShared: 'Standard runtimes (Node, Python, PHP, Go)',
    vps: 'Full Docker, Podman, Compose, Systemd',
    managedVps: 'Full Docker with orchestration support'
  },
  {
    feature: 'Server Administration',
    fixedShared: 'Zero server management needed',
    flexShared: 'Zero server management needed',
    vps: 'Self-managed by developer',
    managedVps: '100% Fully Managed by Hextorq Engineers'
  },
  {
    feature: 'Ideal For',
    fixedShared: 'Budget-conscious devs, staging apps, fixed-budget clients',
    flexShared: 'Viral startups, ecommerce launches, sudden traffic peaks',
    vps: 'Engineers needing root control, custom databases, microservices',
    managedVps: 'Businesses wanting VPS power without server headache'
  }
];

export const INFRASTRUCTURE_SPECS = [
  {
    id: 'nvme',
    title: 'PCIe Gen4 Enterprise NVMe',
    subtitle: 'Up to 7,000 MB/s Read & 5,500 MB/s Write Throughput',
    description: 'Every instance is backed by enterprise-grade NVMe storage arrays in hardware RAID configurations, guaranteeing sub-millisecond database queries and instantaneous app build times.',
    metrics: [
      { label: 'IOPS Capacity', value: '100k+ IOPS' },
      { label: 'Latency', value: '< 0.3 ms' },
      { label: 'Redundancy', value: 'RAID 10' }
    ],
    icon: 'HardDrive'
  },
  {
    id: 'compute',
    title: 'High-Frequency AMD EPYC & Intel Xeon',
    subtitle: 'Sustained 3.5GHz+ Turbo Clock Frequencies',
    description: 'We do not oversell CPU cycles. Dedicated and burstable compute allocations run on modern server processors optimized for high IPC, swift JIT compilation, and parallel API request handling.',
    metrics: [
      { label: 'Clock Speed', value: 'Up to 3.8 GHz' },
      { label: 'Instruction Set', value: 'AVX-512 Ready' },
      { label: 'Architecture', value: 'Zen4 / Sapphire' }
    ],
    icon: 'Cpu'
  },
  {
    id: 'ram',
    title: 'Enterprise DDR5 ECC Memory',
    subtitle: 'Error-Correcting Code with Multi-Channel Bandwidth',
    description: 'Fault-tolerant ECC memory protects your long-running in-memory stores, Redis caches, and backend runtime processes against soft memory bit-flips and silent data corruption.',
    metrics: [
      { label: 'Memory Standard', value: 'DDR5 4800MHz' },
      { label: 'Fault Tolerance', value: 'ECC Enabled' },
      { label: 'Buffer Overhead', value: '0% Stolen' }
    ],
    icon: 'Zap'
  },
  {
    id: 'network',
    title: 'Tier-3 Carrier Network & DDoS Shield',
    subtitle: 'Redundant 40Gbps - 200Gbps Uplinks with Anycast Edge',
    description: 'Multi-homed BGP connectivity directly peered with Tier-1 carriers ensures ultra-low packet loss, automatic failover routing, and line-rate scrubbing of Volumetric DDoS attacks.',
    metrics: [
      { label: 'Scrubbing Capacity', value: '500+ Gbps' },
      { label: 'Network Uptime SLA', value: '99.95%' },
      { label: 'Edge Latency', value: '< 25ms' }
    ],
    icon: 'Globe'
  }
];

export const USE_CASES = [
  {
    title: 'Modern Single-Page Apps (SPA)',
    desc: 'React, Vite, Next.js, or Vue frontends coupled with Express or FastAPI backends.',
    techs: ['React', 'Vite', 'Node.js', 'FastAPI'],
    recommendedPlan: 'Shared Fixed or Flex Growth',
    icon: 'Layout'
  },
  {
    title: 'High-Spike E-Commerce Stores',
    desc: 'Stores experiencing sudden traffic rushes during promotions or product drops.',
    techs: ['Next.js', 'Node.js', 'Stripe', 'Redis'],
    recommendedPlan: 'Flex Business Shared',
    icon: 'ShoppingBag'
  },
  {
    title: 'SaaS APIs & Microservices',
    desc: 'Persistent background workers, WebSockets, scheduled cron jobs, and RESTful APIs.',
    techs: ['Python', 'Go', 'PostgreSQL', 'Docker'],
    recommendedPlan: 'Start or Pro VPS',
    icon: 'Terminal'
  },
  {
    title: 'Agency Client Portfolios',
    desc: 'Reliable, predictable hosting for client web applications with zero maintenance overhead.',
    techs: ['PHP', 'Laravel', 'React', 'MySQL'],
    recommendedPlan: 'Shared Fixed Growth',
    icon: 'Briefcase'
  },
  {
    title: 'Custom Multi-Tenant Platforms',
    desc: 'Complex infrastructures requiring custom kernels, Docker Compose, and multiple isolated services.',
    techs: ['Docker', 'Nginx', 'PostgreSQL', 'Redis'],
    recommendedPlan: 'Business or Scale VPS',
    icon: 'Layers'
  },
  {
    title: 'Mission-Critical Enterprise Systems',
    desc: 'Zero-downtime requirements with dedicated support engineers managing security and updates.',
    techs: ['Enterprise Linux', 'Custom Daemons', 'Kubernetes'],
    recommendedPlan: 'Managed Pro / Scale VPS',
    icon: 'ShieldCheck'
  }
];
