# Next.js / TypeScript Screening Assessment

Repositori ini berisi solusi lengkap untuk **Next.js / TypeScript Mid-Level Framework & Component Coding Assessment** (5 Coding Challenges · 100 Poin) menggunakan **Next.js 15 (App Router)**, **React 19**, dan **TypeScript (Strict Mode)**.

---

## Struktur Proyek

```text
nextjs-screening-assessment-project/
├── README.md                                    # Dokumentasi utama repositori
├── nextjs-screening-assessment (1) (1).docx     # Dokumen soal assessment
├── nextjs-screening-assessment-solution.pdf     # Dokumen laporan solusi lengkap
└── app/                                         # Aplikasi utama Next.js (App Router)
    ├── package.json
    ├── tsconfig.json
    ├── next.config.ts
    └── src/
        ├── lib/                                 # Pure functions & unit tests (node:test)
        │   ├── searchProducts.ts                # Challenge 1: Filter, Sort, and Paginate Products
        │   ├── searchProducts.test.ts
        │   ├── findRoute.ts                     # Challenge 2: Resolve the Best Matching Route
        │   ├── findRoute.test.ts
        │   ├── buildBreadcrumbs.ts              # Challenge 3: Build a Safe Breadcrumb Trail
        │   ├── buildBreadcrumbs.test.ts
        │   ├── formatIDR.ts                     # Challenge 4 Helper: Format Rupiah (IDR)
        │   └── formatIDR.test.ts
        ├── components/                          # Reusable UI Components + CSS Modules
        │   ├── Breadcrumbs/                     # Challenge 3 UI Component (<Breadcrumbs />)
        │   ├── ProductCard/                     # Challenge 4 UI Component (<ProductCard />)
        │   └── Tabs/                            # Challenge 5 UI Component (<Tabs />)
        └── app/                                 # Next.js App Router Pages & Playgrounds
            ├── layout.tsx
            ├── page.tsx                         # Halaman utama daftar 5 challenge
            ├── challenge-1/                     # UI Playground Challenge 1
            ├── challenge-2/                     # UI Playground Challenge 2
            ├── challenge-3/                     # UI Playground Challenge 3
            ├── challenge-4/                     # UI Playground Challenge 4
            ├── challenge-5/                     # UI Playground Challenge 5
            └── products/                        # Rute demo nyata untuk menguji Breadcrumbs
```

---

## Prasyarat (Prerequisites)

Pastikan perangkat Anda telah terinstal:
- **Node.js** versi `>= 20.x` (direkomendasikan `v22.x` LTS)
- **npm** versi `>= 10.x`
- **Git**

---

## Cara Clone dan Instalasi

1. **Clone repositori ini ke komputer Anda:**
   ```bash
   git clone <URL_REPOSITORY_ANDA>
   cd nextjs-screening-assessment-project
   ```

2. **Masuk ke direktori aplikasi (`app`) dan instal dependensi:**
   > **Penting:** File `package.json` berada di dalam subfolder `app/`. Pastikan Anda masuk ke folder `app` terlebih dahulu sebelum menjalankan perintah `npm`.
   ```bash
   cd app
   npm install
   ```

---

## Cara Menjalankan Aplikasi (Development & Production)

Pastikan terminal Anda berada di dalam direktori `app/`:

### 1. Menjalankan Development Server
```bash
npm run dev
```
Buka browser dan akses **[http://localhost:3000](http://localhost:3000)**.

### 2. Menjalankan Production Build
Untuk memverifikasi bahwa seluruh halaman dan komponen berhasil di-*build* untuk *production*:
```bash
npm run build
npm start
```

---

## Cara Melakukan Testing & Verifikasi

Pastikan terminal Anda berada di dalam direktori `app/`:

### 1. Menjalankan Unit Tests Otomatis (`node:test`)
Proyek ini dilengkapi **26 automated unit tests** yang menguji seluruh spesifikasi contoh soal, *edge cases*, imutabilitas input, keamanan URL, serta performa skala besar (100.000 produk & 10.000 *route patterns*):
```bash
npm test
```

### 2. Menjalankan TypeScript Typecheck (`strict` mode)
Untuk memastikan tidak ada *error* tipe data di seluruh kode:
```bash
npm run typecheck
```

---

## Panduan Pengujian Interaktif Melalui UI Browser

Setelah menjalankan `npm run dev`, Anda dapat menguji kelima *challenge* secara langsung melalui antarmuka web di **[http://localhost:3000](http://localhost:3000)**:

| Rute URL | Challenge | Apa yang Bisa Diuji di UI |
| :--- | :--- | :--- |
| **`/challenge-1`** | **1. Filter, Sort, and Paginate Products** | Menguji pencarian *case-insensitive*, pengurutan A–Z, dan paginasi pada 20.000 data produk. Coba masukkan `page = 0` atau `-5` (otomatis dianggap halaman `1`), serta `pageSize = 0` (menghasilkan `[]`). |
| **`/challenge-2`** | **2. Resolve the Best Matching Route** | Menguji pencocokan daftar pola rute (satu pola per baris) terhadap `pathname`. Mendukung parameter dinamis `:id`, mengabaikan satu *trailing slash*, dan menolak *partial match*. |
| **`/challenge-3`** | **3. Build a Safe Breadcrumb Trail** | Menguji pembuatan *breadcrumb* dari `pathname` dan pemetaan `Labels (JSON)` lengkap dengan *live preview* komponen `<Breadcrumbs />`, output JSON, serta rute demo nyata di **`/products/blue%20mug`** dan **`/products/red-tea-pot`**. |
| **`/challenge-4`** | **4. Build a Product Card Component** | Menguji komponen `<ProductCard />` yang responsif dengan format harga Rupiah (`Rp 12.500`), simulasi klik tombol **"Add to cart"** (`onAdd`), serta tampilan tombol **"Out of stock"** yang *disabled* saat stok habis. |
| **`/challenge-5`** | **5. Build an Accessible Tabs Component** | Menguji komponen `<Tabs />` terkontrol (*controlled component*) dengan atribut WAI-ARIA lengkap. Klik tab menggunakan *mouse* atau tekan tombol `Tab` lalu gunakan panah keyboard **`←`**, **`→`**, **`Home`**, dan **`End`**. |

