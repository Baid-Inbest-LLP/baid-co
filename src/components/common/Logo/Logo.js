import Image from 'next/image';
import Link from 'next/link';

import logoImage from '@/assets/images/b&c_logo.png';
import env from '@/constants/env';

import classes from './Logo.module.scss';

export default function Logo({ compact = false }) {
  return (
    <Link href="/" className={`${classes.logo} ${compact ? classes.compact : ''}`.trim()} aria-label={`${env.appName} home`}>
      <Image
        src={logoImage}
        alt={`${env.appName} — Chartered Accountants`}
        className={classes.image}
        priority
      />
    </Link>
  );
}
