"use client";

import { useState } from "react";
import { MarmilixImage } from "@/components/ui/MarmilixImage";
import { ProductModal } from "@/components/products/ProductModal";
import type { Product } from "@/lib/types";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
              <MarmilixImage
                src={product.image}
                alt={product.alt}
                fill
                className="transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-base font-semibold text-stone-900">{product.name}</h3>
              <button
                type="button"
                onClick={() => setSelected(product)}
                className="mt-4 rounded-full border border-stone-900 px-5 py-2 text-sm font-medium text-stone-900 transition hover:bg-stone-900 hover:text-white"
              >
                View Details
              </button>
            </div>
          </article>
        ))}
      </div>
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
