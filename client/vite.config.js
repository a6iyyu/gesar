import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react-swc";
import jsconfigPaths from "vite-jsconfig-paths";

export default defineConfig({
  plugins: [mdx(), react(), jsconfigPaths()],
  server: {
    port: 4000,
  },
});