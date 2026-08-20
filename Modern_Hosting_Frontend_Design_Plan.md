Build a premium, production-quality frontend for a new hosting company called:



HEXTORQ HOSTING



Website:

https://hosting.hextorq.tech



Support email:

hosting@hextorq.tech



IMPORTANT:

This project is FRONTEND ONLY.



Use:

\- React JS

\- Vite

\- JavaScript

\- Tailwind CSS

\- GSAP

\- GSAP ScrollTrigger

\- Lucide React or another high-quality icon library



Do NOT build:

\- Backend

\- Database

\- Authentication

\- Real payment gateway

\- Real VPS provisioning

\- Real server APIs

\- Real hosting integrations

\- Supabase

\- Firebase

\- Node backend



Everything must be frontend UI and simulated interactions only.



The goal is to create the frontend foundation for a serious hosting company that can later connect to its own hosting infrastructure.



==================================================

CORE BUSINESS IDEA

==================================================



Hextorq Hosting provides two main types of hosting:



1\. Shared Application Hosting

2\. VPS Hosting



Shared hosting is NOT traditional cPanel-style unlimited website hosting.



The shared hosting product is specifically designed for:



ONE FRONTEND + ONE BACKEND APPLICATION.



For example:



Frontend:

React / Vite / Next.js / static frontend



Backend:

Node.js / Python / PHP / API



The customer deploys one complete application consisting of one frontend and one backend.



There are TWO shared hosting variants:



A. FIXED RESOURCE SHARED HOSTING



B. BURST / FLEXIBLE RESOURCE SHARED HOSTING



==================================================

FIXED RESOURCE SHARED HOSTING

==================================================



The customer gets:



1 frontend

\+

1 backend



with a fixed resource allocation.



Example:



CPU:

1 vCPU



RAM:

1 GB



Storage:

10 GB NVMe



The application can use the resources included in the plan.



When the allocated resources are reached, the application is subject to that plan's resource limit.



This is the lower-cost, predictable hosting option.



Position it as:



"Predictable resources for your application."



==================================================

BURST / FLEXIBLE SHARED HOSTING

==================================================



The customer still gets:



1 frontend

\+

1 backend



However, unlike fixed shared hosting, the customer does NOT have a rigid hard resource ceiling during normal operation.



The application can automatically use additional available capacity from the shared infrastructure when required.



Example:



Base allocation:



2 GB RAM



Application temporarily needs:



3.2 GB RAM



If shared infrastructure capacity is available, the application can temporarily use additional capacity.



The system conceptually works like:



Application

↓

Uses included resources

↓

Resource requirement increases

↓

Check shared capacity

↓

Additional capacity available

↓

Application continues using extra resources

↓

Usage drops

↓

Capacity becomes available to the shared pool again



This should be marketed as:



"Resources that adapt to your workload."



or



"Flexible resource bursting for demanding workloads."



DO NOT claim literally unlimited CPU or RAM.



The product should explain that additional shared capacity is available based on infrastructure capacity and fair-use/abuse protection.



The key difference is:



FIXED:

Predictable hard allocation



BURST:

Flexible usage with access to additional shared capacity



==================================================

VPS HOSTING

==================================================



VPS is a completely separate product.



VPS customers get a virtual server.



VPS should provide:



\- Full root access

\- Dedicated virtual resources

\- Operating system selection

\- Custom server configuration

\- Multiple applications

\- Docker support

\- Node.js

\- Python

\- PHP

\- Databases

\- APIs

\- Custom workloads



VPS is for developers, startups and businesses that require more control.



VPS plans should start from:



1 GB RAM



and scale upward.



==================================================

SHARED HOSTING VS VPS

==================================================



Make the difference extremely clear.



Shared Application Hosting:



\- One frontend

\- One backend

\- Managed environment

\- Easy deployment

\- No root access

\- Fixed or flexible resource model

\- Designed for individual applications



VPS:



\- Full virtual server

\- Root access

\- Multiple applications

\- Custom server configuration

\- OS selection

\- Docker

\- Greater control



Do not make the shared hosting product look like a cheap VPS.



It should feel like a modern application hosting product.



==================================================

PRODUCT STRUCTURE

==================================================



The website should have:



HOME



SHARED HOSTING



VPS HOSTING



PRICING



MANAGED VPS



FEATURES



LOCATIONS



SECURITY



FAQ



CONTACT



DASHBOARD PREVIEW



==================================================

BRAND POSITIONING

==================================================



The website should feel like a serious technology infrastructure company.



Do NOT make it look like:



\- A generic SaaS landing page

\- A cheap reseller hosting website

\- A WordPress hosting template

\- A basic Bootstrap hosting template



It should feel:



\- Premium

\- Technical

\- Reliable

\- Modern

\- Trustworthy

\- Infrastructure-focused

\- Professional

\- Fast

\- Mature



Design inspiration can come from the product clarity and infrastructure presentation of:



Hostinger

DigitalOcean

Vultr

Hetzner

Cloudflare

Vercel

Railway



Do NOT copy their design.



Use them only as inspiration for:



\- Pricing clarity

\- Infrastructure presentation

\- Product hierarchy

\- Technical credibility

\- Developer-focused UI

\- Deployment experience



Create an original Hextorq Hosting visual identity.



==================================================

VISUAL DESIGN

==================================================



Use a dark-first premium interface.



Primary colors:



Deep black

Deep navy

Graphite



Accent colors:



Electric blue

Indigo

Cyan



Use accents carefully.



Avoid excessive neon.



Avoid huge glowing gradients everywhere.



Avoid excessive glassmorphism.



Avoid making every section a card grid.



The design should use:



\- Large typography

\- Editorial spacing

\- Technical UI

\- Thin borders

\- Subtle grid patterns

\- Server/network graphics

\- Data visualizations

\- Clean cards where appropriate

\- Large asymmetric sections

\- Smooth transitions

\- Realistic infrastructure interfaces



Typography should feel modern and technical.



Possible font direction:



Inter

Plus Jakarta Sans

Space Grotesk

DM Sans



Use one strong display font and one readable interface font.



==================================================

GSAP ANIMATION

==================================================



Use GSAP extensively but intelligently.



Use:



GSAP

ScrollTrigger



Create:



\- Hero entrance animation

\- Text reveals

\- Server visualization animation

\- Scroll-linked infrastructure graphics

\- Resource meter animation

\- Pricing card entrance

\- VPS configurator transitions

\- Data-center map animations

\- Section pinning where useful

\- Number counting animations

\- Hover micro-interactions

\- Smooth transitions between sections

\- Staggered feature reveals

\- Animated network connections



The animation should feel similar to high-end modern technology websites.



Do NOT use random bouncing animations everywhere.



Animation must feel:



smooth

cinematic

technical

fast

intentional



Add support for:



prefers-reduced-motion



When reduced motion is enabled, gracefully reduce or disable complex animations.



==================================================

HOMEPAGE

==================================================



Create a high-impact homepage.



\--------------------------------

NAVIGATION

\--------------------------------



Left:



HEXTORQ HOSTING



Navigation:



Hosting

VPS

Pricing

Features

Locations

Resources



Right:



Login



Get Started



The navigation should be transparent/overlay on hero and become solid/subtle while scrolling.



Use GSAP for the transition.



\--------------------------------

HERO

\--------------------------------



Headline:



"Hosting Built Around Your Application."



Alternative supporting statement:



"Deploy your frontend and backend with predictable resources, flexible scaling, and powerful VPS infrastructure."



Primary CTA:



"Get Started"



Secondary CTA:



"Explore VPS"



Hero visual:



Create a sophisticated server infrastructure visualization.



Show:



APPLICATION ONLINE



Frontend

ONLINE



Backend

ONLINE



CPU

38%



RAM

46%



Storage

32%



Region

India



Network

Healthy



Create animated network lines connecting:



Frontend

Backend

Database

Server

Global network



Do NOT make it look like a fake crypto dashboard.



It should look like a modern infrastructure console.



\--------------------------------

TRUST STRIP

\--------------------------------



Immediately below the hero show:



NVMe Storage



Application Focused Hosting



Flexible Resource Options



Root Access on VPS



Security Built In



24/7 Support



These should be simple and elegant.



==================================================

SHARED HOSTING SECTION

==================================================



Headline:



"Built for Your Application."



Explain:



"Deploy one frontend and one backend without managing an entire server."



Show a visual:



Frontend

\+

Backend

=

Your Application



Supported frontend examples:



React

Vite

Next.js

Static websites



Backend examples:



Node.js

Python

PHP

API services



Do not claim every framework is supported by default unless represented as editable content.



==================================================

SHARED HOSTING PLANS

==================================================



Create TWO clear categories:



FIXED RESOURCE



and



FLEXIBLE / BURST



The user must immediately understand the difference.



Use plan pricing as editable configuration data.



Do not hardcode architecture.



\--------------------------------

FIXED SHARED

\--------------------------------



PLAN 1:



Launch



₹79/month



Example resources:



1 vCPU



1 GB RAM



10 GB NVMe



1 Frontend



1 Backend



SSL



Application deployment



Basic backups



Email support



Resource model:



Fixed



Positioning:



"For predictable application workloads."



\--------------------------------



PLAN 2:



Growth



₹149/month



2 vCPU



2 GB RAM



25 GB NVMe



1 Frontend



1 Backend



SSL



Backups



Deployment support



Resource model:



Fixed



\--------------------------------



PLAN 3:



Business



₹299/month



4 vCPU



4 GB RAM



50 GB NVMe



1 Frontend



1 Backend



SSL



Backups



Priority support



Resource model:



Fixed



Mark:



MOST POPULAR



if appropriate.



==================================================

FLEXIBLE / BURST SHARED

==================================================



Create a separate visual product category.



Headline:



"Flexible Resource Hosting"



Description:



"Your application gets its included resources first. When demand increases, available shared capacity can be used automatically."



Create three plans.



\--------------------------------

Flex Launch

\--------------------------------



₹199/month



1 Frontend



1 Backend



1 vCPU base



1 GB RAM base



10 GB NVMe



Flexible resource bursting



SSL



Backups



\--------------------------------

Flex Growth

\--------------------------------



₹349/month



1 Frontend



1 Backend



2 vCPU base



2 GB RAM base



25 GB NVMe



Flexible resource bursting



SSL



Backups



Priority support



\--------------------------------

Flex Business

\--------------------------------



₹599/month



1 Frontend



1 Backend



4 vCPU base



4 GB RAM base



50 GB NVMe



Flexible resource bursting



SSL



Backups



Priority support



Higher burst priority



IMPORTANT:



The flexible plans should NOT say:



"Unlimited resources"



Instead say:



"No fixed hard ceiling while shared capacity is available."



or:



"Automatically use additional available shared capacity when your application needs it."



Add a "How bursting works" interaction.



==================================================

RESOURCE BURST VISUAL

==================================================



Create a beautiful visual explanation.



Example:



BASE RESOURCES



CPU 2

RAM 2 GB



↓



Traffic spike



↓



RESOURCE DEMAND INCREASES



CPU 3.5

RAM 3.2 GB



↓



Shared capacity available



↓



TEMPORARY RESOURCE BURST



↓



Application continues running



↓



Demand falls



↓



Resources return to shared pool



Animate the resource bars using GSAP.



This should become one of the signature visual sections of Hextorq Hosting.



==================================================

SHARED HOSTING COMPARISON

==================================================



Create:



Fixed Shared

vs

Flexible Shared

vs

VPS



Comparison:



Frontend + Backend



Resource model



Hard resource ceiling



Burst capability



Root access



Custom OS



Multiple applications



Docker



Server control



Best for



Keep this extremely easy to understand.



==================================================

VPS SECTION

==================================================



Headline:



"Your Server. Your Rules."



Description:



"For workloads that require complete control, deploy your own virtual server."



Show a premium VPS interface.



Plans:



\--------------------------------

Nano VPS

\--------------------------------



₹399/month



1 vCPU



1 GB RAM



25 GB NVMe



1 TB Transfer



Root Access



\--------------------------------

Start VPS

\--------------------------------



₹599/month



1 vCPU



2 GB RAM



40 GB NVMe



2 TB Transfer



Root Access



\--------------------------------

Pro VPS

\--------------------------------



₹999/month



2 vCPU



4 GB RAM



80 GB NVMe



4 TB Transfer



Root Access



\--------------------------------

Business VPS

\--------------------------------



₹1,699/month



4 vCPU



8 GB RAM



160 GB NVMe



6 TB Transfer



Root Access



\--------------------------------

Scale VPS

\--------------------------------



₹2,999/month



6 vCPU



16 GB RAM



320 GB NVMe



8 TB Transfer



Root Access



These are frontend placeholder prices and must be stored in reusable data objects.



==================================================

VPS CONFIGURATOR

==================================================



This should be one of the most impressive parts of the website.



Headline:



"Build Your VPS"



Allow selection of:



CPU:



1

2

4

6

8 vCPU



RAM:



1 GB

2 GB

4 GB

8 GB

16 GB

32 GB



Storage:



25 GB

50 GB

80 GB

160 GB

320 GB

640 GB



OS:



Ubuntu

Debian

Rocky Linux

AlmaLinux

Windows Server



Locations:



India

Singapore

Germany

United Kingdom

United States



The price should dynamically change.



Right-side order summary:



Your VPS



CPU

2 vCPU



RAM

4 GB



Storage

80 GB NVMe



OS

Ubuntu



Location

India



Estimated price:



₹999 / month



Button:



Deploy VPS



All interactions are frontend simulations.



==================================================

MANAGED VPS

==================================================



Create a separate section.



Headline:



"VPS Power. Without the Server Headache."



Explain managed VPS clearly.



Managed services can include:



Initial setup



Security hardening



Updates



Monitoring



Backup configuration



SSL setup



Migration assistance



Server troubleshooting



Show:



Unmanaged VPS

vs

Managed VPS



==================================================

INFRASTRUCTURE SECTION

==================================================



Headline:



"Infrastructure Designed for Real Workloads."



Show large visual modules for:



NVMe Storage



CPU Performance



Memory



Network



Security



Backups



DDoS Protection



Monitoring



Do not make this a boring eight-card grid.



Use large asymmetric visual compositions.



==================================================

DATA CENTER SECTION

==================================================



Headline:



"Run Closer to Your Users."



Create a dark world map.



Show:



India

Singapore

Germany

UK

US



Animated connection lines.



Each location can be selected.



Display:



Region



Availability



Network status



Environment



Use realistic placeholder data.



Do not make unverified uptime or latency claims.



==================================================

SECURITY

==================================================



Headline:



"Security Is Part of the Platform."



Show:



SSL



Firewall



DDoS Protection



SSH Keys



Backups



Monitoring



Account Security



Malware Protection



Create a technical visual with shield/network/server elements.



==================================================

CONTROL PANEL PREVIEW

==================================================



Create a highly polished frontend-only hosting dashboard preview.



Sidebar:



Overview

Applications

Servers

Deployments

Domains

Backups

Monitoring

Billing

Support



Dashboard:



Application status



Frontend status



Backend status



CPU



RAM



Storage



Bandwidth



Deployments



Recent activity



Use sample data and label appropriately as a preview.



==================================================

APPLICATION DEPLOYMENT EXPERIENCE

==================================================



Create a section:



"Deploy Your Application"



Visual steps:



1

Choose Hosting



2

Connect Frontend



3

Connect Backend



4

Deploy



5

Monitor



Show a simulated deployment progress animation.



Use GSAP.



==================================================

USE CASES

==================================================



Show applications that can run on Hextorq Hosting:



React websites



Business websites



Portfolio applications



Node.js APIs



Python applications



PHP applications



E-commerce platforms



SaaS applications



Dashboards



Small business systems



Use clean visual illustrations rather than generic stock images.



==================================================

WHY HEXTORQ HOSTING

==================================================



Headline:



"Hosting That Understands How Modern Applications Work."



Show:



Application-focused hosting



Flexible resources



Simple deployment



VPS scalability



Transparent pricing



Developer-friendly infrastructure



Support



Security



==================================================

PRICING PAGE

==================================================



Create a full pricing page with:



Shared Fixed



Shared Flexible



VPS



Managed VPS



Billing toggle:



Monthly

Yearly



Clearly show:



Current price



Original price if promotional



Renewal price placeholder



What is included



What happens when resource limits are reached



Resource policy



Do not hide important pricing rules.



==================================================

RESOURCE POLICY PAGE / SECTION

==================================================



Create a simple technical explanation:



Fixed Shared:



Your application receives the resources included in your plan. Once those resources are exhausted, normal resource enforcement applies.



Flexible Shared:



Your application receives its included resources first and may temporarily use additional available shared capacity when demand increases.



VPS:



Your virtual server has its allocated virtual resources and can be scaled by changing the VPS configuration.



This must be written clearly for normal customers.



==================================================

TRUST \& CREDIBILITY

==================================================



The biggest priority is trust.



The website should feel believable.



Include:



Company identity:



Hextorq Hosting



Support:



hosting@hextorq.tech



Website:



hosting.hextorq.tech



Add:



Infrastructure transparency



Clear resource policies



Clear pricing



Security explanation



Support contact



Server locations



Deployment explanation



Terms placeholder



Privacy placeholder



Refund policy placeholder



Status page placeholder



Do not invent:



customer counts



fake testimonials



fake reviews



fake uptime percentages



fake certifications



fake data centers



fake logos



fake enterprise customers



If a value is not known, present it as editable placeholder content.



==================================================

FAQ

==================================================



Include questions:



What is Hextorq Shared Hosting?



Can I host a frontend and backend together?



How many applications can I host?



What is the difference between Fixed and Flexible Shared Hosting?



What happens when I reach my resource limit?



How does resource bursting work?



Is burst capacity guaranteed?



Do I get root access?



What is VPS hosting?



Can I run Node.js?



Can I run Python?



Can I use Docker on VPS?



Can I upgrade my VPS?



Where are the servers located?



Do you provide backups?



How do migrations work?



==================================================

FINAL CTA

==================================================



Headline:



"Deploy Your Next Application With Hextorq."



Supporting text:



"Start with application hosting. Scale into your own VPS when you need more control."



Buttons:



Get Started



Explore VPS



Show support email:



hosting@hextorq.tech



==================================================

FOOTER

==================================================



Hextorq Hosting



Hosting



Shared Hosting



Flexible Hosting



VPS



Managed VPS



Resources



Documentation



FAQ



Status



Support



Company



About Hextorq



Contact



Legal



Terms



Privacy



Refund Policy



Support:



hosting@hextorq.tech



Production domain:



hosting.hextorq.tech



==================================================

PAGE ROUTES

==================================================



Create these routes:



/



&#x20;/shared-hosting



&#x20;/vps



&#x20;/pricing



&#x20;/managed-vps



&#x20;/features



&#x20;/locations



&#x20;/security



&#x20;/faq



&#x20;/dashboard-preview



&#x20;/contact



==================================================

RESPONSIVE DESIGN

==================================================



Desktop:



Highly immersive layout



Tablet:



Preserve hierarchy



Mobile:



Do NOT simply shrink desktop.



Recompose the sections specifically for mobile.



Make:



\- Navigation mobile-friendly

\- Pricing cards swipeable where appropriate

\- VPS configurator usable with touch

\- Tables horizontally scrollable when required

\- GSAP animations optimized

\- Buttons thumb-friendly



==================================================

ACCESSIBILITY

==================================================



Use:



Semantic HTML



Keyboard navigation



Visible focus states



Proper contrast



ARIA labels where necessary



Reduced motion support



==================================================

CODE QUALITY

==================================================



Use reusable React components.



Keep plans/configuration in data objects.



For example:



sharedFixedPlans

sharedBurstPlans

vpsPlans

vpsConfiguratorOptions



Do not duplicate pricing information throughout components.



Create reusable:



Navbar

Footer

PricingCard

PlanSwitcher

ResourceBar

VPSConfigurator

InfrastructureVisualization

ComparisonTable

FAQ

FeatureSection

DataCenterMap

DashboardPreview



Use clean folder structure.



==================================================

MOST IMPORTANT DESIGN RULE

==================================================



The final result should NOT look like an AI-generated hosting template.



It should look like a real company that could compete visually with:



Hostinger

DigitalOcean

Vultr

Hetzner

Vercel

Cloudflare



But it must have an ORIGINAL Hextorq Hosting identity.



Prioritize:



TRUST

CLARITY

PERFORMANCE

TECHNICAL CREDIBILITY

PREMIUM DESIGN



over excessive visual effects.



Use GSAP and ScrollTrigger to make the site feel alive, but never let animation reduce usability.



The visitor should immediately understand:



1\. Hextorq Hosting is a real hosting company.

2\. Shared Hosting is for ONE frontend + ONE backend application.

3\. There are two shared models:

&#x20;  - Fixed resources

&#x20;  - Flexible/burst resources

4\. VPS is a completely separate product with full server control.

5\. Customers can start small and move to VPS as their application grows.



Build the complete frontend now.

Do not create any backend.

Do not create authentication.

Do not create payments.

Do not create real server provisioning.



Focus entirely on an exceptional React frontend with premium UI, GSAP animation, responsive layouts, reusable components, and strong hosting-industry credibility.

