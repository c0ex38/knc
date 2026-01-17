import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Sitemap from 'vite-plugin-sitemap';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        react(),
        ViteImageOptimizer({
            png: { quality: 80 },
            jpeg: { quality: 80 },
            jpg: { quality: 80 },
            svg: {
                multipass: true,
                plugins: [
                    {
                        name: 'preset-default',
                        params: {
                            overrides: {
                                cleanupIds: false,
                            },
                        },
                    },
                ],
            },
        }),
        Sitemap({
            hostname: 'https://knccreative.com',
            dynamicRoutes: ['/', '/hakkimizda', '/hizmetlerimiz', '/referanslar', '/iletisim'],
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': [
                        'react',
                        'react-dom',
                        'react-router-dom',
                        'react-helmet-async',
                    ],
                    'three-vendor': ['three'],
                    'ui-vendor': ['framer-motion'],
                },
            },
        },
        chunkSizeWarningLimit: 1000,
    },
});
