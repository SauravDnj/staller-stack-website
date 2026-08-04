export type LegalSection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalDocument = {
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  updated: "August 2, 2026",
  intro:
    "Staller Stack (\"we\", \"us\", \"our\") respects your privacy. This policy explains what information we collect through this website, how we use it, and the choices you have.",
  sections: [
    {
      title: "Information We Collect",
      paragraphs: [
        "We collect information you provide directly, such as when you submit our contact form or request a consultation.",
      ],
      list: [
        "Contact details you submit (name, work email, company, and project description)",
        "Basic usage data collected automatically (pages visited, browser type, approximate location from IP address)",
        "Any information you choose to share when corresponding with our team",
      ],
    },
    {
      title: "How We Use Your Information",
      paragraphs: [
        "We use the information we collect to respond to inquiries, scope and deliver engagements, improve this website, and communicate updates relevant to a project or request you've made.",
        "We do not sell your personal information to third parties.",
      ],
    },
    {
      title: "Cookies & Analytics",
      paragraphs: [
        "This website may use cookies and similar technologies to understand how visitors use our site and to improve performance. You can control cookies through your browser settings; disabling them may limit some site functionality.",
      ],
    },
    {
      title: "Data Sharing",
      paragraphs: [
        "We share information only with service providers who help us operate this website or deliver client engagements (such as hosting or email-delivery providers), and only to the extent necessary for them to perform those services.",
        "We may disclose information if required by law or to protect the rights, property, or safety of Staller Stack, our clients, or others.",
      ],
    },
    {
      title: "Data Security",
      paragraphs: [
        "We apply industry-standard technical and organizational measures to protect information submitted through this site. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      title: "Data Retention",
      paragraphs: [
        "We retain contact and project information for as long as necessary to respond to your inquiry, deliver an engagement, or comply with legal obligations, after which it is deleted or anonymized.",
      ],
    },
    {
      title: "Your Rights",
      paragraphs: [
        "Depending on your location, you may have the right to access, correct, or request deletion of your personal information. To exercise these rights, contact us using the details below.",
      ],
    },
    {
      title: "Changes to This Policy",
      paragraphs: [
        "We may update this policy from time to time. The \"last updated\" date at the top of this page reflects the most recent revision.",
      ],
    },
    {
      title: "Contact Us",
      paragraphs: [
        "If you have questions about this privacy policy or how we handle your information, reach out via the contact details on our Contact page.",
      ],
    },
  ],
};

export const termsOfService: LegalDocument = {
  updated: "August 2, 2026",
  intro:
    "These Terms of Service (\"Terms\") govern your use of the Staller Stack website. By using this site, you agree to these Terms.",
  sections: [
    {
      title: "Use of This Website",
      paragraphs: [
        "This website is provided to share information about Staller Stack's services and to let visitors get in touch about potential engagements. You agree to use it only for lawful purposes.",
      ],
    },
    {
      title: "Intellectual Property",
      paragraphs: [
        "All content on this website — including text, graphics, logos, and code — is the property of Staller Stack or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our written permission.",
      ],
    },
    {
      title: "Client Engagements",
      paragraphs: [
        "Any project, pricing plan, or engagement described on this website is subject to a separate signed agreement or statement of work between Staller Stack and the client. Nothing on this website constitutes a binding offer or contract on its own.",
      ],
    },
    {
      title: "No Warranties",
      paragraphs: [
        "This website and its content are provided \"as is\" without warranties of any kind, express or implied, including accuracy, completeness, or fitness for a particular purpose.",
      ],
    },
    {
      title: "Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, Staller Stack is not liable for any indirect, incidental, or consequential damages arising from your use of this website.",
      ],
    },
    {
      title: "Third-Party Links",
      paragraphs: [
        "This website may link to third-party sites we do not control. We are not responsible for the content or practices of those sites.",
      ],
    },
    {
      title: "Changes to These Terms",
      paragraphs: [
        "We may revise these Terms at any time. Continued use of this website after changes are posted constitutes acceptance of the updated Terms.",
      ],
    },
    {
      title: "Governing Law",
      paragraphs: [
        "These Terms are governed by the laws of India, without regard to conflict-of-law principles.",
      ],
    },
    {
      title: "Contact Us",
      paragraphs: [
        "Questions about these Terms can be directed to us via the contact details on our Contact page.",
      ],
    },
  ],
};
