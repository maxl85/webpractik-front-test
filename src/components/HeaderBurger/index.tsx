'use client';

import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
  onClick?: React.MouseEventHandler;
  openMenu: boolean;
}

export default function HeaderBurger({ onClick, openMenu }: Props) {
  return (
    <button className={clsx(styles.burger, openMenu && styles.openMenu)} onClick={onClick}>
      <div className={styles.burgerIcon}>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </div>
    </button>
  );
}
