const path = require('path')

const webpack = require('webpack')
// const HtmlWebPackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WebappWebpackPlugin = require('webapp-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { ReactLoadablePlugin } = require('react-loadable/webpack')

const pkg = require('../package.json')
const settings = require('./webpack.settings')

// Configure Entries
const configureEntries = () => {
	let entries = {}
	for (const [key, value] of Object.entries(settings.entries)) {
		entries[key] = settings.paths.clientEntry + value
	}

	return entries
}

module.exports = {
	entry: configureEntries(),
	output: {
		path: settings.paths.clientOutput,
		filename: path.join(settings.paths.js, 'index.js'),
		chunkFilename: path.join(settings.paths.js, '[name].[hash].bundle.js'),
		publicPath: settings.paths.webpackServeUrl,
	},
	resolve: {
		modules: ['src', 'node_modules'],
		extensions: ['*', '.js', '.jsx', '.css', '.scss'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.eot(\?v=\d+.\d+.\d+)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							mimetype: 'application/font-woff',
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							mimetype: 'application/octet-stream',
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							mimetype: 'image/svg+xml',
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(jpe?g|png|gif|ico)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
						},
					},
				],
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'true',
		}),
		new ReactLoadablePlugin({
			filename: settings.paths.root + '/dist/react-loadable.json',
		}),
		// new HtmlWebPackPlugin({
		// 	template: settings.paths.template,
		// 	minify: {
		// 		removeComments: true,
		// 		collapseWhitespace: true,
		// 		removeRedundantAttributes: true,
		// 		useShortDoctype: true,
		// 		removeEmptyAttributes: true,
		// 		removeStyleLinkTypeAttributes: true,
		// 		keepClosingSlash: true,
		// 		minifyJS: true,
		// 		minifyCSS: true,
		// 		minifyURLs: true,
		// 	},
		// 	inject: true,
		// }),
		new WebappWebpackPlugin({
			logo: settings.webappConfig.logo,
			cache: true,
			prefix: settings.webappConfig.prefix,
			inject: 'force',
			favicons: {
				// options: https://github.com/itgalaxy/favicons#usage
				appName: pkg.name,
				appDescription: pkg.description,
				developerName: pkg.author.name,
				developerURL: pkg.author.url,
				path: settings.paths.clientOutput,
				icons: {
					coast: false,
					yandex: false,
				},
			},
		}),
		new CleanWebpackPlugin([settings.paths.clientOutput], {
			root: settings.paths.root,
		}),
		new StyleLintPlugin(),
	],
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
				styles: {
					test: /\.css$/,
					name: 'styles',
					chunks: 'all',
					enforce: true,
				},
			},
		},
		minimizer: [
			new TerserPlugin({
				cache: true,
				parallel: true,
				sourceMap: false, // set to true if you want JS source maps
			}),
			new OptimizeCSSAssetsPlugin({}),
		],
	},
}
