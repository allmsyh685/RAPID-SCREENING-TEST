import Link from "next/link";

const challenges = [
  { href: "/challenge-1", title: "1. Filter, sort and paginate products", note: "searchProducts() with a live playground over 20,000 items" },
  { href: "/challenge-2", title: "2. Resolve the best matching route", note: "findRoute() with editable patterns" },
  { href: "/challenge-3", title: "3. Safe breadcrumb trail", note: "buildBreadcrumbs() + the live breadcrumb above" },
  { href: "/challenge-4", title: "4. Product card component", note: "ProductCard with IDR formatting and out-of-stock state" },
  { href: "/challenge-5", title: "5. Accessible tabs component", note: "Controlled Tabs with full keyboard support" },
];

export default function HomePage() {
  return (
    <>
      <h1>Next.js / TypeScript screening</h1>
      <p className="lead">Five challenges, one app. Pick a challenge to test it.</p>
      <ul className="challenge-list">
        {challenges.map((c) => (
          <li key={c.href}>
            <Link href={c.href}>
              <strong>{c.title}</strong>
              <span>{c.note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
