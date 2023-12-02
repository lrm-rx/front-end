import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8002,
    host: '0.0.0.0',
    open: true,
    proxy: {
      '/api/upload': 'https://mobile.zcwytd.com',
      '/api': 'https://api.imooc.zcwytd.com'
    },
    cors: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
