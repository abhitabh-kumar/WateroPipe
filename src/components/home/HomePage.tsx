"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getHome } from "@/lib/data";
import { resolveVideoUrl } from "@/lib/images";
import { MarmilixImage } from "@/components/ui/MarmilixImage";
import { PartnerSection } from "@/components/layout/PartnerSection";

const home = getHome();

export function HomePage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonials = home.testimonials.items;

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const visibleTestimonials = [
    testimonials[testimonialIndex],
    testimonials[(testimonialIndex + 1) % testimonials.length],
  ];

  return (
    <>
      <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden bg-stone-900 text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        >
          <source src={resolveVideoUrl(home.hero.video)} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center md:px-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {home.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-200 md:text-lg">
            {home.hero.subtitle}
          </p>
          <Link
            href={home.hero.cta.href}
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
          >
            {home.hero.cta.label}
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="text-3xl font-bold text-stone-900 md:text-4xl">{home.trust.title}</h2>
            <p className="mt-4 text-stone-600">{home.trust.subtitle}</p>
            <div className="mt-8 space-y-6">
              {home.trust.items.map((item) => (
                <div key={item.badge} className="rounded-xl border border-stone-200 p-5">
                  <span className="inline-block rounded-full bg-stone-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    {item.badge}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-stone-700">{item.text}</p>
                </div>
              ))}
            </div>
            <Link
              href={home.trust.cta.href}
              className="mt-8 inline-block rounded-full border border-stone-900 px-6 py-2.5 text-sm font-medium text-stone-900 hover:bg-stone-900 hover:text-white"
            >
              {home.trust.cta.label}
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <MarmilixImage
              src={home.trust.image.src}
              alt={home.trust.image.alt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-stone-900 md:text-4xl">{home.featured.title}</h2>
            <p className="mt-4 text-stone-600">{home.featured.subtitle}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {home.featured.products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <MarmilixImage src={product.image} alt={product.name} fill className="group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#e53e3e]">
                    {product.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-stone-900">{product.name}</h3>
                  <span className="mt-3 inline-block text-sm font-medium text-stone-700 underline-offset-2 group-hover:underline">
                    View Details
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href={home.featured.viewAll.href}
              className="inline-block rounded-full bg-[#1a202c] px-8 py-3 text-sm font-semibold text-white hover:bg-black"
            >
              {home.featured.viewAll.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-stone-900">{home.whyChoose.title}</h2>
            <p className="mt-4 text-stone-600">{home.whyChoose.subtitle}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.whyChoose.items.map((item) => (
              <div key={item.title} className="rounded-2xl border border-stone-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-stone-900">{home.blogPreview.title}</h2>
            <p className="mt-4 text-stone-600">{home.blogPreview.subtitle}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {home.blogPreview.posts.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <MarmilixImage src={post.image} alt={post.title} fill />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold leading-snug text-stone-900">{post.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-stone-600">{post.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-[#e53e3e]">Read More</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href={home.blogPreview.viewAll.href}
              className="inline-block rounded-full border border-stone-900 px-8 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-900 hover:text-white"
            >
              {home.blogPreview.viewAll.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-stone-900">{home.testimonials.title}</h2>
            <p className="mt-4 text-stone-600">{home.testimonials.subtitle}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {visibleTestimonials.map((item, idx) => (
              <blockquote
                key={`${item.name}-${idx}`}
                className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
              >
                <p className="text-sm leading-relaxed text-stone-700">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-6">
                  <h4 className="font-semibold text-stone-900">{item.name}</h4>
                  <p className="text-sm text-stone-500">{item.role}</p>
                </footer>
              </blockquote>
            ))}
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
