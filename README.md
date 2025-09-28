<div align="center">

# 🧩 KidoPrint Monorepo

**Edukasi Digital Interaktif untuk Anak — powered by Next.js, NestJS & Turborepo**

![GitHub Repo stars](https://img.shields.io/github/stars/kecapasen/kidoprint.id?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/kecapasen/kidoprint.id?style=for-the-badge)
![License](https://img.shields.io/badge/license-Private-red?style=for-the-badge)

</div>

---

## 🎯 Tentang Proyek

**KidoPrint** adalah platform edukasi digital interaktif yang berfokus pada penjualan dan penyediaan **worksheet belajar anak-anak**.  
Website ini dirancang dengan tampilan **casual-aesthetic**, menghadirkan suasana yang **ceria, hangat, dan menyenangkan** bagi anak serta **mudah digunakan oleh orang tua**.

Proyek ini dibangun menggunakan **arsitektur monorepo** berbasis **Turborepo**, yang menggabungkan kekuatan **Next.js (Frontend)** dan **NestJS (Backend)** untuk menciptakan sistem yang efisien, terstruktur, dan scalable.

---

## 🚀 Tech Stack

**Frontend:**

- ⚡ [Next.js 15](https://nextjs.org/) — React Framework dengan dukungan SSR & SSG
- 🎨 [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- 🧱 [shadcn/ui](https://ui.shadcn.com/) — Komponen UI modern berbasis Radix
- 💡 [TypeScript](https://www.typescriptlang.org/) — Ketik yang aman, kode lebih bersih dan scalable
- 🧩 [Lucide Icons](https://lucide.dev/icons/) — Ikon elegan dan ringan untuk UI

**Backend:**

- 🧩 [NestJS](https://nestjs.com/) — Framework Node.js modular dan scalable
- 💾 [Prisma ORM](https://www.prisma.io/) — Database access modern
- 🐬 [MySQL](https://www.mysql.com/) — Database utama untuk penyimpanan data

**Workspace:**

- 🌀 [Turborepo](https://turbo.build/repo) — Monorepo build system untuk mengatur frontend & backend
- 🧰 Eslint + Prettier — Linting & code formatting
- 🔄 Git & GitHub — Version control & kolaborasi

---

## 📁 Struktur Folder

```bash
kido-print/
│
├── apps/
│ ├── web/ # Frontend (Next.js)
│ └── api/ # Backend (NestJS)
│
├── packages/ # Shared utils, config, atau komponen
│
├── turbo.json # Konfigurasi Turborepo
├── package.json
└── README.md
```

---

## ⚙️ Cara Menjalankan Project

### 1️⃣ Clone Repository

```bash
git clone https://github.com/kecapasen/kido-print.git
cd kido-print
```

### 2️⃣ Install Dependencies

```bash
pnpm install
```

### 3️⃣ Jalankan Server Development

Frontend (Next.js):

```bash
pnpm --filter web dev
```

Backend (NestJS):

```bash
pnpm --filter server start:dev
```

Atau jalankan keduanya sekaligus:

```bash
pnpm dev
```

🧰 **Scripts yang Tersedia**

| Command                          | Deskripsi                                   |
| -------------------------------- | ------------------------------------------- |
| `pnpm dev`                       | Menjalankan seluruh aplikasi (web + server) |
| `pnpm build`                     | Build seluruh aplikasi                      |
| `pnpm lint`                      | Mengecek kualitas kode                      |
| `pnpm format`                    | Memformat kode dengan Prettier              |
| `pnpm --filter web dev`          | Menjalankan hanya frontend                  |
| `pnpm --filter server start:dev` | Menjalankan hanya backend                   |

---

🌐 **URL Default**

| Aplikasi           | URL                                            |
| ------------------ | ---------------------------------------------- |
| Frontend (Next.js) | [http://localhost:3000](http://localhost:3000) |
| Backend (NestJS)   | [http://localhost:5000](http://localhost:5000) |

---

💡 **Tujuan Pengembangan**

🧠 Membangun platform edukasi anak yang interaktif dan mudah digunakan  
🧩 Mengintegrasikan Next.js & NestJS dalam satu monorepo (Turborepo)  
💼 Menjaga standar clean code, modularitas, dan skalabilitas  
🎨 Menciptakan pengalaman belajar yang seru dengan desain casual-aesthetic

---

👨‍💻 **Kontributor**

| Nama              | Peran                   | Teknologi                                           |
| ----------------- | ----------------------- | --------------------------------------------------- |
| **Rizky Maulana** | Fullstack Web Developer | Next.js, Tailwind, shadcn/ui, NestJS, Prisma, MySQL |

---

🧠 **Catatan Pribadi**

Proyek ini dikembangkan sebagai latihan penerapan arsitektur monorepo dengan kombinasi **Next.js** & **NestJS**.  
Fokus utama pengembangan adalah membangun **sistem edukasi digital yang ramah anak**, efisien, dan berorientasi pada **pengalaman belajar yang menyenangkan**.

---

📜 **Lisensi**

Proyek ini bersifat **pribadi** dan digunakan untuk keperluan **pembelajaran**, **eksplorasi arsitektur monorepo**, serta **pengembangan portfolio pribadi**.  
Tidak untuk distribusi komersial tanpa izin tertulis.

---

<div align="center">
  <sub>💡 Dibangun dengan semangat oleh <b>Rizky Maulana</b> — 2025</sub><br/>
  <sub>“Code. Learn. Build. Repeat.”</sub>
</div>
