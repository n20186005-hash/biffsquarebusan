import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://biffsquarebusan.com',
  output: 'static',
  // Canonical form uses a trailing slash (matches the static /en/index.html output).
  // www -> apex (non-www) must be configured as a Cloudflare Redirect Rule / Page Rule.
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'ko',
    locales: ['zh', 'en', 'ja', 'ko'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
