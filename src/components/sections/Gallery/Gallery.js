import Image from 'next/image';

import Container from '@/components/common/Container/Container';
import SectionHeading from '@/components/common/SectionHeading/SectionHeading';
import { gallery } from '@/constants/site';

import classes from './Gallery.module.scss';

function MarqueeRow({ images, reverse = false, duration }) {
  return (
    <div className={classes.row}>
      <div
        className={`${classes.track} ${reverse ? classes.reverse : ''}`.trim()}
        style={{ '--duration': `${duration}s` }}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} className={classes.list} aria-hidden={copy === 1 || undefined}>
            {images.map((image) => (
              <li key={image.src} className={classes.tile}>
                <Image
                  src={image.src}
                  alt={copy === 1 ? '' : image.alt}
                  fill
                  sizes="(max-width: 768px) 60vw, 22vw"
                  className={classes.image}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function Gallery({
  title = 'Life at Baid & Co',
  images = gallery,
  className = '',
}) {
  const half = Math.ceil(images.length / 2);

  return (
    <section className={`${classes.section} ${className}`.trim()}>
      <Container>
        <SectionHeading title={title} align="center" />
      </Container>

      <div className={classes.rows}>
        <MarqueeRow images={images.slice(0, half)} duration={45} />
        <MarqueeRow images={images.slice(half)} duration={50} reverse />
      </div>
    </section>
  );
}
