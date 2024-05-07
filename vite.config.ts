/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  ssr: {
    noExternal: [ 'contentful' ],
    optimizeDeps: {
      include: ['contentful']
    },
  },
  build: {
    target: ['es2020'],
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  resolve: {
    // mainFields: ['module'],
  },
  plugins: [analog({
    nitro: {
      routeRules: {
        '/': { prerender: false }
      }
    }
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
