const mix = require('laravel-mix');
require('laravel-mix-nunjucks')
const min = mix.inProduction() ? '.min' : '';

// mix.webpackConfig({ devtool: "inline-source-map" }); //TODO: check it for global css source map

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {

    mix.options({
        terser: {
            extractComments: false,
        },
        processCssUrls: false
    });

    mix.js('src/js/main.js', `dist/assets/js/main${min}.js`)
        .sass('src/scss/main.scss', `dist/assets/css/main${min}.css`).sourceMaps()
        .njk('src/html', 'dist/', {
            ext: '.html',
            marked: null,
            watch: true,
            block: 'content',
            envOptions: {
                watch: true,
                noCache: true
            },
            manageEnv: (nunjucks) => { },
        })
        /* .postCss('src/scss/tailwind.css', `dist/assets/css/tailwind${min}.css`, [
            require('tailwindcss'),
        ]) */
        .copy('src/img', 'dist/assets/img')
        .copy('src/font', 'dist/assets/font')
        .copy('src/vendor', 'dist/assets/vendor');
}  