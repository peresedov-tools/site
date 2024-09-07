import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
// import mkcert from 'vite-plugin-mkcert';
import dns from 'node:dns';
import fs from 'node:fs';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [
    paraglide({ project: './project.inlang', outdir: './src/lib/paraglide' }),
    sveltekit()
  ],
  worker: {
    type: 'es',
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  server: {
    fs: {
      allow: ['..'],
    }
  },
});