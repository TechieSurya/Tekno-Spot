// scripts/generate-sitemap.js
const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

(async () => {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about-us', changefreq: 'monthly', priority: 0.7 },
    { url: '/web-design-company-in-trichy', changefreq: 'monthly', priority: 0.7 },
    { url: '/web-development-company-in-trichy', changefreq: 'monthly', priority: 0.7 },
    { url: '/mobile-app-development-company-in-trichy', changefreq: 'monthly', priority: 0.7 },
    { url: '/seo-company-in-trichy', changefreq: 'monthly', priority: 0.7 },
    { url: '/social-media-marketing-company-in-trichy', changefreq: 'monthly', priority: 0.7 },
    { url: '/careers', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact-us', changefreq: 'monthly', priority: 0.7 },
    // Add dynamic routes here too (e.g., from CMS or Firebase)
  ];

  const stream = new SitemapStream({ hostname: 'https://www.teknospot.in' });
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(data =>
    data.toString()
  );

  fs.writeFileSync('public/sitemap.xml', xml);
  console.log('✅ Sitemap generated at public/sitemap.xml');
})();
