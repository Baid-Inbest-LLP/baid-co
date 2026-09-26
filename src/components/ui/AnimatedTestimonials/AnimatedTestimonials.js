'use client';

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import classes from './AnimatedTestimonials.module.scss';

const ROTATIONS = [-8, 6, -4, 9, -6, 3, -10, 7];

const rotationFor = (index) => ROTATIONS[index % ROTATIONS.length];

export default function AnimatedTestimonials({
  testimonials = [],
  autoplay = false,
  interval = 6000,
  className = '',
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const count = testimonials.length;

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % count);
  }, [count]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (!autoplay || paused || reduceMotion || count < 2) return undefined;
    const id = setInterval(handleNext, interval);
    return () => clearInterval(id);
  }, [autoplay, paused, reduceMotion, count, interval, handleNext]);

  if (!count) return null;

  const current = testimonials[active];

  return (
    <div
      className={`${classes.root} ${className}`.trim()}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={classes.stage}>
        <AnimatePresence>
          {testimonials.map((testimonial, index) => {
            const isActive = index === active;
            return (
              <motion.div
                key={testimonial.src}
                className={classes.card}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, scale: 0.9, z: -100, rotate: rotationFor(index) }
                }
                animate={{
                  opacity: isActive ? 1 : 0.7,
                  scale: isActive ? 1 : 0.95,
                  z: isActive ? 0 : -100,
                  rotate: isActive || reduceMotion ? 0 : rotationFor(index),
                  zIndex: isActive ? 40 : count + 2 - index,
                  y: isActive && !reduceMotion ? [0, -80, 0] : 0,
                }}
                exit={{ opacity: 0, scale: 0.9, z: 100, rotate: rotationFor(index) }}
                transition={{ duration: reduceMotion ? 0 : 0.4, ease: 'easeInOut' }}
                aria-hidden={!isActive}
              >
                <Image
                  src={testimonial.src}
                  alt={isActive ? testimonial.name : ''}
                  fill
                  sizes="(max-width: 768px) 90vw, 420px"
                  className={classes.image}
                  draggable={false}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className={classes.content}>
        <motion.div
          key={active}
          initial={reduceMotion ? false : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          aria-live="polite"
        >
          <h3 className={classes.name}>{current.name}</h3>
          <p className={classes.designation}>{current.designation}</p>
          <blockquote className={classes.quote}>
            {reduceMotion
              ? current.quote
              : current.quote.split(' ').map((word, index) => (
                  <motion.span
                    key={`${active}-${index}`}
                    className={classes.word}
                    initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                    animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.02 * index }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
          </blockquote>
        </motion.div>

        {count > 1 && (
          <div className={classes.controls}>
            <button
              type="button"
              onClick={handlePrev}
              className={classes.control}
              aria-label="Previous testimonial"
            >
              <IconArrowLeft size={20} stroke={1.75} className={classes.iconPrev} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className={classes.control}
              aria-label="Next testimonial"
            >
              <IconArrowRight size={20} stroke={1.75} className={classes.iconNext} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
