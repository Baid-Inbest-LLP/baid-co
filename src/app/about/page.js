import Container from '@/components/common/Container/Container';
import PageHero from '@/components/common/PageHero/PageHero';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import Reveal from '@/components/motion/Reveal';
import Stagger, { StaggerItem } from '@/components/motion/Stagger';
import CtaBand from '@/components/sections/CtaBand/CtaBand';
import { firm, milestones, values } from '@/constants/site';

import classes from './about.module.scss';

export const metadata = {
  title: 'About',
  description: `Learn about ${firm.name} — our history, values, and approach as Chartered Accountants.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the firm"
        title={`${firm.name} is built on precision, partnership, and plain-spoken advice.`}
        variant="about"
      />

      <section className={classes.story}>
        <Container className={classes.storyGrid}>
          <Reveal>
            <SectionHeading
              eyebrow="Our story"
              title="A practice that grew with the businesses it serves."
            />
            <div className={classes.prose}>
              <p>
                Founded in {firm.founded}, {firm.name} began as a focused audit and tax practice in
                Kolkata. Over the years we expanded into bookkeeping, GST, corporate compliance, and
                hands-on business advisory—always with the same belief: numbers should create
                clarity, not confusion.
              </p>
              <p>
                Today we work with startups, established companies, and family offices. Clients stay
                because we show up prepared, explain the “why,” and treat every engagement as a
                long-term relationship.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className={classes.timeline}>
            {milestones.map((item) => (
              <article key={item.year} className={classes.milestone}>
                <span>{item.year}</span>
                <p>{item.label}</p>
              </article>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className={classes.values}>
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="Principles that guide every engagement."
            align="center"
          />
          <Stagger className={classes.valueGrid}>
            {values.map((value) => (
              <StaggerItem key={value.title} className={classes.value}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
