'use client';

import { Button } from '@mantine/core';
import Link from 'next/link';

import Container from '@/components/common/Container/Container';
import Reveal from '@/components/motion/Reveal';
import { firm } from '@/constants/site';

import classes from './AboutTeaser.module.scss';

export default function AboutTeaser() {
  return (
    <section className={classes.section}>
      <Container className={classes.inner}>
        <Reveal className={classes.copy}>
          <p className={classes.eyebrow}>The firm</p>
          <h2>Decades of counsel. A practice built on trust.</h2>
          <p className={classes.body}>
            Since {firm.founded}, {firm.name} has stood beside founders, family businesses, and
            growing enterprises—bringing calm expertise to every filing, audit, and strategic
            conversation.
          </p>
          <Button component={Link} href="/about" variant="default" className={classes.btn}>
            Our story
          </Button>
        </Reveal>

        <Reveal delay={0.12} className={classes.panel}>
          <div className={classes.stat}>
            <strong>25+</strong>
            <span>Years in practice</span>
          </div>
          <div className={classes.stat}>
            <strong>400+</strong>
            <span>Clients advised</span>
          </div>
          <div className={classes.stat}>
            <strong>6</strong>
            <span>Core service lines</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
