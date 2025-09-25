import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    plugins: [
        laravel({
            // Arahkan ke file input utama JavaScript dan CSS Anda
            input: ['resources/js/src/main.js'],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            // Pastikan alias '@' mengarah ke direktori src yang benar
            '@': fileURLToPath(new URL('./resources/js/src', import.meta.url))
        }
    }
});
