import Link from "next/link";
import Image from "next/image";

import imgBg from '../../../public/assets/images/img-bg.png';
import imgLeaves from '../../../public/assets/images/img-leaves.png';
import imgPizza from '../../../public/assets/images/img-pizza.png';

import styles from './styles.module.scss';

export default function Cover() {
  return (
    <section className="container">
      <div className={styles.cover}>
        <div className={styles.coverLeft}>
          <h1 className={styles.coverLeftTitle}>Пицца на заказ</h1>
          <p className={styles.coverLeftText}>Бесплатная и быстрая доставка за час <br /> в любое удобное для вас время</p>
          <button className={styles.coverLeftBtn}>Выбрать пиццу</button>
        </div>
        <div className={styles.coverRight}>
          <Image className={styles.coverRightBg} src={imgBg} alt="img-bg" />
          <Image className={styles.coverRightLeaves} src={imgLeaves} alt="img-leaves" />
          <Image className={styles.coverRightPizza} src={imgPizza} alt="img-pizza" />
          {/* <div className={styles.coverRightLeaves}>
          <Image src="/assets/images/img-leaves.png" fill={true} alt="img-leaves" />
        </div>
        <div className={styles.coverRightPizza}>
          <Image src="/assets/images/img-pizza.png" fill={true} alt="img-pizza" />
        </div> */}
        </div>
      </div>
    </section>


    // <section className="container">
    //   <div className={styles.banner}>
    //     <div className={styles.banner__wrapContent}>
    //       <div className={styles.banner__leftSide}>
    //         <h1 className={styles.banner__title}>Пицца на заказ</h1>
    //         <p className={styles.banner__text}>Бесплатная и быстрая доставка за час <br /> в любое удобное для вас время</p>
    //         <button className={styles.banner__anchor}>Выбрать пиццу</button>
    //       </div>
    //       <div className={styles.banner__rightSide}>
    //         <img src='/assets/images/img-leaves.png' alt="" className={styles.banner__imgLeaves} />
    //         <img src='/assets/images/img-pizza.png' alt="" className={styles.banner__imgPizza} />
    //         <img src='/assets/images/img-bg.png' alt="" className={styles.banner__imgBg} />
    //       </div>
    //     </div>
    //   </div>
    // </section>


  );
}