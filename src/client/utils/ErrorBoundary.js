import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {
	static propTypes = {
		children: PropTypes.node,
	}

	state = {
		hasError: false,
		error: null,
		errorInfo: null,
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true, error }
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			error: error,
			errorInfo: errorInfo,
		})
		// You can also log error messages to an error reporting service here
		// logErrorToMyService(error, errorInfo);
	}

	render() {
		const { error, errorInfo } = this.state

		if (errorInfo) {
			return (
				<div style={{ minHeight: 'auto' }}>
					<h3>Ooops! Something went wrong.</h3>
					<p>Please report to the awesome Dev Team so they can get the error fixed.</p>
					<div>
						<button onClick={() => window.location.reload()}>Refresh page</button>{' '}
						<button onClick={() => window.history.back()}>Go back</button>
					</div>
					<br />
					<details style={{ whiteSpace: 'pre-wrap' }}>
						{error && <p>The error: {error.toString()}</p>}
						<p>Where it occured: {errorInfo.componentStack}</p>
					</details>
				</div>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary
