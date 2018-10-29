import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import './styles/main.scss'

import NoMatch from './components/pages/NoMatch'
import Index from './components/pages/Index'
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
					<ErrorBoundary>
						<Switch>
							<Redirect from="/index" to="/" />
							<Route path="/" exact component={Index} />
							<Route path="/about" exact render={() => <div>About Us</div>} />
							<Route component={NoMatch} />
						</Switch>
					</ErrorBoundary>
				</Main>
				<Footer />
			</>
		)
	}
}

export default App
