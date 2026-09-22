import Link from 'next/link';

import Container from '@/components/common/Container/Container';
import PageHero from '@/components/common/PageHero/PageHero';
import FaqList from '@/components/faq/FaqList';
import Reveal from '@/components/motion/Reveal';
import CtaBand from '@/components/sections/CtaBand/CtaBand';
import { firm } from '@/constants/site';

import classes from './faq.module.scss';

export const metadata = {
  title: 'FAQ',
  description: `Frequently asked questions about working with ${firm.name}.`,
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Questions we hear most often."
        variant="faq"
      />

      <section className={classes.section}>
        <Container className={classes.layout}>
          <Reveal className={classes.listWrap}>
            <FaqList />
          </Reveal>

          <Reveal delay={0.1} className={classes.note}>
            <p>
              Still have a question?{' '}
              <Link href="/contact">Contact our team</Link> and we will get back to you shortly.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
