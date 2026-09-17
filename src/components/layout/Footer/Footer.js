import { ActionIcon } from '@mantine/core';
import { IconBrandLinkedin, IconMail, IconPhone } from '@tabler/icons-react';
import Link from 'next/link';

import Container from '@/components/common/Container/Container';
import Logo from '@/components/common/Logo/Logo';
import env from '@/constants/env';
import { quickLinks, resourceLinks } from '@/constants/navigation';
import { firm } from '@/constants/site';

import classes from './Footer.module.scss';

const socialLinks = [
  { href: firm.linkedin, label: 'LinkedIn', icon: IconBrandLinkedin },
  { href: `mailto:${firm.email}`, label: 'Email', icon: IconMail },
  { href: `tel:${firm.phone.replace(/\s/g, '')}`, label: 'Call', icon: IconPhone },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.brand}>
          <Logo />
          <div className={classes.socialIcons}>
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <ActionIcon
                key={label}
                component="a"
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                variant="subtle"
                size="lg"
                aria-label={label}
                title={label}
                className={classes.socialBtn}
              >
                <Icon size={22} stroke={1.6} />
              </ActionIcon>
            ))}
          </div>
        </div>

        <div className={classes.links}>
          <h3>Explore</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.links}>
          <h3>Resources</h3>
          <ul>
            {resourceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.contact}>
          <h3>Visit</h3>
          <div className={classes.addresses}>
            <address className={classes.addressBlock}>
              <span className={classes.addressLabel}>Head Office</span>
              <p>{firm.headOffice}</p>
            </address>
            <address className={classes.addressBlock}>
              <span className={classes.addressLabel}>Branch Address</span>
              <p>{firm.branchAddress}</p>
            </address>
          </div>
        </div>
      </Container>

      <div className={classes.bottomBar}>
        <Container className={classes.bottom}>
          <p className={classes.copyright}>
            © {year} {env.appName}. Chartered Accountants.
          </p>
          <p className={classes.credit}>
            Crafted by <strong>Inbest Team</strong> 
          </p>
        </Container>
      </div>
    </footer>
  );
}
