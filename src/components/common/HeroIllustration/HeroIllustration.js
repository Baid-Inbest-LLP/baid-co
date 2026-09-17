'use client';

import { motion, useReducedMotion } from 'framer-motion';

import classes from './HeroIllustration.module.scss';

const float = (reduceMotion, delay = 0) =>
  reduceMotion
    ? {}
    : {
        y: [0, -10, 0],
        transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay },
      };

function Frame({ children, className = '' }) {
  return <div className={`${classes.frame} ${className}`.trim()}>{children}</div>;
}

function AboutArt({ reduceMotion }) {
  return (
    <Frame>
      <motion.div className={`${classes.blob} ${classes.blobA}`} animate={float(reduceMotion, 0)} />
      <motion.div className={`${classes.blob} ${classes.blobB}`} animate={float(reduceMotion, 0.5)} />
      <svg className={classes.svg} viewBox="0 0 420 340" fill="none" aria-hidden>
        <motion.g animate={float(reduceMotion, 0)}>
          <rect x="42" y="70" width="176" height="220" rx="22" fill="#1e3a8a" />
          <rect x="64" y="98" width="86" height="12" rx="6" fill="#c49a32" />
          <rect x="64" y="126" width="132" height="8" rx="4" fill="rgba(255,255,255,0.32)" />
          <rect x="64" y="146" width="112" height="8" rx="4" fill="rgba(255,255,255,0.22)" />
          <rect x="64" y="166" width="124" height="8" rx="4" fill="rgba(255,255,255,0.18)" />
          <circle cx="90" cy="236" r="24" fill="#1678fb" />
          <circle cx="128" cy="236" r="24" fill="#eaf2ff" stroke="#c9d9f5" strokeWidth="3" />
          <circle cx="166" cy="236" r="24" fill="#c49a32" />
        </motion.g>

        <motion.g animate={float(reduceMotion, 0.35)}>
          <rect x="236" y="58" width="144" height="144" rx="72" fill="#eaf2ff" />
          <circle cx="308" cy="118" r="34" fill="#1678fb" />
          <circle cx="308" cy="108" r="14" fill="#ffffff" />
          <path
            d="M278 154c8-18 18-28 30-28s22 10 30 28"
            stroke="#ffffff"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>

        <motion.g animate={float(reduceMotion, 0.7)}>
          <rect x="248" y="220" width="128" height="72" rx="18" fill="#ffffff" stroke="#e5ebf4" strokeWidth="3" />
          <rect x="268" y="242" width="48" height="10" rx="5" fill="#c49a32" />
          <rect x="268" y="262" width="78" height="8" rx="4" fill="#94a3b8" />
        </motion.g>

        <motion.g animate={float(reduceMotion, 0.15)}>
          <rect x="58" y="48" width="72" height="34" rx="17" fill="#fff6e8" />
          <rect x="74" y="60" width="40" height="10" rx="5" fill="#d97706" />
        </motion.g>
      </svg>
    </Frame>
  );
}

function ServicesArt({ reduceMotion }) {
  return (
    <Frame>
      <motion.div className={`${classes.blob} ${classes.blobC}`} animate={float(reduceMotion, 0.2)} />
      <svg className={classes.svg} viewBox="0 0 420 340" fill="none" aria-hidden>
        <motion.rect animate={float(reduceMotion, 0)} x="40" y="60" width="150" height="110" rx="20" fill="#eaf2ff" />
        <circle cx="85" cy="105" r="22" fill="#1678fb" />
        <rect x="120" y="92" width="50" height="10" rx="5" fill="#1e3a8a" />
        <rect x="120" y="112" width="40" height="8" rx="4" fill="#94a3b8" />
        <motion.rect animate={float(reduceMotion, 0.4)} x="210" y="90" width="150" height="110" rx="20" fill="#eaf8ef" />
        <circle cx="255" cy="135" r="22" fill="#1f9a55" />
        <rect x="290" y="122" width="50" height="10" rx="5" fill="#1e3a8a" />
        <rect x="290" y="142" width="40" height="8" rx="4" fill="#94a3b8" />
        <motion.rect animate={float(reduceMotion, 0.8)} x="120" y="190" width="170" height="110" rx="20" fill="#fff6e8" />
        <circle cx="165" cy="235" r="22" fill="#d97706" />
        <rect x="200" y="222" width="60" height="10" rx="5" fill="#1e3a8a" />
        <rect x="200" y="242" width="45" height="8" rx="4" fill="#94a3b8" />
      </svg>
    </Frame>
  );
}

function ContactArt({ reduceMotion }) {
  return (
    <Frame>
      <motion.div className={`${classes.blob} ${classes.blobA}`} animate={float(reduceMotion, 0.1)} />
      <svg className={classes.svg} viewBox="0 0 420 340" fill="none" aria-hidden>
        <motion.g animate={float(reduceMotion, 0)}>
          <rect x="70" y="80" width="220" height="160" rx="22" fill="#ffffff" stroke="#d6e6ff" strokeWidth="4" />
          <path d="M70 110l110 72L290 110" stroke="#1678fb" strokeWidth="8" strokeLinejoin="round" fill="none" />
        </motion.g>
        <motion.circle animate={float(reduceMotion, 0.5)} cx="320" cy="220" r="48" fill="#1e3a8a" />
        <path d="M305 220h30M320 205v30" stroke="#c49a32" strokeWidth="6" strokeLinecap="round" />
        <motion.rect animate={float(reduceMotion, 0.9)} x="250" y="60" width="90" height="54" rx="16" fill="#eaf8ef" />
        <circle cx="275" cy="87" r="10" fill="#1f9a55" />
      </svg>
    </Frame>
  );
}

function BlogsArt({ reduceMotion }) {
  return (
    <Frame>
      <motion.div className={`${classes.blob} ${classes.blobB}`} animate={float(reduceMotion, 0.2)} />
      <svg className={classes.svg} viewBox="0 0 420 340" fill="none" aria-hidden>
        <motion.g animate={float(reduceMotion, 0)}>
          <rect x="90" y="55" width="170" height="230" rx="16" fill="#1e3a8a" />
          <rect x="110" y="90" width="110" height="12" rx="6" fill="#c49a32" />
          <rect x="110" y="120" width="130" height="8" rx="4" fill="rgba(255,255,255,0.35)" />
          <rect x="110" y="140" width="120" height="8" rx="4" fill="rgba(255,255,255,0.25)" />
          <rect x="110" y="160" width="100" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
        </motion.g>
        <motion.g animate={float(reduceMotion, 0.5)}>
          <rect x="220" y="95" width="140" height="180" rx="16" fill="#ffffff" stroke="#d6e6ff" strokeWidth="4" />
          <rect x="240" y="125" width="90" height="10" rx="5" fill="#1678fb" />
          <rect x="240" y="150" width="100" height="8" rx="4" fill="#94a3b8" />
          <rect x="240" y="170" width="85" height="8" rx="4" fill="#94a3b8" />
        </motion.g>
      </svg>
    </Frame>
  );
}

function FaqArt({ reduceMotion }) {
  return (
    <Frame>
      <motion.div className={`${classes.blob} ${classes.blobC}`} animate={float(reduceMotion, 0)} />
      <svg className={classes.svg} viewBox="0 0 420 340" fill="none" aria-hidden>
        <motion.g animate={float(reduceMotion, 0)}>
          <circle cx="150" cy="140" r="70" fill="#eaf2ff" />
          <path
            d="M132 118c0-16 12-28 30-28s30 12 30 28c0 12-8 20-18 26-6 4-10 8-10 16v4"
            stroke="#1678fb"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="164" cy="182" r="7" fill="#1678fb" />
        </motion.g>
        <motion.g animate={float(reduceMotion, 0.4)}>
          <circle cx="290" cy="110" r="42" fill="#fff6e8" />
          <path
            d="M278 96c0-10 8-18 18-18s18 8 18 18c0 8-5 12-11 16-4 2-7 5-7 10v2"
            stroke="#d97706"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="296" cy="138" r="4.5" fill="#d97706" />
        </motion.g>
        <motion.rect animate={float(reduceMotion, 0.7)} x="200" y="200" width="160" height="70" rx="18" fill="#1e3a8a" />
        <rect x="220" y="225" width="90" height="10" rx="5" fill="#c49a32" />
        <rect x="220" y="245" width="60" height="8" rx="4" fill="rgba(255,255,255,0.35)" />
      </svg>
    </Frame>
  );
}

function ServiceArt({ reduceMotion }) {
  return (
    <Frame>
      <motion.div className={`${classes.blob} ${classes.blobA}`} animate={float(reduceMotion, 0.3)} />
      <svg className={classes.svg} viewBox="0 0 420 340" fill="none" aria-hidden>
        <motion.g animate={float(reduceMotion, 0)}>
          <rect x="60" y="70" width="180" height="200" rx="20" fill="#ffffff" stroke="#d6e6ff" strokeWidth="4" />
          <rect x="85" y="105" width="100" height="12" rx="6" fill="#1e3a8a" />
          <rect x="85" y="135" width="130" height="8" rx="4" fill="#94a3b8" />
          <rect x="85" y="155" width="110" height="8" rx="4" fill="#94a3b8" />
          <rect x="85" y="175" width="120" height="8" rx="4" fill="#94a3b8" />
          <rect x="85" y="210" width="70" height="28" rx="14" fill="#1678fb" />
        </motion.g>
        <motion.g animate={float(reduceMotion, 0.5)}>
          <circle cx="300" cy="150" r="70" fill="#eaf8ef" />
          <path d="M270 160l20 20 40-48" stroke="#1f9a55" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </motion.g>
      </svg>
    </Frame>
  );
}

function HomeArt({ reduceMotion }) {
  return (
    <Frame className={classes.homeFrame}>
      <motion.div className={`${classes.blob} ${classes.blobGold}`} animate={float(reduceMotion, 0)} />
      <motion.div className={`${classes.blob} ${classes.blobHomeBlue}`} animate={float(reduceMotion, 0.5)} />
      <svg className={classes.svg} viewBox="0 0 420 340" fill="none" aria-hidden>
        <motion.g animate={float(reduceMotion, 0)}>
          <rect x="36" y="78" width="168" height="210" rx="22" fill="#ffffff" />
          <rect x="58" y="108" width="92" height="12" rx="6" fill="#1e3a8a" />
          <rect x="58" y="136" width="124" height="8" rx="4" fill="#c5d0e0" />
          <rect x="58" y="156" width="108" height="8" rx="4" fill="#d7e0ec" />
          <rect x="58" y="176" width="116" height="8" rx="4" fill="#d7e0ec" />
          <rect x="58" y="210" width="78" height="32" rx="16" fill="#1678fb" />
          <circle cx="168" cy="108" r="18" fill="#eaf2ff" />
          <circle cx="168" cy="108" r="9" fill="#1678fb" />
        </motion.g>

        <motion.g animate={float(reduceMotion, 0.35)}>
          <rect x="220" y="56" width="164" height="140" rx="22" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
          <path
            d="M246 150V118l28-22 26 34 28-48"
            stroke="#c49a32"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="328" cy="82" r="8" fill="#c49a32" />
          <rect x="246" y="162" width="54" height="8" rx="4" fill="rgba(255,255,255,0.45)" />
          <rect x="246" y="178" width="36" height="8" rx="4" fill="rgba(255,255,255,0.28)" />
        </motion.g>

        <motion.g animate={float(reduceMotion, 0.7)}>
          <rect x="236" y="214" width="148" height="88" rx="18" fill="#ffffff" />
          <rect x="256" y="238" width="18" height="42" rx="6" fill="#1678fb" opacity="0.45" />
          <rect x="282" y="228" width="18" height="52" rx="6" fill="#1678fb" opacity="0.7" />
          <rect x="308" y="218" width="18" height="62" rx="6" fill="#1e3a8a" />
          <rect x="334" y="234" width="18" height="46" rx="6" fill="#c49a32" />
        </motion.g>
      </svg>
    </Frame>
  );
}

const variants = {
  home: HomeArt,
  about: AboutArt,
  services: ServicesArt,
  contact: ContactArt,
  blogs: BlogsArt,
  faq: FaqArt,
  service: ServiceArt,
};

export default function HeroIllustration({ variant = 'about' }) {
  const reduceMotion = useReducedMotion();
  const Art = variants[variant] || AboutArt;

  return (
    <div className={classes.wrap} aria-hidden>
      <Art reduceMotion={reduceMotion} />
    </div>
  );
}
