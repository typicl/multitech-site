// @ts-check
import react from '@astrojs/react';
import commonjs from '@rollup/plugin-commonjs';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://typicl.github.io',
  base: 'multitech-site',
  output: 'static',
  integrations: [react()],
  vite: {
    optimizeDeps: {
      force: true,
      extensions: ['jsx', 'tsx']
    },
    build: {
      commonjsOptions: {
        include: [],
      },
      rollupOptions: {
        plugins: [
          commonjs(),
        ],
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: ['src'],
          silenceDeprecations: ['import', 'legacy-js-api'],
          additionalData: `
          @use 'sass:color';
          @import "/src/styles/_base-refs.scss";
          `,
        },
      },
    },
  }
});
