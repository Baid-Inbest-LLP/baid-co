'use client';

import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import Reveal from '@/components/motion/Reveal';
import AnimatedTestimonials from '@/components/ui/AnimatedTestimonials/AnimatedTestimonials';
import { testimonials } from '@/constants/site';

import classes from './Testimonials.module.scss';

export default function Testimonials({ title = 'What clients say', className = '' }) {
  return (
    <section className={`${classes.section} ${className}`.trim()}>
      <Container>
        <SectionHeading title={title} align="center" />
        <Reveal delay={0.1} className={classes.body}>
          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </Reveal>
      </Container>
    </section>
  );
}
