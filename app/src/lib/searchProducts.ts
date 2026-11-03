export type Product = { id: number; name: string };

/**
 * Filter products by name (case-insensitive substring), sort the matches by
 * name (case-insensitive, ascending) and return the requested 1-based page.
 *
 * - Pure: the input array and its items are never mutated.
 * - page < 1 (or not a finite number) is treated as 1.
 * - pageSize < 1 (or not a finite number) returns [].
 * - Complexity: O(n) filter + O(m log m) sort (m = matches), so O(n log n).
 *   Lower-cased keys are computed once per item instead of inside the
 *   comparator, which keeps the sort fast for 100,000 items.
 * - Sort is stable (ES2019), so equal names keep their original order.
 */
export function searchProducts(
  products: Product[],
  query: string,
  page: number,
  pageSize: number,
): Product[] {
  if (!Number.isFinite(pageSize) || pageSize < 1) return [];

  const size = Math.floor(pageSize);
  const safePage = Number.isFinite(page) ? Math.max(1, Math.floor(page)) : 1;
  const needle = query.toLowerCase();

  const matches: { key: string; product: Product }[] = [];
  for (const product of products) {
    const key = product.name.toLowerCase();
    if (key.includes(needle)) matches.push({ key, product });
  }

  matches.sort((a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : 0));

  const start = (safePage - 1) * size;
  return matches.slice(start, start + size).map((m) => m.product);
}
