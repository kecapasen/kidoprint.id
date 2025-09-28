<div align="center">

# 🎨 KidoPrint Monorepo

**Modern Printing Website — powered by Next.js, NestJS & Turborepo**

![GitHub Repo stars](https://img.shields.io/github/stars/kecapasen/kido-print?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/kecapasen/kido-print?style=for-the-badge)
![License](https://img.shields.io/badge/license-Private-red?style=for-the-badge)

</div>

---

## 🧩 Tentang Proyek

**KidoPrint** adalah website percetakan digital dengan tampilan **casual-aesthetic** yang menonjolkan identitas brand modern, ramah, dan profesional.  
Dibangun dengan **arsitektur monorepo** menggunakan **Turborepo**, proyek ini memadukan kekuatan **Next.js (Frontend)** dan **NestJS (Backend)** agar proses pengembangan tetap efisien, scalable, dan mudah dikelola.

---

## 🚀 Tech Stack

**Frontend**

- ⚛️ [Next.js 14 (App Router)](https://nextjs.org/)
- 💨 [Tailwind CSS](https://tailwindcss.com/)
- 🧱 [shadcn/ui](https://ui.shadcn.com/)
- 🧑‍💻 TypeScript

**Backend**

- 🧩 [NestJS](https://nestjs.com/)
- 🔐 Class Validator & Transformer (DTO System)
- 🗄️ [Prisma ORM](https://www.prisma.io/)
- 🐬 MySQL Database

**Build System**

- 🌀 [Turborepo](https://turbo.build/repo)
- 🧰 [pnpm workspace](https://pnpm.io/)

---

## 📁 Struktur Direktori

````bash
kido-print/
├── apps/
│   ├── web/            # Frontend (Next.js)
│   └── server/         # Backend (NestJS)
├── packages/            # Shared libraries (optional)
├── turbo.json
├── package.json
└── README.md

⚙️ Cara Menjalankan Proyek
1. Clone Repository
git clone https://github.com/kecapasen/kido-print.git
cd kido-print

2. Install Dependencies
pnpm install

3. Jalankan Server Development

Frontend (Next.js):

pnpm --filter web dev


Backend (NestJS):

pnpm --filter server start:dev


Atau sekalian jalanin dua-duanya:

pnpm dev

🧰 Scripts yang Tersedia
Command	Deskripsi
pnpm dev	Menjalankan seluruh aplikasi (web + server) secara bersamaan
pnpm build	Build seluruh aplikasi
pnpm lint	Mengecek kualitas kode
pnpm format	Memformat kode dengan Prettier
pnpm --filter web dev	Menjalankan hanya frontend
pnpm --filter server start:dev	Menjalankan hanya backend
🌐 URL Default
Aplikasi	URL
Frontend (Next.js)	http://localhost:3000

Backend (NestJS)	http://localhost:5000
💡 Tujuan Pengembangan

🔹 Membangun arsitektur yang scalable antara frontend dan backend.

🔹 Menggunakan Turborepo untuk workflow pengembangan yang cepat dan modular.

🔹 Menjaga standar clean code, reusability, dan maintainability.

🔹 Menghadirkan UI casual-aesthetic yang nyaman dilihat dan mudah digunakan.

🧑‍💻 Kontributor
Nama	Peran	Teknologi
Rizky Maulana	Fullstack Web Developer	Next.js, Tailwind, shadcn/ui, NestJS, Prisma, MySQL
📸 Preview (Coming Soon)

Halaman “Tentang Kami” (Casual Aesthetic Style)
(Foto tim akan ditambahkan setelah proses design final selesai)

🧠 Catatan Pribadi

Proyek ini dikembangkan sebagai latihan penerapan arsitektur monorepo (Turborepo) dengan kombinasi Next.js & NestJS.

Fokus utama pengembangan adalah membangun struktur kode yang rapi, efisien, dan mudah dikembangkan untuk project skala menengah ke atas.

📜 Lisensi

Proyek ini bersifat pribadi dan digunakan untuk keperluan pembelajaran, latihan pengembangan, serta portfolio pribadi.
Tidak untuk distribusi komersial tanpa izin tertulis.

<div align="center"> <sub>💡 Dibangun dengan semangat oleh <b>Rizky Maulana</b> — 2025</sub><br/> <sub>“Code. Learn. Build. Repeat.”</sub> </div> ```
````
