const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')

const settings = require('./webpack.settings')

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
// class TailwindExtractor {
// 	static extract(content) {
// 		return content.match(/[A-Za-z0-9-_:\/]+/g) || [] //eslint-disable-line no-useless-escape
// 	}
// }

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /(\.css|\.scss|\.sass)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							minimize: true,
							sourceMap: true,
						},
					},
					{
						loader: 'resolve-url-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			path: settings.paths.dist,
			filename: path.join(settings.paths.css, '[name].[chunkhash].css'),
		}),
		new PurgecssPlugin({
			paths: settings.purgeCssConfig.paths,
			whitelist: settings.purgeCssConfig.whitelist,
			whitelistPatterns: settings.purgeCssConfig.whitelistPatterns,
			// extractors: [
			// 	{
			// 		extractor: TailwindExtractor,
			// 		extensions: ['html', 'js'],
			// 	},
			// ],
		}),
	],
}
