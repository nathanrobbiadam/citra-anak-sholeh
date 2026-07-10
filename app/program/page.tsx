import React from "react";
import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";
import ProgramHeroSection from "@/components/sections/ProgramHeroSection";
import ProgramListSection from "@/components/sections/ProgramListSection";

export const metadata: Metadata = {
  title: "Program",
  description: `Jelajahi berbagai program pendidikan dan sosial unggulan di ${SITE_NAME}. Dari tahfidz Al-Qur'an hingga beasiswa dan kelas parenting.`,
};

export default function ProgramPage() {
  return (
    <>
      <ProgramHeroSection />
      <ProgramListSection />
    </>
  );
}
