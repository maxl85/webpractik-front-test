import Link from "next/link";
import Image from "next/image";
import { clsx } from 'clsx';

import styles from './styles.module.scss';
import { Pizza } from '../../redux/pizzas/types';


interface Props extends Pizza {
  onClickSize: (props: { pizzaId: number, activeSize: number }) => void;
}

export default function CatalogCard(props: Props) {

  return (
    <div className={styles.card}>

      <div className={styles.cardType}>
        {props.type.map((item, index) =>
          item !== 'all' && <Image key={index} className={styles.cardTypeIcon} src={`/assets/icons/type/${item}.svg`} width={0} height={0} alt="icon" />
        )}
      </div>

      <div className={styles.cardImage}>
        <div className={styles.cardImageSizeL}>
          <Image src="/assets/icons/size.svg" fill={true} alt="icon" />
        </div>
        <div className={styles.cardImageSizeM}>
          <Image src="/assets/icons/size.svg" fill={true} alt="icon" />
        </div>
        
        <div className={clsx(
          styles.cardImagePizza,
          props.activeSize == 2 && styles.sizeL,
          props.activeSize == 1 && styles.sizeM,
          props.activeSize == 0 && styles.sizeS)}>
          <Image src={props.image} sizes="(max-width: 768px) 100vw" style={{ objectFit: 'contain' }} fill={true} alt="" />
        </div>
      </div>

      <div className={styles.cardDesc}>
        <h4 className={styles.cardDescName}>{props.name}</h4>
        <p className={styles.cardDescText}>{props.description}</p>
        <p className={styles.cardDescP}>Размер, см:</p>
        <div className={styles.cardDescSizes}>
          {props.sizes.map((size, i) => (
            <button
              className={clsx(styles.cardDescSizesBtn, props.activeSize == i && styles.active)}
              onClick={() => props.onClickSize({ pizzaId: props.id, activeSize: i })}
              key={i}>
              {size}
            </button>
          ))}
        </div>
        <p className={styles.cardDescPrice}>{`от ${props.price} руб.`}</p>
        <button className={styles.cardDescBuyBtn}>Заказать</button>
        <button className={styles.cardDescBuyBtnMobile}>{`от ${props.price} руб.`}</button>
      </div>

    </div>
  );
}