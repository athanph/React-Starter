const path = require('path')
const glob = require('glob')

module.exports = {
	paths: {
		root: path.resolve(__dirname, '../'),
		entry: path.resolve(__dirname, '../', 'src/'),
		output: path.resolve(__dirname, '../', 'dist/'),
		template: path.resolve(__dirname, '../', 'public/index.html'),
		images: 'assets/images',
		fonts: 'assets/fonts',
		css: 'assets/css',
		js: 'assets/js',
	},
	entries: {
		main: '/index.js',
	},
	webappConfig: {
		logo: './src/assets/images/react-logo.png',
		prefix: 'assets/images/favicons/',
	},
	purgeCssConfig: {
		paths: glob.sync(`${path.join(__dirname, '../src')}/**/*`, { nodir: true }),
		whitelist: ['body'],
		whitelistPatterns: [],
		extensions: ['html', 'js'],
	},
}
