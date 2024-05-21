import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js", // Path to your library's entry point
      name: "forumui",
      formats: ["es", "umd"], // Common formats include UMD and ES
      fileName: (format) => `forumui.${format}.js`,
    },
    rollupOptions: {
      // Externalize peer dependencies to avoid bundling them into your package
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
