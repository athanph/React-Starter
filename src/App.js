import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import './styles/main.scss'

import NoMatch from './pages/NoMatch'
import Index from './pages/Index'
import Header from './common/Header'
import Footer from './common/Footer'
import ErrorBoundary from './utils/ErrorBoundary'

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<main>
					<ErrorBoundary>
						<Switch>
							<Redirect from="/index" to="/" />
							<Route path="/" exact component={Index} />
							<Route path="/about" exact render={() => <div>About Us</div>} />
							<Route component={NoMatch} />
						</Switch>
					</ErrorBoundary>
				</main>
				<Footer />
			</>
		)
	}
}

export default App
