import type { Metadata } from "next";
import { RoutePlayground } from "./RoutePlayground";

export const metadata: Metadata = { title: "Challenge 2 · Route matching" };

export default function Page() {
  return (
    <>
      <h1>Resolve the best matching route</h1>
      <p className="lead">One pattern per line. The first matching pattern wins.</p>
      <RoutePlayground />
    </>
  );
}
