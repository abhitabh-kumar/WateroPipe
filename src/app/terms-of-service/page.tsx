import { PageHero } from "@/components/pages/PageHero";

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Services" />
      <section className="prose prose-stone mx-auto max-w-3xl px-4 py-12 md:px-6">
        <p>
          This is a front-end replica of the Marmilix website. Terms of service content can be loaded from JSON when
          the legal copy is added to the data layer.
        </p>
      </section>
    </>
  );
}
