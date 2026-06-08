/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service, CEOPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'software',
    title: 'Custom Software & Business Portals',
    description: 'Developing high-performance, mobile-optimized, and offline-resilient web applications and Android packages. We transform manual ledger books, disjointed spreadsheets, and paper records into lightning-fast cloud systems customized for Ugandan operations.',
    category: 'Software',
    features: [
      'Bespoke Web & Native Mobile Client Applications',
      'Offline-First Database Synchronization Architecture',
      'Kampala Kikuubo-inspired Ledger & Inventory Solutions',
      'Localized SMS Gateway Integration & Payment Processing'
    ],
    specs: [
      'React UI frameworks, Node.js server pipelines, Go execution cores',
      'Localized lightweight SQLite engines + secure Postgres Cloud servers',
      'Integration with local mobile money payment networks (MTN, Airtel)'
    ],
    iconName: 'Code'
  },
  {
    id: 'infrastructure',
    title: 'ICT Network & Server Infrastructure',
    description: 'Engineering resilient physical network cabling, fiber loops, and custom enterprise server racks. We build the physical plumbing that shields your enterprise from connection dropouts and optimizes localized team collaboration.',
    category: 'Infrastructure',
    features: [
      'Fused Single-Mode Optic Fiber Layout & Splicing',
      'Highly Organized Server Rack & Patch Panel Termination',
      'Enterprise-grade Managed Firewall & Cyber Security',
      'Wide-area Campus & Multi-floor Premium Wi-Fi coverage'
    ],
    specs: [
      'Enterprise Fortinet Gateways, Ubiquiti UniFi, and Cisco Catalyst cores',
      'Solid Copper Cat6A SFTP Structured Cabling systems',
      'Active UPS power monitoring blended with standby Solar backups'
    ],
    iconName: 'Server'
  },
  {
    id: 'cloud',
    title: 'Cloud Consulting & Modernization',
    description: 'Transitioning localized workloads into secure, high-availability clouds. We migrate aging databases, implement secure remote-work pipelines, and automate daily server backup schedules to keep your critical assets safe.',
    category: 'Software',
    features: [
      'Secure Local-to-Cloud Database Migrations',
      'Multi-device Shared Secure Network Storage (NAS)',
      'Automated Virtual Workstations & Team Collaboration Spheres',
      'Disaster Recovery Planning & Automatic Cloud Backups'
    ],
    specs: [
      'Google Cloud Platform (GCP) and secure virtual private servers',
      'Vulnerability scanning, automated 6-hour offsite backup rotations',
      'Unified enterprise user access governance (Identity management)'
    ],
    iconName: 'Cloud'
  },
  {
    id: 'defense',
    title: 'Tactical Defense & Surveillance Technologies',
    description: 'Engineering resilient, military-grade perimeter protection and situational surveillance systems. We specialize in deploying long-range thermal tracking loops and foliage-penetrating ground radar systems to guard critical commercial frontiers and private properties.',
    category: 'Defense',
    features: [
      'Long-Range Electro-Optical (EO) & Thermal Infared CCTV Systems',
      'Ground Surveillance Radar (GSR) Installation, Calibration & Setup',
      'Unified Visual Security Command & Control Room Integrations',
      'Precision Active Patrol Alarms & Integrated Threat Verification loops'
    ],
    specs: [
      'High-grade active pan-tilt-zoom (PTZ) optical cameras with up to 10km range',
      'Foliage-penetrating X-band radar swathes tracking moving multi-targets',
      'Localized air-gapped security networks with secure backup satellite feeds'
    ],
    iconName: 'Shield'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'kikuubo',
    title: 'Kikuubo Central Ledger Platform',
    description: 'An offline-resilient accounting and inventory ledger tailored for Uganda’s largest wholesale trading hub in Kikuubo, Kampala.',
    category: 'Software',
    image: '/src/assets/images/portfolio_software_1780917157777.png',
    client: 'Kikuubo Wholesale Traders Association',
    location: 'Kampala, Uganda',
    year: '2025',
    technologies: ['React SPA', 'SQLite Local sync', 'Vite', 'GSM SMS API'],
    metrics: '37% increase in daily transactional bookkeeping speed',
    story: 'Traders in Kampala’s high-traffic commercial core in Kikuubo require intense speed and zero-downtime reliability. Slow internet speeds and frequent power fluctuations often render typical cloud apps useless. WebWork built a hyper-optimized web portal backed by local browser index caching. It operates completely offline, queuing transactions and automatically syncing with the main database whenever the connection stabilizes.',
    features: [
      'Automatic offline-mode detection with zero-loss client queues',
      'One-tap SMS invoice dispatch to buying merchants nationwide',
      'Intelligent credit-book debt tracker with custom auto-reminders',
      'Extremely high contrast and readable interface optimized for mobile tablets'
    ]
  },
  {
    id: 'gulu',
    title: 'Gulu Municipal Medical Center Optic Fiber Initiative',
    description: 'Enterprise structural optic fiber installation and server room commissioning for an expanded regional healthcare center.',
    category: 'Infrastructure',
    image: '/src/assets/images/portfolio_network_1780917144727.png',
    client: 'Northern Region Health Coalition',
    location: 'Gulu, Uganda',
    year: '2026',
    technologies: ['Armor Optic Fiber', 'Cisco Layer 3 Switches', 'FortiGate Security Gateway'],
    metrics: '99.99% local system uptime achieved across 5 separate facility wings',
    story: 'Digital patient record-keeping and diagnostic transfers require swift, secure, and bulletproof connectivity. WebWork Uganda’s infrastructure team laid and spliced over 3.5 kilometers of protective armor-clad fiber optic cables connecting Gulu Medical Center’s primary wards to a central, newly built server room. This secure core features active heat extractors, custom fire protection, and an intelligent solar UPS unit that keeps operations active during localized outages.',
    features: [
      'Dual-path fiber termination ensuring structural system redundancy',
      'Secure core server rack with air-flow optimization and visual layout maps',
      'Integrated solar backup UPS system and ambient temperature alarms',
      'Unified admin control dashboard managing over 180 network nodes'
    ]
  },
  {
    id: 'ankole',
    title: 'Ankole Dairy Logistics Engine',
    description: 'An intelligent collection and dispatch routing software supporting co-operative milk chillers of Mbarara.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200',
    client: 'Ankole Dairy Cooperative Union',
    location: 'Mbarara, Uganda',
    year: '2025',
    technologies: ['React UI', 'Python Engine', 'Google Maps Native', 'WhatsApp alert hook'],
    metrics: '22% reduction in regional truck dispatch logistics costs',
    story: 'Mbarara’s dairy co-operatives collect raw milk from over 40 pooling points daily. Milk must arrive at chilling facilities before temperature criteria are breached. WebWork engineered a custom dashboard that maps collections, tracks chiller tank capacities using simple remote probes, and dynamic-routes dispatch trucks to maximize collection speed and curtail fuel costs.',
    features: [
      'Interactive maps outlining optimal truck routes and collection statuses',
      'Automated dispatch coordinates dispatched to drivers via SMS and WhatsApp',
      'Critical high-temperature alerting and predictive souring alarms',
      'Annual regional production projection screens for dairy board forecasting'
    ]
  },
  {
    id: 'corporate-lan',
    title: 'Pearl Legal Chambers High-Security Campus Infrastructure',
    description: 'Next-generation Wi-Fi and physical firewall deployment across 4 floors of corporate executive space.',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    client: 'Pearl Towers Legal Group',
    location: 'Nakasero, Kampala',
    year: '2026',
    technologies: ['Wi-Fi 7 Enterprise APs', 'Secure VoIP Dedicated VLANs', 'Biometric door loops'],
    metrics: 'Zero security incidents and ultra-low latency gigabit desk bandwidth',
    story: 'For a top-tier legal chambers in Kampala’s premium corporate district, confidentiality and stable connection streams are absolute necessities. WebWork laid a structured copper base utilizing high-grade Cat6A SFTP cables and activated enterprise-grade Access Points across 4 expansive executive levels. We segregated and shaped dedicated digital pipelines for secure video conferencing, isolated visitor access, and secure local file transfers.',
    features: [
      'Zero-leak Fortinet firewall configuration blocking malicious access paths',
      'Intelligent bandwidth routing priority (Quality of Service) for secure video and voice calls',
      'Neatly integrated under-floor cabling paths with modern desk grommets',
      'Unified cloud controller for fast remote monitoring and network auditing'
    ]
  },
  {
    id: 'lake-victoria-surveillance',
    title: 'Lake Victoria Coastal Border Surveillance Initiative',
    description: 'Integrated long-range electro-optical CCTV scopes and Ground Surveillance Radar network securing key logistics terminals of Uganda.',
    category: 'Defense',
    image: '/src/assets/images/portfolio_defense_1780917962533.png',
    client: 'Ministry of Transit & Maritime Frontier Safety',
    location: 'Entebbe & Jinja Ports, Uganda',
    year: '2026',
    technologies: ['Ground Surveillance Radar (GSR)', 'Long-Range Thermal Zoom PTZ', 'Solar-coupled UPS systems', 'Fiber-optic rings'],
    metrics: '100% detection rate of illegal nighttime docking on critical shipping channels',
    story: 'Securing Uganda’s vast waterways requires robust tools capable of identifying vessels under pitch-black conditions or during intense rain squalls. WebWork Uganda partnered with coastal logistics operators to deploy a unified perimeter surveillance loop. We installed high-precision FMCW ground surveillance radars paired with long-range dual thermal/optical video trackers on reinforced 15-meter steel towers. Real-time telemetry is streamed via secure, encrypted VPN networks to central commands, ensuring complete situational safety around high-value harbor channels.',
    features: [
      'Integrated 4km ground/water radar sweeps with active threat mapping outputs',
      'High-range thermal zoom loops that automatically slew and track triggered targets',
      'Marine-grade defensive housing built to withstand severe wind and humidity',
      'Standalone solar generator configurations ensuring continuous off-grid uptime'
    ]
  }
];

export const CEO_MESSAGE: CEOPost = {
  name: 'Eng. Brian Mukasa',
  title: 'Co-Founder & Chief Executive Officer',
  avatar: '/src/assets/images/ceo_portrait_1780917125157.png',
  quote: 'Building the Digital and Physical Bedrock for Uganda’s Commercial Renaissance.',
  paragraphs: [
    'At WebWork Uganda, our journey began with a simple, clear realization: for local businesses to thrive in this digital era, they need localized, solid, and dependable technology solutions. General off-the-shelf software or foreign network templates rarely fit the practical realities, grid constraints, and commercial workflows of a Kampala merchant or a regional medical clinic.',
    'Since our inception, we have dedicated ourselves to two pillars of modern ICT: laying high-bandwidth, resilient physical network infrastructure, and crafting custom software that works effortlessly online and offline. We don’t just deploy systems; we install confidence. Whether our technicians are inside crawl spaces splicing armor fiber optic lines in Regional Gulu, or our engineers are typing lines of code for wholesale shopkeepers in Kikuubo, we approach every task with technical discipline and a deep sense of local responsibility.',
    'Our commitment to WebWork Uganda clients is absolute. We build for longevity, design for local scale, and support every installation with a responsive, local 24/7 technical team. Together, we are laying the concrete foundation for Uganda’s bright technological future.'
  ],
  signature: 'B. Mukasa'
};
