import React from "react";
import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";
import PortfolioHeroSection from "@/components/sections/PortfolioHeroSection";
import PortfolioListSection from "@/components/sections/PortfolioListSection";

export const metadata: Metadata = {
  title: "Portofolio Kegiatan",
  description: `Dokumentasi dan rekam jejak kegiatan sosial, pendidikan, dan dakwah yang telah sukses diselenggarakan oleh ${SITE_NAME}.`,
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHeroSection />
      <PortfolioListSection />
    </>
  );
}
