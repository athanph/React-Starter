import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Loadabler from '../utils/Loadabler'

const NoMatch = Loadabler({ loader: () => import('../components/pages/NoMatch') })
const Index = Loadabler({ loader: () => import('../components/pages/Index') })

const routes = (
	<Switch>
		<Redirect from="/index" to="/" />
		<Route path="/" exact component={Index} />
		<Route path="/about" exact render={() => <div>About Us</div>} />
		<Route component={NoMatch} />
	</Switch>
)
export default routes
