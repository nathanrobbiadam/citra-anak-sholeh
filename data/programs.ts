// data/programs.ts
// Data program CITRA ANAK SHOLEH
// [TODO: Ganti data dummy berikut dengan data program nyata dari client]

import type { Program } from "@/types/program";

export const programs: Program[] = [
  {
    slug: "tahfidz-quran-intensif",
    title: "Tahfidz Al-Qur'an Intensif",
    shortDescription:
      "Program hafalan Al-Qur'an dengan metode talaqqi bersama ustadz hafidz berpengalaman untuk anak usia 7–15 tahun.",
    fullDescription: `Program Tahfidz Al-Qur'an Intensif adalah program unggulan CITRA ANAK SHOLEH yang dirancang untuk membantu anak-anak menghafal Al-Qur'an dengan metode talaqqi (berhadapan langsung dengan pengajar).

Program ini menggunakan pendekatan yang menyenangkan dan terstruktur, disesuaikan dengan kemampuan masing-masing anak. Setiap peserta akan mendapatkan bimbingan personal dari ustadz/ustadzah yang telah hafal 30 juz.

**Yang akan diperoleh peserta:**
- Hafalan minimal 2–5 juz selama program berlangsung
- Perbaikan tajwid dan makharijul huruf
- Pembentukan karakter Qur'ani dalam kehidupan sehari-hari
- Sertifikat pencapaian hafalan

[TODO: Tambahkan deskripsi lengkap dari client]`,
    status: "berjalan",
    startDate: "2025-01-15",
    endDate: "2025-12-15",
    location: "Gedung CITRA ANAK SHOLEH, [TODO: Isi alamat lengkap]",
    targetParticipants: "Anak usia 7–15 tahun",
    coverImage: "/images/programs/tahfidz-cover.jpg",
    gallery: [
      "/images/programs/tahfidz-1.jpg",
      "/images/programs/tahfidz-2.jpg",
    ],
    category: "pendidikan",
    quota: 30,
    registrationUrl: "#", // [TODO: Ganti dengan link form pendaftaran nyata]
  },
  {
    slug: "beasiswa-anak-dhuafa",
    title: "Beasiswa Pendidikan Anak Dhuafa",
    shortDescription:
      "Program beasiswa penuh untuk anak-anak dari keluarga kurang mampu agar tetap bisa mengenyam pendidikan berkualitas.",
    fullDescription: `Program Beasiswa Pendidikan Anak Dhuafa hadir sebagai wujud kepedulian CITRA ANAK SHOLEH terhadap anak-anak yang memiliki semangat belajar tinggi namun terkendala biaya.

Program ini mencakup bantuan biaya pendidikan, perlengkapan sekolah, dan pembinaan karakter bulanan.

**Cakupan beasiswa:**
- Biaya SPP selama 1 tahun ajaran
- Perlengkapan alat tulis & seragam
- Biaya buku pelajaran
- Pembinaan karakter setiap bulan

[TODO: Tambahkan detail kriteria penerima beasiswa dari client]`,
    status: "akan-datang",
    startDate: "2025-08-01",
    location: "[TODO: Isi wilayah/daerah sasaran]",
    targetParticipants: "Anak usia sekolah (SD–SMP) dari keluarga dhuafa",
    coverImage: "/images/programs/beasiswa-cover.jpg",
    gallery: ["/images/programs/beasiswa-1.jpg"],
    category: "sosial",
    quota: 20,
    registrationUrl: "#", // [TODO: Ganti dengan link form pendaftaran nyata]
  },
  {
    slug: "kelas-parenting-islami",
    title: "Kelas Parenting Islami",
    shortDescription:
      "Seri workshop parenting berbasis nilai Islam untuk orang tua dalam mendidik anak sesuai sunnah Rasulullah SAW.",
    fullDescription: `Kelas Parenting Islami adalah program seri workshop yang ditujukan bagi orang tua yang ingin memahami cara mendidik anak sesuai dengan ajaran Islam.

Program ini telah berhasil diikuti oleh lebih dari 150 orang tua dan mendapat respon yang sangat positif.

**Materi yang dibahas:**
- Fondasi pendidikan anak dalam Islam
- Komunikasi efektif dengan anak ala Rasulullah SAW
- Mengelola emosi orang tua dan anak
- Membangun rutinitas Islami di rumah
- Mengatasi tantangan parenting di era digital

[TODO: Tambahkan testimonial peserta dari client]`,
    status: "selesai",
    startDate: "2024-03-01",
    endDate: "2024-05-31",
    location: "Aula Masjid [TODO: Isi nama masjid], [TODO: Isi kota]",
    targetParticipants: "Orang tua/wali dengan anak usia 0–15 tahun",
    coverImage: "/images/programs/parenting-cover.jpg",
    gallery: [
      "/images/programs/parenting-1.jpg",
      "/images/programs/parenting-2.jpg",
      "/images/programs/parenting-3.jpg",
    ],
    category: "dakwah",
  },
];

// Helper: ambil program berdasarkan slug
export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

// Helper: filter program berdasarkan status
export function getProgramsByStatus(
  status: Program["status"]
): Program[] {
  return programs.filter((p) => p.status === status);
}
