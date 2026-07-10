import React from "react";
import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";
import ContactHeroSection from "@/components/sections/ContactHeroSection";
import ContactInfoSection from "@/components/sections/ContactInfoSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: `Hubungi yayasan ${SITE_NAME} untuk informasi program, pendaftaran, kerja sama, atau donasi. Kami siap membantu Anda.`,
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
    </>
  );
}
