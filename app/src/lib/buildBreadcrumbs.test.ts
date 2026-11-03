import { test } from "node:test";
import assert from "node:assert/strict";
import { buildBreadcrumbs } from "./buildBreadcrumbs";

test("example 1", () => {
  assert.deepEqual(buildBreadcrumbs("/products/blue%20mug", { products: "Shop" }), [
    { label: "Shop", href: "/products" },
    { label: "blue mug", href: "/products/blue%20mug" },
  ]);
});

test("example 2: root has no breadcrumbs", () => {
  assert.deepEqual(buildBreadcrumbs("/", {}), []);
});

test("trailing and duplicate slashes are ignored", () => {
  assert.deepEqual(buildBreadcrumbs("/a//b/", {}), [
    { label: "a", href: "/a" },
    { label: "b", href: "/a/b" },
  ]);
});

test("hyphens become spaces only for unmapped segments", () => {
  assert.deepEqual(buildBreadcrumbs("/my-account/order-history", { "my-account": "Account" }), [
    { label: "Account", href: "/my-account" },
    { label: "order history", href: "/my-account/order-history" },
  ]);
});

test("labels are keyed by the DECODED segment", () => {
  assert.deepEqual(buildBreadcrumbs("/blue%20mug", { "blue mug": "Mug" }), [
    { label: "Mug", href: "/blue%20mug" },
  ]);
});

test("hrefs are encoded prefixes (unicode, reserved chars)", () => {
  const out = buildBreadcrumbs("/kategori/kopi%20%26%20teh/caf%C3%A9", {});
  assert.deepEqual(out.map((c) => c.href), [
    "/kategori",
    "/kategori/kopi%20%26%20teh",
    "/kategori/kopi%20%26%20teh/caf%C3%A9",
  ]);
  assert.equal(out[1]?.label, "kopi & teh");
  assert.equal(out[2]?.label, "café");
});

test("malformed percent-encoding does not throw", () => {
  const out = buildBreadcrumbs("/bad%E0%A4%A", {});
  assert.equal(out.length, 1);
  assert.equal(out[0]?.label, "bad%E0%A4%A");
});

test("prototype keys are not treated as labels", () => {
  const out = buildBreadcrumbs("/constructor/__proto__", {});
  assert.deepEqual(out.map((c) => c.label), ["constructor", "__proto__"]);
});
