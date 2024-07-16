import dotenv from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
dotenv.config();
export default defineConfig({
  base: "/",
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    watch: {
      usePolling: true,
    },
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
  },
});
