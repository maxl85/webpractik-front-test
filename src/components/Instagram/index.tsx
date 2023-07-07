import Link from "next/link";
import Image from 'next/image';

import styles from './styles.module.scss';

import { imgLink } from '../../data/instagram';


export default function Instagram() {
  return (
    <section className="inst">
      <h2 className={styles.instTitle}>Следите за нами в Instagram</h2>
      <Link href="#"><h4 className={styles.instUser}>@pizzamenu</h4></Link>

      <div className={styles.instGrid}>
        {imgLink.map((item) => (
          <Link href="#" className={styles.instGridImage} key={item}>
            <Image src={item} fill={true} sizes="(max-width: 768px) 100vw" style={{ objectFit: "contain" }} alt='instagram' />
          </Link>
        ))}
      </div>
      
    </section>
  );
}