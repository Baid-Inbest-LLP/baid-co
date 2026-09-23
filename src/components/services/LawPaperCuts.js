import mask1 from '@/assets/images/torn-mask-1.png';
import mask2 from '@/assets/images/torn-mask-2.png';
import mask3 from '@/assets/images/torn-mask-3.png';

import classes from './LawPaperCuts.module.scss';

const MASKS = [mask1, mask2, mask3];
const KICKERS = ['The Gazette', 'Law Times', 'India Desk'];

export default function LawPaperCuts({ items }) {
  return (
    <ul className={classes.grid}>
      {items.map((item, index) => {
        const mask = MASKS[index % MASKS.length];
        const maskUrl = typeof mask === 'string' ? mask : mask.src;

        return (
          <li
            key={item.label}
            className={classes.clip}
            data-variant={index % 3}
            style={{ '--torn-mask': `url(${maskUrl})` }}
          >
            <div className={classes.lift}>
              <article className={classes.paper}>
                <div className={classes.texture} aria-hidden />
                <header className={classes.masthead}>
                  <span className={classes.kicker}>{KICKERS[index % KICKERS.length]}</span>
                  <span className={classes.folio}>p. {index + 1}</span>
                </header>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
                <footer className={classes.footer}>
                  <span>Indian law</span>
                  <span>clipped</span>
                </footer>
              </article>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
