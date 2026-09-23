import {
  IconBuilding,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconShare,
} from '@tabler/icons-react';

import Container from '@/components/common/Container/Container';
import PageHero from '@/components/common/PageHero/PageHero';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import SocialLinks from '@/components/common/SocialLinks/SocialLinks';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';
import Reveal from '@/components/motion/Reveal';
import contactBanner from '@/assets/images/contact-banner.jpg';
import { firm } from '@/constants/site';

import classes from './contact.module.scss';

export const metadata = {
  title: 'Contact',
  description: `Get in touch with ${firm.name} for a consultation on audit, tax, or advisory needs.`,
};

function InfoLabel({ icon: Icon, children }) {
  return (
    <span className={classes.label}>
      <Icon size={15} stroke={1.75} aria-hidden className={classes.labelIcon} />
      {children}
    </span>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Support & Clarification"
        image={contactBanner}
        imageAlt="Customer support representative ready to help"
      />

      <section className={classes.section}>
        <Container className={classes.layout}>
          <div className={classes.formSection}>
            <SectionHeading align="center" title="Get In Touch With Our Team." />

            <div className={classes.topRow}>
              <Reveal className={classes.info}>
                <div className={classes.addressList}>
                  <div>
                    <InfoLabel icon={IconBuilding}>Head Office</InfoLabel>
                    <p>{firm.headOffice}</p>
                  </div>
                  <div>
                    <InfoLabel icon={IconMapPin}>Branch Address</InfoLabel>
                    <p>{firm.branchAddress}</p>
                  </div>
                  <div>
                    <InfoLabel icon={IconClock}>Working Hours</InfoLabel>
                    <p>{firm.hours}</p>
                  </div>
                </div>

                <div className={classes.contactMeta}>
                  <div>
                    <InfoLabel icon={IconMail}>Email</InfoLabel>
                    <a href={`mailto:${firm.email}`}>{firm.email}</a>
                  </div>
                  <div>
                    <InfoLabel icon={IconPhone}>Phone</InfoLabel>
                    <a href={`tel:${firm.phone.replace(/\s/g, '')}`}>{firm.phone}</a>
                  </div>
                </div>

                <div className={classes.social}>
                  <InfoLabel icon={IconShare}>Connect</InfoLabel>
                  <SocialLinks />
                </div>
              </Reveal>

              <Reveal delay={0.1} className={classes.formWrap}>
                <ContactForm />
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.15} className={classes.mapSection}>
            <SectionHeading align="center" title="Our Presence" />
            <div className={classes.mapWrap}>
              <ContactMap />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
