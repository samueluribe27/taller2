// src/modules/vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",  // Establece "src" como el directorio raíz
  build: {
    outDir: "../dist",  // Salida de la construcción en "dist" al mismo nivel que "src"
    rollupOptions: {
      input: {
        main: resolve(__dirname, '../index.html'),
        about: resolve(__dirname, '../about.html'),
        contact: resolve(__dirname, '../contact.html'),
      },
    },
  },
});
