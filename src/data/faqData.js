export const FAQ_CATEGORIES = [
  { id: 'all', name: 'All Questions' },
  { id: 'shared', name: 'Shared Hosting' },
  { id: 'flexible', name: 'Flexible / Burst' },
  { id: 'vps', name: 'VPS Hosting' },
  { id: 'managed', name: 'Managed Services' },
  { id: 'billing', name: 'Billing & Policy' }
];

export const FAQ_DATA = [
  {
    category: 'shared',
    question: 'What is Hextorq Shared Hosting?',
    answer: 'Unlike traditional cPanel hosting designed for static HTML or WordPress sites, Hextorq Shared Hosting is specifically engineered for modern full-stack web applications. Each shared account provisions an isolated runtime environment optimized to host one frontend (React, Vite, Next.js, etc.) and one backend API (Node.js, Python, PHP, Go) seamlessly.'
  },
  {
    category: 'shared',
    question: 'Can I host a frontend and backend together?',
    answer: 'Yes, absolutely! That is the core design of Hextorq Shared Hosting. You connect your frontend repository and your backend repository into a unified project. We automatically configure reverse proxies, routing, internal communication, and SSL certificates for both.'
  },
  {
    category: 'shared',
    question: 'How many applications can I host on one shared plan?',
    answer: 'Each Shared Hosting plan is dedicated to ONE complete application (1 Frontend + 1 Backend). If you need to host multiple distinct applications, databases, or microservices, our VPS plans allow you to run unlimited applications within your allocated virtual server compute.'
  },
  {
    category: 'flexible',
    question: 'What is the difference between Fixed and Flexible Shared Hosting?',
    answer: 'Fixed Shared Hosting gives you a strict, predictable allocation (e.g., 2 vCPU, 2 GB RAM) at our lowest price point. Flexible (Burst) Shared Hosting provides baseline resources, but during sudden traffic spikes, it automatically allows your application to tap into available shared cluster headroom (up to 3x-4x base capacity) so your users never experience timeouts or slowdowns.'
  },
  {
    category: 'shared',
    question: 'What happens when I reach my resource limit on Fixed Shared Hosting?',
    answer: 'On Fixed Shared Hosting, your application is kept strictly within its allocated CPU and memory threshold. If exceeded, incoming requests are gracefully queued or throttled rather than crashed. You will receive an instant dashboard alert suggesting an upgrade or a switch to our Flexible plan.'
  },
  {
    category: 'flexible',
    question: 'How does resource bursting work in practice?',
    answer: 'When a traffic surge hits, our runtime hypervisor detects elevated CPU/RAM pressure and dynamically extends temporary compute buffers from the node\'s idle pool. Once traffic subsides, your application usage smoothly returns to base parameters, and the shared capacity returns to the cluster pool.'
  },
  {
    category: 'flexible',
    question: 'Is burst capacity 100% guaranteed at all times?',
    answer: 'Burst capacity is dynamically allocated from available node overhead and fair-share infrastructure pools. While our cluster algorithms maintain a 40%+ reserve buffer on all burst-enabled hypervisors, it is not an infinite dedicated resource. For mission-critical dedicated capacity guarantees, we recommend deploying a dedicated VPS.'
  },
  {
    category: 'vps',
    question: 'Do I get root access on Shared Hosting vs VPS?',
    answer: 'Shared Hosting is a fully managed container environment and does not include root or SSH system access (preventing accidental system misconfiguration). VPS Hosting grants 100% root access via SSH, allowing you to configure custom kernels, systemd daemons, package managers, and root-level utilities.'
  },
  {
    category: 'vps',
    question: 'What is VPS hosting?',
    answer: 'A VPS (Virtual Private Server) provides dedicated virtualized server hardware with dedicated vCPU cores, isolated DDR5 RAM, and independent NVMe storage. You select your preferred Linux distribution (or Windows Server) and have full autonomy over the operating system.'
  },
  {
    category: 'vps',
    question: 'Can I run Node.js, Python, PHP, or Go on Hextorq?',
    answer: 'Yes! Both our Shared Hosting and VPS infrastructure provide first-class support for modern runtimes including Node.js (all LTS versions), Python (FastAPI, Flask, Django), PHP (8.1, 8.2, 8.3), and Go compiled binaries.'
  },
  {
    category: 'vps',
    question: 'Can I use Docker and Docker Compose on VPS?',
    answer: 'Yes. All Hextorq VPS instances support native Docker, Docker Compose, Podman, and containerd. You can deploy multi-container microservices, database clusters, Redis caches, and custom webhooks effortlessly.'
  },
  {
    category: 'vps',
    question: 'Can I upgrade or scale my VPS later?',
    answer: 'Yes! You can scale your CPU, RAM, and NVMe storage at any time with minimal reboot downtime (under 60 seconds) directly from the control panel, preserving all your files and configuration intact.'
  },
  {
    category: 'managed',
    question: 'What does Managed VPS include?',
    answer: 'With Managed VPS, our senior DevOps engineers take full responsibility for initial server hardening, OS updates, security patches, firewall tuning, automated snapshot configuration, web server optimization, and 24/7 uptime monitoring with a 15-minute response SLA.'
  },
  {
    category: 'shared',
    question: 'Where are your data centers located?',
    answer: 'We operate carrier-neutral high-availability facilities in Mumbai (India), Singapore, Frankfurt (Germany), London (United Kingdom), and Virginia (United States). You can choose your server location during deployment.'
  },
  {
    category: 'billing',
    question: 'Do you provide automated backups?',
    answer: 'Yes! Fixed Shared includes weekly backups, Flexible Shared includes daily automated snapshots, and VPS plans feature configurable cloud snapshot schedules with instant point-in-time rollbacks.'
  },
  {
    category: 'managed',
    question: 'How do migrations work?',
    answer: 'We provide migration assistance for all hosting plans and 100% free white-glove migration for all Managed VPS customers. Our engineers handle data transfer, database sync, and DNS handover without downtime.'
  }
];
