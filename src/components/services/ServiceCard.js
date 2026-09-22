import {
  IconArrowRight,
  IconBriefcase,
  IconCalculator,
  IconCertificate,
  IconClipboardCheck,
  IconFileInvoice,
  IconGavel,
  IconScale,
  IconWallet,
} from '@tabler/icons-react';
import Link from 'next/link';

import classes from './ServiceCard.module.scss';

const icons = {
  'income-tax': IconWallet,
  'gst-services': IconFileInvoice,
  'audit-assurance': IconClipboardCheck,
  'accounting-bookkeeping': IconCalculator,
  'corporate-roc-compliance': IconScale,
  'litigation-representation': IconGavel,
  'financial-advisory': IconBriefcase,
  'certification-valuation': IconCertificate,
};

export default function ServiceCard({ service }) {
  const Icon = icons[service.slug] || IconClipboardCheck;

  return (
    <article className={`${classes.card} ${classes[service.tone] || classes.blue}`}>
      <div className={classes.content}>
        <div className={classes.top}>
          <h3>{service.title}</h3>
          <span className={classes.iconWrap} aria-hidden>
            <Icon size={28} stroke={1.6} />
          </span>
        </div>
        <p>{service.short}</p>
      </div>

      <Link href={`/services/${service.slug}`} className={classes.cta}>
        View details
        <IconArrowRight size={20} stroke={2} className={classes.ctaArrow} aria-hidden />
      </Link>
    </article>
  );
}
