import Link from "next/link";

type PartnerSectionProps = {
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
};

export function PartnerSection({ title, subtitle, cta }: PartnerSectionProps) {
  return (
    <section className="bg-[#1a202c] py-16 text-white md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-stone-300">{subtitle}</p>
        <Link
          href={cta.href}
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#1a202c] transition hover:bg-stone-100"
        >
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
