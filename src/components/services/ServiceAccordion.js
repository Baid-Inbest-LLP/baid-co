'use client';

import { IconPlus, IconX } from '@tabler/icons-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

import classes from './ServiceAccordion.module.scss';

export default function ServiceAccordion({ items, idPrefix = 'accordion' }) {
  const [openId, setOpenId] = useState(items?.length ? `${idPrefix}-0` : null);
  const reduceMotion = useReducedMotion();

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className={classes.root}>
      {items.map((item, index) => {
        const id = `${idPrefix}-${index}`;
        const isOpen = openId === id;
        const title = item.question ?? item.label;
        const body = item.answer ?? item.detail;

        return (
          <div key={title} className={`${classes.item} ${isOpen ? classes.open : ''}`.trim()}>
            <button
              type="button"
              className={classes.trigger}
              aria-expanded={isOpen}
              aria-controls={`${id}-panel`}
              id={`${id}-button`}
              onClick={() => toggle(id)}
            >
              <span className={classes.label}>{title}</span>
              <span className={classes.icon} aria-hidden>
                <span className={`${classes.iconFace} ${classes.plus}`}>
                  <IconPlus size={16} stroke={2.5} />
                </span>
                <span className={`${classes.iconFace} ${classes.close}`}>
                  <IconX size={15} stroke={2.5} />
                </span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-panel`}
                  role="region"
                  aria-labelledby={`${id}-button`}
                  className={classes.panel}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.p
                    className={classes.detail}
                    initial={reduceMotion ? false : { y: -6, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={reduceMotion ? undefined : { y: -4, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
                  >
                    {body}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
