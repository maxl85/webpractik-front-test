import Link from "next/link";
import Image from "next/image";

import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        Header
      </div>
    </header>
  );
}