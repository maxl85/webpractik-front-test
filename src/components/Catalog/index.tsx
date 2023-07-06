import Link from "next/link";
import Image from "next/image";

import styles from './styles.module.scss';

import { pizzas } from '../../data/pizzas';
import CatalogCard from "../CatalogCard";

export default function Catalog() {
  return (
    <div className="container">
      <section className={styles.catalog}>
        {pizzas.map((item) => (
          <CatalogCard key={item.id} />
        ))}
      </section>
    </div>
  );
}