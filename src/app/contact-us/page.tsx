import { getContact } from "@/lib/data";
import { ContactForm } from "@/components/contact/ContactForm";

const contact = getContact();

export default function ContactUsPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-stone-50 py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e53e3e]">{contact.hero.eyebrow}</p>
          <p className="mt-2 text-sm text-stone-600">{contact.hero.badge}</p>
          <h1 className="mt-4 text-3xl font-bold text-stone-900 md:text-4xl">{contact.hero.title}</h1>
          <p className="mt-3 text-stone-600">{contact.hero.subtitle}</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <ContactForm />
          <div className="space-y-8">
            <div className="rounded-2xl border border-stone-200 p-6">
              <h3 className="font-semibold text-stone-900">{contact.office.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{contact.office.address}</p>
            </div>
            <div className="rounded-2xl border border-stone-200 p-6">
              <h3 className="font-semibold text-stone-900">Call Us</h3>
              <ul className="mt-2 space-y-1 text-sm text-stone-600">
                {contact.phones.map((phone) => (
                  <li key={phone}>{phone}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 p-6">
              <h3 className="font-semibold text-stone-900">Email Us</h3>
              <ul className="mt-2 space-y-1 text-sm text-stone-600">
                {contact.emails.map((email) => (
                  <li key={email}>{email}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-center text-2xl font-bold text-stone-900">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            {contact.faq.map((item) => (
              <details key={item.question} className="rounded-xl border border-stone-200 bg-white p-5">
                <summary className="cursor-pointer font-medium text-stone-900">{item.question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
