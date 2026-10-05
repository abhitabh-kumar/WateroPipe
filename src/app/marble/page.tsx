import { getMarble, getHome } from "@/lib/data";
import { PageHero } from "@/components/pages/PageHero";
import { ProductGrid } from "@/components/products/ProductGrid";
import { PartnerSection } from "@/components/layout/PartnerSection";

const marble = getMarble();
const home = getHome();

export default function MarblePage() {
  return (
    <>
      <PageHero title={marble.title} subtitle={marble.subtitle} />
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ProductGrid products={marble.products} />
        </div>
      </section>
      <PartnerSection
        title={home.partner.title}
        subtitle={home.partner.subtitle}
        cta={home.partner.cta}
      />
    </>
  );
}
