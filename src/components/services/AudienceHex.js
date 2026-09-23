import {
  IconBriefcase,
  IconBuildingBank,
  IconScale,
  IconUsersGroup,
} from '@tabler/icons-react';

import classes from './AudienceHex.module.scss';

const ICONS = [IconUsersGroup, IconBriefcase, IconBuildingBank, IconScale];

export default function AudienceHex({ items }) {
  return (
    <ul className={classes.grid}>
      {items.map((item, index) => {
        const Icon = ICONS[index % ICONS.length];

        return (
          <li key={item.title} className={classes.card}>
            <div className={classes.hex}>
              <span className={classes.icon}>
                <Icon size={40} stroke={1.6} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
