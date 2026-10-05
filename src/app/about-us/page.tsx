import { getAbout, getHome } from "@/lib/data";
import { PageHero } from "@/components/pages/PageHero";
import { PartnerSection } from "@/components/layout/PartnerSection";

const about = getAbout();
const home = getHome();

export default function AboutUsPage() {
  return (
    <>
      <PageHero title={about.founder.name} subtitle={about.founder.title} />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="text-center text-xl font-bold uppercase tracking-wide text-stone-900 md:text-2xl">
            {about.founder.headline}
          </h2>
          <p className="mt-8 text-center text-base leading-relaxed text-stone-600">{about.founder.story}</p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 p-6">
              <h3 className="text-lg font-semibold text-stone-900">{about.mission.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{about.mission.text}</p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-6">
              <h3 className="text-lg font-semibold text-stone-900">{about.vision.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{about.vision.text}</p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {about.pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl bg-stone-50 p-6 ring-1 ring-stone-200">
                <h3 className="text-lg font-semibold text-stone-900">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{pillar.description}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-16 text-center text-2xl font-bold text-stone-900">{about.closing.title}</h2>
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
