# Aturan & Panduan Desain Website Portfolio (DESAIN.md)

Dokumen ini memuat aturan desain, preferensi antarmuka (UI), dan batasan arsitektur visual yang **wajib dipatuhi** dalam setiap perubahan dan pengembangan website portfolio ini.

---

## 1. Aturan Badge & Komponen Dekoratif (Kritis)

- **TIDAK BOLEH ADA BOX BADGES SEPERTI "CURATED WORKS 2026"**:
  - Dilarang keras menampilkan box badge, status pill, atau kontainer kotak/kapsul dekoratif di bagian atas Hero section (seperti badge status hijau, tulisan tahun berbingkai, atau label status artifisial).
  - Area atas harus bersih, lapang, dan langsung menampilkan karya/proyek tanpa ornamen label berlebih.
- **Teks Hint & Aksi Harus Minimalis**:
  - Dilarang menggunakan instruksi panjang seperti *"Drag or Scroll to Explore"*.
  - Gunakan teks singkat dan elegan seperti **"Explore ↔"**.

---

## 2. Struktur Tata Letak Halaman Utama (Homepage)

Halaman utama (`/`) mengusung arsitektur visual Farline yang dipadukan dengan fungsionalitas engineering:
1. **3D Hanging Line Hero (`#work-hero`)**:
   - Showcase proyek utama dalam perspektif spasial 3D interaktif.
   - Tanpa box badge di area atas.
   - Dilengkapi navigasi drag mouse, touch swipe, scroll wheel, kemiringan kursor (*parallax tilt*), dan tombol navigasi.
2. **Work Index (`#work-index`)**:
   - Berisi tampilan daftar proyek dari halaman **Projects** (`ProjectList`).
   - Menampilkan judul proyek, subjudul, galeri screenshot horizontal, tag arsitektur/teknologi, dan tahun.
3. **Floating Glass Dock Navigation**:
   - Menempel mengambang di bawah layar (*bottom center*) dengan efek *glassmorphism* (`backdrop-filter: blur(20px)`).
   - Menghubungkan pintasan cepat ke `Work`, `Index` (Projects), `About`, tautan `GitHub`, dan tombol *Theme Toggle*.

---

## 3. Prinsip Estetika & Tipografi

- **Editorial & Monokrom**: Menggunakan tema gelap *Obsidian Matte* (`#09090b`) dengan garis pembatas halus (*hairline border*) `rgba(255, 255, 255, 0.08)` dan teks kontras tinggi yang mudah dibaca.
- **Hierarki Jelas Tanpa Distraksi**: Setiap elemen visual harus memiliki fungsi nyata (menampilkan karya, kode, arsitektur, atau bukti prestasi), bukan sekadar hiasan kosong.
- **Performa Terjaga**: Semua gambar diproses melalui pipeline Astro `<Image />` ke format modern WebP dengan ukuran optimal (< 50 kB) dan tanpa *Cumulative Layout Shift* (CLS).
