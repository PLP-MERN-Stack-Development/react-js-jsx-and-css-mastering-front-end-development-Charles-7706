import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Dev server proxy to avoid CORS during development. Requests to /api/quotes
  // will be forwarded to https://zenquotes.io/api/random
  server: {
    proxy: {
      '/api/quotes': {
        target: 'https://zenquotes.io',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/quotes/, '/api/random'),
      },
    },
  },
})