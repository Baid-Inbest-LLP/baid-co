import ContactForm from '@/components/contact/ContactForm';
import Container from '@/components/common/Container/Container';
import PageHero from '@/components/common/PageHero/PageHero';
import Reveal from '@/components/motion/Reveal';
import { firm } from '@/constants/site';

import classes from './contact.module.scss';

export const metadata = {
  title: 'Contact',
  description: `Get in touch with ${firm.name} for a consultation on audit, tax, or advisory needs.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about what you need."
        description="Share a few details and we’ll follow up to schedule a consultation."
        variant="contact"
      />

      <section className={classes.section}>
        <Container className={classes.grid}>
          <Reveal className={classes.info}>
            <p className={classes.hours}>{firm.hours}</p>

            <div className={classes.addressList}>
              <div>
                <span className={classes.label}>Head Office</span>
                <p>{firm.headOffice}</p>
              </div>
              <div>
                <span className={classes.label}>Branch Address</span>
                <p>{firm.branchAddress}</p>
              </div>
              <div>
                <span className={classes.label}>Email</span>
                <a href={`mailto:${firm.email}`}>{firm.email}</a>
              </div>
              <div>
                <span className={classes.label}>Phone</span>
                <a href={`tel:${firm.phone.replace(/\s/g, '')}`}>{firm.phone}</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className={classes.formWrap}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
