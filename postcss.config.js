module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-extend'),
		require('postcss-mixins'),
		require('postcss-simple-vars'),
		require('postcss-nested-ancestors'),
		require('postcss-nested'),
		require('postcss-hexrgba'),
		require('tailwindcss')('./tailwind.config.js'),
		require('autoprefixer'),
	],
}
