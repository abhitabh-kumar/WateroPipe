import Link from "next/link";
import { getBlogs } from "@/lib/data";
import { PageHero } from "@/components/pages/PageHero";

const blogs = getBlogs();

export default function OurBlogsPage() {
  return (
    <>
      <PageHero title={blogs.title} subtitle={blogs.subtitle} />
      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 md:px-6">
          {blogs.posts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-stone-300"
            >
              <h2 className="text-lg font-semibold text-stone-900">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{post.excerpt}</p>
              <Link href="/our-blogs" className="mt-4 inline-block text-sm font-medium text-[#e53e3e]">
                Read More
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
