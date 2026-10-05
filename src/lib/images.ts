const MARMILIX_ORIGIN = "https://marmilix.com";

/** Resolve relative Marmilix asset paths to absolute URLs. */
export function resolveImageUrl(src: string): string {
  if (!src) return "";
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  if (src.startsWith("/")) {
    return `${MARMILIX_ORIGIN}${src}`;
  }
  return `${MARMILIX_ORIGIN}/${encodeURI(src)}`;
}

export function resolveVideoUrl(src: string): string {
  return resolveImageUrl(src);
}
