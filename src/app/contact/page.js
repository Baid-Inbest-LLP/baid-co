import Container from '@/components/common/Container/Container';
import SocialLinks from '@/components/common/SocialLinks/SocialLinks';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';
import Reveal from '@/components/motion/Reveal';
import { firm } from '@/constants/site';

import classes from './contact.module.scss';

export const metadata = {
  title: 'Contact',
  description: `Get in touch with ${firm.name} for a consultation on audit, tax, or advisory needs.`,
};

export default function ContactPage() {
  return (
    <section className={classes.section}>
      <Container className={classes.layout}>
        <div className={classes.topRow}>
          <Reveal className={classes.info}>
            <div className={classes.copy}>
              <h1 className={classes.heading}>Contact Us</h1>
            </div>

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
                <span className={classes.label}>Working Hours</span>
                <p>{firm.hours}</p>
              </div>
            </div>

            <div className={classes.contactMeta}>
              <div>
                <span className={classes.label}>Email</span>
                <a href={`mailto:${firm.email}`}>{firm.email}</a>
              </div>
              <div>
                <span className={classes.label}>Phone</span>
                <a href={`tel:${firm.phone.replace(/\s/g, '')}`}>{firm.phone}</a>
              </div>
            </div>

            <div className={classes.social}>
              <span className={classes.label}>Connect</span>
              <SocialLinks />
            </div>
          </Reveal>

          <Reveal delay={0.1} className={classes.formWrap}>
            <ContactForm />
          </Reveal>
        </div>

        <Reveal delay={0.15} className={classes.mapSection}>
          <h2 className={classes.heading}>Our Presence</h2>
          <div className={classes.mapWrap}>
            <ContactMap />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
