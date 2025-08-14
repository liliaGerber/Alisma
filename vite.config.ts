// vite.config.ts
import {defineConfig} from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    plugins: [react(), tailwindcss(), svgr({
        svgrOptions: {exportType: "default", icon: true, expandProps: 'start'},
    })],
    base: '/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    build: {
        chunkSizeWarningLimit: 1000, // in kB
    }

})
