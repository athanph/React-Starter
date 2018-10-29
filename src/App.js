import React, { Component } from 'react'

import routes from './routes'

import './styles/main.scss'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'

import ErrorBoundary from './utils/ErrorBoundary'

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<Main>
					<ErrorBoundary>{routes}</ErrorBoundary>
				</Main>
				<Footer />
			</>
		)
	}
}

export default App
