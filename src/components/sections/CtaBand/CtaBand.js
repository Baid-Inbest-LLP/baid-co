'use client';

import { Button } from '@mantine/core';
import Link from 'next/link';

import Container from '@/components/common/Container/Container';
import Reveal from '@/components/motion/Reveal';

import classes from './CtaBand.module.scss';

export default function CtaBand() {
  return (
    <section className={classes.section}>
      <Container>
        <Reveal className={classes.band}>
          <div>
            <h2>Ready for a clearer financial picture?</h2>
          </div>
          <Button component={Link} href="/contact" size="md" className={classes.btn}>
            Get in touch
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
