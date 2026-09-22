import Image from 'next/image';

import facebookIcon from '@/assets/images/facebook-icon.png';
import instagramIcon from '@/assets/images/instagram-icon.png';
import linkedinIcon from '@/assets/images/linkedin-icon.png';
import whatsappIcon from '@/assets/images/whatsapp-icon.png';
import { firm } from '@/constants/site';

import classes from './SocialLinks.module.scss';

const links = [
  { href: firm.linkedin, label: 'LinkedIn', icon: linkedinIcon },
  { href: firm.whatsapp, label: 'WhatsApp', icon: whatsappIcon },
  { href: firm.facebook, label: 'Facebook', icon: facebookIcon },
  { href: firm.instagram, label: 'Instagram', icon: instagramIcon },
];

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`${classes.icons} ${className}`.trim()}>
      {links.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          aria-label={label}
          title={label}
          className={classes.link}
        >
          <Image src={icon} alt="" width={28} height={28} className={classes.icon} />
        </a>
      ))}
    </div>
  );
}
