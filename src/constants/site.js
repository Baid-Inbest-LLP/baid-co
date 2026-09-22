export const firm = {
  name: 'Baid & Co',
  tagline: 'Clarity in numbers. Confidence in decisions.',
  description:
    'A full-service Chartered Accountancy firm helping businesses, founders, and families navigate compliance, tax, and growth with precision.',
  founded: '1989',
  email: 'ContactUs@baidandco.com',
  phone: '+91 98765 43210',
  linkedin: 'https://www.linkedin.com',
  facebook: 'https://www.facebook.com',
  instagram: 'https://www.instagram.com',
  whatsapp: 'https://wa.me/919876543210',
  headOffice:
    '2nd floor, 10C, Ballygunge Circular Road, Kolkata, West Bengal, 700019',
  branchAddress:
    'Ground floor, Block - F, Flat - GC, Mangalam Apartments, 2, Rowland Road, Lajpatrai Sarani, Kolkata, West Bengal, 700020',
  hours: 'Mon – Sat, 10am – 7pm',
};

export const services = [
  {
    slug: 'income-tax',
    title: 'Income Tax Services',
    tone: 'blue',
    short:
      'ITR Filing, Tax Planning, Assessments, Appeals, Scrutiny Cases & Representation.',
    description:
      'End-to-end income-tax support under the Income-tax Act, 1961—from return filing and planning to assessments, appeals, and representation before tax authorities.',
    overview: [
      'Income-tax compliance in India covers advance tax, TDS/TCS, return filing under Section 139, and—where thresholds apply—tax audit under Section 44AB. Individuals, firms, and companies each face distinct forms, deadlines, and disclosure requirements.',
      'We handle the full cycle: planning conversations before year-end, accurate ITR preparation, scrutiny responses, and appellate support when assessments turn into disputes. Positions are documented so they hold up under review.',
    ],
    frameworks: [
      {
        label: 'Income-tax Act, 1961',
        detail:
          'Return filing under Section 139, tax audit under Section 44AB, TDS/TCS, advance tax, and assessment proceedings.',
      },
      {
        label: 'ITR & e-filing',
        detail:
          'Form selection, computation of total income, and electronic filing with acknowledgements and rectification support.',
      },
      {
        label: 'Assessments & appeals',
        detail:
          'Scrutiny and reassessment responses, CIT(A) / ITAT preparation, and representation assistance with working papers.',
      },
    ],
    highlights: [
      'ITR preparation and filing for individuals, firms, and companies',
      'Tax planning for salary, business, capital gains, and investments',
      'Advance tax and TDS/TCS compliance with reconciliations',
      'Tax audit under Section 44AB and Form 3CD support',
      'Scrutiny, assessment, and demand-notice responses',
      'Appeals and representation before tax authorities',
    ],
    process: [
      {
        title: 'Discovery & documents',
        detail:
          'Collect AIS/26AS, books, and prior returns; map open assessments and filing deadlines.',
      },
      {
        title: 'Compute & plan',
        detail:
          'Prepare computations, flag planning opportunities, and confirm positions before filing.',
      },
      {
        title: 'File & track',
        detail:
          'E-file returns, share acknowledgements, and monitor processing or rectification needs.',
      },
      {
        title: 'Defend & advise',
        detail:
          'Respond to notices, support appeals, and advise on ongoing tax decisions year-round.',
      },
    ],
    whoFor: [
      'Salaried professionals and promoters with complex income streams',
      'Partnerships, LLPs, and private companies with recurring ITR obligations',
      'Businesses crossing tax-audit thresholds under Section 44AB',
      'Assessees facing scrutiny, demands, or appellate matters',
    ],
    outcomes: [
      'Timely, accurate ITR filings',
      'Lower risk of avoidable interest and penalties',
      'Documented positions for assessments and appeals',
      'Clearer cash planning around tax outflows',
    ],
  },
  {
    slug: 'gst-services',
    title: 'GST Services',
    tone: 'green',
    short:
      'GST Registration, Return Filing, Assessments, Refunds, Notices, Audits, Litigation & Advisory.',
    description:
      'Full-stack GST compliance and advisory under the CGST / SGST / IGST framework—registration through returns, refunds, audits, notices, and litigation support.',
    overview: [
      'GST is a monthly operating system: outward supplies in GSTR-1, tax payment via GSTR-3B, and inward credit validation against GSTR-2B. Eligible input tax credit depends on vendor compliance and accurate invoice data—not only your own books.',
      'We install filing rhythms, credit controls, and notice-response packs so multi-GSTIN businesses stay compliant without stranding credit or inviting avoidable scrutiny.',
    ],
    frameworks: [
      {
        label: 'CGST / SGST / IGST Acts',
        detail:
          'Levy, place of supply, registration, returns, refunds, and input tax credit rules that govern day-to-day GST.',
      },
      {
        label: 'Return & ITC cycle',
        detail:
          'GSTR-1, GSTR-3B, and GSTR-2B matching to protect credit and keep books aligned with the portal.',
      },
      {
        label: 'Audits, notices & litigation',
        detail:
          'Departmental audits, ASMT/DRC proceedings, refund claims, and dispute support with evidence trails.',
      },
    ],
    highlights: [
      'GST registration, amendments, and cancellation',
      'Monthly / quarterly return filing with working papers',
      'GSTR-2B reconciliation and vendor follow-ups',
      'Refund claims and tracking',
      'E-invoicing and e-way bill process setup',
      'Audits, notices, litigation support, and rate advisory',
    ],
    process: [
      {
        title: 'Map GSTINs & flows',
        detail:
          'Document registrations, place-of-supply patterns, and invoice systems across states.',
      },
      {
        title: 'Monthly GST close',
        detail:
          'Reconcile 2B, clear mismatches, then file GSTR-1 and GSTR-3B with confidence.',
      },
      {
        title: 'Credit & refunds',
        detail:
          'Track pending ITC, ineligible credit, and refund claims before they stall cash flow.',
      },
      {
        title: 'Assessments & disputes',
        detail:
          'Respond to notices and audits with portal extracts, invoices, and structured replies.',
      },
    ],
    whoFor: [
      'Businesses with one or many GSTINs across states',
      'Traders and manufacturers with heavy ITC exposure',
      'Companies crossing e-invoice or e-way bill thresholds',
      'Teams facing GST audits, mismatches, or demand notices',
    ],
    outcomes: [
      'Maximised eligible input tax credit',
      'Fewer portal vs books gaps',
      'Faster refund and notice cycles',
      'Confident multi-state GST discipline',
    ],
  },
  {
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    tone: 'teal',
    short:
      'Statutory Audit, Internal Audit, Tax Audit, Compliance Audit & Risk Management.',
    description:
      'Independent statutory, internal, tax, and compliance audits aligned to the Companies Act, 2013 and ICAI Standards on Auditing—strengthening trust, controls, and reporting quality.',
    overview: [
      'Every company under the Companies Act, 2013 must have its financial statements audited by a practising Chartered Accountant. The auditor’s report under Section 143 addresses whether accounts give a true and fair view and, where applicable, whether internal financial controls over financial reporting are adequate.',
      'We plan around material risks, keep independence rules (including Section 144) intact, and communicate findings early so management can remediate before year-end pressure peaks.',
    ],
    frameworks: [
      {
        label: 'Companies Act, 2013',
        detail:
          'Statutory audit under Section 143; IFC reporting under Section 143(3)(i); internal audit applicability under Section 138.',
      },
      {
        label: 'ICAI Standards on Auditing',
        detail:
          'Risk assessment (SA 315), responses to risk (SA 330), and reporting frameworks (SA 700 series).',
      },
      {
        label: 'Tax & compliance audits',
        detail:
          'Tax audits under Section 44AB and targeted compliance / risk reviews beyond the statutory opinion.',
      },
    ],
    highlights: [
      'Statutory audits of companies, LLPs, and other entities',
      'Internal audit programmes aligned to Section 138 thresholds',
      'Tax audits under Section 44AB with Form 3CD support',
      'Compliance audits and process risk reviews',
      'IFC-FR readiness and control testing',
      'Due diligence and special-purpose assurance for lenders and boards',
    ],
    process: [
      {
        title: 'Scope & risk assessment',
        detail:
          'Understand the entity, systems, and reporting calendar; map material balances and controls.',
      },
      {
        title: 'Fieldwork & testing',
        detail:
          'Execute substantive and control testing with clear samples and documented evidence.',
      },
      {
        title: 'Findings & remediation',
        detail:
          'Share management letters early and support corrective action before sign-off.',
      },
      {
        title: 'Opinion & reporting',
        detail:
          'Issue audit reports, CARO annexures where required, and board-ready summaries.',
      },
    ],
    whoFor: [
      'Private and public companies needing annual statutory audit',
      'Businesses requiring internal or compliance audit programmes',
      'Entities crossing tax-audit thresholds',
      'Groups preparing for investment, lending, or acquisition diligence',
    ],
    outcomes: [
      'Credible financial statements for stakeholders',
      'Stronger internal controls and risk visibility',
      'Fewer year-end surprises',
      'Working papers that stand up to peer and regulator scrutiny',
    ],
  },
  {
    slug: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping',
    tone: 'amber',
    short:
      'Bookkeeping, Financial Statements, MIS Reports, Payroll Support & Cloud Accounting.',
    description:
      'Accurate day-to-day books, month-end close, and MIS packs—so leadership always knows where the business stands and audits start from clean ledgers.',
    overview: [
      'Section 128 of the Companies Act, 2013 requires companies to maintain proper books of account. Clean ledgers also underpin GST reconciliations, tax audits, and financial statements filed with ROC.',
      'We design chart-of-accounts structures, closing checklists, and reporting packs that match how you decide—cash, margins, receivables, and runway—not just a trial balance dumped at month-end.',
    ],
    frameworks: [
      {
        label: 'Books of account (Section 128)',
        detail:
          'Proper books that explain transactions and support a true and fair view of financial position.',
      },
      {
        label: 'Schedule III & Ind AS / AS',
        detail:
          'Presentation and recognition aligned to the framework applicable to your entity.',
      },
      {
        label: 'Audit & GST readiness',
        detail:
          'Ledgers structured for statutory audit, tax audit, and GSTR purchase/sales matching.',
      },
    ],
    highlights: [
      'Day-to-day bookkeeping and bank / vendor reconciliations',
      'Monthly closing packs with P&L, balance sheet, and cash summary',
      'MIS dashboards for founders and operating leads',
      'Payroll accounting and statutory deduction support',
      'Tally, Zoho Books, QuickBooks, and ERP chart setup',
      'Fixed-asset registers, inventory cut-off, and year-end schedules',
    ],
    process: [
      {
        title: 'System design',
        detail:
          'Configure ledgers, cost centres, and document flows around your operating model.',
      },
      {
        title: 'Monthly rhythm',
        detail:
          'Book, reconcile, and close on a fixed calendar with defined cut-offs.',
      },
      {
        title: 'MIS & review',
        detail:
          'Deliver variance commentary leadership can act on within days—not weeks.',
      },
      {
        title: 'Year-end readiness',
        detail:
          'Prepare audit schedules, GST tie-outs, and supporting files before peak season.',
      },
    ],
    whoFor: [
      'Startups and SMEs without a full in-house finance team',
      'Growing companies needing a faster, cleaner month-end close',
      'Groups standardising books across entities or locations',
      'Businesses preparing for first audit, fundraising, or ERP migration',
    ],
    outcomes: [
      'Reliable, current financial visibility',
      'Faster month-end close',
      'Audit-ready books and schedules',
      'Less firefighting during GST and tax filing windows',
    ],
  },
  {
    slug: 'corporate-roc-compliance',
    title: 'Corporate & ROC Compliance',
    tone: 'violet',
    short:
      'Incorporation, ROC Filings, Board Documentation, Annual Returns & Secretarial Support.',
    description:
      'Company law and MCA compliance—from SPICe+ incorporation to AOC-4 / MGT-7 filings and living board records—so your entity stays in good standing.',
    overview: [
      'Indian companies navigate MCA processes from day one: name reservation and incorporation via SPICe+, then ongoing AGMs under Section 96, financial statements in AOC-4 under Section 137, and annual returns in MGT-7 / MGT-7A under Section 92.',
      'We run a calendar-first programme—minutes, registers, director KYC, and event-based filings—so diligence and banking reviews find clean records instead of scramble documents.',
    ],
    frameworks: [
      {
        label: 'Incorporation (SPICe+)',
        detail:
          'MCA SPICe+ with linked forms for DIN, PAN/TAN, EPFO/ESIC, bank account, and optional GSTIN.',
      },
      {
        label: 'Annual ROC filings',
        detail:
          'AOC-4 (Section 137) and MGT-7 / MGT-7A (Section 92) after the AGM.',
      },
      {
        label: 'Board & AGM hygiene',
        detail:
          'Notices, agendas, minutes, and statutory registers maintained as living records.',
      },
    ],
    highlights: [
      'Private limited, OPC, and LLP incorporation support',
      'ROC / MCA annual filings (AOC-4, MGT-7 / MGT-7A)',
      'Board meetings, AGM documentation, and statutory registers',
      'Share allotment, transfer, and restructuring filings',
      'Director DIN / KYC and event-based MCA forms',
      'Secretarial calendar ownership with deadline alerts',
    ],
    process: [
      {
        title: 'Entity & calendar map',
        detail:
          'Inventory filings, directors, share capital, and due dates for the year.',
      },
      {
        title: 'Event execution',
        detail:
          'Prepare resolutions, notices, and e-forms; coordinate digital signatures.',
      },
      {
        title: 'Record keeping',
        detail:
          'Update minutes books, registers, and document repositories after every action.',
      },
      {
        title: 'Status & reminders',
        detail:
          'Share a live tracker of what is filed, pending, or approaching.',
      },
    ],
    whoFor: [
      'Founders incorporating or restructuring Indian entities',
      'Private companies needing dependable annual ROC compliance',
      'Startups preparing for investor or bank diligence',
      'Groups managing multiple entities and director changes',
    ],
    outcomes: [
      'No missed statutory ROC deadlines',
      'Clean, diligence-ready corporate records',
      'Faster banking and investment checks',
      'Less management time spent chasing forms',
    ],
  },
  {
    slug: 'litigation-representation',
    title: 'Litigation & Representation',
    tone: 'slate',
    short:
      'Assessments, Appeals, Notices, Scrutiny Representation & Dispute Resolution.',
    description:
      'Focused representation across income-tax and GST disputes—from scrutiny replies and assessments through appeals and settlement strategy.',
    overview: [
      'Tax and GST disputes escalate quickly when notices go unanswered or replies lack evidence. Effective representation starts with a clear case theory, organised working papers, and timely filings at each forum.',
      'We prepare submissions for scrutiny and assessment stages, support CIT(A) / appellate and GST adjudication matters, and coordinate with counsel where higher-forum advocacy is required—always with facts and law tied together.',
    ],
    frameworks: [
      {
        label: 'Income-tax proceedings',
        detail:
          'Scrutiny under Section 143(2), assessments, rectifications, and appeals before CIT(A) and beyond.',
      },
      {
        label: 'GST adjudication',
        detail:
          'Show-cause notices, ASMT/DRC proceedings, and appellate filings under the CGST framework.',
      },
      {
        label: 'Evidence & procedure',
        detail:
          'Portal extracts, books, invoices, and statutory timelines organised for defensible replies.',
      },
    ],
    highlights: [
      'Scrutiny and assessment representation',
      'Drafting replies to income-tax and GST notices',
      'Appeal preparation and hearing support',
      'Penalty and demand strategy reviews',
      'Coordination with legal counsel for higher forums',
      'Settlement and closure tracking through to order',
    ],
    process: [
      {
        title: 'Case intake',
        detail:
          'Review notices, orders, and history; identify issues, exposure, and deadlines.',
      },
      {
        title: 'Build the file',
        detail:
          'Assemble evidence, computations, and legal grounds into a structured reply pack.',
      },
      {
        title: 'Represent & follow up',
        detail:
          'File submissions, attend hearings where appropriate, and track adjournments.',
      },
      {
        title: 'Order & next steps',
        detail:
          'Analyse outcomes, advise on appeal or compliance, and close the matter cleanly.',
      },
    ],
    whoFor: [
      'Assessees under scrutiny or reassessment',
      'Businesses receiving GST show-cause or demand notices',
      'Companies needing appellate support after adverse orders',
      'Groups wanting a single team to manage multi-matter disputes',
    ],
    outcomes: [
      'Timely, evidence-backed responses',
      'Clearer view of exposure and options',
      'Stronger hearing preparation',
      'Disputes tracked to a documented close',
    ],
  },
  {
    slug: 'financial-advisory',
    title: 'Financial Advisory',
    tone: 'blue',
    short:
      'Budgeting, Cash Flow, Fundraising Readiness, KPI Design & Board Reporting.',
    description:
      'Fractional CFO insight for budgeting, cash runway, fundraising readiness, and board packs—turning numbers into decisions, not just compliance outputs.',
    overview: [
      'Compliance keeps you legal; advisory keeps you intentional. We sit beside founders and finance leads to connect operating plans with cash, tax outflows, working capital, and capital-raising milestones.',
      'Engagements scale with your stage—from light monthly CFO office hours to deeper forecasting and investor-pack support. The goal is a living model your board actually uses.',
    ],
    frameworks: [
      {
        label: 'Decision-grade forecasting',
        detail:
          'Integrated P&L, cash, and balance-sheet models with hiring, tax, and collection assumptions made explicit.',
      },
      {
        label: 'Governance reporting',
        detail:
          'Board packs and KPI trees that mirror how investors and lenders evaluate trajectory.',
      },
      {
        label: 'Capital readiness',
        detail:
          'Data rooms, historical bridges, and diligence responses grounded in clean underlying books.',
      },
    ],
    highlights: [
      'Annual budgets and rolling forecasts with scenarios',
      'Cash-flow management and runway monitoring',
      'Fundraising and lender diligence support',
      'KPI design, unit economics, and operating reviews',
      'Board and investor reporting packs',
      'Fractional CFO / virtual finance leadership retainers',
    ],
    process: [
      {
        title: 'Baseline the business',
        detail:
          'Map drivers, cash cycles, and reporting gaps from actuals and leadership interviews.',
      },
      {
        title: 'Build the model',
        detail:
          'Create a transparent forecast with assumptions, sensitivities, and a simple dashboard.',
      },
      {
        title: 'Install the cadence',
        detail:
          'Monthly actuals-vs-plan reviews, cash huddles, and prioritised action lists.',
      },
      {
        title: 'Support the milestone',
        detail:
          'Prepare raise materials, lender packs, or board decks when you need external capital.',
      },
    ],
    whoFor: [
      'Founders who need CFO-level judgment without a full-time hire yet',
      'SMEs professionalising finance before a raise or bank facility',
      'Leadership teams wanting sharper budgeting and KPI discipline',
      'Family businesses preparing expansion or succession plans',
    ],
    outcomes: [
      'Sharper capital and hiring decisions',
      'Clearer visibility of runway and cash risk',
      'Board-ready reporting with less rework',
      'Finance conversations that drive operations',
    ],
  },
  {
    slug: 'certification-valuation',
    title: 'Certification & Valuation',
    tone: 'green',
    short:
      'Net Worth Certificates, Turnover Certificates, Form 15CB, Valuation Reports & Attestations.',
    description:
      'CA certifications and valuation support for banking, remittances, tenders, and transactions—issued with the working papers and UDIN discipline regulators expect.',
    overview: [
      'Banks, departments, and counterparties routinely ask for Chartered Accountant certificates—net worth, turnover, fund utilisation, and Form 15CB for certain remittances. Accuracy and documentation matter as much as the signature.',
      'We prepare certificates and valuation opinions from verified source data, apply applicable ICAI guidance, and retain working papers so every attestation can be defended if questioned later.',
    ],
    frameworks: [
      {
        label: 'CA certificates & attestation',
        detail:
          'Net worth, turnover, and other statutory or bank-required certificates with supporting schedules.',
      },
      {
        label: 'Form 15CB / remittances',
        detail:
          'Accountant certificates for specified foreign remittances under the Income-tax framework.',
      },
      {
        label: 'Valuation support',
        detail:
          'Business and share valuation assistance for restructuring, fundraising, and regulatory filings where a CA opinion is required.',
      },
    ],
    highlights: [
      'Net worth and solvency certificates',
      'Turnover and projection certificates for tenders and finance',
      'Form 15CB certificates for outward remittances',
      'Utilisation and end-use certificates',
      'Share and business valuation support',
      'Other attestations with UDIN and working-paper packs',
    ],
    process: [
      {
        title: 'Purpose & scope',
        detail:
          'Confirm who needs the certificate, the format, and the underlying period or valuation date.',
      },
      {
        title: 'Verify source data',
        detail:
          'Cross-check books, bank statements, filings, and agreements before drafting.',
      },
      {
        title: 'Draft & review',
        detail:
          'Prepare the certificate or valuation workings with partner review and clear caveats.',
      },
      {
        title: 'Issue & archive',
        detail:
          'Deliver signed output with UDIN where applicable and retain the file for future queries.',
      },
    ],
    whoFor: [
      'Businesses needing bank or tender certificates on short timelines',
      'Companies making outward remittances requiring Form 15CB',
      'Founders and boards needing valuation support for deals or filings',
      'Groups standardising attestation requests across entities',
    ],
    outcomes: [
      'Certificates accepted by banks and authorities',
      'Faster turnaround with fewer rework loops',
      'Traceable workings behind every attestation',
      'Lower risk of defective or unsupported certificates',
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
      'We offer income tax, GST, audit & assurance, accounting & bookkeeping, corporate & ROC compliance, litigation & representation, financial advisory, and certification & valuation services for businesses and individuals across India.',
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
