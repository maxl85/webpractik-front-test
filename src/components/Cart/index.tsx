import { IoClose } from 'react-icons/io5';
import { BiSolidPlusCircle, BiSolidMinusCircle } from 'react-icons/bi';
import Image from 'next/image';

import styles from './styles.module.scss';

export default function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.cartBg}></div>

      <div className={styles.cartModal}>
        <h3 className={styles.cartTitle}>Ваш заказ</h3>
        <button className={styles.cartCloseBtn}><IoClose /></button>

        <ul className={styles.cartList}>
          <li className={styles.cartItem}>

            <div className={styles.cartItemImage}>
              <div className={styles.cartItemImageIcon}>
                <Image src={`/assets/icons/type/${'meat'}.svg`} fill={true} alt="icon" />
              </div>
              <div className={styles.cartItemImageSizeL}>
                <svg viewBox="0 0 202 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="2" />
                </svg>
              </div>
              <div className={styles.cartItemImageSizeM}>
                <svg viewBox="0 0 202 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="2" />
                </svg>
              </div>
              <div className={styles.cartItemImageSizeS}>
                <svg viewBox="0 0 202 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="2" />
                </svg>
              </div>
              <div className={styles.cartItemImagePizza}>
                <Image src="/assets/images/pizzas/01.png" fill={true} alt="pizza" />
              </div>
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

          {/* ============================================================================= */}
          <li className={styles.cartItem}>

            <div className={styles.cartItemImage}>
              <div className={styles.cartItemImageIcon}>
                <Image src={`/assets/icons/type/${'meat'}.svg`} fill={true} alt="icon" />
              </div>
              <div className={styles.cartItemImageSizeL}>
                <svg viewBox="0 0 202 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="2" />
                </svg>
              </div>
              <div className={styles.cartItemImageSizeM}>
                <svg viewBox="0 0 202 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="2" />
                </svg>
              </div>
              <div className={styles.cartItemImageSizeS}>
                <svg viewBox="0 0 202 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="101" cy="101" r="100" stroke="#DCDFE2" stroke-dasharray="2" />
                </svg>
              </div>
              <div className={styles.cartItemImagePizza}>
                <Image src="/assets/images/pizzas/01.png" fill={true} alt="pizza" />
              </div>
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

          {/* ============================================================================= */}

        </ul>

        <div className={styles.cartTotal}>
          <span className={styles.cartTotalText}>Сумма заказа :</span>
          <span className={styles.cartTotalSum}>{'1 887' + ' руб'}</span>
        </div>

        <form className={styles.form}>
          <p className={styles.formTitle}>Контакты</p>
          <div className={styles.formTwoInputs}>
            <div className={styles.formWrap}>
              <input className={styles.formWrapInput}></input>
              <label className={styles.formWrapLable}>Ваше имя</label>
            </div>
            <div className={styles.formWrap}>
              <input className={styles.formWrapInput}></input>
              <label className={styles.formWrapLable}>Телефон</label>
            </div>
          </div>

          <div className={styles.formWrap}>
            <input className={styles.formWrapInput}></input>
            <label className={styles.formWrapLable}>Адрес доставки</label>
          </div>

          <div className={styles.formPay}>
            <p className={styles.formTitle}>Способ оплаты</p>

            <div className={styles.formPayWrapRadio}>
              <input className={styles.formPayRadio} type="radio" name='payment' id="paymentCash" />
              <label className={styles.formPayLabel} htmlFor="paymentCash">Оплата наличными или картой курьеру</label>
            </div>
            
            <div className={styles.formPayWrapRadio}>
              <input className={styles.formPayRadio} type="radio" name='payment' id="paymentOnline" />
              <label className={styles.formPayLabel} htmlFor="paymentOnline">Оплата картой онлайн на сайте</label>
            </div>
          </div>
          
          <button className={styles.formBuyBtn} type="submit">Оформить заказ</button>
          
          <p className={styles.formPolicy}>Нажимая кнопку «Оформить заказ» вы соглашаетесь с политикой конфиденциальности</p>
        </form>
      </div>
    </div>
  );
}