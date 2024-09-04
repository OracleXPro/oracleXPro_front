import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import topLevelAwait from 'vite-plugin-top-level-await';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), topLevelAwait()],
  resolve: {
    alias: {
      crypto: "empty-module",
    },
  },
  define: {
    global: "globalThis",
  },
  build: {
    chunkSizeWarningLimit: 10000, // 设置文件体积上限为 1000 kB
  },
});
