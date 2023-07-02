'use client';

import styles from './styles.module.scss';

export default function HeaderBurger() {
  return (
    <button className={styles.burger}>
      <div className={styles.burgerIcon}>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </div>
    </button>
  );
}