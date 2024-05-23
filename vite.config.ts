import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "src/index.ts", // Path to your library's entry point
      name: "forumui",
      formats: ["es", "umd"], // Common formats include UMD and ES
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // Externalize peer dependencies to avoid bundling them into your package
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
