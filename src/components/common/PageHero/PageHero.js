'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

import Container from '@/components/common/Container/Container';
import HeroIllustration from '@/components/common/HeroIllustration/HeroIllustration';

import classes from './PageHero.module.scss';

export default function PageHero({
  eyebrow,
  title,
  description,
  variant = 'about',
  image,
  imageAlt = '',
  children,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className={`${classes.hero} ${image ? classes.withBgImage : ''}`.trim()}>
      {image && (
        <div className={classes.bgVisual} aria-hidden={!imageAlt}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={classes.bgImage}
            sizes="(max-width: 768px) 100vw, 55vw"
            priority
          />
        </div>
      )}

      <Container className={classes.inner}>
        <motion.div
          className={classes.copy}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && <p className={classes.eyebrow}>{eyebrow}</p>}
          <h1>{title}</h1>
          {description && <p className={classes.description}>{description}</p>}
          {children}
        </motion.div>

        {!image && (
          <motion.div
            className={classes.visual}
            initial={reduceMotion ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroIllustration variant={variant} />
          </motion.div>
        )}
      </Container>
    </section>
  );
}
