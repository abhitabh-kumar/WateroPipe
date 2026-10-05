import { getContact } from "@/lib/data";
import { PageHero } from "@/components/pages/PageHero";

const contact = getContact();

export default function FaqPage() {
  return (
    <>
      <PageHero title="FAQ" subtitle="Common questions about Marmilix marble and granite supply." />
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-4 px-4 md:px-6">
          {contact.faq.map((item) => (
            <details key={item.question} className="rounded-xl border border-stone-200 bg-white p-5">
              <summary className="cursor-pointer font-medium">{item.question}</summary>
              <p className="mt-3 text-sm text-stone-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
