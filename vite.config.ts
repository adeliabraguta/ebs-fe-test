/// <reference types="vitest" />

import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [react()],
    base: "/ebs-fe-test/",
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: './setup.ts',
        exclude: ['node_modules', 'dist'],
        coverage: {
            reporter: ['text', 'json', 'html'],
        },
    },
})
