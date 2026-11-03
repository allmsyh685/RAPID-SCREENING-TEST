import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteBreadcrumbs } from "@/components/Breadcrumbs/SiteBreadcrumbs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Screening Assessment",
  description: "Five coding challenges implemented with Next.js App Router and TypeScript.",
};

const links = [
  { href: "/challenge-1", label: "1. Search products" },
  { href: "/challenge-2", label: "2. Route matching" },
  { href: "/challenge-3", label: "3. Breadcrumbs" },
  { href: "/challenge-4", label: "4. Product card" },
  { href: "/challenge-5", label: "5. Tabs" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
              <Link href="/" className="brand-link">
                Next.js Screening Assessment
              </Link>
              <nav aria-label="Challenges">
                <ul className="site-nav">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
          </div>
        </header>
        <main className="container">
          <SiteBreadcrumbs />
          {children}
        </main>
      </body>
    </html>
  );
}
