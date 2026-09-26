'use client';

import { IconPhoto, IconQuote } from '@tabler/icons-react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import { founder as defaultFounder } from '@/constants/site';

import classes from './Founder.module.scss';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, amount: 0.3 };

const photoVariants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

const copyVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const lineVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const ruleVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.7, ease: EASE } },
};

export default function Founder({ title = 'Founder & Speech', founder = defaultFounder, photo, className = '' }) {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? {}
    : { initial: 'hidden', whileInView: 'visible', viewport: VIEWPORT };

  return (
    <section className={`${classes.section} ${className}`.trim()}>
      <Container>
        <SectionHeading title={title} align="center" />

        <div className={classes.grid}>
          <motion.figure className={classes.frame} variants={photoVariants} {...motionProps}>
            <div className={classes.photo}>
              {photo ? (
                <Image
                  src={photo}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className={classes.image}
                />
              ) : (
                <IconPhoto className={classes.placeholder} stroke={1.5} aria-hidden />
              )}
            </div>
          </motion.figure>

          <motion.div className={classes.copy} variants={copyVariants} {...motionProps}>
            <IconQuote className={classes.quote} stroke={1.25} aria-hidden />

            <motion.p className={classes.greeting} variants={lineVariants}>
              Welcome to <strong>{founder.greeting}</strong>.
            </motion.p>

            {founder.speech.map((paragraph) => (
              <motion.p key={paragraph} className={classes.paragraph} variants={lineVariants}>
                {paragraph}
              </motion.p>
            ))}

            <motion.span className={classes.rule} variants={ruleVariants} aria-hidden />

            <motion.footer className={classes.signature} variants={lineVariants}>
              <p className={classes.name}>{founder.name}</p>
              <p className={classes.role}>{founder.role}</p>
            </motion.footer>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
