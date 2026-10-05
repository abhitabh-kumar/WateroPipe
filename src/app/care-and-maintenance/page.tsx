import { PageHero } from "@/components/pages/PageHero";

export default function CarePage() {
  return (
    <>
      <PageHero title="Care & Maintenance" subtitle="Tips to preserve the beauty of natural stone surfaces." />
      <section className="mx-auto max-w-3xl px-4 py-12 text-sm leading-relaxed text-stone-600 md:px-6">
        <p>
          Regular cleaning with pH-neutral cleaners, immediate spill wipe-downs, and periodic sealing help maintain
          Marmilix marble and granite installations. Detailed care guides can be added to JSON as they are sourced
          from the live site.
        </p>
      </section>
    </>
  );
}
