const webpackMerge = require('webpack-merge')

const clientConfig = env => {
	const envs = {
		development: 'dev',
		production: 'prod',
	}

	const environment = envs[env || 'development']
	const common = require('./webpack/webpack.common')
	const envConfig = require(`./webpack/webpack.${environment}.js`)

	return webpackMerge(common, envConfig)
}

module.exports = env => clientConfig(env)
