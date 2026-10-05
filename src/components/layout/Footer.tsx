import Link from "next/link";
import { getSite } from "@/lib/data";
import { MarmilixImage } from "@/components/ui/MarmilixImage";

const site = getSite();
const { footer } = site;

export function Footer() {
  return (
    <footer className="mt-auto bg-[#0f1419] text-stone-300">
      <div className="border-b border-stone-800">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">
            Keep In Touch
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {footer.social.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-stone-700 px-4 py-2 text-xs font-medium text-stone-200 transition hover:border-[#e53e3e] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-3">
            <MarmilixImage src={site.brand.logo} alt={site.brand.logoAlt} className="h-10 w-auto" />
          </Link>
          <h4 className="mt-4 text-lg font-semibold text-white">{footer.tagline}</h4>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-400">{footer.description}</p>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Company</h5>
          <ul className="space-y-2 text-sm">
            {footer.companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Products</h5>
          <ul className="space-y-2 text-sm">
            {footer.productLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">Resources</h5>
          <ul className="space-y-2 text-sm">
            {footer.resourceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <h5 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wide text-white">Contact Info</h5>
          <ul className="space-y-2 text-sm">
            <li>📧 {footer.contact.email}</li>
            <li>📞 {footer.contact.phone}</li>
            <li>📍 {footer.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-stone-500 md:flex-row md:px-6">
          <p>{footer.copyright}</p>
          <p>
            Developed By{" "}
            <a href={footer.developer.href} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white">
              {footer.developer.label}
            </a>
          </p>
          <div className="flex gap-4">
            {footer.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-stone-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
