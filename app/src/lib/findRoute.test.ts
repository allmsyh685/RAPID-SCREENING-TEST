import { test } from "node:test";
import assert from "node:assert/strict";
import { findRoute } from "./findRoute";

test("examples from the spec", () => {
  assert.equal(findRoute(["/products/:id", "/about"], "/products/42"), 0);
  assert.equal(findRoute(["/products/:id"], "/products/42/reviews"), -1);
  assert.equal(findRoute(["/about"], "/about/"), 0);
});

test("returns the FIRST matching pattern", () => {
  assert.equal(findRoute(["/a/:x", "/a/b"], "/a/b"), 0);
  assert.equal(findRoute(["/a/b", "/a/:x"], "/a/b"), 0);
  assert.equal(findRoute(["/a/b", "/a/:x"], "/a/c"), 1);
});

test("no partial segment matches", () => {
  assert.equal(findRoute(["/about"], "/aboutus"), -1);
  assert.equal(findRoute(["/products/:id"], "/product/42"), -1);
});

test("dynamic segment must be non-empty and match exactly one segment", () => {
  assert.equal(findRoute(["/p/:id"], "/p/"), -1);
  assert.equal(findRoute(["/p/:id"], "/p//"), -1);
  assert.equal(findRoute(["/p/:id"], "/p"), -1);
  assert.equal(findRoute(["/p/:id"], "/p/1/2"), -1);
});

test("trailing slash is ignored on patterns and paths; root works", () => {
  assert.equal(findRoute(["/about/"], "/about"), 0);
  assert.equal(findRoute(["/"], "/"), 0);
  assert.equal(findRoute(["/about"], "/"), -1);
});

test("only ONE trailing slash is ignored", () => {
  assert.equal(findRoute(["/about"], "/about//"), -1);
});

test("empty pattern list returns -1", () => {
  assert.equal(findRoute([], "/x"), -1);
});

test("scales to 10,000 patterns", () => {
  const patterns = Array.from({ length: 10_000 }, (_, i) => `/r${i}/:id/x`);
  assert.equal(findRoute(patterns, "/r9999/42/x"), 9999);
});
