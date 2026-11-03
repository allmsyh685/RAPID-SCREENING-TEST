"use client";

import { useState } from "react";
import { Tabs, type TabItem } from "@/components/Tabs/Tabs";

const TABS: TabItem[] = [
  { id: "description", label: "Description", content: <p>A sturdy ceramic mug that keeps drinks warm.</p> },
  { id: "reviews", label: "Reviews", content: <p>★★★★★ “Best mug I have owned.” — 128 reviews.</p> },
  { id: "shipping", label: "Shipping", content: <p>Ships within 2 business days across Indonesia.</p> },
];

export function TabsDemo() {
  const [activeId, setActiveId] = useState("reviews");
  return (
    <section className="panel-box">
      <Tabs tabs={TABS} activeId={activeId} onChange={setActiveId} ariaLabel="Product information" />
      <p className="lead" aria-live="polite">Active tab id: <code>{activeId}</code></p>
    </section>
  );
}
