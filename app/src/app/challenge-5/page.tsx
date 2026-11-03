import type { Metadata } from "next";
import { TabsDemo } from "./TabsDemo";

export const metadata: Metadata = { title: "Challenge 5 · Tabs" };

export default function Page() {
  return (
    <>
      <h1>Accessible tabs component</h1>
      <p className="lead">Use the mouse, or Tab then ← → Home End on the tab list.</p>
      <TabsDemo />
    </>
  );
}
