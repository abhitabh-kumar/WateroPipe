import { getGranite, getHome } from "@/lib/data";
import { PageHero } from "@/components/pages/PageHero";
import { ProductGrid } from "@/components/products/ProductGrid";
import { PartnerSection } from "@/components/layout/PartnerSection";

const granite = getGranite();
const home = getHome();

export default function GranitePage() {
  return (
    <>
      <PageHero title={granite.title} subtitle={granite.subtitle} />
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ProductGrid products={granite.products} />
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
