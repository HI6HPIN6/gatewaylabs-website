import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : '/gatewaylabs-website/',  // Fixes path issues
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",  // GitHub Pages will serve from this folder
    rollupOptions: {
      output: {
        format: "es",  // Ensure ES module format
        entryFileNames: `[name].js`,  // Fixes MIME type issue
      },
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
