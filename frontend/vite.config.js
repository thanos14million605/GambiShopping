import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), tailwindcss(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },
});
