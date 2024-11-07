import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For change the port of fronted server
  server: {
    port: 3000,
  },
});
