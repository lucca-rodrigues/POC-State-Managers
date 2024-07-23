import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const entryPoint = path.resolve(__dirname, `${mode}/src/main.jsx`);

  return {
    plugins: [react()],
    root: path.resolve(__dirname, mode),
    build: {
      outDir: path.resolve(__dirname, "dist", mode),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, mode, "src"),
      },
    },
    server: {
      open: true,
    },
  };
});
