import Link from "next/link";
import Image from "next/image";

import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/assets/icons/logo.svg" fill={true} alt="logo" />
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li><Link href="#">меню</Link></li>
            <li><Link href="#">о нас</Link></li>
            <li><Link href="#">контакты</Link></li>
          </ul>
        </nav>

        <a href="tel:+79184326587" className={styles.phone}>
          {/* <div className={styles.telephoneIcon}>
            <Image src="/assets/icons/telephone.svg" fill={true} alt="logo" />
          </div> */}
          <Image src="/assets/icons/telephone.svg" width={40} height={40} alt="logo" />
          <div className={styles.phoneText}>
            <h4>+7 (918) 432-65-87</h4>
            <span className="description">Ежедневно с 9:00 до 23:00</span>
          </div>
        </a>

      </div>
    </header>
  );
}