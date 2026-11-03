# Next.js / TypeScript Screening Assessment (`app`)

Ini adalah direktori aplikasi utama Next.js (App Router) yang mengimplementasikan kelima tantangan kode pada **Next.js / TypeScript Mid-Level Framework & Component Coding Assessment**.

---

## Cara Clone, Instalasi, dan Menjalankan

Jika Anda baru melakukan *clone* dari repositori utama:

```bash
git clone <URL_REPOSITORY_ANDA>
cd nextjs-screening-assessment-project/app
npm install
```

Jika Anda sudah berada di dalam folder `app/` ini, langsung jalankan:

```bash
# 1. Instal dependensi
npm install

# 2. Jalankan unit test (26 test cases)
npm test

# 3. Jalankan pengecekan tipe TypeScript (strict mode)
npm run typecheck

# 4. Jalankan server development di http://localhost:3000
npm run dev

# 5. (Opsional) Build untuk production
npm run build
```

---

## Daftar Script NPM (`package.json`)

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan server *development* Next.js di `http://localhost:3000` |
| `npm test` | Menjalankan seluruh *unit test* (`src/**/*.test.ts`) menggunakan `node:test` via `tsx` |
| `npm run typecheck` | Menjalankan validasi tipe TypeScript (`tsc --noEmit`) tanpa menghasilkan file output |
| `npm run build` | Mem-*build* aplikasi Next.js untuk *production* |
| `npm start` | Menjalankan server *production* setelah `npm run build` |

---

## Rute Pengujian di Browser (`http://localhost:3000`)

- **`/`** — Halaman utama berisi ringkasan dan tautan ke seluruh 5 challenge.
- **`/challenge-1`** — Playground *Filter, Sort, and Paginate Products* (`searchProducts`).
- **`/challenge-2`** — Playground *Resolve the Best Matching Route* (`findRoute`).
- **`/challenge-3`** — Playground *Build a Safe Breadcrumb Trail* (`buildBreadcrumbs` & `<Breadcrumbs />`).
- **`/challenge-4`** — Demo *Build a Product Card Component* (`<ProductCard />` & `formatIDR`).
- **`/challenge-5`** — Demo *Build an Accessible Tabs Component* (`<Tabs />` dengan navigasi keyboard WAI-ARIA).
- **`/products/blue%20mug`** & **`/products/red-tea-pot`** — Rute nyata untuk menguji *live breadcrumb* pada header halaman.

