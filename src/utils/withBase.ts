/** Prefix a site path with Astro `base` (needed for GitHub Pages project sites). */
export function withBase(path = "/"): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  // Homepage section anchors must keep the base path so they work from /terms, /privacy, etc.
  if (path.startsWith("#")) return `${base}/${path}`;
  return `${base}/${path.replace(/^\//, "")}`;
}
