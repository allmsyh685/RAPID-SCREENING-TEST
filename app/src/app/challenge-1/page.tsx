import type { Metadata } from "next";
import { SearchPlayground } from "./SearchPlayground";

export const metadata: Metadata = { title: "Challenge 1 · Search products" };

export default function Page() {
  return (
    <>
      <h1>Filter, sort and paginate products</h1>
      <p className="lead">Dataset: 20,000 generated products. Try query “ap”, page 0, page size 0.</p>
      <SearchPlayground />
    </>
  );
}
