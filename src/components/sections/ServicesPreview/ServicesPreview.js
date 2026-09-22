'use client';

import Link from 'next/link';

import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import Reveal from '@/components/motion/Reveal';
import Stagger, { StaggerItem } from '@/components/motion/Stagger';
import ServiceCard from '@/components/services/ServiceCard';
import { services } from '@/constants/site';

import classes from './ServicesPreview.module.scss';

export default function ServicesPreview() {
  return (
    <section className={classes.section}>
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Services shaped around how businesses actually operate."
        />

        <Stagger className={classes.grid}>
          {services.slice(0, 6).map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15} className={classes.more}>
          <Link href="/services">View all services →</Link>
        </Reveal>
      </Container>
    </section>
  );
}
