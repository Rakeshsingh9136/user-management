// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

// Define the configuration for Vite
export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx', // Main entry point for your React app
                'resources/css/app.css', // Your main CSS file (if any)
            ],
            refresh: true, // Enables automatic browser refresh
        }),
        react(), // Enable React plugin
    ],
    server: {
        host: 'localhost', // Change to your preferred host
        port: 3000, // Change to your preferred port
    },
});
