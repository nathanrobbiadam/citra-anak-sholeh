import React from "react";
import SplashSection from "@/components/sections/SplashSection";
import HeroSection from "@/components/sections/HeroSection";
import ProgramHighlightSection from "@/components/sections/ProgramHighlightSection";
import TestimoniSection from "@/components/sections/TestimoniSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <SplashSection />
      <HeroSection />
      {/* 
        [TODO: Jika klien ingin menambahkan section About Singkat di Homepage, 
        kita bisa buat AboutHighlightSection dan masukkan di sini] 
      */}
      <ProgramHighlightSection />
      <TestimoniSection />
      <CtaSection />
    </>
  );
}
