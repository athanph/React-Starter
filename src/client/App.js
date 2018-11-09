import React, { Component } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import routes from './routes'
import ErrorBoundary from './utils/ErrorBoundary'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'

const Page = styled.div`
	${tw`h-screen bg-white`};
`
class App extends Component {
	render() {
		return (
			<Page>
				<Header />
				<Main>
					<ErrorBoundary>{routes}</ErrorBoundary>
				</Main>
				<Footer />
			</Page>
		)
	}
}

export default App
