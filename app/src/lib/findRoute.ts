/** Split an absolute path into segments, ignoring ONE trailing slash. */
function toSegments(path: string): string[] {
  let p = path;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  if (p.startsWith("/")) p = p.slice(1);
  return p === "" ? [] : p.split("/");
}

/**
 * Return the index of the first pattern that matches `pathname`, or -1.
 *
 * - `:name` matches exactly one NON-EMPTY segment; other segments are literal
 *   and must match the whole segment (no partial matches).
 * - A match must consume every segment of the path.
 * - One trailing slash is ignored on both the pattern and the path.
 * - The path is split once; each pattern is rejected early when its segment
 *   count differs, so the cost is O(P * S) in the worst case.
 */
export function findRoute(patterns: string[], pathname: string): number {
  const segments = toSegments(pathname);

  for (let i = 0; i < patterns.length; i++) {
    const pattern = toSegments(patterns[i] ?? "");
    if (pattern.length !== segments.length) continue;

    let matched = true;
    for (let j = 0; j < pattern.length; j++) {
      const p = pattern[j] as string;
      const s = segments[j] as string;
      const ok = p.startsWith(":") ? s !== "" : p === s;
      if (!ok) {
        matched = false;
        break;
      }
    }
    if (matched) return i;
  }
  return -1;
}
