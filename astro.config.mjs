import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://matt2harrington.com',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  redirects: {
    '/travel.html': '/work/travel',
    '/models.html': '/work/models',
    '/urban.html': '/work/urban',
    '/wedding.html': '/work/wedding',
    '/nature.html': '/work/nature',
    '/sports.html': '/work/sports',
    '/music.html': '/work/music',
    '/pollsterpass.html': '/work/pollster-pass',
    '/servingitup.html': '/work/serving-it-up',
    '/contacteclipse.html': '/work/contact-eclipse',
  },
});
