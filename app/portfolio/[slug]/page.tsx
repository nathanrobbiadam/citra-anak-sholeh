import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPortfolioBySlug, portfolioItems } from "@/data/portfolio";
import { SITE_NAME } from "@/lib/constants";
import PortfolioDetailHero from "@/components/sections/PortfolioDetailHero";
import PortfolioContent from "@/components/sections/PortfolioContent";
import CtaSection from "@/components/sections/CtaSection";

// Static Generation: Pre-render semua halaman portofolio yang ada
export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

// Dinamis SEO Metadata berdasarkan konten portofolio
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const item = getPortfolioBySlug(resolvedParams.slug);

  if (!item) {
    return {
      title: "Kegiatan Tidak Ditemukan",
    };
  }

  return {
    title: `${item.title} | Portofolio`,
    description: item.shortDescription,
    openGraph: {
      title: `${item.title} | ${SITE_NAME}`,
      description: item.shortDescription,
      type: "article",
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const item = getPortfolioBySlug(resolvedParams.slug);

  if (!item) {
    notFound();
  }

  return (
    <article>
      <PortfolioDetailHero item={item} />
      <PortfolioContent item={item} />
      <CtaSection />
    </article>
  );
}
