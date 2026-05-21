/**
 * Prefix a public asset path with the site's basePath so it resolves correctly
 * both locally (basePath "") and on GitHub Pages (basePath "/<repo>").
 * Use for plain <img>/<a> URLs that point at files in the `public/` folder.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
