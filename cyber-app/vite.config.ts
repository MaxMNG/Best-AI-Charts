import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Относительные пути: собранную статику коммитим в ../cyber, её отдаёт Pages.
  // singlefile: всё в одном index.html — страница открывается и двойным кликом
  // (file://): модули инлайнятся, свежий data.js подхватится там, где есть http.
  base: './',
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: { alias: { '@': path.resolve(root, './src') } },
  build: {
    outDir: path.resolve(root, '../cyber'),
    emptyOutDir: true,
  },
});
