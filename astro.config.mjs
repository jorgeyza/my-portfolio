import path from "path";
import { fileURLToPath } from "url";

// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
});
