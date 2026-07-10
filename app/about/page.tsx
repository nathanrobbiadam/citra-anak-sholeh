import React from "react";
import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";
import AboutHeroSection from "@/components/sections/AboutHeroSection";
import HistorySection from "@/components/sections/HistorySection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import CoreValuesSection from "@/components/sections/CoreValuesSection";
import TeamSection from "@/components/sections/TeamSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Sejarah, visi, misi, dan nilai-nilai inti dari yayasan ${SITE_NAME}. Mengenal lebih dekat pengurus dan semangat kami dalam mendidik generasi Qur'ani.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <HistorySection />
      <VisionMissionSection />
      <CoreValuesSection />
      <TeamSection />
      {/* Menggunakan ulang CtaSection dari homepage karena relevan (mengajak bergabung/kontak) */}
      <CtaSection />
    </>
  );
}
