'use client';

import { useRef } from 'react';

import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import Timeline from '@/components/ui/Timeline/Timeline';
import { journey } from '@/constants/site';

import classes from './OurJourney.module.scss';

export default function OurJourney({ className = '' }) {
  const sectionRef = useRef(null);
  const data = journey.map((milestone) => ({
    title: milestone.year,
    content: (
      <div className={classes.card}>
        <p className={classes.tagline}>{milestone.tagline}</p>
        <p className={classes.description}>{milestone.description}</p>
        <dl className={classes.stats}>
          {milestone.stats.map((stat) => (
            <div key={stat.label} className={classes.stat}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    ),
  }));

  return (
    <section ref={sectionRef} className={`${classes.section} ${className}`.trim()}>
      <Container>
        <SectionHeading title="Our Journey" align="center" />
        <Timeline data={data} boundsRef={sectionRef} />
      </Container>
    </section>
  );
}
