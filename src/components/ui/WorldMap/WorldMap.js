'use client';

import { useMantineColorScheme } from '@mantine/core';
import { useMounted } from '@mantine/hooks';
import DottedMap from 'dotted-map';
import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

import classes from './WorldMap.module.scss';

function createCurvedPath(start, end) {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - Math.max(8, Math.abs(end.x - start.x) * 0.2);
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
}

export default function WorldMap({
  dots = [],
  markers = [],
  lineColor = 'var(--bc-primary)',
  countries,
  mapHeight = 100,
  className = '',
}) {
  const mounted = useMounted();
  const { colorScheme } = useMantineColorScheme();
  const reduceMotion = useReducedMotion();
  const isDark = mounted && colorScheme === 'dark';

  const { svgMap, viewBox, projectPoint } = useMemo(() => {
    const map = new DottedMap({
      height: mapHeight,
      grid: 'diagonal',
      ...(countries?.length ? { countries } : {}),
    });

    const svg = map.getSVG({
      radius: countries?.length ? 0.35 : 0.22,
      color: isDark ? 'rgba(232, 238, 248, 0.38)' : 'rgba(12, 24, 48, 0.34)',
      shape: 'circle',
      backgroundColor: 'transparent',
    });

    const match = svg.match(/viewBox="([^"]+)"/);
    const vb = match?.[1] || '0 0 800 400';
    const [, , vbW, vbH] = vb.split(/\s+/).map(Number);

    const project = (lat, lng) => {
      if (countries?.length) {
        const pin = map.getPin({ lat, lng });
        return { x: pin.x, y: pin.y };
      }
      return {
        x: (lng + 180) * (vbW / 360),
        y: (90 - lat) * (vbH / 180),
      };
    };

    return { svgMap: svg, viewBox: vb, projectPoint: project };
  }, [isDark, countries, mapHeight]);

  const [, , width = 800, height = 400] = viewBox.split(/\s+/).map(Number);

  return (
    <div
      className={`${classes.map} ${className}`.trim()}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {mounted ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          alt=""
          aria-hidden="true"
          className={classes.base}
          draggable={false}
        />
      ) : (
        <div className={classes.base} aria-hidden="true" />
      )}

      <svg
        viewBox={viewBox}
        className={classes.overlay}
        role="presentation"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bc-map-path" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);

          return (
            <g key={`route-${i}`}>
              <motion.path
                d={createCurvedPath(start, end)}
                fill="none"
                stroke="url(#bc-map-path)"
                strokeWidth="0.6"
                initial={reduceMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.35 * i, ease: 'easeOut' }}
              />
              <circle cx={start.x} cy={start.y} r="1.1" fill={lineColor} />
              <circle cx={end.x} cy={end.y} r="1.1" fill={lineColor} />
              {!reduceMotion && (
                <>
                  <circle cx={start.x} cy={start.y} r="1.1" fill={lineColor} opacity="0.5">
                    <animate attributeName="r" from="1.1" to="4" dur="1.5s" begin="0s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={end.x} cy={end.y} r="1.1" fill={lineColor} opacity="0.5">
                    <animate attributeName="r" from="1.1" to="4" dur="1.5s" begin="0s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
                  </circle>
                </>
              )}
            </g>
          );
        })}

        {markers.map((marker, i) => {
          const point = projectPoint(marker.lat, marker.lng);
          const labelOffset = marker.offsetY ?? Math.max(14, height * 0.14);
          const labelY = point.y - labelOffset;
          const labelW = 28;
          const labelH = 8;

          return (
            <g key={`marker-${i}`}>
              <line
                x1={point.x}
                y1={point.y}
                x2={point.x}
                y2={labelY + labelH * 0.55}
                stroke={lineColor}
                strokeWidth="0.55"
              />
              <circle cx={point.x} cy={point.y} r="1.6" fill={lineColor} />
              {!reduceMotion && (
                <circle cx={point.x} cy={point.y} r="1.6" fill={lineColor} opacity="0.45">
                  <animate attributeName="r" from="1.6" to="5.5" dur="1.8s" begin="0s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.45" to="0" dur="1.8s" begin="0s" repeatCount="indefinite" />
                </circle>
              )}
              {marker.label && (
                <g>
                  <rect
                    x={point.x - labelW / 2}
                    y={labelY - labelH / 2}
                    width={labelW}
                    height={labelH}
                    rx="2"
                    className={classes.tooltip}
                  />
                  <text
                    x={point.x}
                    y={labelY + 1.1}
                    textAnchor="middle"
                    className={classes.tooltipText}
                    style={{ fontSize: '3.2px' }}
                  >
                    {marker.label}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
