'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import Container from '@/components/common/Container/Container';
import Logo from '@/components/common/Logo/Logo';
import ThemeToggle from '@/components/common/ThemeToggle/ThemeToggle';
import MobileDrawer from '@/components/layout/MobileDrawer/MobileDrawer';
import { navLinks } from '@/constants/navigation';

import classes from './Header.module.scss';

export default function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [elevated, setElevated] = useState(false);

  useMotionValueEvent(scrollY, 'change', (value) => {
    setElevated(value > 12);
  });

  return (
    <motion.header
      className={`${classes.header} ${elevated ? classes.elevated : ''}`.trim()}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className={classes.inner}>
        <Logo />

        <div className={classes.right}>
          <nav className={classes.desktopNav} aria-label="Main navigation">
            <ul>
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link href={link.href} className={active ? classes.active : undefined}>
                      {link.label}
                      {active && (
                        <motion.span
                          className={classes.underline}
                          layoutId="nav-underline"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={classes.desktopToggle}>
            <ThemeToggle />
          </div>

          <MobileDrawer />
        </div>
      </Container>
    </motion.header>
  );
}
