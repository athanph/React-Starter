import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MainContainer = styled.main`
	padding: 50px;
	text-align: center;
`

function Main(props) {
	return <MainContainer>{props.children}</MainContainer>
}

Main.propTypes = {
	children: PropTypes.node,
}

export default Main
