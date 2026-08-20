export const MOCK_APPS = [
  {
    id: 'app-ecommerce',
    name: 'storefront-production',
    type: 'Flexible Shared (Flex Growth)',
    status: 'Online',
    domain: 'shop.mybrand.tech',
    location: 'Mumbai, India',
    created: '2 months ago',
    frontend: {
      framework: 'Next.js 14',
      branch: 'main',
      status: 'Ready',
      uptime: '99.98%'
    },
    backend: {
      runtime: 'Node.js 20 LTS',
      port: 8080,
      branch: 'main',
      status: 'Ready',
      uptime: '99.98%'
    },
    metrics: {
      cpuCurrent: 42,
      cpuBurst: '2.0 vCPU Base (Burst headroom available)',
      ramCurrent: 1.4,
      ramLimit: 2.0,
      storageUsed: 9.8,
      storageTotal: 25,
      bandwidthUsed: 420,
      bandwidthTotal: 3000
    }
  },
  {
    id: 'app-analytics-api',
    name: 'metrics-collector-api',
    type: 'Fixed Shared (Growth)',
    status: 'Online',
    domain: 'api.collector.internal',
    location: 'Singapore',
    created: '3 weeks ago',
    frontend: {
      framework: 'React / Vite SPA',
      branch: 'prod',
      status: 'Ready',
      uptime: '99.99%'
    },
    backend: {
      runtime: 'Python 3.12 (FastAPI)',
      port: 8000,
      branch: 'prod',
      status: 'Ready',
      uptime: '99.99%'
    },
    metrics: {
      cpuCurrent: 28,
      cpuBurst: '2 vCPU Dedicated Quota',
      ramCurrent: 0.9,
      ramLimit: 2.0,
      storageUsed: 6.2,
      storageTotal: 25,
      bandwidthUsed: 210,
      bandwidthTotal: 1500
    }
  }
];

export const MOCK_DEPLOYMENTS = [
  {
    id: 'dep-108',
    app: 'storefront-production',
    commit: 'feat: add payment intent webhook handler',
    hash: '7a29e41',
    branch: 'main',
    author: 'dev-lead',
    duration: '38s',
    status: 'Successful',
    timestamp: '14 minutes ago'
  },
  {
    id: 'dep-107',
    app: 'storefront-production',
    commit: 'fix: optimize responsive product grid images',
    hash: 'b381fa0',
    branch: 'main',
    author: 'frontend-eng',
    duration: '42s',
    status: 'Successful',
    timestamp: '2 hours ago'
  },
  {
    id: 'dep-106',
    app: 'metrics-collector-api',
    commit: 'refactor: batch write telemetry payloads',
    hash: '9f12d8a',
    branch: 'prod',
    author: 'backend-eng',
    duration: '29s',
    status: 'Successful',
    timestamp: '1 day ago'
  }
];

export const MOCK_LOGS = [
  `[${new Date().toISOString().substring(11, 19)}] INFO [proxy] HTTP/2 GET /api/v1/healthcheck status=200`,
  `[${new Date().toISOString().substring(11, 19)}] INFO [runtime] Node.js worker pool healthy (PID: 4182)`,
  `[${new Date().toISOString().substring(11, 19)}] INFO [edge] SSL certificate valid (Let's Encrypt TLS 1.3)`,
  `[${new Date().toISOString().substring(11, 19)}] INFO [router] Frontend bundle cache HIT on edge layer`,
  `[${new Date().toISOString().substring(11, 19)}] INFO [system] Container memory at 45% of allocation`
];
