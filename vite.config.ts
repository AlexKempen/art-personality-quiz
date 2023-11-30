import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Support for svg image react components
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
    plugins: [react(), svgrPlugin()],
    build: {
        outDir: "./dist",
        emptyOutDir: true,
        copyPublicDir: true,
    },
    server: {
        strictPort: true,
    },
});
