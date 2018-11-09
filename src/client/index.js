import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Loadable from 'react-loadable'

import App from './App'

import './assets/css/app.css'

const container = document.getElementById('root')
const renderMethod = __isBrowser__ ? ReactDOM.render : ReactDOM.hydrate //eslint-disable-line no-undef

Loadable.preloadReady().then(() => {
	renderMethod(
		<BrowserRouter>
			<App name="Athan" />
		</BrowserRouter>,
		container
	)
})
