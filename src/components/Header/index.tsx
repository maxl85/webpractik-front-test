'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { clsx } from 'clsx';
import { useInView } from 'react-intersection-observer';

import styles from './styles.module.scss';
import HeaderBurger from "../HeaderBurger";
import HeaderMenu from "../HeaderMenu";

export default function Header() {
  const { ref, inView } = useInView({ threshold: 1 });
  const [menuToggle, setMenuToggle] = useState(false);



  return (
    <header className={clsx(styles.header, !inView && styles.isScroll)} ref={ref}>

      <div className={`container ${styles.wrapper}`}>
        {/* <Link href="/" className={styles.logo}> */}
        <Link href="/" className={clsx(styles.logo, menuToggle && styles.logoHide)}>
          <Image src="/assets/icons/logo.svg" fill={true} alt="logo" />
        </Link>

        <HeaderMenu menuToggle={menuToggle} />

        <a href="tel:+79184326587" className={styles.phone}>
          <div className={styles.phoneWrapImage}>
            <Image src="/assets/icons/telephone.svg" fill={true} alt="logo" />
          </div>
          <div className={styles.phoneText}>
            <h4>+7 (918) 432-65-87</h4>
            <span>Ежедневно с 9:00 до 23:00</span>
          </div>
        </a>

        <a href="#" className={styles.cart}>
          <div className={styles.cartIcon}>
            <div className={styles.cartWrapImage}>
              <Image src="/assets/icons/cart.svg" fill={true} alt="logo" />
            </div>
            <span>5</span>
          </div>
          <div className={styles.cartText}>
            <h4>ваш заказ</h4>
            <span>Итальянская и ещё 2 пиццы</span>
          </div>
        </a>

        <Link href="#" className={styles.language}><span>EN</span></Link>

        <HeaderBurger onClick={() => setMenuToggle(!menuToggle)} menuToggle={menuToggle} />

      </div>
    </header>

  );
}