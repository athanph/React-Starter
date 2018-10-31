const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')

const commonPaths = require('./paths')

module.exports = {
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
		contentBase: commonPaths.outputPath,
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
}
