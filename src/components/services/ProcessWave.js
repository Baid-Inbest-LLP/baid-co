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

function buildWavePath(count, width, highY, lowY) {
  if (count < 2) return '';

  const gap = width / (count - 1);
  const points = Array.from({ length: count }, (_, i) => ({
    x: i * gap,
    y: i % 2 === 0 ? highY : lowY,
  }));

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i += 1) {
    const prev = points[i - 1];
    const curr = points[i];
    const midX = (prev.x + curr.x) / 2;
    d += ` C ${midX} ${prev.y}, ${midX} ${curr.y}, ${curr.x} ${curr.y}`;
  }
  return d;
}

export default function ProcessWave({ steps }) {
  const count = steps.length;
  const width = Math.max(count - 1, 1) * 160;
  const highY = 48;
  const lowY = 132;
  const path = buildWavePath(count, width, highY, lowY);

  return (
    <div className={classes.wrap} style={{ '--step-count': count }}>
      <svg
        className={classes.wave}
        viewBox={`0 0 ${width} 180`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="process-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            {COLORS.slice(0, Math.max(count, 2)).map((color, index, list) => (
              <stop
                key={color}
                offset={`${(index / (list.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          d={path}
          fill="none"
          stroke="url(#process-wave-grad)"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <ol className={classes.track}>
        {steps.map((step, index) => {
          const color = COLORS[index % COLORS.length];
          const Icon = ICONS[index % ICONS.length] || IconClipboardCheck;
          const position = index % 2 === 0 ? classes.high : classes.low;

          return (
            <li
              key={step.title}
              className={`${classes.step} ${position}`}
              style={{ '--step-color': color }}
            >
              <span className={classes.rail} aria-hidden />
              <span className={classes.number} aria-hidden>
                {index + 1}
              </span>
              <span className={classes.circle}>
                <Icon size={28} stroke={1.6} />
              </span>
              <div className={classes.copy}>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
