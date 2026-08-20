export const MOCK_APPS = [
  {
    id: 'app-1',
    name: 'nexus-store-prod',
    domain: 'shop.nexusbrands.tech',
    status: 'Healthy',
    type: 'Shared Flexible',
    location: 'Mumbai, IN',
    frontend: {
      framework: 'React + Vite (v5.4)',
      status: 'Online',
      uptime: '99.98%',
      latency: '24ms',
      lastDeploy: '14 mins ago',
      branch: 'main (git: #8f192b)'
    },
    backend: {
      runtime: 'Node.js 20 LTS (Express)',
      status: 'Online',
      uptime: '99.99%',
      port: 8080,
      lastDeploy: '14 mins ago',
      branch: 'main (git: #8f192b)'
    },
    metrics: {
      cpuCurrent: 42,
      cpuLimit: 100,
      cpuBase: '2 vCPU',
      cpuBurst: 'Active (3.1 vCPU available)',
      ramCurrent: 1.45,
      ramLimit: 2.0,
      ramMaxBurst: 6.0,
      storageUsed: 8.4,
      storageTotal: 25.0,
      bandwidthUsed: 412,
      bandwidthTotal: 3000,
      requestsToday: '184,290',
      avgResponseTime: '38ms'
    }
  },
  {
    id: 'app-2',
    name: 'pulse-telemetry-api',
    domain: 'api.pulsemetrics.io',
    status: 'Healthy',
    type: 'Pro VPS',
    location: 'Frankfurt, DE',
    frontend: {
      framework: 'Next.js 14 SSR',
      status: 'Online',
      uptime: '100%',
      latency: '18ms',
      lastDeploy: '2 hours ago',
      branch: 'release/v2.1'
    },
    backend: {
      runtime: 'Python 3.12 (FastAPI + Celery)',
      status: 'Online',
      uptime: '100%',
      port: 8000,
      lastDeploy: '2 hours ago',
      branch: 'release/v2.1'
    },
    metrics: {
      cpuCurrent: 28,
      cpuLimit: 100,
      cpuBase: '2 vCPU',
      cpuBurst: 'Dedicated Limit',
      ramCurrent: 2.15,
      ramLimit: 4.0,
      ramMaxBurst: 4.0,
      storageUsed: 22.8,
      storageTotal: 80.0,
      bandwidthUsed: 890,
      bandwidthTotal: 4000,
      requestsToday: '492,100',
      avgResponseTime: '22ms'
    }
  }
];

export const MOCK_DEPLOYMENTS = [
  {
    id: 'dep-904',
    app: 'nexus-store-prod',
    commit: 'fix(cart): optimize checkout session payload',
    hash: '8f192bc',
    author: 'alex-dev',
    branch: 'main',
    status: 'Success',
    duration: '42s',
    timestamp: '14 mins ago'
  },
  {
    id: 'dep-903',
    app: 'nexus-store-prod',
    commit: 'feat(auth): add OAuth2 refresh token rotation',
    hash: '3e74a10',
    author: 'priya-tech',
    branch: 'main',
    status: 'Success',
    duration: '38s',
    timestamp: '4 hours ago'
  },
  {
    id: 'dep-902',
    app: 'pulse-telemetry-api',
    commit: 'perf(db): add composite index for time-series queries',
    hash: 'b7128ca',
    author: 'marcus-ops',
    branch: 'release/v2.1',
    status: 'Success',
    duration: '56s',
    timestamp: '2 hours ago'
  },
  {
    id: 'dep-901',
    app: 'nexus-store-prod',
    commit: 'chore(deps): update vite and tailwindcss dependencies',
    hash: '9a01fd4',
    author: 'alex-dev',
    branch: 'main',
    status: 'Success',
    duration: '45s',
    timestamp: 'Yesterday'
  }
];

export const MOCK_LOGS = [
  '[2026-08-20 12:40:01] INFO [hextorq-proxy] Incoming HTTP/3 connection handshake from 103.21.244.18 [TLS 1.3]',
  '[2026-08-20 12:40:02] INFO [nexus-frontend] SSR route /products/ultra-speed served in 18.4ms (cache: HIT)',
  '[2026-08-20 12:40:03] INFO [nexus-backend] POST /api/v1/checkout/session - 200 OK (latency: 34ms)',
  '[2026-08-20 12:40:05] WARN [burst-monitor] Traffic +38% above 10m rolling average. Dynamic burst headroom allocated (+1.2 vCPU, +1.5GB RAM buffer).',
  '[2026-08-20 12:40:07] INFO [hextorq-waf] Sanitized payload for /api/v1/cart. Zero anomalies detected.',
  '[2026-08-20 12:40:11] INFO [db-pool] Connection pool active: 14/50 connections, idle: 36, latency: 0.8ms'
];
