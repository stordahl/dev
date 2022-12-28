import { sveltekit } from '@sveltejs/kit/vite';
import fs from 'fs';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit(), rawFonts(['.ttf'])],
  server: {
    hmr: false
  }
};

function rawFonts(ext:string[]) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(code, id) {
      if (ext.some(e => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {code: `export default ${JSON.stringify(buffer)}`, map: null};
      }
    }
  };
}

export default config;
