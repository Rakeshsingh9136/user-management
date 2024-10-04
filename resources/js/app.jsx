// Importing the necessary bootstrap file
import './bootstrap';

// Importing required libraries from Inertia.js and React
import { createInertiaApp } from '@inertiajs/inertia-react';
import { createRoot } from 'react-dom/client';

// Creating the Inertia app
createInertiaApp({
    // Resolving page components
    resolve: name => {
        // Importing all pages eagerly
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
        
        // Return the resolved page component
        return pages[`./Pages/${name}.jsx`];
    },
    // Setting up the app
    setup({ el, App, props }) {
        // Creating a root element for React to render into
        createRoot(el).render(<App {...props} />);
    }
});
