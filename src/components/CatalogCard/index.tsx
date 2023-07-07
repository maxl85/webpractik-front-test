import Link from "next/link";
import Image from "next/image";
import { clsx } from 'clsx';

import styles from './styles.module.scss';

import sizeL from '../../../public/assets/icons/size-L.svg';
import sizeM from '../../../public/assets/icons/size-M.svg';
import sizeS from '../../../public/assets/icons/size-S.svg';

interface Props {
  // id: string;
  name: string;
  description: string;
  price: number;
  type: string[];
  image: string;
}

export default function CatalogCard(props: Props) {

  return (
    <div className={styles.card}>

      <div className={styles.cardType}>
        {props.type.map((item, index) => 
            item !=='all' && <Image key={index} className={styles.cardTypeIcon} src={`/assets/icons/type/${item}.svg`} width={0} height={0} alt="icon" />
        )}
      </div>

      <div className={styles.cardImage}>
        <div className={styles.cardImageSizeL}>
          <Image src="/assets/icons/size.svg" fill={true} alt="icon" />
        </div>
        <div className={styles.cardImageSizeM}>
          <Image src="/assets/icons/size.svg" fill={true} alt="icon" />
        </div>
        <div className={styles.cardImageSizeS}>
          <Image src="/assets/icons/size.svg" fill={true} alt="icon" />
        </div>
        <div className={styles.cardImageShadow}></div>
        
        <div className={styles.cardImagePizza}>
          <Image src={props.image} sizes="(max-width: 768px) 100vw" style={{objectFit: 'contain'}} fill={true} alt="" />
        </div>
        
        
      </div>

      <div className={styles.cardDesc}>
        <h4 className={styles.cardDescName}>{props.name}</h4>
        <p className={styles.cardDescText}>{props.description}</p>
        <p className={styles.cardDescP}>Размер, см:</p>
        <div className={styles.cardDescSizes}>
          <button className={styles.cardDescSizesBtn}>20</button>
          <button className={clsx(styles.cardDescSizesBtn, styles.active)}>30</button>
          <button className={styles.cardDescSizesBtn}>40</button>
        </div>
        <p className={styles.cardDescPrice}>{`от ${props.price} руб.`}</p>
        <button className={styles.cardDescBuyBtn}>Заказать</button>
        <button className={styles.cardDescBuyBtnModile}>{`от ${props.price} руб.`}</button>
      </div>

    </div>
  );
}