'use client';

import { useReducedMotion } from 'framer-motion';

import worldMap from './worldMapData.json';
import classes from './ContactMap.module.scss';

export default function ContactMap({ className = '' }) {
  const reduceMotion = useReducedMotion();
  const { width, height, radius, points, kolkata } = worldMap;

  const labelW = 168;
  const labelH = 52;
  const labelY = kolkata.y - 68;

  return (
    <div
      className={`${classes.map} ${className}`.trim()}
      style={{ aspectRatio: `${width} / ${height}` }}
      role="img"
      aria-label="World map highlighting Kolkata"
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className={classes.svg}
        role="presentation"
        aria-hidden="true"
      >
        <g className={classes.land}>
          {points.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={radius} />
          ))}
        </g>

        <line
          x1={kolkata.x}
          y1={kolkata.y}
          x2={kolkata.x}
          y2={labelY + labelH * 0.55}
          className={classes.stem}
        />

        {!reduceMotion && (
          <circle cx={kolkata.x} cy={kolkata.y} r="6" className={classes.pulse}>
            <animate attributeName="r" from="6" to="22" dur="1.8s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="1.8s" begin="0s" repeatCount="indefinite" />
          </circle>
        )}

        <circle cx={kolkata.x} cy={kolkata.y} r="7" className={classes.dot} />

        <g>
          <rect
            x={kolkata.x - labelW / 2}
            y={labelY - labelH / 2}
            width={labelW}
            height={labelH}
            rx="10"
            className={classes.tooltip}
          />
          <text
            x={kolkata.x}
            y={labelY - 4}
            textAnchor="middle"
            className={classes.tooltipTitle}
          >
            We are here
          </text>
          <text
            x={kolkata.x}
            y={labelY + 16}
            textAnchor="middle"
            className={classes.tooltipCity}
          >
            In Kolkata
          </text>
        </g>
      </svg>
    </div>
  );
}
