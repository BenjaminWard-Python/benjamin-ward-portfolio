import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://benjamin-ward.com/", {
      headers: { accept: "text/html", host: "benjamin-ward.com" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Benjamin Ward's portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Benjamin Ward \| Technology &amp; Security Leader<\/title>/i);
  assert.match(html, /Technology leader\./);
  assert.match(html, /Security strategist\./);
  assert.match(html, /I enjoy solving complex technology problems with good people\./);
  assert.doesNotMatch(html, /I like solving hard technology problems/);
  assert.doesNotMatch(html, /employees supported|annual savings|faster response/);
  assert.doesNotMatch(html, /I care about clear priorities/);
  assert.doesNotMatch(html, /Builder\.|—/);
  assert.match(html, /Simple LMS/);
  assert.match(html, /StratIT Solutions/);
  assert.match(html, /CISSP.*In progress/s);
  assert.match(html, /Benjamin-Ward-Resume-2026\.pdf/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("ships the portfolio's public assets and accessible structure", async () => {
  await Promise.all([
    access(new URL("../public/og-v2.png", import.meta.url)),
    access(new URL("../public/hero-banner.png", import.meta.url)),
    access(new URL("../public/favicon.png", import.meta.url)),
    access(new URL("../public/Benjamin-Ward-Resume-2026.pdf", import.meta.url)),
  ]);

  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /className="skip-link"/);
  assert.match(page, /className="hero-art"[\s\S]*src="\/hero-banner\.png"/);
  assert.match(page, /className="visually-hidden"/);
  assert.match(page, /className="hero-overview-card"/);
  assert.match(page, /aria-label="Introduction and leadership overview"/);
  assert.match(page, /role="img"/);
  assert.match(page, /Security - Strategy - Technology/);
  assert.match(page, /MS, Computer Science[\s\S]*Western Governors University/);
  assert.doesNotMatch(page, /—/);
  assert.match(layout, /images: \["\/og-v2\.png"\]/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
