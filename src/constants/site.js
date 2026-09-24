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
      'Income-tax compliance in India covers advance tax, TDS/TCS, return filing under Section 139, and—where thresholds apply—tax audit under Section 44AB. Individuals, firms, and companies each face distinct forms, deadlines, and disclosure requirements that change with every Finance Act.',
      'AIS, Form 26AS, and TIS now sit at the centre of return preparation. Matching reported income to these statements early reduces processing mismatches, refund delays, and the risk of automated notices after filing.',
      'We handle the full cycle: planning conversations before year-end, accurate ITR preparation, scrutiny responses, and appellate support when assessments turn into disputes. Positions are documented so they hold up under review.',
      'Whether you need a clean annual filing rhythm or help with an open assessment, we keep ownership clear—computations, acknowledgements, and next actions stay visible to you throughout the engagement.',
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
      {
        title: 'Salaried professionals',
        detail: 'Promoters and individuals with complex income streams who need structured planning and filing.',
      },
      {
        title: 'Firms & companies',
        detail: 'Partnerships, LLPs, and private companies with recurring ITR and compliance obligations.',
      },
      {
        title: 'Tax-audit entities',
        detail: 'Businesses crossing tax-audit thresholds under Section 44AB and needing Form 3CD support.',
      },
      {
        title: 'Under scrutiny',
        detail: 'Assessees facing scrutiny, demands, or appellate matters who need documented positions.',
      },
    ],
    outcomes: [
      'Timely, accurate ITR filings',
      'Lower risk of avoidable interest and penalties',
      'Documented positions for assessments and appeals',
      'Clearer cash planning around tax outflows',
    ],
    faqs: [
      {
        question: 'Which ITR forms do you file?',
        answer:
          'We prepare and e-file the appropriate ITR based on your income profile—salary, business, capital gains, firm, or company returns—with AIS/26AS matching before submission.',
      },
      {
        question: 'Can you help if I receive a scrutiny or demand notice?',
        answer:
          'Yes. We review the notice, prepare written submissions with supporting workings, and assist with responses and representation through assessment and, where needed, appellate stages.',
      },
      {
        question: 'Do you handle tax audits under Section 44AB?',
        answer:
          'We support tax-audit engagements including Form 3CD preparation, book reviews against audit points, and coordination so filings align with your ITR timelines.',
      },
      {
        question: 'When should tax planning conversations start?',
        answer:
          'Ideally before year-end, so advance tax, deductions, and structuring choices can still be actioned. Mid-year reviews also help if income or investments have shifted materially.',
      },
      {
        question: 'Do you file for NRIs and people with foreign income?',
        answer:
          'Yes. We handle residential-status assessment, foreign income and asset disclosures, and coordination with Form 67 / FTC claims where applicable, alongside the domestic ITR.',
      },
      {
        question: 'How do fees work for annual tax support?',
        answer:
          'Fees depend on complexity—number of income heads, entities, and whether assessments or appeals are included. After a short discovery call we share a clear scope and fee proposal.',
      },
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
      'Place-of-supply rules, e-invoicing thresholds, and e-way bill obligations add another layer for growing businesses. Getting the registration footprint and invoice flow right upfront prevents recurring portal corrections later.',
      'We install filing rhythms, credit controls, and notice-response packs so multi-GSTIN businesses stay compliant without stranding credit or inviting avoidable scrutiny.',
      'From registration and returns to refunds, assessments, and litigation support, the engagement is built around a live tracker of filings, mismatches, and open actions—so leadership always knows where GST cash and risk stand.',
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
      {
        title: 'Multi-GSTIN businesses',
        detail: 'Organisations with one or many GSTINs across states needing consistent return discipline.',
      },
      {
        title: 'Traders & manufacturers',
        detail: 'Businesses with heavy ITC exposure that must reconcile 2B and credit positions carefully.',
      },
      {
        title: 'E-invoice readiness',
        detail: 'Companies crossing e-invoice or e-way bill thresholds and needing process alignment.',
      },
      {
        title: 'GST disputes',
        detail: 'Teams facing GST audits, mismatches, or demand notices who need structured responses.',
      },
    ],
    outcomes: [
      'Maximised eligible input tax credit',
      'Fewer portal vs books gaps',
      'Faster refund and notice cycles',
      'Confident multi-state GST discipline',
    ],
    faqs: [
      {
        question: 'Do you support multi-GSTIN / multi-state filings?',
        answer:
          'Yes. We run monthly GSTR-1 and GSTR-3B cycles across GSTINs, with credit checks against GSTR-2B and a shared tracker for mismatches and open actions.',
      },
      {
        question: 'Can you help with GST registration and e-invoicing setup?',
        answer:
          'We handle new registrations, amendments, and advisory on e-invoice and e-way bill thresholds so invoice flows match your compliance footprint from day one.',
      },
      {
        question: 'What if we receive a GST notice or audit intimation?',
        answer:
          'We prepare reply packs with reconciliations and evidence, support departmental audits and assessments, and assist through refund or litigation stages where required.',
      },
      {
        question: 'How do you reduce ITC leakage?',
        answer:
          'Through vendor compliance checks, 2B vs books reconciliations, and filing discipline that flags blocked or mismatched credit before returns are locked.',
      },
      {
        question: 'Can you help with GST refunds?',
        answer:
          'Yes. We prepare refund applications for zero-rated supplies, inverted duty, and other eligible cases, track portal status, and respond to deficiency memos until credit or cash is realised.',
      },
      {
        question: 'Do you handle GSTR-9 / GSTR-9C annual returns?',
        answer:
          'We prepare annual returns and reconciliation statements where required, aligning books, monthly returns, and tables so year-end filings do not reopen settled monthly positions.',
      },
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
      'Beyond the statutory opinion, stakeholders increasingly expect early visibility on control gaps, related-party disclosures, and CARO reporting. A well-run audit reduces year-end surprises for boards, lenders, and investors.',
      'We plan around material risks, keep independence rules (including Section 144) intact, and communicate findings early so management can remediate before year-end pressure peaks.',
      'Engagements cover statutory, tax, internal, and compliance audits with a clear fieldwork calendar, sample documentation, and board-ready summaries that sit alongside the formal report.',
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
      {
        title: 'Statutory audit',
        detail: 'Private and public companies needing credible annual statutory audit and reporting.',
      },
      {
        title: 'Internal audit',
        detail: 'Businesses requiring internal or compliance audit programmes with clear findings.',
      },
      {
        title: 'Tax-audit support',
        detail: 'Entities crossing tax-audit thresholds that need coordinated assurance work.',
      },
      {
        title: 'Diligence-ready',
        detail: 'Groups preparing for investment, lending, or acquisition diligence reviews.',
      },
    ],
    outcomes: [
      'Credible financial statements for stakeholders',
      'Stronger internal controls and risk visibility',
      'Fewer year-end surprises',
      'Working papers that stand up to peer and regulator scrutiny',
    ],
    faqs: [
      {
        question: 'What types of audit do you undertake?',
        answer:
          'We cover statutory audit under the Companies Act, tax audit, internal audit, and focused compliance or risk reviews scoped to your industry and reporting needs.',
      },
      {
        question: 'How disruptive is the audit process for our team?',
        answer:
          'We agree a request list and timeline upfront, work primarily from shared working papers, and schedule fieldwork so month-end and statutory deadlines stay protected.',
      },
      {
        question: 'Will we get actionable findings, not only an opinion?',
        answer:
          'Yes. Alongside the audit opinion or report, we share control observations and practical recommendations so management can close gaps before the next cycle.',
      },
      {
        question: 'Can you audit if another firm handles our bookkeeping?',
        answer:
          'Absolutely. Independence and documentation standards still apply; we coordinate with your accounting team or outsourced provider for schedules and evidence.',
      },
      {
        question: 'What is the difference between statutory and internal audit?',
        answer:
          'Statutory audit delivers an independent opinion on financial statements for stakeholders. Internal audit focuses on controls, process risk, and management recommendations—often on a recurring cycle through the year.',
      },
      {
        question: 'When should we appoint the auditor for the year?',
        answer:
          'As early as practical after the prior year closes. Early appointment lets planning, interim testing, and control walkthroughs finish before year-end pressure peaks.',
      },
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
      'As businesses grow, informal bookkeeping breaks down—cost centres blur, bank reconciliations slip, and MIS arrives too late to steer cash. A defined monthly close is what turns accounting into a decision tool.',
      'We design chart-of-accounts structures, closing checklists, and reporting packs that match how you decide—cash, margins, receivables, and runway—not just a trial balance dumped at month-end.',
      'Support covers day-to-day bookkeeping, payroll inputs, cloud accounting setup, and year-end schedules so audit and tax teams inherit organised files instead of reconstructing the year from scratch.',
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
      {
        title: 'Startups & SMEs',
        detail: 'Growing businesses without a full in-house finance team that still need clean books.',
      },
      {
        title: 'Faster month-end',
        detail: 'Companies that want a reliable close calendar with clear cut-offs and ownership.',
      },
      {
        title: 'Multi-entity groups',
        detail: 'Organisations standardising books across entities, locations, or cloud stacks.',
      },
      {
        title: 'Audit & raise prep',
        detail: 'Businesses preparing for first audit, fundraising, or ERP migration.',
      },
    ],
    outcomes: [
      'Reliable, current financial visibility',
      'Faster month-end close',
      'Audit-ready books and schedules',
      'Less firefighting during GST and tax filing windows',
    ],
    faqs: [
      {
        question: 'Do you work on our existing accounting software?',
        answer:
          'Yes. We support common cloud and desktop ledgers, clean up chart-of-accounts issues, and set recurring close checklists so books stay current without tool lock-in.',
      },
      {
        question: 'What does a typical month-end package include?',
        answer:
          'Reconciled ledgers, financial statements, MIS or KPI packs as scoped, payroll support where needed, and schedules that feed GST and income-tax filings.',
      },
      {
        question: 'Can you catch us up if books are months behind?',
        answer:
          'We run catch-up projects to bring prior periods current, then hand into a steady monthly rhythm so backlog does not rebuild.',
      },
      {
        question: 'Will the books be audit- and tax-ready?',
        answer:
          'That is the design goal—supporting schedules, GST reconciliations, and documentation that reduce year-end scramble for auditors and tax filings.',
      },
      {
        question: 'Do you support payroll and statutory deductions?',
        answer:
          'Where scoped, we process payroll inputs, maintain salary registers, and align TDS, PF, and ESI postings with the ledger so compliance and books stay in sync.',
      },
      {
        question: 'Can founders get a simple MIS every month?',
        answer:
          'Yes. We design concise packs—cash, P&L, receivables, and key ratios—so non-finance founders see what matters without wading through a full trial balance.',
      },
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
      'Event-driven filings—director appointments, share allotments, charges, and registered-office changes—sit alongside the annual calendar. Missed forms attract penalties and create diligence friction later.',
      'We run a calendar-first programme—minutes, registers, director KYC, and event-based filings—so diligence and banking reviews find clean records instead of scramble documents.',
      'From first incorporation to multi-entity groups, you get a live status of what is filed, pending, or approaching, with resolutions and e-forms prepared for digital signature and MCA upload.',
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
      {
        title: 'New incorporations',
        detail: 'Founders incorporating or restructuring Indian entities with clean ROC filings.',
      },
      {
        title: 'Annual ROC cadence',
        detail: 'Private companies needing dependable annual compliance without missed deadlines.',
      },
      {
        title: 'Investor readiness',
        detail: 'Startups preparing for investor or bank diligence with orderly records.',
      },
      {
        title: 'Multi-entity boards',
        detail: 'Groups managing multiple entities, director changes, and event-driven filings.',
      },
    ],
    outcomes: [
      'No missed statutory ROC deadlines',
      'Clean, diligence-ready corporate records',
      'Faster banking and investment checks',
      'Less management time spent chasing forms',
    ],
    faqs: [
      {
        question: 'Can you help incorporate a private limited company or LLP?',
        answer:
          'Yes. We support name approval, incorporation filings, first board resolutions, and the post-incorporation compliance calendar so the entity starts on clean footing.',
      },
      {
        question: 'Which annual ROC filings do you handle?',
        answer:
          'AOC-4, MGT-7 / MGT-7A, and related annual returns, plus event-based forms for director changes, share allotments, registered office updates, and similar triggers.',
      },
      {
        question: 'Do you prepare board and shareholder documentation?',
        answer:
          'We draft agendas, minutes, and resolutions aligned to the Companies Act so decisions are properly recorded for banks, investors, and future diligence.',
      },
      {
        question: 'What if our company has overdue filings?',
        answer:
          'We assess the backlog, file pending returns with supporting resolutions where required, and reset a forward calendar so deadlines are not missed again.',
      },
      {
        question: 'Do you handle director KYC and DIN-related filings?',
        answer:
          'Yes. We track DIR-3 KYC and related director updates, prepare the forms, and coordinate DSC signing so individual and company records stay aligned on MCA.',
      },
      {
        question: 'Can you support share allotments and capital changes?',
        answer:
          'We prepare board and shareholder resolutions, valuation inputs where needed, and the related MCA forms so allotments, transfers, and capital changes are properly recorded.',
      },
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
      'Deadlines for replies, hearings, and appeals are unforgiving. Building the file early—orders, computations, invoices, and legal grounds—protects options that disappear once limitation periods lapse.',
      'We prepare submissions for scrutiny and assessment stages, support CIT(A) / appellate and GST adjudication matters, and coordinate with counsel where higher-forum advocacy is required—always with facts and law tied together.',
      'You receive a structured matter tracker: issues, exposure estimates, next filings, and hearing dates, so leadership can decide on settlement, appeal, or compliance with eyes open.',
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
      {
        title: 'Under scrutiny',
        detail: 'Assessees under scrutiny or reassessment who need evidence-backed replies.',
      },
      {
        title: 'GST notices',
        detail: 'Businesses receiving GST show-cause or demand notices with tight timelines.',
      },
      {
        title: 'Appellate support',
        detail: 'Companies needing appellate support after adverse assessment orders.',
      },
      {
        title: 'Multi-matter groups',
        detail: 'Organisations wanting one team to manage disputes across tax and GST.',
      },
    ],
    outcomes: [
      'Timely, evidence-backed responses',
      'Clearer view of exposure and options',
      'Stronger hearing preparation',
      'Disputes tracked to a documented close',
    ],
    faqs: [
      {
        question: 'Which forums do you support?',
        answer:
          'We assist with income-tax and GST assessments, scrutiny replies, CIT(A) / appellate preparation, and coordinated representation with counsel where the matter requires it.',
      },
      {
        question: 'How quickly can you respond to a notice?',
        answer:
          'Once we have the notice and core documents, we prioritise deadline-critical matters, map exposure, and draft a response pack so submissions go out on time with clear workings.',
      },
      {
        question: 'Do you only draft replies, or also appear?',
        answer:
          'Scope depends on the engagement—written submissions, hearing briefs, and representation support are available. Complex advocacy may be paired with specialised counsel.',
      },
      {
        question: 'Can you take over an ongoing dispute mid-stream?',
        answer:
          'Yes. We review the file history, open issues, and prior submissions, then propose a go-forward strategy so ownership and next steps are explicit.',
      },
      {
        question: 'Will you estimate our exposure before we respond?',
        answer:
          'Wherever facts allow, we map likely demand, interest, and penalty ranges alongside strengths of the case so you can choose reply, settle, or appeal with clearer trade-offs.',
      },
      {
        question: 'Do you coordinate with our existing counsel or CA?',
        answer:
          'Yes. We plug into the existing team, share working papers, and keep one matter tracker so advice is not duplicated and deadlines are not missed between advisors.',
      },
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
      'Many growing businesses outgrow spreadsheets before they can hire a full-time CFO. The gap shows up as late MIS, unclear runway, and fundraising materials that do not match the books.',
      'Engagements scale with your stage—from light monthly CFO office hours to deeper forecasting and investor-pack support. The goal is a living model your board actually uses.',
      'We combine financial modelling, KPI design, and milestone prep so planning, tax, and bank or investor conversations draw from one coherent set of numbers.',
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
      {
        title: 'Founder CFOs',
        detail: 'Leaders who need CFO-level judgment without hiring a full-time finance head yet.',
      },
      {
        title: 'Raise-ready SMEs',
        detail: 'Businesses professionalising finance before a raise or bank facility.',
      },
      {
        title: 'KPI discipline',
        detail: 'Leadership teams wanting sharper budgeting, forecasts, and operating cadence.',
      },
      {
        title: 'Family businesses',
        detail: 'Owners preparing expansion or succession plans with clearer financial visibility.',
      },
    ],
    outcomes: [
      'Sharper capital and hiring decisions',
      'Clearer visibility of runway and cash risk',
      'Board-ready reporting with less rework',
      'Finance conversations that drive operations',
    ],
    faqs: [
      {
        question: 'Is this the same as bookkeeping or statutory audit?',
        answer:
          'No. Advisory focuses on budgets, cash flow, KPIs, and decision support. It can sit alongside bookkeeping or audit, but the deliverable is foresight for management and the board—not a compliance opinion.',
      },
      {
        question: 'Can you help with fundraising readiness?',
        answer:
          'We build data-room quality financials, unit economics, and runway views so founders enter investor conversations with numbers that hold up under diligence.',
      },
      {
        question: 'How often do advisory reviews typically run?',
        answer:
          'Most clients use a monthly or quarterly cadence for forecasts and KPI packs, with ad-hoc deep dives when hiring, pricing, or capital decisions are on the table.',
      },
      {
        question: 'What inputs do you need from our team?',
        answer:
          'Recent financials, bank data, and clarity on near-term plans. We keep the ask lean and turn it into board-ready narratives rather than raw spreadsheet dumps.',
      },
      {
        question: 'Can advisory sit alongside our existing bookkeeper?',
        answer:
          'Yes. We often work on top of your current books—using them as the source for forecasts and board packs—without replacing day-to-day accounting unless you ask us to.',
      },
      {
        question: 'Do you build hiring and cash runway models?',
        answer:
          'Scenario models for headcount, collections, and tax outflows are a core part of the engagement, so leadership can see runway impact before committing spend.',
      },
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
      'Valuation opinions for deals, ESOP, or regulatory filings need transparent assumptions and source trails. Weak workings create rework when bankers, investors, or authorities ask follow-up questions.',
      'We prepare certificates and valuation opinions from verified source data, apply applicable ICAI guidance, and retain working papers so every attestation can be defended if questioned later.',
      'Turnaround is scoped to your deadline: purpose, format, and underlying period are confirmed first, then draft, partner review, and issue with UDIN where applicable.',
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
      {
        title: 'Bank & tenders',
        detail: 'Businesses needing bank or tender certificates on short, reliable timelines.',
      },
      {
        title: 'Form 15CB',
        detail: 'Companies making outward remittances that require Form 15CB attestation.',
      },
      {
        title: 'Valuation support',
        detail: 'Founders and boards needing valuation support for deals or statutory filings.',
      },
      {
        title: 'Group attestation',
        detail: 'Groups standardising certificate and attestation requests across entities.',
      },
    ],
    outcomes: [
      'Certificates accepted by banks and authorities',
      'Faster turnaround with fewer rework loops',
      'Traceable workings behind every attestation',
      'Lower risk of defective or unsupported certificates',
    ],
    faqs: [
      {
        question: 'Which certificates and reports can you issue?',
        answer:
          'Net worth and turnover certificates, Form 15CB and related attestations, valuation reports, and other CA certifications commonly required by banks, investors, and authorities.',
      },
      {
        question: 'How long does a typical certificate take?',
        answer:
          'Turnaround depends on document completeness. With clean workings and bank or financials on hand, many standard certificates move in a few working days; valuations take longer by design.',
      },
      {
        question: 'What documents should we prepare upfront?',
        answer:
          'Audited or management financials, bank statements, identity and entity KYC, and the exact format or purpose stated by the requesting bank or authority—so the certificate matches their checklist.',
      },
      {
        question: 'Are your valuations suitable for regulatory or transaction use?',
        answer:
          'We scope the standard and purpose with you first—funding, FEMA, tax, or internal—and document assumptions so the report is fit for the intended use case.',
      },
      {
        question: 'Can you issue Form 15CB for foreign remittances?',
        answer:
          'Yes. We review the remittance nature, applicable treaty or section positions, and supporting contracts before certifying Form 15CB for bank processing.',
      },
      {
        question: 'Will banks accept your net worth or turnover certificates?',
        answer:
          'Certificates are prepared to common bank and authority formats, with workings and annexures that typically satisfy checklist requirements—subject to each institution’s own policy.',
      },
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

export const vision = [
  'Delivering quality audit, assurance and regulatory compliance services.',
  'Providing direct tax, indirect tax and advisory support across sectors.',
  'Upholding professional ethics, integrity and confidentiality in every engagement.',
  'Serving clients with diligence, professionalism and timely communication.',
];

export const mission = [
  'Provide quality professional services with a practical, business-oriented approach.',
  'Deliver accurate and timely financial, taxation and regulatory solutions.',
  'Build long-term professional relationships based on transparency.',
  'Continuously update knowledge and adopt evolving regulatory and technological developments.',
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
