import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    output: 'server', // ← OJO AQUÍ: activa SSR en lugar de 'static'
    adapter: netlify({
        edge: false, // Usa funciones estándar, no edge functions
        split: false // Opcional, para que lo genere como una sola función
    })
});
