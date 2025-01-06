import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        open: true,
    },
    build: {
        modulePreload: true,
        target: 'esnext',
        outDir: 'dist'
    }
})