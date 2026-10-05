import { getQuartz, getHome } from "@/lib/data";
import { PageHero } from "@/components/pages/PageHero";
import { PartnerSection } from "@/components/layout/PartnerSection";

const quartz = getQuartz();
const home = getHome();

export default function QuartzPage() {
  return (
    <>
      <PageHero title={quartz.title} subtitle={quartz.subtitle} />
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-10">
            <p className="text-lg font-medium text-stone-800">Premium quartz collection coming soon.</p>
          </div>
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
