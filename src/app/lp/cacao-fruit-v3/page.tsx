import type { Metadata } from "next";
import { ProductLandingPage } from "@/components/product-landing-page";
import { cacaoFruitLandingData } from "@/data/landings/cacao-fruit";

export const metadata: Metadata = {
  title: `${cacaoFruitLandingData.meta.title} V3`,
  description: cacaoFruitLandingData.meta.description,
  robots: {
    index: cacaoFruitLandingData.meta.robots.index,
    follow: cacaoFruitLandingData.meta.robots.follow
  }
};

export default function CacaoFruitV3Page() {
  return (
    <div className="cacao-v3-fonts">
      <ProductLandingPage data={cacaoFruitLandingData} />
    </div>
  );
}
