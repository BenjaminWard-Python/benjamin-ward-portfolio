import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("builds Benjamin Ward's portfolio as static HTML", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /<title>Benjamin Ward \| Technology &amp; Security Leader<\/title>/i);
  assert.match(html, /Technology leader\./);
  assert.match(html, /Security strategist\./);
  assert.match(html, /I enjoy solving complex technology problems with good people\./);
  assert.match(html, /13\+/);
  assert.match(html, /StratIT Solutions/);
  assert.match(html, /CISSP.*In progress/s);
  assert.match(html, /Benjamin-Ward-Resume-2026\.pdf/);
  assert.doesNotMatch(html, /10\+|Simple LMS|Homelab|Builder\.|—/);
});

test("ships public assets and Netlify configuration", async () => {
  await Promise.all([
    access(new URL("../public/og-v2.png", import.meta.url)),
    access(new URL("../public/hero-banner.png", import.meta.url)),
    access(new URL("../public/favicon.png", import.meta.url)),
    access(new URL("../public/Benjamin-Ward-Resume-2026.pdf", import.meta.url)),
    access(new URL("../netlify.toml", import.meta.url)),
  ]);

  const [page, layout, css, packageJson, nextConfig, netlifyConfig] =
    await Promise.all([
      readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
      readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
      readFile(new URL("../package.json", import.meta.url), "utf8"),
      readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
      readFile(new URL("../netlify.toml", import.meta.url), "utf8"),
    ]);

  assert.match(page, /className="skip-link"/);
  assert.match(page, /className="hero-art"[\s\S]*src="\/hero-banner\.png"/);
  assert.match(page, /aria-label="Introduction and leadership overview"/);
  assert.doesNotMatch(page, /href="#homelab"|className="lab-section"|—/);
  assert.match(layout, /metadataBase: new URL\("https:\/\/benjamin-ward\.com"\)/);
  assert.match(layout, /images: \["\/og-v2\.png"\]/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.doesNotMatch(packageJson, /vinext|wrangler|drizzle/);
  assert.match(nextConfig, /output: "export"/);
  assert.match(netlifyConfig, /publish = "out"/);
});
