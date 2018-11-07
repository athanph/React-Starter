import React from 'react'
import PropTypes from 'prop-types'
// import Progress from 'reactstrap/lib/Progress'

const logs = props => {
	// When the loader has errored
	if (props.error) {
		return <div className="fadeIn">Oops, Error! Please refresh your browser.</div>
	}

	// When the loader has taken longer than the timeout
	if (props.timedOut) {
		return (
			<div className="fadeIn">
				<p>Taking a long time than usual... Please wait.</p>
				{/* <Progress animated color="danger" value="50" /> */}
			</div>
		)
	}

	// When the loader has taken longer than the delay
	if (props.pastDelay) {
		return (
			<div>
				<p>Getting your data... Please wait.</p>
				{/* <Progress animated color="info" value="20" /> */}
			</div>
		)
	}

	// When the loader has just started
	return (
		<div className="fadeIn">
			<p>Loading....</p>
			{/* <Progress animated color="success" value="75" /> */}
		</div>
	)
}

const Loader = props => {
	return <div className="c-loader">{logs(props)}</div>
}

logs.propTypes = {
	error: PropTypes.bool,
	timedOut: PropTypes.bool,
	pastDelay: PropTypes.bool,
}

export default Loader
