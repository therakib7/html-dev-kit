const mix = require('laravel-mix'); 
require('laravel-mix-nunjucks')
const min = Mix.inProduction() ? '.min' : ''; 
 
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
			// ext: '.html',
			// data: {},
			// marked: null,
			// envOptions: null,
			// manageEnv: (nunjucks) => {},
		})
		.postCss('src/scss/tailwind.css', `dist/assets/css/tailwind${min}.css`, [ 
			require('tailwindcss'),
		]) 
        .copy('src/imgs', 'dist/assets/imgs')
        .copy('src/fonts', 'dist/assets/fonts')
        .copy('src/vendor', 'dist/assets/vendor');
}  