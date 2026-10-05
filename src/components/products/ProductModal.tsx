"use client";

import Link from "next/link";
import { MarmilixImage } from "@/components/ui/MarmilixImage";
import type { Product } from "@/lib/types";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

export function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-lg text-white"
          aria-label="Close"
        >
          ×
        </button>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-stone-100">
          <MarmilixImage src={product.image} alt={product.alt} fill />
        </div>
        <div className="p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#e53e3e]">{product.category}</p>
          <h2 id="product-modal-title" className="mt-2 text-2xl font-bold text-stone-900">
            {product.name}
          </h2>
          {product.description && (
            <p className="mt-4 text-sm leading-relaxed text-stone-600">{product.description}</p>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact-us"
              className="rounded-full bg-[#1a202c] px-6 py-2.5 text-sm font-medium text-white hover:bg-black"
            >
              Request Custom Quote
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-stone-300 px-6 py-2.5 text-sm font-medium text-stone-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
