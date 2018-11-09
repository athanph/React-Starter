const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const settings = require('./webpack.settings')

module.exports = {
	entry: {
		server: settings.paths.serverEntry + '/index.js',
	},
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: settings.paths.serverOutput,
		filename: 'index.js',
		// publicPath: '/dist/server/',
		// library: 'app',
		libraryTarget: 'commonjs2',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				// use: ['babel-loader', 'eslint-loader'],
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
				},
			},
			{
				test: /(\.css|\.scss|\.sass)$/,
				loader: 'css-loader/locals',
			},
			{
				test: /\.eot(\?v=\d+.\d+.\d+)?$/,
				loader: 'url-loader?emitFile=false',
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?emitFile=false',
			},
			{
				test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
				loader: 'url-loader?emitFile=false',
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader?emitFile=false',
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				loader: 'file-loader?emitFile=false',
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'false',
		}),
		new CleanWebpackPlugin(['dist/server'], {
			root: settings.paths.root,
		}),
	],
}
