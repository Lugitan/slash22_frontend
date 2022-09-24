import PropTypes from "prop-types";
import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import IOSSwitch from "./iOSSwitch";
import NatureScore from "./NatureScore";

const StyledGrid = styled(Grid)({
	width: "100%",
});
function LabeledSwitch(props) {
	const { label, score, handleChecked } = props;

	const setChecked = (e) => {
		handleChecked(e.target.checked, score, label);
	};

	return (
		<StyledGrid item container direction="row" spacing={2}>
			<Grid item xs={6} sx={{ textAlign: "left" }}>
				<Typography variant="body1">{label}</Typography>
			</Grid>
			<Grid item xs={3} container>
				<NatureScore label={`+${score}`} />
			</Grid>
			<Grid item xs={3} sx={{ textAlign: "right" }}>
				<IOSSwitch onChange={setChecked} />
			</Grid>
		</StyledGrid>
	);
}

LabeledSwitch.propTypes = {
	handleChecked: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	score: PropTypes.number.isRequired,
};

export default LabeledSwitch;
