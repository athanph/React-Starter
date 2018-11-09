const path = require('path')
const glob = require('glob')

module.exports = {
	paths: {
		root: path.resolve(__dirname, '../'),
		clientEntry: path.resolve(__dirname, '../', 'src/client'),
		clientOutput: path.resolve(__dirname, '../', 'dist/client'),
		serverEntry: path.resolve(__dirname, '../', 'src/server'),
		serverOutput: path.resolve(__dirname, '../', 'dist/server'),
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
		logo: './src/client/assets/images/react-logo.png',
		prefix: 'assets/images/favicons/',
	},
	purgeCssConfig: {
		paths: glob.sync(`${path.join(__dirname, '../src/client')}/**/*`, { nodir: true }),
		whitelist: ['body'],
		whitelistPatterns: [],
		extensions: ['html', 'js'],
	},
	webpackServeUrl: 'http://localhost:3000/',
}
