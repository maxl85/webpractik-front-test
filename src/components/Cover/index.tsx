import Link from "next/link";
import Image from "next/image";

import styles from './styles.module.scss';

export default function Cover() {
  return (
    <section className={`container ${styles.cover}`}>
      <div className={styles.coverLeft}>
        <h1 className={styles.coverLeftTitle}>Пицца на заказ</h1>
        <p className={styles.coverLeftText}>Бесплатная и быстрая доставка за час <br /> в любое удобное для вас время</p>
        <button className={styles.coverLeftBtn}>Выбрать пиццу</button>
      </div>
      <div>bbbbbb</div>
    </section>
  );
}