// data/portfolio.ts
// Data portofolio/kegiatan yang sudah terlaksana
// [TODO: Ganti data dummy berikut dengan data nyata dari client]

import type { PortfolioItem } from "@/types/portfolio";

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "bakti-sosial-ramadan-2024",
    title: "Bakti Sosial Ramadan 1445H",
    shortDescription:
      "Penyaluran 500 paket sembako dan buka puasa bersama bagi warga kurang mampu di bulan Ramadan 1445H.",
    fullDescription: `Bakti Sosial Ramadan 1445H merupakan program tahunan CITRA ANAK SHOLEH yang dilaksanakan pada bulan Ramadan sebagai wujud kepedulian sosial.

Tahun ini, kami berhasil menyalurkan 500 paket sembako kepada keluarga kurang mampu di sekitar lingkungan lembaga, serta menyelenggarakan buka puasa bersama bagi 200 anak yatim dan dhuafa.

**Capaian:**
- 500 paket sembako tersalurkan
- 200 anak yatim dan dhuafa mendapat buka puasa bersama
- Melibatkan 50+ relawan
- Menjangkau 5 kelurahan

[TODO: Tambahkan cerita lengkap kegiatan dari client]`,
    completedDate: "2024-04-10",
    location: "[TODO: Isi lokasi kegiatan]",
    coverImage: "/images/portfolio/baksos-ramadan-cover.jpg",
    gallery: [
      "/images/portfolio/baksos-ramadan-1.jpg",
      "/images/portfolio/baksos-ramadan-2.jpg",
    ],
    category: "sosial",
    participants: 200,
    outcomes: [
      "500 paket sembako tersalurkan",
      "200 anak yatim terlayani",
      "5 kelurahan terjangkau",
    ],
  },
  {
    slug: "wisuda-tahfidz-2024",
    title: "Wisuda Tahfidz Al-Qur'an Angkatan IV",
    shortDescription:
      "Upacara wisuda bagi 25 peserta yang berhasil menyelesaikan program hafalan Al-Qur'an juz 1–5.",
    fullDescription: `Wisuda Tahfidz Al-Qur'an Angkatan IV merupakan momen bersejarah bagi CITRA ANAK SHOLEH, di mana sebanyak 25 peserta resmi diwisuda setelah berhasil menghafal 5 juz Al-Qur'an.

Acara berlangsung khidmat dan penuh haru, dihadiri oleh orang tua, keluarga, dan tokoh masyarakat setempat.

[TODO: Tambahkan cerita lengkap wisuda dari client]`,
    completedDate: "2024-06-15",
    location: "[TODO: Isi lokasi wisuda]",
    coverImage: "/images/portfolio/wisuda-tahfidz-cover.jpg",
    gallery: [
      "/images/portfolio/wisuda-1.jpg",
      "/images/portfolio/wisuda-2.jpg",
      "/images/portfolio/wisuda-3.jpg",
    ],
    category: "pendidikan",
    participants: 25,
    outcomes: [
      "25 wisudawan hafal 5 juz",
      "Dihadiri 200+ tamu undangan",
    ],
    relatedProgramSlug: "tahfidz-quran-intensif",
  },
];

// Helper: ambil portfolio berdasarkan slug
export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}
