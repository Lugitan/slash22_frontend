import React from "react";
import PropTypes from "prop-types";
import { Skeleton, Box } from "@mui/material";

function LoadingSkeleton(props) {
	const { numElements, width, height } = props;

	const elements = [];
	for (let i = 0; i < numElements; i += 1) {
		elements.push(i);
	}

	return (
		<>
			{elements.map((el) => (
				<Box key={el} sx={{ mb: 1 }}>
					<Skeleton variant="rectangular" width={width} height={height} />
				</Box>
			))}
		</>
	);
}

LoadingSkeleton.propTypes = {
	numElements: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};

export default LoadingSkeleton;
