import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import IstanbulPlugin from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    IstanbulPlugin({
      include: "src/**",
      exclude: [
        "node_modules",
        "./src/images/",
        "./src/shards/",
        "./src/graphql/core/generated.tsx",
        "./src/graphql/simulations/generated.tsx",
      ],
      extension: [".js", "jsx", ".ts", ".tsx"],
      cypress: true,
    }),
    react(),
    tsConfigPaths(),
  ],
  server: {
    port: 3000,
  },
  build: {
    minify: true,
    sourcemap: command === "serve",
    rollupOptions: {
      // https://github.com/vitejs/vite/issues/2433
      maxParallelFileOps: 2,
    },
  },
}));
