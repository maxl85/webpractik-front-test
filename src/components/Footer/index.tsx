import Link from "next/link";
import Image from "next/image";

import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrapper}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/assets/icons/logo-invert.svg" fill={true} alt="logo" />
        </Link>
        <div className={styles.phone}>
          <a href="tel:+79184326587"><h4>+7 (918) 432-65-87</h4></a>
          <span className="description">Ежедневно с 9:00 до 23:00</span>
        </div>
        <Link href="/" className={`description ${styles.confidencial}`}>Политика конфиденциальности</Link>
      </div>
    </footer>
  );
}