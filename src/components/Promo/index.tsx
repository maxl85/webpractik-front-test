import Image from 'next/image';

import styles from './styles.module.scss';

import { slides } from '../../data/promo';

export default function Promo() {
  return (
    <section className="container">
      <div className={styles.promo}>
        {slides.map(slide => (
          <div key={slide.id}>
            <div className={styles.promoImage}>
              <Image src={slide.url} fill={true} style={{ objectFit: "contain" }} alt={`event-${slide.id}`} />
            </div>
            <p className={styles.promoTitle}>{slide.title}</p>
            <p className={styles.promoText}>{slide.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}