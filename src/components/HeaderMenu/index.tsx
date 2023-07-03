'use client';

import Link from "next/link";
import Image from "next/image";
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
  menuToggle: boolean;
}

export default function HeaderMenu({ menuToggle }: Props) {
  return (
    <nav className={clsx(styles.nav, menuToggle && styles.menuToggle)}>
      <Image className={styles.navLogo} src="/assets/icons/logo-invert.svg" width={85} height={39} alt="logo" />

      <ul className={styles.navList}>
        <li className={styles.navListItem}><Link href="#">меню</Link></li>
        <li className={styles.navListItem}><Link href="#">о нас</Link></li>
        <li className={styles.navListItem}><Link href="#">контакты</Link></li>
      </ul>

      <div className={styles.navInfo}>
        <span className={styles.navInfoTitle}>заказать по телефону</span>
        <a href="tel:+79184326587"><h4 className={styles.navInfoPhone}>+7 (918) 432-65-87</h4></a>
        <span className={styles.navInfoTime}>Ежедневно с 9:00 до 23:00</span>
      </div>

      <Link href="#" className={styles.navLanguage}>English</Link>
    </nav>
  );
}

