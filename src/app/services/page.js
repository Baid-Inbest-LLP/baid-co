import Container from '@/components/common/Container/Container';
import PageHero from '@/components/common/PageHero/PageHero';
import Stagger, { StaggerItem } from '@/components/motion/Stagger';
import CtaBand from '@/components/sections/CtaBand/CtaBand';
import ServiceCard from '@/components/services/ServiceCard';
import { firm, services } from '@/constants/site';

import classes from './services.module.scss';

export const metadata = {
  title: 'Services',
  description: `Explore income tax, GST, audit, accounting, compliance, litigation, advisory, and certification services from ${firm.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end support across the financial lifecycle."
        variant="services"
      />

      <section className={classes.list}>
        <Container>
          <Stagger className={classes.grid}>
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
