import { IconArrowRight, IconCheck } from '@tabler/icons-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Container from '@/components/common/Container/Container';
import PageHero from '@/components/common/PageHero/PageHero';
import ServiceEnquiryForm from '@/components/contact/ServiceEnquiryForm';
import Reveal from '@/components/motion/Reveal';
import Stagger, { StaggerItem } from '@/components/motion/Stagger';
import AudienceHex from '@/components/services/AudienceHex';
import LawPaperCuts from '@/components/services/LawPaperCuts';
import ProcessWave from '@/components/services/ProcessWave';
import ServiceAccordion from '@/components/services/ServiceAccordion';
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

      <section className={classes.intro}>
        <Container className={classes.introGrid}>
          <div className={classes.introMain}>
            <Reveal className={classes.prose}>
              <h2>What this engagement covers</h2>
              {service.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </Reveal>

            <Reveal delay={0.06} className={classes.main}>
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
          </div>

          <aside className={classes.introAside}>
            <div className={classes.formCard}>
              <ServiceEnquiryForm serviceSlug={service.slug} serviceTitle={service.title} />
            </div>
          </aside>
        </Container>
      </section>

      <section className={classes.process}>
        <Container>
          <Reveal className={classes.processIntro}>
            <h2>How we work</h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div style={{ padding: '48px 0' }}>
              <ProcessWave steps={service.process} />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className={classes.lawOutcomes}>
        <Container>
          <Reveal className={classes.lawIntro}>
            <h2>Grounded in Indian law</h2>
          </Reveal>

          <Reveal delay={0.08}>
            <LawPaperCuts items={service.frameworks} />
          </Reveal>
        </Container>
      </section>

      <section className={classes.audience}>
        <Container>
          <Reveal className={classes.audienceIntro}>
            <h2>Who this is for</h2>
          </Reveal>

          <Reveal delay={0.08}>
            <AudienceHex items={service.whoFor} />
          </Reveal>
        </Container>
      </section>

      {service.faqs?.length > 0 && (
        <section className={classes.faq}>
          <Container>
            <Reveal className={classes.faqIntro}>
              <h2>Frequently asked questions</h2>
            </Reveal>

            <Reveal delay={0.08}>
              <ServiceAccordion items={service.faqs} idPrefix={`faq-${service.slug}`} />
            </Reveal>
          </Container>
        </section>
      )}

      <section className={classes.related}>
        <Container>
          <Reveal>
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
