// "use client"

// import { useState } from 'react';
import { IoClose, IoCloseOutline } from 'react-icons/io5';
import { BsPlusCircleFill } from 'react-icons/bs';
import { BiSolidPlusCircle, BiSolidMinusCircle} from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

export default function Cart() {
  // const [open, setOpen] = useState(false);
  
  return (
    <div className={styles.cart}>
      <div className={styles.cartBg}></div>
      
      <div className={styles.cartModal}>
        <h3 className={styles.cartTitle}>Ваш заказ</h3>
        <button className={styles.cartCloseBtn}><IoClose /></button>
        
        <ul className={styles.cartList}>
          <li className={styles.cartItem}>
            <div className={styles.cartItemImage}>
              
            </div>
            
            <div className={styles.cartItemPizza}>
              <p className={styles.cartItemPizzaName}>Итальянская</p>
              <p className={styles.cartItemPizzaSize}>30 см</p>
            </div>
            
            <div className={styles.cartItemCount}>
              <button className={styles.cartItemCountBtn}><BiSolidMinusCircle /></button>
              <input className={styles.cartItemCountInput} value={2} disabled></input>
              <button className={styles.cartItemCountBtn}><BiSolidPlusCircle /></button>
            </div>
            
            <p className={styles.cartItemPrice}>{699 + ' руб'}</p>
            
            <button className={styles.cartItemDelBtn}><IoClose /></button>
            
          </li>
        </ul>
      </div>
    </div>
  );
}