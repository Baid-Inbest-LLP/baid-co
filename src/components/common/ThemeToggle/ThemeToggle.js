'use client';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { useMounted } from '@mantine/hooks';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';

import classes from './ThemeToggle.module.scss';

export default function ThemeToggle() {
  const mounted = useMounted();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = mounted && colorScheme === 'dark';

  return (
    <ActionIcon
      variant="subtle"
      aria-label={mounted ? `Switch to ${isDark ? 'light' : 'dark'} mode` : 'Toggle color mode'}
      onClick={() => toggleColorScheme()}
      className={classes.toggle}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'sun' : 'moon'}
          initial={{ opacity: 0, rotate: -40, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 40, scale: 0.7 }}
          transition={{ duration: 0.2 }}
          className={classes.icon}
        >
          {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
        </motion.span>
      </AnimatePresence>
    </ActionIcon>
  );
}
