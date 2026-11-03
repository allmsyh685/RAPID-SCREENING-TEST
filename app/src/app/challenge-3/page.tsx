import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbPlayground } from "./BreadcrumbPlayground";

export const metadata: Metadata = { title: "Challenge 3 · Breadcrumbs" };

export default function Page() {
  return (
    <>
      <h1>Build a safe breadcrumb trail</h1>
      <p className="lead">
        Try the live breadcrumb above on a real route:{" "}
        <Link href="/products/blue%20mug">/products/blue%20mug</Link>
      </p>
      <BreadcrumbPlayground />
    </>
  );
}
