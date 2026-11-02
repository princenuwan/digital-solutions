const services = [
  {
    id: 1,
    name: "Google Business Profile Setup",
    category: "Online Presence",
    icon: "📍",
    description:
      "Create and configure a professional Google Business Profile so customers can discover your business on Google Search and Maps.",
    packages: [
      {
        name: "Starter",
        price: 3500,
        time: "1–2 Days",
        items: [
          "Business profile setup",
          "Business information",
          "Contact details",
          "Location configuration",
        ],
      },
      {
        name: "Standard",
        price: 5000,
        time: "2–3 Days",
        items: [
          "Everything in Starter",
          "Business description optimization",
          "Business hours and services",
          "Photos and logo upload",
          "Profile optimization",
        ],
      },
      {
        name: "Premium",
        price: 9500,
        time: "3–5 Days",
        items: [
          "Everything in Standard",
          "Product and service configuration",
          "Review link setup",
          "Advanced profile optimization",
          "Basic guidance",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Google Maps Services Optimization",
    category: "Online Presence",
    icon: "🗺️",
    description:
      "Organize your business services and details to help customers understand what you offer through your Google Business Profile.",
    packages: [
      {
        name: "Starter",
        price: 2000,
        time: "1 Day",
        items: ["Service list preparation", "Basic service descriptions"],
      },
      {
        name: "Standard",
        price: 3500,
        time: "1–2 Days",
        items: [
          "Everything in Starter",
          "Service categories",
          "Service descriptions optimization",
          "Profile service updates",
        ],
      },
      {
        name: "Premium",
        price: 6500,
        time: "2–3 Days",
        items: [
          "Everything in Standard",
          "Extended service descriptions",
          "Product and service organization",
          "Profile review",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Google Sites Website",
    category: "Online Presence",
    icon: "🌐",
    description:
      "Build a simple, responsive business website using Google Sites.",
    packages: [
      {
        name: "Starter",
        price: 8500,
        time: "3–4 Days",
        items: [
          "One-page website",
          "Business introduction",
          "Contact information",
          "Mobile-friendly layout",
        ],
      },
      {
        name: "Standard",
        price: 12500,
        time: "5–7 Days",
        items: [
          "Up to 5 pages",
          "Services section",
          "Gallery section",
          "Contact links",
          "Basic SEO settings",
        ],
      },
      {
        name: "Premium",
        price: 25000,
        time: "7–10 Days",
        items: [
          "Up to 8 pages",
          "Custom layout and styling",
          "Image gallery",
          "Google Maps integration",
          "Enquiry form",
          "Complete setup",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Google Blogger Setup",
    category: "Online Presence",
    icon: "✍️",
    description:
      "Create a professional Blogger website for publishing articles, updates and business content.",
    packages: [
      {
        name: "Starter",
        price: 3000,
        time: "1–2 Days",
        items: [
          "Blogger account setup",
          "Basic theme configuration",
          "About and contact pages",
        ],
      },
      {
        name: "Standard",
        price: 5000,
        time: "2–3 Days",
        items: [
          "Everything in Starter",
          "Theme customization",
          "Navigation menu",
          "Social media links",
          "Basic SEO settings",
        ],
      },
      {
        name: "Premium",
        price: 9500,
        time: "3–5 Days",
        items: [
          "Everything in Standard",
          "Advanced theme customization",
          "Custom domain connection assistance",
          "Essential pages",
          "Blog structure setup",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "WhatsApp Business Setup",
    category: "Communication",
    icon: "💬",
    description:
      "Set up WhatsApp Business with professional business information, catalogues and customer communication features.",
    packages: [
      {
        name: "Starter",
        price: 4500,
        time: "1 Day",
        items: [
          "Business profile setup",
          "Business description",
          "Business hours",
          "Contact information",
        ],
      },
      {
        name: "Standard",
        price: 7500,
        time: "1–2 Days",
        items: [
          "Everything in Starter",
          "Greeting and away messages",
          "Quick replies",
          "Labels configuration",
          "Catalogue setup",
        ],
      },
      {
        name: "Premium",
        price: 15000,
        time: "2–4 Days",
        items: [
          "Everything in Standard",
          "Extended product catalogue",
          "Catalogue image preparation",
          "Customer response templates",
          "Complete profile optimization",
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Professional Email Setup",
    category: "Communication",
    icon: "📧",
    description:
      "Configure professional business email addresses and help organize business communication.",
    packages: [
      {
        name: "Starter",
        price: 2000,
        time: "1 Day",
        items: [
          "Email account guidance",
          "Basic email configuration",
          "Signature setup",
        ],
      },
      {
        name: "Standard",
        price: 3500,
        time: "1–2 Days",
        items: [
          "Everything in Starter",
          "Professional signature design",
          "Email forwarding guidance",
          "Device configuration assistance",
        ],
      },
      {
        name: "Premium",
        price: 7500,
        time: "2–3 Days",
        items: [
          "Everything in Standard",
          "Multiple email alias configuration",
          "Domain email DNS guidance",
          "Testing and handover",
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Google Forms Setup",
    category: "Business Systems",
    icon: "📝",
    description:
      "Create online forms for customer enquiries, registrations, feedback and business data collection.",
    packages: [
      {
        name: "Starter",
        price: 2000,
        time: "1 Day",
        items: [
          "One Google Form",
          "Basic questions",
          "Response collection setup",
        ],
      },
      {
        name: "Standard",
        price: 3500,
        time: "1–2 Days",
        items: [
          "One advanced form",
          "Conditional questions",
          "Custom form sections",
          "Google Sheets integration",
        ],
      },
      {
        name: "Premium",
        price: 7500,
        time: "2–3 Days",
        items: [
          "Up to 3 forms",
          "Advanced form structure",
          "Response organization",
          "Custom confirmation messages",
          "Testing and handover",
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Google Sheets Business System",
    category: "Business Systems",
    icon: "📊",
    description:
      "Create organized Google Sheets systems to manage business records, sales, inventory and daily operations.",
    packages: [
      {
        name: "Starter",
        price: 6500,
        time: "2–3 Days",
        items: [
          "Basic business spreadsheet",
          "Data entry structure",
          "Simple formulas",
        ],
      },
      {
        name: "Standard",
        price: 10000,
        time: "3–5 Days",
        items: [
          "Everything in Starter",
          "Automated calculations",
          "Data validation",
          "Summary dashboard",
          "Formatting and filters",
        ],
      },
      {
        name: "Premium",
        price: 20000,
        time: "5–7 Days",
        items: [
          "Everything in Standard",
          "Advanced dashboard",
          "Multiple linked sheets",
          "Reports and summaries",
          "Business-specific workflow",
        ],
      },
    ],
  },
  {
    id: 9,
    name: "Google Apps Script Automation",
    category: "Business Systems",
    icon: "⚙️",
    description:
      "Automate repetitive business tasks using Google Apps Script and Google Workspace tools.",
    packages: [
      {
        name: "Starter",
        price: 8500,
        time: "2–4 Days",
        items: [
          "One simple automation",
          "Basic trigger configuration",
          "Testing",
        ],
      },
      {
        name: "Standard",
        price: 15000,
        time: "4–6 Days",
        items: [
          "Up to 2 automations",
          "Google Sheets integration",
          "Email notifications",
          "Error handling",
        ],
      },
      {
        name: "Premium",
        price: 30000,
        time: "7–12 Days",
        items: [
          "Multiple automation workflows",
          "Advanced business logic",
          "Forms and Sheets integration",
          "Custom reports",
          "Documentation and handover",
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Google AppSheet Application",
    category: "Business Systems",
    icon: "📱",
    description:
      "Build no-code business applications using Google AppSheet for managing records and daily operations.",
    packages: [
      {
        name: "Starter",
        price: 15000,
        time: "4–6 Days",
        items: [
          "Basic AppSheet application",
          "One data source",
          "Basic forms and views",
        ],
      },
      {
        name: "Standard",
        price: 25000,
        time: "7–10 Days",
        items: [
          "Everything in Starter",
          "Multiple views",
          "Search and filters",
          "Basic automation",
          "User testing",
        ],
      },
      {
        name: "Premium",
        price: 50000,
        time: "10–15 Days",
        items: [
          "Everything in Standard",
          "Advanced workflows",
          "Role-based access configuration",
          "Dashboard views",
          "Documentation and handover",
        ],
      },
    ],
  },
  {
    id: 11,
    name: "QR Code Digital Menu",
    category: "Marketing & Design",
    icon: "🍽️",
    description:
      "Create a digital menu that customers can access by scanning a QR code.",
    packages: [
      {
        name: "Starter",
        price: 4500,
        time: "1–2 Days",
        items: [
          "Digital menu page",
          "QR code generation",
          "Basic menu categories",
        ],
      },
      {
        name: "Standard",
        price: 7500,
        time: "2–3 Days",
        items: [
          "Everything in Starter",
          "Menu images",
          "Category organization",
          "Mobile-friendly design",
          "WhatsApp contact link",
        ],
      },
      {
        name: "Premium",
        price: 15000,
        time: "4–6 Days",
        items: [
          "Everything in Standard",
          "Advanced menu design",
          "Multiple menu sections",
          "Price and item organization",
          "Custom QR design",
        ],
      },
    ],
  },
  {
    id: 12,
    name: "Google Review QR System",
    category: "Marketing & Design",
    icon: "⭐",
    description:
      "Make it easier for customers to open your Google review link using a QR code.",
    packages: [
      {
        name: "Starter",
        price: 1500,
        time: "1 Day",
        items: ["Google review link guidance", "QR code generation"],
      },
      {
        name: "Standard",
        price: 2500,
        time: "1 Day",
        items: [
          "Everything in Starter",
          "Branded QR design",
          "Digital sharing image",
        ],
      },
      {
        name: "Premium",
        price: 5000,
        time: "2 Days",
        items: [
          "Everything in Standard",
          "Printable review poster",
          "Multiple QR formats",
          "Basic usage instructions",
        ],
      },
    ],
  },
  {
    id: 13,
    name: "Digital Business Card",
    category: "Communication",
    icon: "💳",
    description:
      "Create a shareable digital business card with contact details and business links.",
    packages: [
      {
        name: "Starter",
        price: 2000,
        time: "1 Day",
        items: [
          "Digital contact card",
          "Name and contact details",
          "Phone and email links",
        ],
      },
      {
        name: "Standard",
        price: 3500,
        time: "1–2 Days",
        items: [
          "Everything in Starter",
          "Business branding",
          "Social media links",
          "QR code",
        ],
      },
      {
        name: "Premium",
        price: 7500,
        time: "2–3 Days",
        items: [
          "Everything in Standard",
          "Custom-designed card page",
          "WhatsApp and website links",
          "Downloadable contact file",
        ],
      },
    ],
  },
  {
    id: 14,
    name: "Facebook Business Page Setup",
    category: "Online Presence",
    icon: "📘",
    description:
      "Create or professionally configure a Facebook business page with essential business information.",
    packages: [
      {
        name: "Starter",
        price: 2000,
        time: "1 Day",
        items: [
          "Page setup assistance",
          "Business information",
          "Contact details",
        ],
      },
      {
        name: "Standard",
        price: 3500,
        time: "1–2 Days",
        items: [
          "Everything in Starter",
          "Profile and cover design setup",
          "About section optimization",
          "Action button configuration",
        ],
      },
      {
        name: "Premium",
        price: 7500,
        time: "2–3 Days",
        items: [
          "Everything in Standard",
          "Page branding",
          "Service and product sections",
          "WhatsApp connection",
          "Basic content guidance",
        ],
      },
    ],
  },
  {
    id: 15,
    name: "Instagram Business Setup",
    category: "Online Presence",
    icon: "📸",
    description:
      "Configure an Instagram professional account with business details and contact options.",
    packages: [
      {
        name: "Starter",
        price: 1500,
        time: "1 Day",
        items: [
          "Professional account setup guidance",
          "Profile information",
          "Category selection",
        ],
      },
      {
        name: "Standard",
        price: 2500,
        time: "1–2 Days",
        items: [
          "Everything in Starter",
          "Bio optimization",
          "Contact buttons",
          "Profile image setup",
        ],
      },
      {
        name: "Premium",
        price: 5500,
        time: "2 Days",
        items: [
          "Everything in Standard",
          "Story highlight covers",
          "Link organization",
          "Profile branding guidance",
        ],
      },
    ],
  },
  {
    id: 16,
    name: "Facebook & Instagram Integration",
    category: "Communication",
    icon: "🔗",
    description:
      "Connect Facebook and Instagram business accounts through Meta's supported tools.",
    packages: [
      {
        name: "Starter",
        price: 1500,
        time: "1 Day",
        items: ["Account connection assistance", "Basic integration check"],
      },
      {
        name: "Standard",
        price: 2000,
        time: "1 Day",
        items: [
          "Everything in Starter",
          "Meta Business Suite configuration",
          "Page and Instagram connection check",
        ],
      },
      {
        name: "Premium",
        price: 5000,
        time: "2 Days",
        items: [
          "Everything in Standard",
          "Business asset organization",
          "Publishing configuration guidance",
          "Access and permission review",
        ],
      },
    ],
  },
  {
    id: 17,
    name: "Google Analytics 4 Setup",
    category: "Business Systems",
    icon: "📈",
    description:
      "Configure Google Analytics 4 to help understand website traffic and visitor activity.",
    packages: [
      {
        name: "Starter",
        price: 4500,
        time: "1–2 Days",
        items: [
          "GA4 property setup",
          "Measurement ID configuration",
          "Basic installation",
        ],
      },
      {
        name: "Standard",
        price: 7500,
        time: "2–3 Days",
        items: [
          "Everything in Starter",
          "Realtime testing",
          "Basic event configuration",
          "Google Tag setup guidance",
        ],
      },
      {
        name: "Premium",
        price: 15000,
        time: "3–5 Days",
        items: [
          "Everything in Standard",
          "Selected conversion events",
          "Basic reporting configuration",
          "Testing and handover",
        ],
      },
    ],
  },
  {
    id: 18,
    name: "Google Search Console Setup",
    category: "Business Systems",
    icon: "🔎",
    description:
      "Connect your website to Google Search Console and configure essential search monitoring.",
    packages: [
      {
        name: "Starter",
        price: 2000,
        time: "1 Day",
        items: ["Property setup", "Ownership verification assistance"],
      },
      {
        name: "Standard",
        price: 3500,
        time: "1–2 Days",
        items: [
          "Everything in Starter",
          "Sitemap submission",
          "Basic indexing checks",
        ],
      },
      {
        name: "Premium",
        price: 7500,
        time: "2–3 Days",
        items: [
          "Everything in Standard",
          "Important URL inspection",
          "Basic search performance review",
          "Setup report",
        ],
      },
    ],
  },
  {
    id: 19,
    name: "Google Drive Business Setup",
    category: "Business Systems",
    icon: "📁",
    description:
      "Organize Google Drive folders and files for easier business document management.",
    packages: [
      {
        name: "Starter",
        price: 2500,
        time: "1 Day",
        items: ["Folder structure setup", "Basic file organization"],
      },
      {
        name: "Standard",
        price: 5000,
        time: "1–2 Days",
        items: [
          "Everything in Starter",
          "Department or category folders",
          "Sharing permission guidance",
          "File naming structure",
        ],
      },
      {
        name: "Premium",
        price: 10000,
        time: "2–4 Days",
        items: [
          "Everything in Standard",
          "Advanced folder structure",
          "Team access planning",
          "Backup and organization guidance",
        ],
      },
    ],
  },
  {
    id: 20,
    name: "Simple Invoice System",
    category: "Business Systems",
    icon: "🧾",
    description:
      "Create a simple invoice and payment tracking system using Google Sheets.",
    packages: [
      {
        name: "Starter",
        price: 4500,
        time: "2–3 Days",
        items: [
          "Invoice template",
          "Business details",
          "Manual invoice records",
        ],
      },
      {
        name: "Standard",
        price: 7500,
        time: "3–4 Days",
        items: [
          "Everything in Starter",
          "Automatic invoice numbering",
          "Subtotal and total calculations",
          "Payment status tracking",
        ],
      },
      {
        name: "Premium",
        price: 15000,
        time: "5–7 Days",
        items: [
          "Everything in Standard",
          "Printable invoice layout",
          "Customer records",
          "Monthly summary dashboard",
        ],
      },
    ],
  },
  {
    id: 21,
    name: "Appointment Booking System",
    category: "Business Systems",
    icon: "📅",
    description:
      "Set up a simple appointment request and scheduling workflow for service-based businesses.",
    packages: [
      {
        name: "Starter",
        price: 7500,
        time: "2–3 Days",
        items: [
          "Booking request form",
          "Service selection",
          "Contact details collection",
        ],
      },
      {
        name: "Standard",
        price: 12500,
        time: "4–6 Days",
        items: [
          "Everything in Starter",
          "Google Calendar workflow",
          "Google Sheets records",
          "Email notification setup",
        ],
      },
      {
        name: "Premium",
        price: 25000,
        time: "7–10 Days",
        items: [
          "Everything in Standard",
          "Custom booking workflow",
          "Availability management setup",
          "Automated notifications",
          "Testing and handover",
        ],
      },
    ],
  },
  {
    id: 22,
    name: "Customer Database System",
    category: "Business Systems",
    icon: "👥",
    description:
      "Create a structured customer database to organize contact details and customer records.",
    packages: [
      {
        name: "Starter",
        price: 4500,
        time: "2 Days",
        items: [
          "Customer data sheet",
          "Basic fields",
          "Manual record management",
        ],
      },
      {
        name: "Standard",
        price: 7500,
        time: "3–4 Days",
        items: [
          "Everything in Starter",
          "Search and filters",
          "Data validation",
          "Customer categories",
        ],
      },
      {
        name: "Premium",
        price: 15000,
        time: "5–7 Days",
        items: [
          "Everything in Standard",
          "Customer dashboard",
          "Summary reports",
          "Google Forms data entry integration",
        ],
      },
    ],
  },
  {
    id: 23,
    name: "QR Contact Card",
    category: "Communication",
    icon: "🔳",
    description:
      "Create a QR code that lets customers quickly access or save your business contact information.",
    packages: [
      {
        name: "Starter",
        price: 2000,
        time: "1 Day",
        items: ["Contact QR code", "Basic digital file"],
      },
      {
        name: "Standard",
        price: 3500,
        time: "1–2 Days",
        items: [
          "Everything in Starter",
          "Branded QR design",
          "Printable format",
        ],
      },
      {
        name: "Premium",
        price: 7500,
        time: "2–3 Days",
        items: [
          "Everything in Standard",
          "Custom contact landing page",
          "Multiple download formats",
          "Testing and handover",
        ],
      },
    ],
  },
  {
    id: 24,
    name: "Basic Brand Kit",
    category: "Marketing & Design",
    icon: "🎨",
    description:
      "Create a consistent basic visual identity for your business across digital platforms.",
    packages: [
      {
        name: "Starter",
        price: 7500,
        time: "2–3 Days",
        items: [
          "Basic logo concept",
          "Primary color palette",
          "Font selection",
        ],
      },
      {
        name: "Standard",
        price: 15000,
        time: "4–5 Days",
        items: [
          "Everything in Starter",
          "Logo variations",
          "Social media profile image",
          "Basic brand guidelines",
        ],
      },
      {
        name: "Premium",
        price: 30000,
        time: "6–8 Days",
        items: [
          "Everything in Standard",
          "Social media cover design",
          "Business card design",
          "Brand color and typography guide",
          "Export-ready assets",
        ],
      },
    ],
  },
];
