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