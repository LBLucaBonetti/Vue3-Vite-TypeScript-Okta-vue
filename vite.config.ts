import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    /*
    alias: [
      {
        find: "@okta/okta-auth-js",
        replacement: require.resolve(
          "@okta/okta-auth-js/dist/okta-auth-js.umd.js"
        ),
      },
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
    */
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
