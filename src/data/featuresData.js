export const ARCHITECTURE_COMPARISON = [
  {
    feature: 'Architecture Model',
    fixedShared: '1 Frontend + 1 Backend dedicated container',
    flexShared: '1 Frontend + 1 Backend with adaptive burst headroom',
    vps: 'Complete standalone virtual server with root OS',
    managedVps: 'Full virtual server with white-glove engineering management'
  },
  {
    feature: 'Resource Limit Behavior',
    fixedShared: 'Strict plan quota (graceful queueing at limit)',
    flexShared: 'Dynamic access to available shared node headroom',
    vps: 'Dedicated virtual compute allocation',
    managedVps: 'Dedicated compute with proactive resource alerts'
  },
  {
    feature: 'Traffic Surge Handling',
    fixedShared: 'Requests throttled safely at plan limit',
    flexShared: 'Automatic temporary expansion during spikes',
    vps: 'Compute sized to server capacity; scale anytime',
    managedVps: 'Engineered scale, monitoring & load assistance'
  },
  {
    feature: 'Root & SSH Access',
    fixedShared: 'No (Managed container isolation)',
    flexShared: 'No (Managed container isolation)',
    vps: 'Full Root & SSH Key Authentication',
    managedVps: 'Full Root + Sudo engineering support'
  },
  {
    feature: 'Operating System Selection',
    fixedShared: 'Standard managed runtime environments',
    flexShared: 'Standard managed runtime environments',
    vps: 'Ubuntu, Debian, Rocky, Alma, Windows Server',
    managedVps: 'Hardened Linux distributions optimized by team'
  },
  {
    feature: 'Applications Allowed',
    fixedShared: 'Single Application (1 Front + 1 Back)',
    flexShared: 'Single Application (1 Front + 1 Back)',
    vps: 'Unlimited applications & services',
    managedVps: 'Unlimited applications with multi-stack setups'
  },
  {
    feature: 'Docker & Custom Daemons',
    fixedShared: 'Standard runtimes (Node, Python, PHP, Go)',
    flexShared: 'Standard runtimes (Node, Python, PHP, Go)',
    vps: 'Full Docker, Podman, Compose, Systemd',
    managedVps: 'Full Docker with orchestration assistance'
  },
  {
    feature: 'Server Administration',
    fixedShared: 'Zero server management required',
    flexShared: 'Zero server management required',
    vps: 'Self-managed by developer',
    managedVps: 'Fully managed by Hextorq engineers'
  },
  {
    feature: 'Best Suited For',
    fixedShared: 'Predictable traffic, staging, fixed-budget client sites',
    flexShared: 'E-commerce, viral launches, variable API workloads',
    vps: 'Custom databases, microservices, multiple projects',
    managedVps: 'Businesses wanting VPS power without maintenance overhead'
  }
];

export const INFRASTRUCTURE_SPECS = [
  {
    id: 'nvme',
    title: 'Enterprise NVMe Solid-State Storage',
    subtitle: 'High Throughput & Low Latency',
    description: 'Every instance is backed by enterprise NVMe solid-state storage arrays in redundant configurations, ensuring fast database queries, quick build execution, and reliable asset delivery.',
    metrics: [
      { label: 'Storage Type', value: 'Enterprise NVMe' },
      { label: 'Latency Profile', value: 'Sub-millisecond' },
      { label: 'Redundancy', value: 'Hardware Array' }
    ],
    icon: 'HardDrive'
  },
  {
    id: 'compute',
    title: 'Modern Multi-Core Server Processors',
    subtitle: 'High IPC & Responsive Execution',
    description: 'We run on modern enterprise server processors engineered for high instruction throughput, swift compilation, and concurrent API request handling.',
    metrics: [
      { label: 'Processor Tier', value: 'AMD EPYC / Xeon' },
      { label: 'Virtualization', value: 'Hardware-Assisted' },
      { label: 'Core Isolation', value: 'Kernel cgroups' }
    ],
    icon: 'Cpu'
  },
  {
    id: 'ram',
    title: 'Fault-Tolerant ECC Memory',
    subtitle: 'High Stability for In-Memory Workloads',
    description: 'Error-correcting ECC memory protects long-running in-memory caches, background queue workers, and application processes against soft memory bit-flips.',
    metrics: [
      { label: 'Memory Standard', value: 'Enterprise DDR5/DDR4' },
      { label: 'Integrity', value: 'ECC Enabled' },
      { label: 'Allocation', value: 'Isolated Per Sandbox' }
    ],
    icon: 'Zap'
  },
  {
    id: 'network',
    title: 'Redundant Carrier Network & DDoS Shield',
    subtitle: 'High-Availability Routing & Edge Filtering',
    description: 'Multi-homed carrier connectivity with automated routing failover ensures minimal packet loss and edge filtering against volumetric network floods.',
    metrics: [
      { label: 'Network Peering', value: 'Direct IX Peered' },
      { label: 'Protection', value: 'Edge DDoS Filter' },
      { label: 'Protocol Support', value: 'HTTP/2 & HTTP/3' }
    ],
    icon: 'Globe'
  }
];

export const USE_CASES = [
  {
    title: 'Modern Single-Page Applications (SPA)',
    desc: 'React, Vite, Next.js, or Vue frontends coupled with Express, FastAPI, or PHP backends.',
    techs: ['React', 'Vite', 'Node.js', 'FastAPI'],
    recommendedPlan: 'Shared Fixed or Flex Growth',
    icon: 'Layout'
  },
  {
    title: 'Variable Traffic & E-Commerce Stores',
    desc: 'Stores experiencing sudden traffic rushes during product drops, marketing pushes, or seasonal sales.',
    techs: ['Next.js', 'Node.js', 'Stripe', 'Redis'],
    recommendedPlan: 'Flex Growth or Flex Business',
    icon: 'ShoppingBag'
  },
  {
    title: 'SaaS APIs & Background Microservices',
    desc: 'Persistent background workers, WebSockets, scheduled cron jobs, and database-backed REST APIs.',
    techs: ['Python', 'Go', 'PostgreSQL', 'Docker'],
    recommendedPlan: 'Start or Pro VPS',
    icon: 'Terminal'
  },
  {
    title: 'Agency Client Portfolios',
    desc: 'Reliable, predictable hosting for client web applications with zero server maintenance overhead.',
    techs: ['PHP', 'Laravel', 'React', 'MySQL'],
    recommendedPlan: 'Shared Fixed Growth',
    icon: 'Briefcase'
  },
  {
    title: 'Multi-Tenant Platforms & Databases',
    desc: 'Custom infrastructures requiring root access, Docker Compose, Redis caches, and private networking.',
    techs: ['Docker', 'Nginx', 'PostgreSQL', 'Redis'],
    recommendedPlan: 'Business or Scale VPS',
    icon: 'Layers'
  },
  {
    title: 'Production Systems with Managed Support',
    desc: 'High-availability workloads with dedicated engineers handling security patching, updates, and monitoring.',
    techs: ['Linux', 'Custom Daemons', 'Microservices'],
    recommendedPlan: 'Managed Pro or Scale VPS',
    icon: 'ShieldCheck'
  }
];
