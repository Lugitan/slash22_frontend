import PropTypes from "prop-types";
import React from "react";
import { Typography, Grid } from "@mui/material";
import LeafIcon from "./LeafIcon";

function NatureScore(props) {
	const { label, variant } = props;
	return (
		<Grid container direction="row" alignItems="center">
			<Grid item>
				<LeafIcon sx={{ color: "green", mr: 1 }} label="leaf" />
			</Grid>
			<Grid item>
				<Typography variant={variant}>{label}</Typography>
			</Grid>
		</Grid>
	);
}

NatureScore.propTypes = {
	label: PropTypes.string.isRequired,
	variant: PropTypes.string,
};

NatureScore.defaultProps = {
	variant: "body2",
};

export default NatureScore;
