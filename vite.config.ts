import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const securityHeaders = {
  "Content-Security-Policy": `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    font-src 'self';
    connect-src 'self' https:;
  `
    .replace(/\s+/g, " ")
    .trim(),
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  server: {
    port: 3000,
    headers: securityHeaders,
  },
  preview: {
    port: 5000,
    headers: securityHeaders,
  },
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
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssMinify: true,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react/jsx-runtime"],
          "vendor-emotion": ["@emotion/react", "@emotion/styled"],
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
  },
});
