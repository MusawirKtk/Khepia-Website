/** Prefix a site path with Astro `base` (needed for GitHub Pages project sites). */
export function withBase(path = "/"): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const cleaned = path.replace(/^\//, "");
  if (!cleaned) return `${base}/`;
  return `${base}/${cleaned}`;
}
