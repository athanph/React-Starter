import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Loadabler from '../utils/Loadabler'

const NoMatch = Loadabler({
	loader: () => import('../components/pages/NoMatch'),
	modules: ['../components/pages/NoMatch'],
	webpack: () => [require.resolveWeak('../components/pages/NoMatch')],
})
const Index = Loadabler({
	loader: () => import('../components/pages/Index'),
	modules: ['../components/pages/Index'],
	webpack: () => [require.resolveWeak('../components/pages/Index')],
})

export const Routes = [
	{
		path: '/',
		exact: true,
		component: Index,
	},
	{
		path: '/about',
		component: NoMatch,
	},
]

const renderRoutes = (
	<Switch>
		<Redirect from="/index" to="/" />
		{Routes.map(({ path, exact, component: Component, ...rest }) => (
			<Route
				key={path}
				path={path}
				exact={exact}
				render={props => <Component {...props} {...rest} />}
			/>
		))}
		<Route component={NoMatch} />
	</Switch>
)
export default renderRoutes
