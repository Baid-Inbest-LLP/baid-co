import {
  IconArrowRight,
  IconCalculator,
  IconChartBar,
  IconClipboardCheck,
  IconFileInvoice,
  IconReceiptTax,
  IconScale,
} from '@tabler/icons-react';
import Link from 'next/link';

import classes from './ServiceCard.module.scss';

const icons = {
  'audit-assurance': IconClipboardCheck,
  taxation: IconReceiptTax,
  'accounting-bookkeeping': IconCalculator,
  'business-advisory': IconChartBar,
  'corporate-compliance': IconScale,
  'gst-indirect-tax': IconFileInvoice,
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

      <Link href="/contact" className={classes.cta}>
        Hire an expert
        <IconArrowRight size={20} stroke={2} className={classes.ctaArrow} aria-hidden />
      </Link>
    </article>
  );
}
