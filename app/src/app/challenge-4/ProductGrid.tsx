"use client";

import { useState } from "react";
import { ProductCard, type Product } from "@/components/ProductCard/ProductCard";

/** Inline SVG placeholder so the demo needs no network or remote image config. */
const img = (color: string, label: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="${color}"/><text x="200" y="165" font-size="44" text-anchor="middle" fill="#fff" font-family="sans-serif">${label}</text></svg>`,
  )}`;

const PRODUCTS: Product[] = [
  { id: "p1", name: "Blue Ceramic Mug", price: 12500, imageUrl: img("#2f5bea", "Mug"), available: true },
  { id: "p2", name: "Handmade Coffee Beans 250g", price: 89000, imageUrl: img("#7c4a21", "Coffee"), available: true },
  { id: "p3", name: "Limited Edition Tote Bag", price: 1250000, imageUrl: img("#0d9488", "Tote"), available: false },
];

export function ProductGrid() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const total = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <>
      <p aria-live="polite" className="panel-box">
        Items in cart: <strong>{total}</strong>
        {total > 0 && (
          <> · last: <code>{JSON.stringify(cart)}</code></>
        )}
      </p>
      <ul className="grid">
        {PRODUCTS.map((p) => (
          <li key={p.id}>
            <ProductCard
              product={p}
              onAdd={(id) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }))}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
