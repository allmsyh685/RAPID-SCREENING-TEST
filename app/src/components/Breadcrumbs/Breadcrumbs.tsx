import type { JSX } from "react";
import Link from "next/link";
import { buildBreadcrumbs } from "@/lib/buildBreadcrumbs";
import styles from "./Breadcrumbs.module.css";

type BreadcrumbsProps = {
  pathname: string;
  labels: Record<string, string>;
};

/** Presentational breadcrumb <nav>; the trail itself comes from buildBreadcrumbs. */
export function Breadcrumbs({ pathname, labels }: BreadcrumbsProps): JSX.Element | null {
  const crumbs = buildBreadcrumbs(pathname, labels);
  if (crumbs.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link href="/">Home</Link>
        </li>
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={crumb.href} className={styles.item}>
              {isLast ? (
                <span aria-current="page">{crumb.label}</span>
              ) : (
                <Link href={crumb.href}>{crumb.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
