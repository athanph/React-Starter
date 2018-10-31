const common = require('./webpack/webpack.common.config')
const webpackMerge = require('webpack-merge')

const envs = {
	development: 'dev',
	production: 'prod',
}

module.exports = env => {
	const environment = envs[env || 'development']
	const envConfig = require(`./webpack/webpack.${environment}.config.js`)

	return webpackMerge(common, envConfig)
}
