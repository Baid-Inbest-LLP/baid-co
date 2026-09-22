import { IconArrowRight, IconCheck } from '@tabler/icons-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Container from '@/components/common/Container/Container';
import PageHero from '@/components/common/PageHero/PageHero';
import ServiceEnquiryForm from '@/components/contact/ServiceEnquiryForm';
import Reveal from '@/components/motion/Reveal';
import Stagger, { StaggerItem } from '@/components/motion/Stagger';
import ProcessWave from '@/components/services/ProcessWave';
import { getServiceBySlug, services } from '@/constants/site';

import classes from './service.module.scss';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: 'Service' };
  }
  return {
    title: service.title,
    description: service.short,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        variant="service"
      />

      <section className={classes.overview}>
        <Container className={classes.overviewGrid}>
          <Reveal className={classes.prose}>
            <p className={classes.sectionEyebrow}>Overview</p>
            <h2>What this engagement covers</h2>
            {service.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={0.08} className={classes.frameworks}>
            <p className={classes.sectionEyebrow}>Regulatory context</p>
            <h2>Grounded in Indian law</h2>
            <ul>
              {service.frameworks.map((item) => (
                <li key={item.label}>
                  <h3>{item.label}</h3>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
            <p className={classes.disclaimer}>
              References summarise commonly applicable statutes and frameworks for general
              information. Advice is scoped to each client&apos;s facts and current law.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className={classes.coverage}>
        <Container className={classes.coverageGrid}>
          <Reveal className={classes.main}>
            <p className={classes.sectionEyebrow}>Scope</p>
            <h2>What we cover</h2>
            <ul className={classes.list}>
              {service.highlights.map((item) => (
                <li key={item}>
                  <span className={classes.check} aria-hidden>
                    <IconCheck size={16} stroke={2.25} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className={classes.aside}>
            <p className={classes.sectionEyebrow}>Results</p>
            <h3>Outcomes you can expect</h3>
            <ul>
              {service.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="#enquire" className={classes.cta}>
              Discuss this service
              <IconArrowRight size={18} stroke={2} aria-hidden />
            </a>
          </Reveal>
        </Container>
      </section>

      <section className={classes.process}>
        <Container>
          <Reveal className={classes.processIntro}>
            <p className={classes.sectionEyebrow}>Approach</p>
            <h2>How we work</h2>
            <p>A clear rhythm from scoping to delivery—so timelines and ownership stay visible.</p>
          </Reveal>

          <Reveal delay={0.08}>
            <ProcessWave steps={service.process} />
          </Reveal>
        </Container>
      </section>

      <section className={classes.audience}>
        <Container>
          <Reveal className={classes.audienceInner}>
            <div className={classes.audienceCopy}>
              <p className={classes.sectionEyebrow}>Fit</p>
              <h2>Who this is for</h2>
            </div>
            <ul className={classes.audienceList}>
              {service.whoFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section id="enquire" className={classes.enquire}>
        <Container className={classes.enquireGrid}>
          <Reveal className={classes.enquireCopy}>
            <p className={classes.sectionEyebrow}>Start a conversation</p>
            <h2>Discuss {service.title}</h2>
            <p>
              Tell us about your timelines and context. We’ll reply with next steps—no need to leave
              this page.
            </p>
          </Reveal>

          <Reveal delay={0.08} className={classes.enquireForm}>
            <ServiceEnquiryForm serviceSlug={service.slug} serviceTitle={service.title} />
          </Reveal>
        </Container>
      </section>

      <section className={classes.related}>
        <Container>
          <Reveal>
            <p className={classes.sectionEyebrow}>Explore more</p>
            <h2>Related services</h2>
          </Reveal>
          <Stagger className={classes.relatedGrid}>
            {related.map((item) => (
              <StaggerItem key={item.slug}>
                <Link href={`/services/${item.slug}`} className={classes.relatedCard}>
                  <h3>{item.title}</h3>
                  <p>{item.short}</p>
                  <span className={classes.relatedLink}>
                    View details
                    <IconArrowRight size={16} stroke={2} aria-hidden />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
