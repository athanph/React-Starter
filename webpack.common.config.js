const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'dist')
var APP_DIR = path.resolve(__dirname, './src')

const config = {
	// 'entry' is where the application starts executing
	// and webpack starts bundling
	entry: {
		main: `${APP_DIR}/index.js`,
	},
	output: {
		// `path` is the folder where Webpack will place your bundles
		path: BUILD_DIR,
		// `publicPath` is where Webpack will load your bundles from (optional)
		publicPath: '/',
		// `filename` provides a template for naming your bundles (remember to use `[name]`)
		filename: '[name].[hash].js',
		// `chunkFilename` provides a template for naming code-split bundles (optional)
		chunkFilename: '[name].[hash].bundle.js',
	},
	module: {
		rules: [
			// rules for modules (configure loaders, parser options, etc.)
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
		new HtmlWebPackPlugin({
			template: './public/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
			inject: true,
		}),
		new CleanWebpackPlugin(['dist']),
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
	},
}

module.exports = config
