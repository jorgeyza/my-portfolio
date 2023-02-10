import path from "path";
import { fileURLToPath } from "url";

// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import react from "@astrojs/react";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), react()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    }
  }
});