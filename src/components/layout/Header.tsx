"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getSite } from "@/lib/data";
import { MarmilixImage } from "@/components/ui/MarmilixImage";

const site = getSite();

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-black text-sm font-bold text-white">
            M
          </span>
          <span className="text-xl font-semibold tracking-tight">
            <span className="text-black">marmi</span>
            <span className="text-[#e53e3e]">lix</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.navigation.map((item) => {
            if (item.children?.length) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#e53e3e] ${
                      item.children.some((c) => pathname === c.href)
                        ? "text-[#e53e3e]"
                        : "text-stone-800"
                    }`}
                    aria-expanded={productsOpen}
                  >
                    {item.label}
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {productsOpen && (
                    <div className="absolute left-1/2 top-full z-50 mt-2 w-44 -translate-x-1/2 rounded-xl border border-stone-200 bg-white py-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-2.5 text-sm transition-colors hover:bg-stone-50 hover:text-[#e53e3e] ${
                            pathname === child.href ? "font-semibold text-[#e53e3e]" : "text-stone-700"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#e53e3e] ${
                  pathname === item.href ? "text-[#e53e3e]" : "text-stone-800"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={site.cta.href}
            className="hidden rounded-full bg-[#1a202c] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black sm:inline-block"
          >
            {site.cta.label}
          </Link>
          <button
            type="button"
            className="inline-flex rounded-lg border border-stone-300 p-2 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-stone-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {site.navigation.map((item) =>
              item.children?.length ? (
                <div key={item.label} className="py-2">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-2 py-2 text-sm text-stone-800 hover:bg-stone-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-stone-800 hover:bg-stone-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href={site.cta.href}
              className="mt-3 rounded-full bg-[#1a202c] px-5 py-3 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              {site.cta.label}
            </Link>
          </div>
        </div>
      )}

      <span className="sr-only">
        <MarmilixImage src={site.brand.logo} alt={site.brand.logoAlt} />
      </span>
    </header>
  );
}
