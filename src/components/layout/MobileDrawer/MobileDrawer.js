'use client';

import { Burger, Button, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '@/components/common/Logo/Logo';
import ThemeToggle from '@/components/common/ThemeToggle/ThemeToggle';
import { navLinks } from '@/constants/navigation';

import classes from './MobileDrawer.module.scss';

export default function MobileDrawer() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();

  return (
    <div className={classes.mobileOnly}>
      <div className={classes.bar}>
        <ThemeToggle />
        <Burger
          opened={opened}
          onClick={toggle}
          aria-label="Open navigation menu"
          className={classes.burger}
          color="var(--bc-ink)"
        />
      </div>

      <Drawer
        opened={opened}
        onClose={close}
        title={<Logo />}
        padding="md"
        position="right"
        size="88%"
        classNames={{ content: classes.drawer }}
      >
        <Stack className={classes.drawerContent} gap="lg">
          <nav>
            <ul className={classes.navList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className={pathname === link.href ? classes.active : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button component={Link} href="/contact" onClick={close} className={classes.cta}>
            Book a consultation
          </Button>
        </Stack>
      </Drawer>
    </div>
  );
}
