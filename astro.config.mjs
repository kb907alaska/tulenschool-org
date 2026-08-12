import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  site: "https://tulenschool.org",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss(), tsconfigPaths()],
  },
});
