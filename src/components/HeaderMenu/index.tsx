'use client';

import Link from "next/link";
import Image from "next/image";
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
  openMenu: boolean;
}

// const navList = [
//   {
//     title: 'меню',
//     link: '#',
//   },
//   {
//     text: 'о нас',
//     link: '#'
//   },
//   {
//     text: 'контакты',
//     link: '#'
//   }
// ];

export default function HeaderMenu({ openMenu }: Props) {
  return (
    <nav className={clsx(styles.nav, openMenu && styles.openMenu)}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="#" className={styles.navLink}>меню</Link></li>
        <li className={styles.navItem}><Link href="#" className={styles.navLink}>о нас</Link></li>
        <li className={styles.navItem}><Link href="#" className={styles.navLink}>контакты</Link></li>
      </ul>
      
    </nav>
  );
}

