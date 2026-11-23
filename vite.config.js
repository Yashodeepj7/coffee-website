import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import fs from 'node:fs';
import path from 'node:path';

function postSingleFile() {
  return {
    name: 'post-single-file',
    closeBundle() {
      const distIndex = path.resolve(import.meta.dirname, 'dist/index.html');
      if (fs.existsSync(distIndex)) {
        let content = fs.readFileSync(distIndex, 'utf-8');
        content = content.replace(/<script type="module" crossorigin>/g, '<script>');
        content = content.replace(/<script type="module">/g, '<script>');
        fs.writeFileSync(distIndex, content, 'utf-8');

        // Also copy to root index.html so both double-clicks work
        const rootIndex = path.resolve(import.meta.dirname, '../index.html');
        fs.writeFileSync(rootIndex, content, 'utf-8');
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), viteSingleFile(), postSingleFile()],
  base: './'
});



