'use client';

import { useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

import classes from './Timeline.module.scss';

const LOOKUP_SAMPLES = 300;
const ROAD_SAMPLES = 360;
const CURVE = 0.7;
const BORDER = 1.14;
const EDGE = 1.04;
const ASPHALT = 0.94;
const CENTRE_LINES = [
  [-0.075, -0.04],
  [0.04, 0.075],
];
const SVG_NS = 'http://www.w3.org/2000/svg';

function buildPath(points) {
  const [first, ...rest] = points;
  let d = `M ${first.x} ${first.y}`;
  let prev = first;
  rest.forEach((point) => {
    const handle = (point.y - prev.y) * CURVE;
    d += ` C ${prev.x} ${prev.y + handle}, ${point.x} ${point.y - handle}, ${point.x} ${point.y}`;
    prev = point;
  });
  return d;
}

function buildLookup(d) {
  const path = document.createElementNS(SVG_NS, 'path');
  path.setAttribute('d', d);
  const total = path.getTotalLength();
  const lengths = [];
  const ys = [];
  for (let i = 0; i <= LOOKUP_SAMPLES; i += 1) {
    const length = (total * i) / LOOKUP_SAMPLES;
    lengths.push(length);
    ys.push(path.getPointAtLength(length).y);
  }
  return { path, total, lengths, ys };
}

function lengthAtY({ lengths, ys }, y) {
  if (y <= ys[0]) return 0;
  const last = ys.length - 1;
  if (y >= ys[last]) return lengths[last];
  let lo = 0;
  let hi = last;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (ys[mid] <= y) lo = mid;
    else hi = mid;
  }
  const span = ys[hi] - ys[lo] || 1;
  return lengths[lo] + ((y - ys[lo]) / span) * (lengths[hi] - lengths[lo]);
}

function sampleRoad({ path, total }, widthAt, start, end) {
  const samples = [];
  for (let i = 0; i <= ROAD_SAMPLES; i += 1) {
    const length = start + ((end - start) * i) / ROAD_SAMPLES;
    const point = path.getPointAtLength(length);
    const behind = path.getPointAtLength(Math.max(length - 1, 0));
    const ahead = path.getPointAtLength(Math.min(length + 1, total));
    const tx = ahead.x - behind.x;
    const ty = ahead.y - behind.y;
    const mag = Math.hypot(tx, ty) || 1;
    samples.push({
      x: point.x,
      y: point.y,
      nx: -ty / mag,
      ny: tx / mag,
      w: widthAt(point.y),
    });
  }
  return samples;
}

function lerpSample(a, b, t) {
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    nx: a.nx + (b.nx - a.nx) * t,
    ny: a.ny + (b.ny - a.ny) * t,
    w: a.w + (b.w - a.w) * t,
  };
}

function ribbon(samples, inner, outer, fraction = 1) {
  const end = Math.max(0, Math.min(1, fraction)) * (samples.length - 1);
  const whole = Math.floor(end);
  const visible = samples.slice(0, whole + 1);
  if (samples[whole + 1] && end > whole) {
    visible.push(lerpSample(samples[whole], samples[whole + 1], end - whole));
  }
  if (visible.length < 2) return '';
  const at = (s, f) => `${s.x + s.nx * s.w * f} ${s.y + s.ny * s.w * f}`;
  const sideA = visible.map((s) => at(s, inner));
  const sideB = visible.map((s) => at(s, outer)).reverse();
  return `M ${sideA.join(' L ')} L ${sideB.join(' L ')} Z`;
}

const bandPath = (samples, factor) => ribbon(samples, -factor / 2, factor / 2);

function Car() {
  return (
    <>
      <rect x="-12" y="-20" width="24" height="40" rx="7" className={classes.carBody} />
      <rect x="-8" y="5" width="16" height="7" rx="2.5" className={classes.carGlass} />
      <rect x="-7.5" y="-11" width="15" height="5" rx="2" className={classes.carGlass} />
      <rect x="-8" y="-4" width="16" height="7" rx="1.5" className={classes.carRoof} />
      <circle cx="-6" cy="17" r="1.4" className={classes.carLight} />
      <circle cx="6" cy="17" r="1.4" className={classes.carLight} />
    </>
  );
}

export default function Timeline({ data = [], boundsRef, className = '' }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const carRef = useRef(null);
  const lineRefs = useRef([]);
  const anchorRefs = useRef([]);
  const stopsRef = useRef([]);
  const roadRef = useRef(null);
  const [geometry, setGeometry] = useState(null);
  const [reached, setReached] = useState(-1);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: boundsRef ?? containerRef,
    offset: ['start 55%', 'end 55%'],
  });

  const drive = useCallback((progress) => {
    const road = roadRef.current;
    if (!road) return;

    const { lookup, samples, nearWidth, widthAt, top, bottom, start, end } = road;
    const length = lengthAtY(lookup, top + progress * (bottom - top));
    const fraction = end > start ? (length - start) / (end - start) : 0;

    lineRefs.current.forEach((node, i) => {
      if (node) node.setAttribute('d', ribbon(samples, ...CENTRE_LINES[i], fraction));
    });

    const car = carRef.current;
    if (!car) return;
    const point = lookup.path.getPointAtLength(length);
    const ahead = lookup.path.getPointAtLength(Math.min(length + 1, lookup.total));
    const behind = lookup.path.getPointAtLength(Math.max(length - 1, 0));
    const angle = (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI - 90;
    const scale = Math.max(0.2, (widthAt(point.y) / nearWidth) * 1.5);
    car.setAttribute(
      'transform',
      `translate(${point.x} ${point.y}) rotate(${angle}) scale(${scale})`
    );
    car.style.opacity = progress > 0.002 && progress < 0.998 ? '1' : '0';
  }, []);

  const sync = useCallback(
    (progress) => {
      const road = roadRef.current;
      if (!road) return;
      const y = road.top + progress * (road.bottom - road.top);
      let index = -1;
      stopsRef.current.forEach((stop, i) => {
        if (y >= stop) index = i;
      });
      setReached((prev) => (prev === index ? prev : index));
      drive(progress);
    },
    [drive]
  );

  useMotionValueEvent(scrollYProgress, 'change', sync);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const measure = () => {
      const box = track.getBoundingClientRect();
      const anchors = anchorRefs.current.filter(Boolean).map((anchor) => {
        const rect = anchor.getBoundingClientRect();
        return { x: rect.left - box.left, y: rect.top - box.top };
      });
      if (!anchors.length) return;

      const styles = getComputedStyle(track);
      const farWidth = parseFloat(styles.getPropertyValue('--road-far')) || 12;
      const nearWidth = parseFloat(styles.getPropertyValue('--road-near')) || 60;
      const width = track.clientWidth;
      const bounds = (boundsRef?.current ?? track).getBoundingClientRect();
      const top = bounds.top - box.top;
      const bottom = bounds.bottom - box.top;
      const widthAt = (y) =>
        farWidth +
        (nearWidth - farWidth) * Math.min(1, Math.max(0, (y - top) / (bottom - top))) ** 1.4;

      const first = anchors[0];
      const final = anchors[anchors.length - 1];
      const points = [
        { x: first.x, y: top },
        ...anchors,
        { x: final.x, y: bottom },
      ];
      const lookup = buildLookup(buildPath(points));
      const start = 0;
      const end = lookup.total;
      const samples = sampleRoad(lookup, widthAt, start, end);

      stopsRef.current = anchorRefs.current.filter(Boolean).map((anchor, i) => {
        const stone = anchor.parentElement?.querySelector(`.${classes.stone}`);
        if (!stone) return anchors[i].y;
        const rect = stone.getBoundingClientRect();
        return rect.top + rect.height / 2 - box.top;
      });
      roadRef.current = { lookup, samples, nearWidth, widthAt, top, bottom, start, end };
      setGeometry({
        width,
        top,
        height: bottom - top,
        border: bandPath(samples, BORDER),
        edge: bandPath(samples, EDGE),
        asphalt: bandPath(samples, ASPHALT),
        guides: CENTRE_LINES.map(([inner, outer]) => ribbon(samples, inner, outer)),
        halfWidths: anchors.map((anchor) => (widthAt(anchor.y) * BORDER) / 2),
      });
      sync(scrollYProgress.get());
    };

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    if (boundsRef?.current) observer.observe(boundsRef.current);
    return () => observer.disconnect();
  }, [boundsRef, scrollYProgress, sync]);

  useEffect(() => {
    drive(reduceMotion ? 1 : scrollYProgress.get());
  }, [geometry, drive, reduceMotion, scrollYProgress]);

  const reachedIndex = reduceMotion ? data.length - 1 : reached;

  return (
    <div ref={containerRef} className={`${classes.root} ${className}`.trim()}>
      <div ref={trackRef} className={classes.track}>
        {geometry && (
          <svg
            className={classes.road}
            style={{ top: geometry.top }}
            width={geometry.width}
            height={geometry.height}
            viewBox={`0 ${geometry.top} ${geometry.width} ${geometry.height}`}
            aria-hidden="true"
          >
            <path d={geometry.border} className={classes.roadBorder} />
            <path d={geometry.edge} className={classes.roadEdge} />
            <path d={geometry.asphalt} className={classes.roadAsphalt} />
            {geometry.guides.map((d, i) => (
              <path key={`guide-${i}`} d={d} className={classes.roadGuide} />
            ))}
            {geometry.guides.map((_, i) => (
              <path
                key={`line-${i}`}
                ref={(node) => {
                  lineRefs.current[i] = node;
                }}
                className={classes.roadLine}
              />
            ))}
            {!reduceMotion && (
              <g ref={carRef} className={classes.car} style={{ opacity: 0 }}>
                <Car />
              </g>
            )}
          </svg>
        )}

        {data.map((item, index) => {
          const side = index % 2 === 0 ? classes.sideA : classes.sideB;
          const isReached = index <= reachedIndex;
          const halfWidth = geometry?.halfWidths[index];
          return (
            <div
              key={item.title}
              className={`${classes.item} ${side} ${isReached ? classes.reached : ''}`.trim()}
              style={halfWidth ? { '--road-half': `${halfWidth}px` } : undefined}
            >
              <span
                ref={(node) => {
                  anchorRefs.current[index] = node;
                }}
                className={classes.anchor}
              />

              <div className={classes.marker}>
                <div className={classes.stone} aria-hidden="true">
                  <span className={classes.stoneCap} />
                  <span className={classes.stoneLabel}>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className={classes.title}>{item.title}</h3>
              </div>

              <div className={classes.content}>{item.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
