"use client";

import { useId, useMemo, useState } from "react";
import { searchProducts, type Product } from "@/lib/searchProducts";

const WORDS = ["Apple", "apricot", "Pear", "banana", "Mango", "Papaya", "grape", "Cherry", "Melon", "Lime"];
const DATA: Product[] = Array.from({ length: 20_000 }, (_, i) => ({
  id: i + 1,
  name: `${WORDS[i % WORDS.length]} ${(i * 7919) % 20_000}`,
}));

export function SearchPlayground() {
  const [query, setQuery] = useState("ap");
  const [pageInput, setPageInput] = useState("1");
  const [pageSizeInput, setPageSizeInput] = useState("10");
  const ids = { q: useId(), p: useId(), s: useId() };

  const page = pageInput.trim() === "" ? 1 : Number(pageInput);
  const pageSize = pageSizeInput.trim() === "" ? 0 : Number(pageSizeInput);

  const results = useMemo(() => searchProducts(DATA, query, page, pageSize), [query, page, pageSize]);

  return (
    <section className="panel-box" aria-label="Search playground">
      <div className="row">
        <label className="field" htmlFor={ids.q}>
          Query
          <input id={ids.q} value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <label className="field" htmlFor={ids.p}>
          Page
          <input id={ids.p} type="number" value={pageInput} onChange={(e) => setPageInput(e.target.value)} />
        </label>
        <label className="field" htmlFor={ids.s}>
          Page size
          <input id={ids.s} type="number" value={pageSizeInput} onChange={(e) => setPageSizeInput(e.target.value)} />
        </label>
      </div>
      <p aria-live="polite">
        <span className={`badge ${results.length ? "ok" : "no"}`}>{results.length} result(s)</span>
      </p>
      <pre className="out" tabIndex={0} aria-label="Results as JSON">
        {JSON.stringify(results, null, 2)}
      </pre>
    </section>
  );
}
