import React from 'react'
import styled from 'styled-components'

import Logo from '../modules/Logo'
import Nav from '../modules/Nav'

const HeadContainer = styled.header`
	padding: 1rem;
	text-align: center;
	background: #000;
`

function Header() {
	return (
		<HeadContainer>
			<Logo />
			<Nav />
		</HeadContainer>
	)
}

export default Header
