'use client';

import { Button } from '@mantine/core';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

import Container from '@/components/common/Container/Container';
import HeroIllustration from '@/components/common/HeroIllustration/HeroIllustration';
import { firm } from '@/constants/site';

import classes from './HeroSection.module.scss';

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={classes.hero}>
      <div className={classes.backdrop} aria-hidden />

      <Container className={classes.inner}>
        <motion.div
          className={classes.copy}
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={classes.eyebrow}>Chartered Accountants · Since {firm.founded}</p>
          <p className={classes.brand}>{firm.name}</p>
          <h1>{firm.tagline}</h1>
          <div className={classes.actions}>
            <Button component={Link} href="/contact" size="md" className={classes.primary}>
              Book a consultation
            </Button>
            <Button
              component={Link}
              href="/services"
              size="md"
              variant="default"
              className={classes.secondary}
            >
              Explore services
            </Button>
          </div>
        </motion.div>

        <motion.div
          className={classes.visual}
          initial={reduceMotion ? false : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroIllustration variant="home" />
        </motion.div>
      </Container>
    </section>
  );
}
