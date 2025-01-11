import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/dilruba-website/',
    server: {
        open: true,
    },
    build: {
        modulePreload: true,
        target: 'esnext',
        outDir: 'dist',
        sourcemap: true
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    }
})