"use client";

import type { JSX } from "react";
import { usePathname } from "next/navigation";
import { Breadcrumbs } from "./Breadcrumbs";

const LABELS: Record<string, string> = {
  products: "Shop",
  "challenge-1": "Challenge 1 · Search products",
  "challenge-2": "Challenge 2 · Route matching",
  "challenge-3": "Challenge 3 · Breadcrumbs",
  "challenge-4": "Challenge 4 · Product card",
  "challenge-5": "Challenge 5 · Tabs",
};

/** Live breadcrumb for the whole app, driven by the real URL. */
export function SiteBreadcrumbs(): JSX.Element | null {
  const pathname = usePathname();
  return <Breadcrumbs pathname={pathname} labels={LABELS} />;
}
