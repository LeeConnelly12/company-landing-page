const mix = require('laravel-mix')

mix.js("src/js/app.js", "dist/js")
    .setPublicPath('dist')
    .postCss("src/css/app.css", "dist/css", [
        require("tailwindcss"),
    ])