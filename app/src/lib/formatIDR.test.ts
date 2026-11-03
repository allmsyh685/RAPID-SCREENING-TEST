import { test } from "node:test";
import assert from "node:assert/strict";
import { formatIDR } from "./formatIDR";

test("formats IDR with dot thousands separator", () => {
  assert.equal(formatIDR(12500), "Rp 12.500");
  assert.equal(formatIDR(0), "Rp 0");
  assert.equal(formatIDR(999), "Rp 999");
  assert.equal(formatIDR(1234567), "Rp 1.234.567");
});

test("rounds to whole rupiah and handles edge values", () => {
  assert.equal(formatIDR(12500.6), "Rp 12.501");
  assert.equal(formatIDR(-1500), "-Rp 1.500");
  assert.equal(formatIDR(Number.NaN), "Rp -");
});
