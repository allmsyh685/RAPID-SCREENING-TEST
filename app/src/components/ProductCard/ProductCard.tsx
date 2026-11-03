"use client";

import { useId } from "react";
import type { JSX } from "react";
import { formatIDR } from "@/lib/formatIDR";
import styles from "./ProductCard.module.css";

export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  available: boolean;
};

export type ProductCardProps = {
  product: Product;
  onAdd: (productId: string) => void;
};


export function ProductCard({ product, onAdd }: ProductCardProps): JSX.Element {
  const titleId = useId();
  const { id, name, price, imageUrl, available } = product;

  return (
    <article className={styles.card} aria-labelledby={titleId} data-available={available}>
      <div className={styles.media}>
        <img
          className={styles.image}
          src={imageUrl}
          alt={name}
          width={400}
          height={300}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={styles.body}>
        <h3 id={titleId} className={styles.name}>
          {name}
        </h3>
        <p className={styles.price}>
          <data value={price}>{formatIDR(price)}</data>
        </p>

        <button
          type="button"
          className={styles.button}
          disabled={!available}
          aria-describedby={titleId}
          onClick={() => {
            if (available) onAdd(id);
          }}
        >
          {available ? "Add to cart" : "Out of stock"}
        </button>
      </div>
    </article>
  );
}
