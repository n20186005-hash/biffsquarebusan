export const prerender = true;

const BASE = 'https://biffsquarebusan.com';
const langs = ['en', 'zh', 'ja', 'ko'];

const homeAlternates = [
  ...langs.map((l) => ({ lang: l, href: `${BASE}/${l}/` })),
  { lang: 'x-default', href: `${BASE}/ko/` },
];

const topics = [
  'street-food',
  'how-to-get-there',
  'visiting-guide',
  'handprints-history',
  'nearby-attractions',
];

const urls = [
  ...langs.map((l) => ({ loc: `${BASE}/${l}/`, alternates: homeAlternates })),
  ...topics.map((s) => ({ loc: `${BASE}/en/${s}/` })),
];

export const GET = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map((u) => {
    const alts = (u.alternates ?? [])
      .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}" />`)
      .join('\n');
    return `  <url>
    <loc>${u.loc}</loc>
${alts}
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
