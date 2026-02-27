import type { Metadata } from "next";
import { ProductLandingPage } from "@/components/product-landing-page";
import { cacaoFruitLandingData } from "@/data/landings/cacao-fruit";

export const metadata: Metadata = {
  title: cacaoFruitLandingData.meta.title,
  description: cacaoFruitLandingData.meta.description,
  robots: {
    index: cacaoFruitLandingData.meta.robots.index,
    follow: cacaoFruitLandingData.meta.robots.follow
  }
};

export default function CacaoFruitPage() {
  return <ProductLandingPage data={cacaoFruitLandingData} />;
}
