export const VPS_TIERS = [
  {
    id: 'vps-1',
    name: 'VPS-1',
    tagline: 'Entry-level fixed compute for staging, micro-services, and learning.',
    monthlyPrice: 349,
    yearlyPrice: 289,
    currency: '₹',
    badge: 'STARTER',
    specs: {
      vcpu: '1 vCore',
      ram: '2 GB RAM',
      storage: '40 GB NVMe',
      bandwidth: '500 Mbps Bandwidth'
    },
    features: [
      '1 Dedicated vCore',
      '2 GB Memory',
      '40 GB NVMe Solid-State Storage',
      '500 Mbps Public Bandwidth',
      'Unlimited Traffic',
      'Daily Backup (Previous 24 Hours)',
      'Host Any Number of Sites/Apps',
      'Self-Hosted or Managed'
    ],
    ctaText: 'Deploy VPS-1',
    popular: false
  },
  {
    id: 'vps-2',
    name: 'VPS-2',
    tagline: 'Great for production APIs, small databases, and multi-site hosting.',
    monthlyPrice: 809,
    yearlyPrice: 679,
    currency: '₹',
    badge: 'POPULAR',
    specs: {
      vcpu: '2 vCores',
      ram: '8 GB RAM',
      storage: '75 GB NVMe',
      bandwidth: '1 Gbps Bandwidth'
    },
    features: [
      '2 Dedicated vCores',
      '8 GB Dedicated RAM',
      '75 GB NVMe Storage',
      '1 Gbps Public Bandwidth',
      'Unlimited Traffic',
      'Daily Backup (Previous 24 Hours)',
      'Host Any Number of Sites/Apps',
      'Self-Hosted or Managed'
    ],
    ctaText: 'Deploy VPS-2',
    popular: true
  },
  {
    id: 'vps-3',
    name: 'VPS-3',
    tagline: 'The standard for multi-service setups, caches, and heavier runtimes.',
    monthlyPrice: 1169,
    yearlyPrice: 979,
    currency: '₹',
    badge: null,
    specs: {
      vcpu: '2 vCores',
      ram: '12 GB RAM',
      storage: '100 GB NVMe',
      bandwidth: '2 Gbps Bandwidth'
    },
    features: [
      '2 Dedicated vCores',
      '12 GB High-Speed RAM',
      '100 GB NVMe Storage',
      '2 Gbps Public Bandwidth',
      'Unlimited Traffic',
      'Daily Backup (Previous 24 Hours)',
      'Host Any Number of Sites/Apps',
      'Self-Hosted or Managed'
    ],
    ctaText: 'Deploy VPS-3',
    popular: false
  },
  {
    id: 'vps-4',
    name: 'VPS-4',
    tagline: 'Highest fixed compute for demanding databases and multi-tenant applications.',
    monthlyPrice: 2249,
    yearlyPrice: 1889,
    currency: '₹',
    badge: 'HIGH COMPUTE',
    specs: {
      vcpu: '2 vCores',
      ram: '16 GB RAM',
      storage: '100 GB NVMe',
      bandwidth: '3 Gbps Bandwidth'
    },
    features: [
      '2 Dedicated vCores',
      '16 GB High-Speed RAM',
      '100 GB NVMe Storage',
      '3 Gbps Public Bandwidth',
      'Unlimited Traffic',
      'Daily Backup (Previous 24 Hours)',
      'Host Any Number of Sites/Apps',
      'Self-Hosted or Managed'
    ],
    ctaText: 'Deploy VPS-4',
    popular: false
  }
];
