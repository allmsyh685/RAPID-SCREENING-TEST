"use client";

import { useId, useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";
import { buildBreadcrumbs } from "@/lib/buildBreadcrumbs";

export function BreadcrumbPlayground() {
  const [pathname, setPathname] = useState("/products/blue%20mug");
  const [labelsText, setLabelsText] = useState('{ "products": "Shop" }');
  const ids = { a: useId(), b: useId() };

  let labels: Record<string, string> = {};
  let error: string | null = null;
  try {
    const parsed: unknown = JSON.parse(labelsText);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      labels = parsed as Record<string, string>;
    } else {
      error = "Labels must be a JSON object.";
    }
  } catch {
    error = "Labels is not valid JSON.";
  }

  return (
    <section className="panel-box" aria-label="Breadcrumb playground">
      <div className="row">
        <label className="field" htmlFor={ids.a}>
          Pathname
          <input id={ids.a} value={pathname} onChange={(e) => setPathname(e.target.value)} />
        </label>
        <label className="field" htmlFor={ids.b}>
          Labels (JSON)
          <textarea id={ids.b} rows={3} value={labelsText} onChange={(e) => setLabelsText(e.target.value)} />
        </label>
      </div>
      {error && <p role="alert" className="badge no">{error}</p>}
      <div style={{ marginTop: "1rem" }}>
        <Breadcrumbs pathname={pathname} labels={labels} />
      </div>
      <pre className="out" tabIndex={0} aria-label="Breadcrumbs as JSON">
        {JSON.stringify(buildBreadcrumbs(pathname, labels), null, 2)}
      </pre>
    </section>
  );
}
