export const FAQ_CATEGORIES = [
  { id: 'all', name: 'All Questions' },
  { id: 'shared', name: 'Shared Hosting' },
  { id: 'flexible', name: 'Flexible / Burst' },
  { id: 'vps', name: 'VPS Hosting' },
  { id: 'managed', name: 'Managed Services' },
  { id: 'support', name: 'Support & Locations' }
];

export const FAQ_DATA = [
  {
    category: 'shared',
    question: 'What is Hextorq Shared Hosting?',
    answer: 'Unlike traditional cPanel hosting designed for static HTML or simple CMS sites, Hextorq Shared Hosting is purpose-built for modern web applications. Each shared account provisions an isolated runtime environment engineered to run one frontend (such as React, Vite, Next.js, Vue, or static assets) and one backend (such as Node.js, Python, PHP, or Go) together seamlessly.'
  },
  {
    category: 'shared',
    question: 'Can I host one frontend and one backend together?',
    answer: 'Yes, that is the core concept of Hextorq Shared Hosting. You connect your frontend and backend as one application. We handle routing, internal communication between services, and automated SSL for your custom domain.'
  },
  {
    category: 'shared',
    question: 'What is Fixed Shared Hosting?',
    answer: 'Fixed Shared Hosting gives you a defined, predictable resource allocation (CPU, RAM, and NVMe storage) at a fixed monthly price. It is ideal for predictable workloads, staging sites, client deliverables, and applications where fixed budget predictability is essential.'
  },
  {
    category: 'flexible',
    question: 'What is Flexible / Burst Hosting?',
    answer: 'Flexible Shared Hosting provides baseline resources (e.g., 1 vCPU, 2 vCPU, or 4 vCPU base) but allows your application to tap into available shared cluster capacity during temporary traffic surges. This prevents sudden request timeouts when your traffic spikes.'
  },
  {
    category: 'flexible',
    question: 'How does resource bursting work?',
    answer: 'When traffic demand rises, our runtime automatically allows your application to utilize additional available shared compute capacity. Once traffic subsides, resource usage returns to baseline, and the additional capacity returns to the shared pool. Additional capacity is subject to infrastructure availability and fair-use safeguards.'
  },
  {
    category: 'flexible',
    question: 'Is burst capacity guaranteed?',
    answer: 'Burst capacity is dynamically drawn from available shared infrastructure headroom. While our nodes maintain operational reserve buffers, burst capacity is not an infinite dedicated resource. For mission-critical dedicated capacity guarantees, we recommend deploying a dedicated VPS.'
  },
  {
    category: 'shared',
    question: 'What happens when fixed resources are exhausted?',
    answer: 'On Fixed Shared Hosting, your application operates within its defined resource allocation. If resource limits are reached, normal resource enforcement applies and incoming requests are queued safely to prevent service disruption. You can upgrade your plan or switch to Flexible Bursting at any time.'
  },
  {
    category: 'vps',
    question: 'Do I get root access?',
    answer: 'On Shared Hosting (Fixed & Flexible), access is fully managed within an isolated container sandbox without raw root access, ensuring stability and ease of use. On VPS Hosting, you receive 100% full root and SSH key access with total autonomy over the operating system.'
  },
  {
    category: 'vps',
    question: 'What is VPS?',
    answer: 'A VPS (Virtual Private Server) provides dedicated virtualized compute with dedicated vCPU cores, isolated RAM, and NVMe storage. You select your preferred Linux distribution (Ubuntu, Debian, Rocky, Alma) or Windows Server and have complete control over installed packages and services.'
  },
  {
    category: 'vps',
    question: 'Can I run Node.js, Python, PHP, or Go?',
    answer: 'Yes! Both our Shared Hosting and VPS infrastructure natively support modern runtimes including Node.js (all LTS versions), Python (FastAPI, Flask, Django), PHP (modern versions & Laravel), and Go compiled binaries.'
  },
  {
    category: 'vps',
    question: 'Can I run Docker on VPS?',
    answer: 'Yes. All Hextorq VPS plans support Docker, Docker Compose, Podman, and containerd out of the box, allowing you to run multi-container microservices, databases, Redis caches, and custom software stacks.'
  },
  {
    category: 'vps',
    question: 'Can I upgrade or change VPS resources later?',
    answer: 'Yes! You can scale your vCPU, RAM, and NVMe storage as your application grows directly from the configurator or dashboard with minimal reboot transition time, preserving all your files and configuration.'
  },
  {
    category: 'managed',
    question: 'What is Managed VPS?',
    answer: 'Managed VPS provides the compute power of a dedicated virtual server without the server administration burden. Our technical team assists with initial server setup, security configuration, regular updates, snapshot schedules, web server tuning, and migration assistance.'
  },
  {
    category: 'support',
    question: 'Where are your hosting locations?',
    answer: 'We offer server locations in Mumbai (India), Singapore, Frankfurt (Germany), London (United Kingdom), and Virginia (United States). You can choose your preferred data center region during setup.'
  },
  {
    category: 'support',
    question: 'How do I contact support?',
    answer: 'You can reach our engineering and support team directly via email at hosting@hextorq.tech. We provide responsive assistance for technical inquiries, architecture planning, and migration support.'
  }
];
