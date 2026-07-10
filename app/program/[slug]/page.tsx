import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProgramBySlug, programs } from "@/data/programs";
import { SITE_NAME } from "@/lib/constants";
import ProgramDetailHero from "@/components/sections/ProgramDetailHero";
import ProgramContent from "@/components/sections/ProgramContent";
import CtaSection from "@/components/sections/CtaSection";

// Static Generation: Pre-render semua halaman program yang ada
export async function generateStaticParams() {
  return programs.map((p) => ({
    slug: p.slug,
  }));
}

// Dinamis SEO Metadata berdasarkan konten program
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const program = getProgramBySlug(resolvedParams.slug);

  if (!program) {
    return {
      title: "Program Tidak Ditemukan",
    };
  }

  return {
    title: `${program.title} | Program`,
    description: program.shortDescription,
    openGraph: {
      title: `${program.title} | ${SITE_NAME}`,
      description: program.shortDescription,
      type: "article",
    },
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const program = getProgramBySlug(resolvedParams.slug);

  if (!program) {
    notFound();
  }

  return (
    <article>
      <ProgramDetailHero program={program} />
      <ProgramContent program={program} />
      <CtaSection />
    </article>
  );
}
