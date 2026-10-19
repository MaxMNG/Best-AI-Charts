import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));

/**
 * Корневой data.js лежит на уровень выше приложения: на Pages он публикуется
 * рядом (…/data.js) и обновляется ежедневно GitHub Action. В dev-сервере этой
 * папки нет, поэтому отдаём файл middleware'ом, чтобы dev и продакшн читали
 * один и тот же источник.
 */
function rootDataPlugin(): Plugin {
  return {
    name: "hitech-root-data",
    configureServer(server) {
      server.middlewares.use("/data.js", async (_req, res) => {
        try {
          const text = await readFile(path.resolve(dir, "../data.js"), "utf8");
          res.setHeader("Content-Type", "application/javascript; charset=utf-8");
          res.setHeader("Cache-Control", "no-store");
          res.end(text);
        } catch {
          res.statusCode = 404;
          res.end("data.js not found");
        }
      });
    },
  };
}

export default defineConfig({
  // Относительные пути: страница живёт в подпапке /Best-AI-Charts/hi-tech/.
  base: "./",
  plugins: [react(), tailwindcss(), rootDataPlugin()],
  resolve: {
    alias: { "@": path.resolve(dir, "src") },
  },
  build: {
    // Собранная статика коммитится в hi-tech/ рядом с приложением.
    outDir: path.resolve(dir, "../hi-tech"),
    emptyOutDir: true,
  },
});
