import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "~pages": path.resolve(__dirname, "./src/pages"),
      "~components": path.resolve(__dirname, "./src/components"),
      "~hooks": path.resolve(__dirname, "./src/hooks"),
      "~features": path.resolve(__dirname, "./src/features"),
      "~constants": path.resolve(__dirname, "./src/constants"),
      "~apis": path.resolve(__dirname, "./src/apis"),
      "~utils": path.resolve(__dirname, "./src/utils"),
      "~queries": path.resolve(__dirname, "./src/queries"),
      "~types": path.resolve(__dirname, "./src/types"),
      "~styles": path.resolve(__dirname, "./src/styles"),
      "~assets": path.resolve(__dirname, "./src/assets"),
      "~contexts": path.resolve(__dirname, "./src/contexts"),
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          // 필요한 경우 다른 청크를 추가할 수 있습니다
        },
      },
    },
  },
});
