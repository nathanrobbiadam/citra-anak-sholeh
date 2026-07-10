// types/program.ts
// Tipe data untuk fitur Program — dipakai di seluruh app

export type ProgramStatus = "berjalan" | "akan-datang" | "selesai";

export interface Program {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  status: ProgramStatus;
  startDate: string;   // ISO date (YYYY-MM-DD)
  endDate?: string;    // ISO date, kosong jika belum diketahui
  location?: string;
  targetParticipants?: string;
  coverImage: string;
  gallery?: string[];
  // Metadata tambahan
  category?: string;   // misal: "pendidikan", "sosial", "dakwah"
  quota?: number;      // kuota peserta (opsional)
  registrationUrl?: string; // link pendaftaran (opsional)
}
