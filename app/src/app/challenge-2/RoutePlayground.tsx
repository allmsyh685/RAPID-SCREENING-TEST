"use client";

import { useId, useState } from "react";
import { findRoute } from "@/lib/findRoute";

export function RoutePlayground() {
  const [patterns, setPatterns] = useState("/products/:id\n/about\n/users/:id/posts/:postId");
  const [pathname, setPathname] = useState("/products/42");
  const ids = { a: useId(), b: useId() };

  const list = patterns.split("\n").map((l) => l.trim()).filter(Boolean);
  const index = findRoute(list, pathname);

  return (
    <section className="panel-box" aria-label="Route matching playground">
      <div className="row">
        <label className="field" htmlFor={ids.a}>
          Patterns
          <textarea id={ids.a} rows={5} value={patterns} onChange={(e) => setPatterns(e.target.value)} />
        </label>
        <label className="field" htmlFor={ids.b}>
          Pathname
          <input id={ids.b} value={pathname} onChange={(e) => setPathname(e.target.value)} />
        </label>
      </div>
      <p aria-live="polite">
        Result: <span className={`badge ${index >= 0 ? "ok" : "no"}`}>{index}</span>{" "}
        {index >= 0 ? <code>{list[index]}</code> : "no match"}
      </p>
    </section>
  );
}
