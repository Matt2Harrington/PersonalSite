import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://matt2harrington.com',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  redirects: {
    '/pollsterpass.html': '/work/pollster-pass',
    '/servingitup.html': '/work/serving-it-up',
    '/contacteclipse.html': '/work/contact-eclipse',
  },
});
