export const firm = {
  name: 'Baid & Co',
  tagline: 'Clarity in numbers. Confidence in decisions.',
  description:
    'A full-service Chartered Accountancy firm helping businesses, founders, and families navigate compliance, tax, and growth with precision.',
  founded: '1989',
  email: 'hello@baidandco.com',
  phone: '+91 98765 43210',
  linkedin: 'https://www.linkedin.com',
  headOffice:
    '2nd floor, 10C, Ballygunge Circular Road, Kolkata, West Bengal, 700019',
  branchAddress:
    'Ground floor, Block - F, Flat - GC, Mangalam Apartments, 2, Rowland Road, Lajpatrai Sarani, Kolkata, West Bengal, 700020',
  hours: 'Mon – Sat, 10:00 AM – 6:30 PM',
};

export const services = [
  {
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    tone: 'blue',
    short:
      'Independent audits and assurance engagements that strengthen stakeholder trust and governance.',
    description:
      'We deliver statutory, internal, and special-purpose audits with a risk-based approach. Our teams combine technical rigor with practical insight so boards and lenders get clear, decision-ready reporting.',
    highlights: [
      'Statutory & tax audits',
      'Internal audit & process reviews',
      'Due diligence support',
      'IFC / SOX readiness assessments',
    ],
    outcomes: [
      'Stronger internal controls',
      'Cleaner financial reporting',
      'Faster audit cycles',
    ],
  },
  {
    slug: 'taxation',
    title: 'Direct & Indirect Taxation',
    tone: 'green',
    short:
      'Strategic tax planning and compliance across income tax, GST, and international frameworks.',
    description:
      'From return filings to complex assessments and planning, we help you stay compliant while structuring transactions efficiently. We partner closely through notices, appeals, and year-round advisory.',
    highlights: [
      'Income tax planning & filings',
      'GST registration, returns & audits',
      'Transfer pricing support',
      'Representation before tax authorities',
    ],
    outcomes: [
      'Lower compliance risk',
      'Optimized tax positions',
      'Timely filings year-round',
    ],
  },
  {
    slug: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping',
    tone: 'teal',
    short:
      'Accurate books, clean ledgers, and timely MIS so leadership always knows where the business stands.',
    description:
      'We set up and run accounting systems that scale with your operations—cloud or on-prem—delivering monthly closings, reconciliations, and management reports your team can act on.',
    highlights: [
      'End-to-end bookkeeping',
      'Monthly closing & MIS packs',
      'Payroll accounting support',
      'ERP / Tally / cloud setup',
    ],
    outcomes: [
      'Reliable financial visibility',
      'Faster month-end close',
      'Audit-ready books',
    ],
  },
  {
    slug: 'business-advisory',
    title: 'Business Advisory',
    tone: 'amber',
    short:
      'Fractional CFO insight, forecasting, and growth advisory for ambitious leadership teams.',
    description:
      'Beyond compliance, we sit beside founders and CFOs on budgeting, cash flow, fundraising readiness, and performance reviews—turning financial data into a strategic advantage.',
    highlights: [
      'Budgeting & forecasting',
      'Cash-flow management',
      'Fundraising readiness',
      'KPI design & board packs',
    ],
    outcomes: [
      'Sharper capital decisions',
      'Clearer growth runway',
      'Board-ready reporting',
    ],
  },
  {
    slug: 'corporate-compliance',
    title: 'Corporate Compliance',
    tone: 'violet',
    short:
      'Company law, ROC filings, and secretarial support that keeps your entity in good standing.',
    description:
      'We manage incorporation, annual filings, board documentation, and ongoing ROC / MCA compliance so legal hygiene never slows your operations.',
    highlights: [
      'Company incorporation',
      'ROC / MCA annual filings',
      'Board & AGM documentation',
      'Share allotment & restructuring support',
    ],
    outcomes: [
      'Zero missed statutory deadlines',
      'Clean corporate records',
      'Smoother investor diligence',
    ],
  },
  {
    slug: 'gst-indirect-tax',
    title: 'GST & Indirect Tax',
    tone: 'slate',
    short:
      'End-to-end GST compliance, reconciliation, and advisory for multi-state operations.',
    description:
      'Whether you are registering for the first time or reconciling multi-location returns, we handle filings, input credit optimization, and assessment support with meticulous attention to detail.',
    highlights: [
      'GST registration & migration',
      'GSTR filings & reconciliations',
      'E-invoicing / e-way bill setup',
      'Departmental audits & notices',
    ],
    outcomes: [
      'Maximized eligible credits',
      'Fewer reconciliation gaps',
      'Confident multi-state compliance',
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug) || null;
}

export const values = [
  {
    title: 'Precision',
    description: 'Every figure, filing, and footnote is treated with exacting care.',
  },
  {
    title: 'Partnership',
    description: 'We work as an extension of your team—not a distant vendor.',
  },
  {
    title: 'Clarity',
    description: 'Complex rules, explained plainly, so you can move with confidence.',
  },
];

export const milestones = [
  { year: '1989', label: 'Firm founded in Kolkata' },
  { year: '2008', label: 'Expanded into advisory & CFO support' },
  { year: '2016', label: 'Digital practice & cloud accounting' },
  { year: '2024', label: 'Serving 400+ clients across India' },
];

export const blogPosts = [
  {
    slug: 'gst-filing-checklist-2026',
    title: 'A practical GST filing checklist for growing businesses',
    excerpt:
      'Avoid common reconciliation gaps with a month-end rhythm that keeps GSTR filings clean and credit intact.',
    category: 'GST',
    date: '2026-02-12',
    readTime: '6 min read',
    content: [
      'GST compliance is rarely about one return—it is about the habit of reconciling purchases, sales, and e-invoice data before the filing window closes.',
      'Start with a fixed cut-off for invoice booking, match purchase registers to GSTR-2B, and resolve mismatches early so input tax credit is not left stranded.',
      'For multi-state operations, assign ownership by location and keep a shared tracker for notices, amendments, and delayed vendor filings.',
      'When in doubt, document assumptions. Clear working papers turn a stressful filing week into a repeatable process.',
    ],
  },
  {
    slug: 'choosing-the-right-audit-partner',
    title: 'How to choose the right audit partner for your next growth stage',
    excerpt:
      'Beyond the opinion letter—what founders and CFOs should look for when selecting an audit firm.',
    category: 'Audit',
    date: '2026-01-20',
    readTime: '5 min read',
    content: [
      'A strong audit relationship should reduce surprises, not create them. Look for a team that understands your industry, systems, and reporting calendar.',
      'Ask how they approach risk assessment, materiality, and communication with management. The best partners flag issues early and explain the “why” in plain language.',
      'Also evaluate capacity: peak season bandwidth, specialist support for complex areas, and clarity on deliverables and timelines.',
      'Finally, culture fit matters. You want auditors who are rigorous and collaborative—protective of quality without derailing day-to-day operations.',
    ],
  },
  {
    slug: 'budgeting-for-founders',
    title: 'Budgeting that founders actually use',
    excerpt:
      'A simple forecasting cadence that connects cash, hiring plans, and board conversations.',
    category: 'Advisory',
    date: '2025-11-08',
    readTime: '7 min read',
    content: [
      'Most early budgets fail because they are built once a year and forgotten. Treat forecasting as a monthly conversation between finance and leadership.',
      'Anchor on cash runway, not vanity revenue. Model hiring, tax outflows, and customer collection cycles with enough conservatism to absorb delays.',
      'Keep a one-page board view: actuals vs plan, top risks, and the decisions needed this quarter.',
      'When the model stays light and current, it becomes a decision tool—not a spreadsheet nobody opens.',
    ],
  },
  {
    slug: 'roc-compliance-calendar',
    title: 'ROC compliance calendar essentials for private limited companies',
    excerpt:
      'Key MCA filings and board hygiene items that keep your company investor-ready year-round.',
    category: 'Compliance',
    date: '2025-09-15',
    readTime: '4 min read',
    content: [
      'Corporate compliance is easiest when it is calendar-driven. Map AGM timelines, AOC-4 / MGT-7 filings, and director disclosures at the start of each financial year.',
      'Maintain board minutes and statutory registers as living records—not year-end scramble documents.',
      'Share allotments, loans, and related-party transactions deserve early legal and accounting alignment to avoid rework.',
      'A clean ROC track record shortens diligence cycles and builds trust with lenders and investors alike.',
    ],
  },
];

export function getBlogBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export const faqs = [
  {
    question: 'What services does Baid & Co provide?',
    answer:
      'We offer audit & assurance, direct and indirect taxation, accounting & bookkeeping, business advisory, corporate compliance, and GST support for businesses across India.',
  },
  {
    question: 'Do you work with startups as well as established companies?',
    answer:
      'Yes. We support early-stage founders, growing SMEs, and established enterprises. Engagements are scoped to your stage—whether that is basic compliance, fundraising readiness, or full statutory audit.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Reach out through our contact page or email. We typically begin with a short discovery call to understand your needs, timelines, and systems, then propose a clear scope and fee structure.',
  },
  {
    question: 'Can you handle GST for multi-state operations?',
    answer:
      'Absolutely. We support registration, returns, reconciliations, e-invoicing setups, and notices across multiple GSTINs with a structured monthly process.',
  },
  {
    question: 'Do you provide virtual / remote support?',
    answer:
      'Yes. Much of our work is delivered remotely through secure document sharing and scheduled calls, with in-person meetings arranged when useful.',
  },
  {
    question: 'How are fees structured?',
    answer:
      'Fees depend on scope, complexity, and frequency (one-time vs recurring). After discovery, we share a transparent proposal so you know exactly what is included.',
  },
  {
    question: 'Will we have a dedicated point of contact?',
    answer:
      'Yes. Every engagement has a relationship lead who coordinates the team, timelines, and communication so you are never left guessing who to call.',
  },
  {
    question: 'Where is your office located?',
    answer:
      'Our head office is on Ballygunge Circular Road, Kolkata, with a branch at Mangalam Apartments on Rowland Road / Lajpatrai Sarani. Full addresses are listed on the contact page and footer.',
  },
];
