import type { Metadata } from "next";
import { ProductGrid } from "./ProductGrid";

export const metadata: Metadata = { title: "Challenge 4 · Product card" };

export default function Page() {
  return (
    <>
      <h1>Product card component</h1>
      <p className="lead">Click “Add to cart”. The out-of-stock card has a disabled button.</p>
      <ProductGrid />
    </>
  );
}
