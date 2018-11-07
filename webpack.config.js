const webpackMerge = require('webpack-merge')

const common = require('./webpack/webpack.common')

const envs = {
	development: 'dev',
	production: 'prod',
}

module.exports = env => {
	const environment = envs[env || 'development']
	const envConfig = require(`./webpack/webpack.${environment}.js`)

	return webpackMerge(common, envConfig)
}
