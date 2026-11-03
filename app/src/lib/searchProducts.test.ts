import { test } from "node:test";
import assert from "node:assert/strict";
import { searchProducts, type Product } from "./searchProducts";

const sample: Product[] = [
  { id: 2, name: "Pear" },
  { id: 1, name: "Apple" },
  { id: 3, name: "Apricot" },
];

test("example 1: filter, sort, paginate", () => {
  assert.deepEqual(searchProducts(sample, "ap", 1, 1), [{ id: 1, name: "Apple" }]);
  assert.deepEqual(searchProducts(sample, "ap", 2, 1), [{ id: 3, name: "Apricot" }]);
});

test("example 2: no match", () => {
  assert.deepEqual(searchProducts([{ id: 1, name: "Apple" }], "zz", 1, 10), []);
});

test("case-insensitive match and sort", () => {
  const items = [
    { id: 1, name: "banana" },
    { id: 2, name: "Apple" },
    { id: 3, name: "cherry" },
    { id: 4, name: "APRICOT" },
  ];
  assert.deepEqual(searchProducts(items, "A", 1, 10).map((p) => p.id), [2, 4, 1]);
});

test("page < 1 behaves as page 1; pageSize < 1 returns []", () => {
  assert.deepEqual(searchProducts(sample, "ap", 0, 1), searchProducts(sample, "ap", 1, 1));
  assert.deepEqual(searchProducts(sample, "ap", -5, 1), searchProducts(sample, "ap", 1, 1));
  assert.deepEqual(searchProducts(sample, "ap", 1, 0), []);
  assert.deepEqual(searchProducts(sample, "ap", 1, -3), []);
});

test("page beyond the last returns []", () => {
  assert.deepEqual(searchProducts(sample, "ap", 9, 10), []);
});

test("empty query matches everything; empty input returns []", () => {
  assert.equal(searchProducts(sample, "", 1, 10).length, 3);
  assert.deepEqual(searchProducts([], "a", 1, 10), []);
});

test("does not mutate the input", () => {
  const input = structuredClone(sample);
  const snapshot = structuredClone(sample);
  searchProducts(input, "", 1, 10);
  assert.deepEqual(input, snapshot);
});

test("handles 100,000 products quickly", () => {
  const big = Array.from({ length: 100_000 }, (_, i) => ({
    id: i,
    name: `Item-${(i * 7919) % 100_000}`,
  }));
  const t = performance.now();
  const out = searchProducts(big, "item", 3, 20);
  const ms = performance.now() - t;
  assert.equal(out.length, 20);
  assert.ok(ms < 1500, `took ${ms}ms`);
});
