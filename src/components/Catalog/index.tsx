// "use client";

import { clsx } from 'clsx';
import Image from 'next/image';

import styles from './styles.module.scss';
import CatalogCard from "../CatalogCard";
import AllIcon from '../../../public/assets/icons/type/all.svg';
import CheeseIcon from '../../../public/assets/icons/type/cheese.svg';
import HotIcon from '../../../public/assets/icons/type/hot.svg';
import MeatIcon from '../../../public/assets/icons/type/meat.svg';
import VeganIcon from '../../../public/assets/icons/type/vegetarian.svg';

import { pizzas } from '../../data/pizzas';




export default function Catalog() {
  return (
    <div className="container">
      <section className={styles.catalog}>
        <h2 className={styles.catalogTitle}>Выберите пиццу</h2>
        <ul className={styles.catalogCategory}>
          <li className={clsx(styles.catalogCategoryItem, styles.active)}>
            <div className={styles.catalogCategoryItemIcon}>
              <AllIcon />
            </div>
            <div className={styles.catalogCategoryItemText}>Все</div>
          </li>
          <li className={styles.catalogCategoryItem}>
            <div className={styles.catalogCategoryItemIcon}>
              <HotIcon />
            </div>
            <div className={styles.catalogCategoryItemText}>Острые</div>
          </li>
          <li className={styles.catalogCategoryItem}>
            <div className={styles.catalogCategoryItemIcon}>
              <MeatIcon />
            </div>
            <div className={styles.catalogCategoryItemText}>Мясные</div>
          </li>
          <li className={styles.catalogCategoryItem}>
            <div className={styles.catalogCategoryItemIcon}>
              <CheeseIcon />
            </div>
            <div className={styles.catalogCategoryItemText}>Сырные</div>
          </li>
          <li className={styles.catalogCategoryItem}>
            <div className={styles.catalogCategoryItemIcon}>
              <VeganIcon />
            </div>
            <div className={styles.catalogCategoryItemText}>Веганские</div>
          </li>
        </ul>
        <div className={styles.catalogGrid}>

          {pizzas.map((item) => (
            <CatalogCard {...item} key={item.id} />
          ))}

        </div>
      </section>
    </div>
  );
}