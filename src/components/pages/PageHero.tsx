type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section className="border-b border-stone-200 bg-stone-50 py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e53e3e]">{eyebrow}</p>
        )}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-stone-600">{subtitle}</p>}
      </div>
    </section>
  );
}
