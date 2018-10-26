const merge = require('webpack-merge')
const common = require('./webpack.common.config.js')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')

module.exports = merge(common, {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.s(a|c)ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		clientLogLevel: 'error',
		compress: true,
		stats: 'errors-only',
		open: true,
		overlay: {
			warnings: true,
			errors: true,
		},
		// host: 'localhost',
		// port: 4000,
	},
	plugins: [new SimpleProgressWebpackPlugin({ format: 'expanded' })],
})
