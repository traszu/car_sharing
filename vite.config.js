import { defineConfig } from "vite";

/**
 * Path to exercise folder
 */
const srcPath = "src";

/**
 * Don't change those lines below
 */
export default defineConfig({
    root: srcPath,
    server: {
        port: 3000,
    },
});