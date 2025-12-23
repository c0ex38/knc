import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
    }),
    Sitemap({
      hostname: 'https://knccreative.com',
      dynamicRoutes: [
        '/',
        '/hakkimizda',
        '/hizmetlerimiz',
        '/referanslar',
        '/iletisim'
      ]
    })
  ],
});
