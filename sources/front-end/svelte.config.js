import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess()],
  compilerOptions: {
    // TODO: when runes are default and paraglide supports runes, se this to `true`
    runes: undefined,
  },
  kit: {
    adapter: adapter({
      out: 'build',
      precompress: false,
      envPrefix: '',
    }),
    serviceWorker: {
      register: true,
    },
    files: {
      lib: 'src/lib',
      hooks: {
        server: 'src/files/hooks/hooks.server.js',
      },
      serviceWorker: 'src/lib/service-worker/index.js'
    },
    env: {
      dir: './environments',
    },
  },
};

export default config;