'use client';

import {
  IconBulb,
  IconChartBar,
  IconClipboardCheck,
  IconFileSearch,
  IconRefresh,
  IconRocket,
  IconSettings,
  IconTool,
} from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';

import classes from './ProcessWave.module.scss';

const COLORS = ['#2563eb', '#0ea5e9', '#14b8a6', '#22c55e', '#eab308', '#f97316', '#ef4444'];

const ICONS = [
  IconBulb,
  IconFileSearch,
  IconChartBar,
  IconSettings,
  IconRefresh,
  IconRocket,
  IconTool,
];

/** Cosine wave sampled in pixel space so thickness and curves stay even. */
function buildWavePath(count, width, highY, lowY) {
  if (count < 2 || width <= 0) return '';

  const midY = (highY + lowY) / 2;
  const amp = (lowY - highY) / 2;
  const samples = Math.max((count - 1) * 40, 40);
  const parts = [];

  for (let i = 0; i <= samples; i += 1) {
    const t = i / samples;
    const x = t * width;
    const y = midY - amp * Math.cos(t * Math.PI * (count - 1));
    parts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }

  return parts.join(' ');
}

export default function ProcessWave({ steps }) {
  const count = steps.length;
  const waveRef = useRef(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = waveRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;

    const update = () => {
      const rect = el.getBoundingClientRect();
      setSize({ w: rect.width, h: rect.height });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Match ProcessWave.module.scss: highY=30, lowY=150, viewH=180
  const highY = size.h > 0 ? size.h * (30 / 180) : 0;
  const lowY = size.h > 0 ? size.h * (150 / 180) : 0;
  const path = buildWavePath(count, size.w, highY, lowY);
  const gradientId = 'process-wave-grad';

  return (
    <div className={classes.wrap} style={{ '--step-count': count }}>
      <svg
        ref={waveRef}
        className={classes.wave}
        viewBox={size.w > 0 ? `0 0 ${size.w} ${size.h}` : '0 0 1 1'}
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            {COLORS.slice(0, Math.max(count, 2)).map((color, index, list) => (
              <stop
                key={color}
                offset={`${(index / (list.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>
        {path ? (
          <path
            className={classes.ribbon}
            d={path}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : null}
      </svg>

      <ol className={classes.track}>
        {steps.map((step, index) => {
          const color = COLORS[index % COLORS.length];
          const Icon = ICONS[index % ICONS.length] || IconClipboardCheck;
          // Odd steps (1, 3…): copy above, number below — like the reference.
          // Even steps (2, 4…): number above, copy below.
          const isOdd = index % 2 === 0;
          const position = isOdd ? classes.odd : classes.even;

          return (
            <li
              key={step.title}
              className={`${classes.step} ${position}`}
              style={{ '--step-color': color }}
            >
              <span className={classes.rail} aria-hidden />
              <div className={classes.copy}>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
              <span className={classes.circle}>
                <Icon
                  className={classes.icon}
                  size={56}
                  stroke={1.6}
                  color="#fff"
                  aria-hidden
                />
              </span>
              <span className={classes.number} aria-hidden>
                {index + 1}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
