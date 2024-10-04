const mix = require('laravel-mix');

mix.react('resources/js/app.jsx', 'public/js')
   .sass('resources/css/app.css', 'public/css')
   .version();
