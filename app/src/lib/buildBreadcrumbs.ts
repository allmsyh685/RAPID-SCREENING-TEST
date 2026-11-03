export type Breadcrumb = { label: string; href: string };

/** decodeURIComponent that never throws on malformed input such as "%E0%A4%A". */
function safeDecode(segment: string): string {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

/**
 * Build breadcrumbs for every non-empty prefix of `pathname`.
 *
 * - Segments are percent-decoded safely (malformed escapes are kept literally).
 * - Label: mapped label when the decoded segment is an OWN key of `labels`
 *   (so "constructor" / "__proto__" are not mistaken for labels), otherwise
 *   the decoded segment with hyphens replaced by spaces.
 * - href: the encoded prefix, re-encoded with encodeURIComponent so it is
 *   always a valid, canonical path ("blue mug" -> "blue%20mug", "a/b" -> "a%2Fb").
 */
export function buildBreadcrumbs(
  pathname: string,
  labels: Record<string, string>,
): Breadcrumb[] {
  const crumbs: Breadcrumb[] = [];
  let href = "";

  for (const raw of pathname.split("/")) {
    if (raw === "") continue;

    const decoded = safeDecode(raw);
    href += `/${encodeURIComponent(decoded)}`;

    const label = Object.prototype.hasOwnProperty.call(labels, decoded)
      ? (labels[decoded] as string)
      : decoded.replace(/-/g, " ");

    crumbs.push({ label, href });
  }
  return crumbs;
}
