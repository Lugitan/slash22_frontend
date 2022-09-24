import PropTypes from "prop-types";
import React from "react";

const ErrorFallbackComponent = (props) => {
	const { error, componentStack, resetErrorBoundary } = props;
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<pre>{componentStack}</pre>
			<button onClick={resetErrorBoundary} type="button">
				Try again
			</button>
		</div>
	);
};

ErrorFallbackComponent.propTypes = {
	componentStack: PropTypes.shape.isRequired,
	error: PropTypes.shape({
		message: PropTypes.string,
	}).isRequired,
	resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallbackComponent;
