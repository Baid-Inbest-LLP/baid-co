import { Source_Sans_3, Source_Serif_4 } from 'next/font/google';

import '@mantine/core/styles.css';
import './globals.scss';

import SiteShell from '@/components/layout/SiteShell/SiteShell';
import env from '@/constants/env';
import MantineProvider from '@/providers/MantineProvider';

const display = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: {
    default: `${env.appName} | Chartered Accountants`,
    template: `%s | ${env.appName}`,
  },
  description:
    'Baid & Co — Chartered Accountants offering income tax, GST, audit, accounting, compliance, litigation, advisory, and certification services.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <MantineProvider>
          <SiteShell>{children}</SiteShell>
        </MantineProvider>
      </body>
    </html>
  );
}
