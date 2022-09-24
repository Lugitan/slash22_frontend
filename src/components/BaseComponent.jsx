import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Root = styled("div")({});
function BaseComponent(props) {
	const { location } = props;
	return (
		<Root>
			<Typography variant="body2">{location}</Typography>
		</Root>
	);
}

BaseComponent.propTypes = {
	location: PropTypes.shape({
		latitude: PropTypes.number,
		longitude: PropTypes.number,
	}).isRequired,
};

export default BaseComponent;
