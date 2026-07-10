// types/portfolio.ts
// Tipe data untuk fitur Portofolio (kegiatan yang sudah selesai)

export interface PortfolioItem {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  completedDate: string;  // ISO date (YYYY-MM-DD)
  location?: string;
  coverImage: string;
  gallery?: string[];
  category?: string;       // misal: "pendidikan", "sosial", "dakwah"
  participants?: number;   // jumlah peserta yang hadir
  outcomes?: string[];     // hasil/dampak kegiatan
  relatedProgramSlug?: string; // hubungkan ke program terkait (opsional)
}
