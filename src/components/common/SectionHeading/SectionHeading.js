import Reveal from '@/components/motion/Reveal';

import classes from './SectionHeading.module.scss';

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <Reveal className={`${classes.heading} ${classes[align] || ''}`.trim()}>
      {eyebrow && <p className={classes.eyebrow}>{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className={classes.description}>{description}</p>}
    </Reveal>
  );
}
