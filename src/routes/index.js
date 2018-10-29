import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import NoMatch from '../components/pages/NoMatch'
import Index from '../components/pages/Index'

const routes = (
	<Switch>
		<Redirect from="/index" to="/" />
		<Route path="/" exact component={Index} />
		<Route path="/about" exact render={() => <div>About Us</div>} />
		<Route component={NoMatch} />
	</Switch>
)
export default routes
