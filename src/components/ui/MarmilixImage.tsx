"use client";

import { resolveImageUrl } from "@/lib/images";
import { useState } from "react";

type MarmilixImageProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
};

export function MarmilixImage({ src, alt, className = "", fill }: MarmilixImageProps) {
  const [failed, setFailed] = useState(false);
  const url = resolveImageUrl(src);

  if (failed) {
    return (
      <div
        className={`bg-gradient-to-br from-stone-200 to-stone-400 ${className}`}
        aria-label={alt}
      />
    );
  }

  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={url}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
        onError={() => setFailed(true)}
        loading="lazy"
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}
