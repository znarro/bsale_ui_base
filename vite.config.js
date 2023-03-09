import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";
import sveltePreprocess from "svelte-preprocess";

const root = resolve(__dirname, "src/client");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        scss: {
          // Para que los componentes accedan a las variables SASS
          prependData: `@import 'src/client/styles/abstracts/_variables.scss';`,
        },
      }),
      onwarn: (warning, handler) => {
        const { code } = warning;
        // Omite los warning por clases no utilizadas (sucede mucho con Material)
        if (code === "css-unused-selector") return;
        handler(warning);
      },
    }),
  ],
  root,
  appType: "mpa",
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        login: resolve(root, "layouts/login.html"),
        products: resolve(root, "layouts/products.html"),
      },
    },
  },
  resolve: {
    alias: {
      $lib: resolve("src/client/lib"),
      $locales: resolve("config/locales"),
      $helpers: resolve("helpers"),
    },
  },
});
