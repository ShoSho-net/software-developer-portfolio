import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */

// --- GitHub Pages configuration -------------------------------------------
// GitHub Pages serves a static site, so we use Next.js static export.
//
// This site is hosted as a PROJECT repo named "software-developer-portfolio",
// so it lives at  https://<username>.github.io/software-developer-portfolio/
// and the assets must be served from that sub-path (basePath).
//
// `REPO_NAME` is the source of truth for the sub-path. If you rename the repo,
// change it here. (If you ever move this to a "<username>.github.io" user repo,
// set REPO_NAME to "" so the site is served from the domain root.)
const REPO_NAME = "software-developer-portfolio";

// Use the repo name from GitHub Actions when present, else the constant above.
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? REPO_NAME;
const isUserSite = repo.endsWith(".github.io");
// Apply the sub-path only for production builds; local `next dev` stays at root.
const basePath = process.env.NODE_ENV === "production" && repo && !isUserSite ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  // Pin the workspace root to this project. Without this, Next.js may infer the
  // wrong root when an unrelated lockfile exists in a parent directory.
  outputFileTracingRoot: __dirname,
  images: {
    // next/image optimization is a server feature; disable it for static export.
    unoptimized: true,
  },
  basePath,
  // Expose basePath to the client so we can prefix asset URLs (e.g. avatar).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true,
};

export default nextConfig;
