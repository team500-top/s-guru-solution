import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://1s-guru.ru/</loc>
    <lastmod>2025-01-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://1s-guru.ru/uslugi</loc>
    <lastmod>2025-01-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://1s-guru.ru/blog</loc>
    <lastmod>2025-01-28</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://1s-guru.ru/abonentskoe-soprovozhdenie-1s</loc>
    <lastmod>2025-01-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://1s-guru.ru/dorabotka-1s</loc>
    <lastmod>2025-01-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://1s-guru.ru/vnedrenie-1s-buhgalteriya</loc>
    <lastmod>2025-01-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://1s-guru.ru/vnedrenie-1s-erp</loc>
    <lastmod>2025-01-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://1s-guru.ru/vnedrenie-1s-upravlenie-torgovlej</loc>
    <lastmod>2025-01-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://1s-guru.ru/vnedrenie-1s-zup</loc>
    <lastmod>2025-01-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://1s-guru.ru/blog/1s-dlya-ip</loc>
    <lastmod>2025-01-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://1s-guru.ru/blog/nastrojka-uchetnoj-politiki-v-buh</loc>
    <lastmod>2025-01-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://1s-guru.ru/blog/avtomatizaciya-nalogov-v-buh</loc>
    <lastmod>2025-01-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://1s-guru.ru/legal</loc>
    <lastmod>2025-01-28</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>`;

serve(async (req) => {
  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  })
})