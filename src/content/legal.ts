export type LegalSection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalDocument = {
  effective: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  effective: "August 15, 2026",
  updated: "August 15, 2026",
  intro:
    "Staller Stack (\"Company,\" \"we,\" \"our,\" or \"us\") is committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, disclose, store, and protect your information when you visit our website, communicate with us, or use our services. By using our website or services, you agree to the practices described in this Privacy Policy.",
  sections: [
    {
      title: "1. Who We Are",
      paragraphs: [
        "Company Name: Staller Stack",
        "Website: https://stallerstack.com",
        "Email: hello@stallerstack.us",
        "Staller Stack provides AI-powered software development, custom web and mobile applications, SaaS development, cloud solutions, IT consulting, enterprise software, automation solutions, and related technology services.",
      ],
    },
    {
      title: "2. Personal Information We Collect",
      paragraphs: [
        "When you contact us or request information, we may collect:",
      ],
      list: [
        "Full Name",
        "Company Name",
        "Email Address",
        "Phone Number",
        "Job Title",
        "Country or Region",
        "Business Information",
        "Project Requirements",
        "Any information you voluntarily provide",
      ],
    },
    {
      title: "3. Technical Information We Collect",
      paragraphs: [
        "When you visit our website, we may automatically collect:",
      ],
      list: [
        "IP Address",
        "Browser Type",
        "Device Information",
        "Operating System",
        "Screen Resolution",
        "Language Preferences",
        "Referring Website",
        "Date and Time of Visit",
        "Pages Viewed",
        "Session Duration",
        "Clickstream Data",
      ],
    },
    {
      title: "4. Cookies and Similar Technologies",
      paragraphs: [
        "We may use cookies and similar technologies to:",
        "You can control cookie settings through your browser. Disabling cookies may affect certain website features.",
      ],
      list: [
        "Remember your preferences",
        "Improve website performance",
        "Analyze website traffic",
        "Enhance user experience",
        "Support security measures",
      ],
    },
    {
      title: "5. How We Use Your Information",
      paragraphs: [
        "We use collected information to:",
        "Where required by law, we will obtain your consent before sending marketing communications.",
      ],
      list: [
        "Respond to inquiries",
        "Provide requested services",
        "Prepare proposals and quotations",
        "Deliver software development services",
        "Manage client relationships",
        "Improve our website and services",
        "Send project-related communications",
        "Provide customer support",
        "Detect fraud and security threats",
        "Comply with legal obligations",
        "Improve user experience",
      ],
    },
    {
      title: "6. Legal Basis for Processing",
      paragraphs: [
        "Where applicable, we process personal information based on one or more of the following:",
      ],
      list: [
        "Your consent",
        "Performance of a contract",
        "Compliance with legal obligations",
        "Legitimate business interests, such as improving our services and responding to inquiries",
      ],
    },
    {
      title: "7. How We Share Information",
      paragraphs: [
        "We do not sell your personal information. We may share information with:",
        "These third parties are expected to protect your information and use it only for authorized purposes.",
      ],
      list: [
        "Trusted service providers",
        "Cloud hosting providers",
        "Payment processors",
        "Analytics providers",
        "Communication platforms",
        "Professional advisers",
        "Government or regulatory authorities when required by law",
      ],
    },
    {
      title: "8. International Data Transfers",
      paragraphs: [
        "Because Staller Stack serves clients globally, your information may be processed or stored in countries other than your own. Where required, we implement appropriate safeguards to protect personal information during international transfers.",
      ],
    },
    {
      title: "9. Data Security",
      paragraphs: [
        "We implement reasonable administrative, technical, and organizational safeguards designed to protect personal information, including:",
        "While we strive to protect your information, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
      ],
      list: [
        "Secure hosting environments",
        "Encryption where appropriate",
        "Access controls",
        "Authentication measures",
        "Firewall protection",
        "Regular software updates",
        "Security monitoring",
      ],
    },
    {
      title: "10. Data Retention",
      paragraphs: [
        "We retain personal information only for as long as necessary to:",
        "When information is no longer required, it will be securely deleted or anonymized where appropriate.",
      ],
      list: [
        "Provide services",
        "Meet legal obligations",
        "Resolve disputes",
        "Maintain business records",
        "Enforce agreements",
      ],
    },
    {
      title: "11. Your Privacy Rights",
      paragraphs: [
        "Depending on your location and applicable law, you may have rights to:",
        "To exercise these rights, please contact us using the details below.",
      ],
      list: [
        "Access your personal information",
        "Correct inaccurate information",
        "Request deletion of personal information",
        "Restrict certain processing activities",
        "Object to processing",
        "Withdraw consent where processing is based on consent",
        "Request a copy of your personal information in a portable format",
      ],
    },
    {
      title: "12. Third-Party Links",
      paragraphs: [
        "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, content, or security of external websites. We encourage users to review the privacy policies of any third-party sites they visit.",
      ],
    },
    {
      title: "13. Children's Privacy",
      paragraphs: [
        "Our website and services are intended for business users and individuals who are at least 18 years old. We do not knowingly collect personal information from children. If we become aware that personal information from a child has been collected without appropriate authorization, we will take reasonable steps to delete it.",
      ],
    },
    {
      title: "14. Marketing Communications",
      paragraphs: [
        "If you subscribe to our newsletters or marketing communications, we may send you updates about:",
        "You may unsubscribe at any time by using the unsubscribe link in our emails or by contacting us directly.",
      ],
      list: [
        "Company news",
        "Service offerings",
        "Industry insights",
        "Events",
        "Educational content",
      ],
    },
    {
      title: "15. Analytics and Tracking",
      paragraphs: [
        "We may use analytics tools to better understand website usage and improve our services. These tools may collect information such as:",
        "Analytics information is generally used in aggregate to improve website performance and user experience.",
      ],
      list: [
        "Website traffic",
        "User interactions",
        "Device information",
        "Browser information",
        "General geographic location",
        "Referral sources",
      ],
    },
    {
      title: "16. Changes to This Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy periodically to reflect changes in our business, technology, legal requirements, or privacy practices. The updated version will be posted on this page with a revised \"Last Updated\" date. Your continued use of our website after updates become effective constitutes acceptance of the revised Privacy Policy.",
      ],
    },
    {
      title: "17. Contact Us",
      paragraphs: [
        "If you have questions, concerns, or requests regarding this Privacy Policy or our handling of personal information, please contact us:",
        "Staller Stack — Website: https://stallerstack.com — Email: hello@stallerstack.us",
      ],
    },
    {
      title: "Your Consent",
      paragraphs: [
        "By using the Staller Stack website or services, you acknowledge that you have read, understood, and agree to this Privacy Policy. If you do not agree with this Privacy Policy, please discontinue use of our website and services.",
      ],
    },
  ],
};

export const termsOfService: LegalDocument = {
  effective: "August 15, 2026",
  updated: "August 15, 2026",
  intro:
    "Welcome to Staller Stack (\"Company,\" \"we,\" \"our,\" or \"us\"). These Terms & Conditions (\"Terms\") govern your access to and use of our website, products, services, software, applications, and related content (collectively, the \"Services\"). By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please discontinue use of our Services.",
  sections: [
    {
      title: "1. Company Information",
      paragraphs: [
        "Company Name: Staller Stack",
        "Website: https://stallerstack.com",
        "Email: hello@stallerstack.us",
        "Staller Stack is a global software engineering and AI solutions company providing custom software development, web and mobile applications, SaaS platforms, artificial intelligence solutions, cloud services, IT consulting, and related digital services.",
      ],
    },
    {
      title: "2. Acceptance of Terms",
      paragraphs: ["By accessing or using our Services, you confirm that:"],
      list: [
        "You are at least 18 years of age or have the legal authority to enter into agreements.",
        "You have read and understood these Terms.",
        "You agree to comply with all applicable laws and regulations.",
      ],
    },
    {
      title: "3. Services",
      paragraphs: [
        "Staller Stack may provide services including, but not limited to:",
        "The exact scope of services will be defined in individual proposals, quotations, Statements of Work (SOW), or service agreements.",
      ],
      list: [
        "Artificial Intelligence Solutions",
        "AI Automation",
        "AI Voice Agents",
        "Custom Software Development",
        "Web Application Development",
        "Mobile Application Development",
        "SaaS Development",
        "Enterprise Software",
        "UI/UX Design",
        "API Development & Integration",
        "Cloud Infrastructure",
        "DevOps",
        "IT Consulting",
        "Technical Support & Maintenance",
      ],
    },
    {
      title: "4. Intellectual Property",
      paragraphs: [
        "Unless otherwise agreed in writing:",
        "Ownership of project deliverables will be governed by the applicable service agreement and subject to full payment of all outstanding invoices.",
      ],
      list: [
        "All website content, graphics, logos, text, icons, software, source code, designs, documentation, and trademarks remain the exclusive property of Staller Stack or its licensors.",
        "No content may be copied, modified, reproduced, distributed, or used without prior written permission.",
        "Client-owned materials remain the property of the client.",
      ],
    },
    {
      title: "5. User Responsibilities",
      paragraphs: ["You agree that you will not:"],
      list: [
        "Use the website for unlawful purposes.",
        "Attempt to gain unauthorized access to our systems.",
        "Distribute malware, viruses, or harmful code.",
        "Interfere with website functionality.",
        "Copy or misuse proprietary content.",
        "Violate applicable intellectual property rights.",
      ],
    },
    {
      title: "6. Client Responsibilities",
      paragraphs: [
        "Clients are responsible for:",
        "Project timelines may be affected if required information or approvals are delayed.",
      ],
      list: [
        "Providing accurate project requirements.",
        "Supplying required content, credentials, and approvals on time.",
        "Reviewing deliverables promptly.",
        "Paying invoices according to agreed payment terms.",
        "Ensuring they have legal rights to any materials they provide.",
      ],
    },
    {
      title: "7. Pricing and Payments",
      paragraphs: [
        "Project pricing is provided through individual quotations or contracts. Unless otherwise agreed:",
      ],
      list: [
        "Payments must be made according to the agreed payment schedule.",
        "Delayed payments may result in suspension of services.",
        "Taxes, duties, or government charges are the client's responsibility where applicable.",
        "Deposits and milestone payments may be non-refundable once work has commenced unless otherwise specified in the agreement.",
      ],
    },
    {
      title: "8. Project Changes",
      paragraphs: [
        "Changes requested after project approval may require:",
        "All significant changes should be documented and approved by both parties before implementation.",
      ],
      list: [
        "Additional development time.",
        "Revised pricing.",
        "Updated delivery schedules.",
      ],
    },
    {
      title: "9. Confidentiality",
      paragraphs: [
        "Both parties agree to maintain the confidentiality of proprietary business information shared during the course of a project. Confidential information will not be disclosed to third parties except:",
      ],
      list: [
        "With written permission.",
        "As required by law.",
        "To authorized employees or subcontractors involved in delivering the agreed services under appropriate confidentiality obligations.",
      ],
    },
    {
      title: "10. Third-Party Services",
      paragraphs: [
        "Projects may integrate third-party software, APIs, hosting providers, payment gateways, or cloud platforms. Staller Stack is not responsible for:",
        "Clients remain responsible for complying with the terms of any third-party services they choose to use.",
      ],
      list: [
        "Service interruptions caused by third-party providers.",
        "Pricing changes imposed by third parties.",
        "Security incidents originating from third-party services.",
        "Changes to third-party APIs or platform policies.",
      ],
    },
    {
      title: "11. Website Availability",
      paragraphs: [
        "We strive to keep our website available at all times but do not guarantee uninterrupted access. We may:",
      ],
      list: [
        "Update content.",
        "Modify services.",
        "Perform maintenance.",
        "Suspend access temporarily when necessary.",
      ],
    },
    {
      title: "12. Disclaimer of Warranties",
      paragraphs: [
        "The website and services are provided on an \"as is\" and \"as available\" basis. To the fullest extent permitted by law, Staller Stack disclaims all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. While we follow industry best practices, we do not guarantee that our website or services will be completely free of errors, interruptions, or vulnerabilities.",
      ],
    },
    {
      title: "13. Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by applicable law, Staller Stack shall not be liable for:",
        "Where liability cannot be excluded, our total liability will not exceed the amount paid by the client for the specific services giving rise to the claim, unless otherwise required by law.",
      ],
      list: [
        "Indirect damages.",
        "Incidental damages.",
        "Consequential damages.",
        "Loss of profits.",
        "Loss of business opportunities.",
        "Data loss.",
        "Business interruption.",
      ],
    },
    {
      title: "14. Indemnification",
      paragraphs: [
        "You agree to indemnify and hold harmless Staller Stack, its directors, employees, contractors, and affiliates from claims, liabilities, damages, or expenses arising from:",
      ],
      list: [
        "Your misuse of our Services.",
        "Your violation of these Terms.",
        "Your infringement of third-party rights.",
        "Materials or instructions you provide for a project.",
      ],
    },
    {
      title: "15. Privacy",
      paragraphs: [
        "Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, store, and protect personal information.",
      ],
    },
    {
      title: "16. Termination",
      paragraphs: [
        "We reserve the right to suspend or terminate access to our website or Services if:",
      ],
      list: [
        "These Terms are violated.",
        "Fraudulent or illegal activity is detected.",
        "Payment obligations are not fulfilled.",
        "Continued service would expose either party to unreasonable legal or operational risk.",
      ],
    },
    {
      title: "17. Force Majeure",
      paragraphs: [
        "Neither party shall be liable for delays or failures resulting from events beyond reasonable control, including natural disasters, government actions, war, cyberattacks, labor disputes, widespread internet outages, or other unforeseen circumstances.",
      ],
    },
    {
      title: "18. Governing Law",
      paragraphs: [
        "These Terms shall be governed by and interpreted in accordance with the laws specified in the applicable client agreement. Where no separate agreement exists, the governing law and jurisdiction will be determined based on the contracting entity and applicable legal requirements.",
      ],
    },
    {
      title: "19. Changes to These Terms",
      paragraphs: [
        "Staller Stack reserves the right to modify these Terms at any time. Updated versions will be published on this page with a revised \"Last Updated\" date. Continued use of the website after changes become effective constitutes acceptance of the revised Terms.",
      ],
    },
    {
      title: "20. Contact Information",
      paragraphs: [
        "For questions regarding these Terms & Conditions, please contact:",
        "Staller Stack — Website: https://stallerstack.com — Email: hello@stallerstack.us",
      ],
    },
    {
      title: "Acknowledgment",
      paragraphs: [
        "By accessing or using the Staller Stack website or Services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.",
      ],
    },
  ],
};
