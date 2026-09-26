import Image from 'next/image';

import missionImage from '@/assets/images/about-mission.png';
import teamImage from '@/assets/images/about-team.png';
import visionImage from '@/assets/images/about-vision.png';
import Container from '@/components/common/Container/Container';
import Reveal from '@/components/motion/Reveal';
import CtaBand from '@/components/sections/CtaBand/CtaBand';
import Founder from '@/components/sections/Founder/Founder';
import Gallery from '@/components/sections/Gallery/Gallery';
import OurJourney from '@/components/sections/OurJourney/OurJourney';
import Team from '@/components/sections/Team/Team';
import Testimonials from '@/components/sections/Testimonials/Testimonials';
import { firm, mission, vision } from '@/constants/site';

import classes from './about.module.scss';

export const metadata = {
  title: 'About',
  description: `Learn about ${firm.name} — our history, vision, and mission as Chartered Accountants.`,
};

export default function AboutPage() {
  return (
    <>
      <section className={classes.firm}>
        <Container className={classes.firmGrid}>
          <Reveal className={classes.firmCopy}>
            <h1>About The Firm</h1>
            <p>
              <strong>BAID &amp; COMPANY</strong> is a distinguished partnership firm of Chartered
              Accountants established in the year {firm.founded}, with its Head Office situated at
              Ballygunge Circular Road, Kolkata 700019.
            </p>
            <p>
              Over the years, the firm has successfully assisted clients in navigating complex
              regulatory frameworks, managing tax and compliance obligations, strengthening
              financial controls, and achieving sustainable business growth.
            </p>
          </Reveal>

          <Reveal delay={0.1} className={classes.firmVisual}>
            <Image
              src={teamImage}
              alt="The Baid & Company team"
              sizes="(max-width: 768px) 90vw, 45vw"
              className={classes.firmImage}
              priority
            />
          </Reveal>
        </Container>
      </section>

      <section className={classes.vision}>
        <Container className={classes.pillarGrid}>
          <Reveal className={classes.pillarCopy}>
            <h2>Our Vision</h2>
            <ul className={classes.points}>
              {vision.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className={classes.pillarIcon}>
            <Image src={visionImage} alt="" sizes="160px" className={classes.pillarImage} />
          </Reveal>
        </Container>
      </section>

      <section className={classes.mission}>
        <Container className={`${classes.pillarGrid} ${classes.pillarReverse}`}>
          <Reveal className={classes.pillarCopy}>
            <h2>Our Mission</h2>
            <ul className={classes.points}>
              {mission.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className={classes.pillarIcon}>
            <Image src={missionImage} alt="" sizes="160px" className={classes.pillarImage} />
          </Reveal>
        </Container>
      </section>

      <Founder />

      <Team />

      <OurJourney />

      <Gallery className={classes.gallery} />

      <Testimonials className={classes.testimonials} />

      <CtaBand />
    </>
  );
}
