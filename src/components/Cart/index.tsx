'use client'

import { clsx } from 'clsx';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import { BiSolidPlusCircle, BiSolidMinusCircle } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import { showCart, removeItem, incCount, decCount } from '@/redux/cart/cartSlice';
import { selectCartVisible, selectCart } from '@/redux/cart/selectors';
import SizeIcon from '../../../public/assets/icons/size.svg';


interface CartForm {
  name: string;
  phone: string;
  address: string;
}

export default function Cart() {
  const { register, formState: { errors }, getValues, handleSubmit } = useForm<CartForm>({
    mode: 'onBlur',
  });

  const cartVisible = useSelector(selectCartVisible);
  const { items, totalPrice } = useSelector(selectCart);
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<CartForm> = (data) => console.log(data);


  return (
    <div className={clsx(styles.cart, cartVisible && styles.visible)}>
      <div className={styles.cartBg} onClick={() => dispatch(showCart(false))}></div>

      <div className={styles.cartModal}>
        <h3 className={styles.cartTitle}>Ваш заказ</h3>
        <button className={styles.cartCloseBtn} onClick={() => dispatch(showCart(false))}><IoClose /></button>

        <ul className={styles.cartList}>
          {items.map((item, i) => (
            <li className={styles.cartItem} key={i}>
              <div className={styles.cartItemImage}>
                <div className={styles.cartItemImageWrapIcon} >
                  {item.type.map((value, i) => (
                    <div className={styles.cartItemImageIcon} key={i}>
                      <Image src={`/assets/icons/type/${value}.svg`} fill={true} alt="icon" />
                    </div>
                  ))}
                </div>

                <SizeIcon className={styles.cartItemImageSizeL} />
                <SizeIcon className={styles.cartItemImageSizeM} />

                <div className={clsx(
                  styles.cartItemImagePizza,
                  item.activeSize == 2 && styles.sizeL,
                  item.activeSize == 1 && styles.sizeM,
                  item.activeSize == 0 && styles.sizeS,
                )}>
                  <Image src={item.image} fill={true} alt="pizza" />
                </div>
              </div>

              <div className={styles.cartItemPizza}>
                <p className={styles.cartItemPizzaName}>{item.name}</p>
                <p className={styles.cartItemPizzaSize}>{`${item.size} см`}</p>
              </div>

              <div className={styles.cartItemCount}>
                <button
                  className={styles.cartItemCountBtn}
                  onClick={() => dispatch(decCount(item))}
                  disabled={item.count === 1}>
                  <BiSolidMinusCircle />
                </button>
                <input className={styles.cartItemCountInput} value={item.count} disabled></input>
                <button
                  className={styles.cartItemCountBtn}
                  onClick={() => dispatch(incCount(item))}>
                  <BiSolidPlusCircle />
                </button>
              </div>

              <p className={styles.cartItemPrice}>{`${item.price * item.count} руб`}</p>

              <button
                className={styles.cartItemDelBtn}
                onClick={() => dispatch(removeItem(item))}>
                <IoClose />
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.cartTotal}>
          <span className={styles.cartTotalText}>Сумма заказа :</span>
          <span className={styles.cartTotalSum}>{`${totalPrice} руб`}</span>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <p className={styles.formTitle}>Контакты</p>
          <div className={styles.formTwoInputs}>
            <div className={clsx(styles.formWrap, errors.name && styles.error, getValues('name') && styles.good)}>
              <input className={styles.formWrapInput}
                {...register('name', { required: true, minLength: 1 })}>
              </input>
              <label className={styles.formWrapLable}>Ваше имя</label>
            </div>
            <div className={clsx(styles.formWrap, errors.phone && styles.error, getValues('phone') && styles.good)}>
              <input className={styles.formWrapInput} {...register('phone', { required: true, minLength: 1 })}></input>
              <label className={styles.formWrapLable}>Телефон</label>
            </div>
          </div>

          <div className={clsx(styles.formWrap, errors.address && styles.error, getValues('address') && styles.good)}>
            <input className={styles.formWrapInput} {...register('address', { required: true, minLength: 1 })}></input>
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