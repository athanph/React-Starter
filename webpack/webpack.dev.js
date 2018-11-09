const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')

const settings = require('./webpack.settings')

module.exports = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(css|scss|sass)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
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
	devtool: 'inline-source-map',
	devServer: {
		contentBase: settings.paths.clientOutput,
		index: 'index.html',
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
		port: 3000,
	},
	plugins: [new SimpleProgressWebpackPlugin({ format: 'expanded' })],
}
