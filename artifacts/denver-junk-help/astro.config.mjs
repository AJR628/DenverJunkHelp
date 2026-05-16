import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const port = parseInt(process.env.PORT || '4321');
const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  output: 'static',
  site: 'https://denverjunkhelp.com',
  base: basePath,
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
