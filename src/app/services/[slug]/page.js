import { IconCheck } from '@tabler/icons-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Container from '@/components/common/Container/Container';
import PageHero from '@/components/common/PageHero/PageHero';
import Reveal from '@/components/motion/Reveal';
import Stagger, { StaggerItem } from '@/components/motion/Stagger';
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
        description={service.short}
        variant="service"
      />

      <section className={classes.content}>
        <Container className={classes.grid}>
          <Reveal className={classes.main}>
            <p className={classes.lead}>{service.description}</p>

            <h2>What we cover</h2>
            <ul className={classes.list}>
              {service.highlights.map((item) => (
                <li key={item}>
                  <IconCheck size={18} stroke={1.75} aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className={classes.aside}>
            <h3>Outcomes</h3>
            <ul>
              {service.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/contact" className={classes.cta}>
              Discuss this service
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className={classes.related}>
        <Container>
          <h2>Related services</h2>
          <Stagger className={classes.relatedGrid}>
            {related.map((item) => (
              <StaggerItem key={item.slug}>
                <Link href={`/services/${item.slug}`} className={classes.relatedCard}>
                  <h3>{item.title}</h3>
                  <p>{item.short}</p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
