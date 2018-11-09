/* eslint-disable no-console */
import React from 'react'
import express from 'express'
import cors from 'cors'
import { StaticRouter, matchPath } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'

import stats from '../../dist/react-loadable.json'
import App from '../client/App'
import templateFn from './template'
import { Routes } from '../client/routes'

const app = express()

app.use(cors())

app.use(express.static('dist/client', { maxAge: '1d' }))

app.get('*', (req, res, next) => {
	let modules = []

	const activeRoute = Routes.find(route => matchPath(req.url, route)) || {}

	const promise = activeRoute.fetchInitialData
		? activeRoute.fetchInitialData(req.path)
		: Promise.resolve()

	promise
		.then(data => {
			const context = { data }
			// console.log('data', context)

			const markup = renderToString(
				<Loadable.Capture report={moduleName => modules.push(moduleName)}>
					<StaticRouter location={req.url} context={context}>
						<App name="Jon" />
					</StaticRouter>
				</Loadable.Capture>
			)

			let bundles = getBundles(stats, modules)

			const template = templateFn(markup, data, bundles)

			res.send(template)
		})
		.catch(next)
})

const httpServer = Loadable.preloadAll().then(() => {
	app.listen(3000, err => {
		if (err) {
			console.error(err)
		} else {
			console.log('Server listening to port 3000')
		}
	})
})

export default httpServer
