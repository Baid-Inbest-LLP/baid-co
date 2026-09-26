'use client';

import { IconArrowLeft, IconArrowRight, IconPhoto } from '@tabler/icons-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import Reveal from '@/components/motion/Reveal';
import { team as defaultTeam } from '@/constants/site';

import classes from './Team.module.scss';

export default function Team({ title = 'Our Team', members = defaultTeam, className = '' }) {
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setEdges({ start: track.scrollLeft <= 2, end: track.scrollLeft >= max - 2 });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    updateEdges();
    track.addEventListener('scroll', updateEdges, { passive: true });
    const observer = new ResizeObserver(updateEdges);
    observer.observe(track);

    return () => {
      track.removeEventListener('scroll', updateEdges);
      observer.disconnect();
    };
  }, [updateEdges]);

  const scroll = (direction) => {
    const track = trackRef.current;
    const slide = track?.firstElementChild;
    if (!slide) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = slide.offsetWidth + gap;
    const index = Math.round(track.scrollLeft / step) + direction;
    track.scrollTo({ left: index * step, behavior: 'smooth' });
  };

  return (
    <section className={`${classes.section} ${className}`.trim()}>
      <Container>
        <div className={classes.header}>
          <SectionHeading title={title} />

          <div
            className={`${classes.controls} ${edges.start && edges.end ? classes.controlsHidden : ''}`.trim()}
          >
            <button
              type="button"
              className={classes.arrow}
              onClick={() => scroll(-1)}
              disabled={edges.start}
              aria-label="Previous team members"
            >
              <IconArrowLeft stroke={1.75} aria-hidden />
            </button>
            <button
              type="button"
              className={classes.arrow}
              onClick={() => scroll(1)}
              disabled={edges.end}
              aria-label="Next team members"
            >
              <IconArrowRight stroke={1.75} aria-hidden />
            </button>
          </div>
        </div>

        <Reveal amount={0.15}>
          <ul ref={trackRef} className={classes.track} aria-label={title} tabIndex={0}>
            {members.map((member, index) => (
              <li key={`${member.name}-${index}`} className={classes.slide}>
                <article className={classes.card}>
                  <div className={classes.frame}>
                    <div className={classes.photo}>
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 480px) 80vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 22vw"
                          className={classes.image}
                        />
                      ) : (
                        <IconPhoto className={classes.placeholder} stroke={1.5} aria-hidden />
                      )}
                    </div>
                  </div>
                  <h3 className={classes.name}>{member.name}</h3>
                  <p className={classes.designation}>{member.designation}</p>
                </article>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
