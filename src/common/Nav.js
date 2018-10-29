import React from 'react'
import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

const NavList = styled.ul`
	list-style: none;
	padding: 0;
`
const NavItem = styled.li`
	display: inline-block;
`
const NavHref = styled(NavLink)`
	padding: 5px 10px;
	&.active {
		color: #666;
	}
`

function Nav() {
	return (
		<nav>
			<NavList>
				<NavItem>
					<NavHref exact to="/">
						Home
					</NavHref>
				</NavItem>
				<NavItem>
					<NavHref to="/about">About</NavHref>
				</NavItem>
			</NavList>
		</nav>
	)
}

export default Nav
