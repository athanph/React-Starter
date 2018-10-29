import React from 'react'
import styled from 'styled-components'

import Nav from './Nav'

const HeadContainer = styled.header`
	padding: 1rem;
	text-align: center;
	background: #000;
`

function Header() {
	return (
		<HeadContainer>
			<h1>React Starter Kit</h1>
			<Nav />
		</HeadContainer>
	)
}

export default Header
