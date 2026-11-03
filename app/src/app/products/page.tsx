import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <h1>Shop</h1>
      <p className="lead">
        Open <Link href="/products/blue%20mug">blue mug</Link> or{" "}
        <Link href="/products/red-tea-pot">red-tea-pot</Link>.
      </p>
    </>
  );
}
