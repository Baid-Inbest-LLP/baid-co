'use client';

import {
  localStorageColorSchemeManager,
  MantineProvider as MantineCoreProvider,
} from '@mantine/core';
import { useMemo } from 'react';

const THEME_KEY = 'baid-co-color-scheme';

const brand = [
  '#eef2fb',
  '#d5def5',
  '#a8bae8',
  '#7a95d9',
  '#5476cc',
  '#3a5cbf',
  '#2a4aad',
  '#1e3a8a',
  '#162e6e',
  '#0f1f4d',
];

const accent = [
  '#fbf6e8',
  '#f5eac8',
  '#ead69a',
  '#dbc06c',
  '#d0ad4a',
  '#c49a32',
  '#b88c28',
  '#a07820',
  '#88661c',
  '#6f5316',
];

export default function MantineProvider({ children }) {
  const colorSchemeManager = useMemo(
    () =>
      localStorageColorSchemeManager({
        key: THEME_KEY,
      }),
    []
  );

  const theme = useMemo(
    () => ({
      primaryColor: 'brand',
      defaultRadius: 'sm',
      defaultGradient: {
        from: 'brand.7',
        to: 'accent.5',
        deg: 135,
      },
      breakpoints: {
        xs: '20em',
        sm: '30em',
        md: '48em',
        lg: '64em',
        xl: '90em',
      },
      colors: {
        brand,
        accent,
      },
      fontFamily: "var(--font-body), 'Source Sans 3', system-ui, sans-serif",
      headings: {
        fontFamily: "var(--font-display), 'Source Serif 4', Georgia, serif",
        fontWeight: '600',
      },
      components: {
        Button: {
          defaultProps: {
            radius: 'sm',
          },
        },
      },
    }),
    []
  );

  return (
    <MantineCoreProvider
      theme={theme}
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme="light"
    >
      {children}
    </MantineCoreProvider>
  );
}
