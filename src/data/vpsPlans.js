export const VPS_TIERS = [
  {
    id: 'vps-nano',
    name: 'Nano VPS',
    tagline: 'Entry-level dedicated cloud compute for staging, micro-services, and learning.',
    monthlyPrice: 399,
    yearlyPrice: 339,
    currency: '₹',
    badge: 'STARTER',
    specs: {
      vcpu: '1 vCPU',
      ram: '1 GB RAM',
      storage: '25 GB NVMe',
      bandwidth: '1 TB Bandwidth',
      rootAccess: true,
      ipv4: '1 Dedicated IPv4',
      ipv6: '/64 IPv6 Subnet'
    },
    features: [
      'Full Root & SSH Key Access',
      '1 Dedicated vCPU Core',
      '1 GB Memory',
      '25 GB NVMe Solid-State Storage',
      '1 TB High-Speed Outbound Transfer',
      'Linux OS of Your Choice',
      'Custom ISO Support',
      'Instant Server Rebuilds'
    ],
    ctaText: 'Deploy Nano VPS',
    popular: false
  },
  {
    id: 'vps-start',
    name: 'Start VPS',
    tagline: 'Great for production APIs, small databases, and Docker container stacks.',
    monthlyPrice: 599,
    yearlyPrice: 499,
    currency: '₹',
    badge: null,
    specs: {
      vcpu: '1 vCPU',
      ram: '2 GB RAM',
      storage: '40 GB NVMe',
      bandwidth: '2 TB Bandwidth',
      rootAccess: true,
      ipv4: '1 Dedicated IPv4',
      ipv6: '/64 IPv6 Subnet'
    },
    features: [
      'Full Root & Terminal Access',
      '1 Compute Core',
      '2 GB Dedicated RAM',
      '40 GB NVMe Storage',
      '2 TB Monthly Transfer',
      'Docker & Containerd Ready',
      'Automated Weekly Snapshot',
      'Standard Network Protection'
    ],
    ctaText: 'Deploy Start VPS',
    popular: false
  },
  {
    id: 'vps-pro',
    name: 'Pro VPS',
    tagline: 'The developer standard for multi-service setups, Redis caches, and heavy Node/Python runtimes.',
    monthlyPrice: 999,
    yearlyPrice: 849,
    currency: '₹',
    badge: 'MOST POPULAR',
    specs: {
      vcpu: '2 vCPU',
      ram: '4 GB RAM',
      storage: '80 GB NVMe',
      bandwidth: '4 TB Bandwidth',
      rootAccess: true,
      ipv4: '1 Dedicated IPv4',
      ipv6: '/64 IPv6 Subnet'
    },
    features: [
      '2 Dedicated Compute Cores',
      '4 GB High-Speed RAM',
      '80 GB NVMe Storage',
      '4 TB High-Bandwidth Transfer',
      'Docker & Compose Support',
      'Custom Firewall Management',
      'Daily Automated Snapshots',
      'Priority Network Routing'
    ],
    ctaText: 'Deploy Pro VPS',
    popular: true
  },
  {
    id: 'vps-business',
    name: 'Business VPS',
    tagline: 'Heavy compute for demanding SQL databases, microservices, and multi-tenant applications.',
    monthlyPrice: 1699,
    yearlyPrice: 1449,
    currency: '₹',
    badge: 'HIGH COMPUTE',
    specs: {
      vcpu: '4 vCPU',
      ram: '8 GB RAM',
      storage: '160 GB NVMe',
      bandwidth: '6 TB Bandwidth',
      rootAccess: true,
      ipv4: '1 Dedicated IPv4',
      ipv6: '/64 IPv6 Subnet'
    },
    features: [
      '4 Dedicated Compute Cores',
      '8 GB High-Speed RAM',
      '160 GB NVMe Storage',
      '6 TB High-Speed Data Transfer',
      'High-Speed Interface Routing',
      'Custom Kernel Parameters Allowed',
      'Automated Disaster Recovery Backups',
      'Priority Infrastructure Support'
    ],
    ctaText: 'Deploy Business VPS',
    popular: false
  },
  {
    id: 'vps-scale',
    name: 'Scale VPS',
    tagline: 'Powerhouse server capacity for large workloads, database clusters, and demanding traffic.',
    monthlyPrice: 2999,
    yearlyPrice: 2549,
    currency: '₹',
    badge: 'SCALE POWER',
    specs: {
      vcpu: '6 vCPU',
      ram: '16 GB RAM',
      storage: '320 GB NVMe',
      bandwidth: '8 TB Bandwidth',
      rootAccess: true,
      ipv4: '2 Dedicated IPv4',
      ipv6: '/64 IPv6 Subnet'
    },
    features: [
      '6 Dedicated Compute Cores',
      '16 GB Multi-Channel RAM',
      '320 GB NVMe in RAID Array',
      '8 TB Transfer with Global Peering',
      '2 Dedicated Static IPv4 Addresses',
      'Anycast Network Routing Support',
      'Frequent Snapshot Frequency Option',
      'Senior Support Escalation Channel'
    ],
    ctaText: 'Deploy Scale VPS',
    popular: false
  }
];

export const VPS_CONFIGURATOR_OPTIONS = {
  cpuOptions: [
    { value: 1, label: '1 vCPU', price: 150 },
    { value: 2, label: '2 vCPU', price: 300 },
    { value: 4, label: '4 vCPU', price: 650 },
    { value: 6, label: '6 vCPU', price: 1050 },
    { value: 8, label: '8 vCPU', price: 1500 }
  ],
  ramOptions: [
    { value: 1, label: '1 GB', price: 100 },
    { value: 2, label: '2 GB', price: 200 },
    { value: 4, label: '4 GB', price: 400 },
    { value: 8, label: '8 GB', price: 750 },
    { value: 16, label: '16 GB', price: 1400 },
    { value: 32, label: '32 GB', price: 2700 }
  ],
  storageOptions: [
    { value: 25, label: '25 GB NVMe', price: 149 },
    { value: 50, label: '50 GB NVMe', price: 250 },
    { value: 80, label: '80 GB NVMe', price: 380 },
    { value: 160, label: '160 GB NVMe', price: 680 },
    { value: 320, label: '320 GB NVMe', price: 1250 },
    { value: 640, label: '640 GB NVMe', price: 2200 }
  ],
  osOptions: [
    { id: 'ubuntu', name: 'Ubuntu 24.04 LTS', category: 'Linux', icon: 'Ubuntu', popular: true, licenseCost: 0 },
    { id: 'debian', name: 'Debian 12 Bookworm', category: 'Linux', icon: 'Debian', popular: false, licenseCost: 0 },
    { id: 'rocky', name: 'Rocky Linux 9', category: 'Linux', icon: 'Terminal', popular: false, licenseCost: 0 },
    { id: 'alma', name: 'AlmaLinux 9', category: 'Linux', icon: 'Server', popular: false, licenseCost: 0 },
    { id: 'windows', name: 'Windows Server 2022', category: 'Windows', icon: 'Cpu', popular: false, licenseCost: 999 }
  ],
  locations: [
    { id: 'in', name: 'Mumbai, India', flag: '🇮🇳', region: 'Asia-South' },
    { id: 'sg', name: 'Singapore', flag: '🇸🇬', region: 'Asia-Pacific' },
    { id: 'de', name: 'Frankfurt, Germany', flag: '🇩🇪', region: 'Europe-Central' },
    { id: 'uk', name: 'London, United Kingdom', flag: '🇬🇧', region: 'Europe-West' },
    { id: 'us', name: 'Virginia, United States', flag: '🇺🇸', region: 'US-East' }
  ],
  addons: [
    { id: 'managed', name: 'Full Server Management & Hardening', price: 699, type: 'addon', recommended: true },
    { id: 'backups', name: 'Daily Automated Cloud Snapshots', price: 199, type: 'addon' },
    { id: 'extra_ip', name: 'Additional Dedicated IPv4', price: 150, type: 'addon' }
  ]
};

export const MANAGED_SERVICES = [
  {
    title: 'Server Provisioning & OS Hardening',
    description: 'Kernel tuning, SSH key configuration, non-root user setup, and baseline security lockdowns before handoff.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Security Configuration & Patching',
    description: 'Proactive vulnerability checks, regular kernel updates, and security patches without unnecessary disruption.',
    icon: 'RefreshCw'
  },
  {
    title: 'Web Server & Runtime Setup',
    description: 'Configurations for Nginx/Apache, Node.js PM2 process clustering, Python WSGI, and PHP-FPM environments.',
    icon: 'Cpu'
  },
  {
    title: 'Automated Snapshot & Backup Management',
    description: 'Scheduled multi-region snapshot storage with single-click restore assistance in case of accidental data loss.',
    icon: 'HardDrive'
  },
  {
    title: 'Migration Assistance',
    description: 'Our technical team assists with transferring your existing VPS files, databases, and DNS from previous providers.',
    icon: 'ArrowRightLeft'
  },
  {
    title: 'Monitoring & Troubleshooting',
    description: 'Infrastructure monitors for CPU, memory, and disk thresholds with rapid investigation when issues occur.',
    icon: 'Activity'
  }
];
