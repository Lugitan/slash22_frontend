import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Divider, Grid, Typography, Chip } from "@mui/material";
import NatureScore from "./DataDisplay/NatureScore";

const Root = styled("div")({
	width: "100%",
	border: "1px solid grey",
	borderRadius: "15px",
	padding: "0 15px 0 15px",
	marginTop: "15px",
	background: "white",
});

const StyledGrid = styled(Grid)({
	margin: "5px",
});

const StyledChip = styled(Chip)({
	margin: "5px",
	width: "150px",
});

function BookingSummary(props) {
	const { score, selectedItems } = props;
	return (
		<Root>
			<Typography variant="h6" sx={{ mt: 1 }}>
				Booking Details
			</Typography>
			<Divider sx={{ mb: 1 }} />
			<StyledGrid container direction="row" alignItems="center" justifyContent="space-evenly" spacing={1}>
				{selectedItems.map((label) => (
					<StyledChip key={label} label={label} color="success" />
				))}
			</StyledGrid>
			<Divider sx={{ mt: 1, mb: 1 }} />
			<Grid container direction="row" justifyContent="center">
				<Grid item>
					<NatureScore label={`Score: ${score}`} variant="h6" />
				</Grid>
			</Grid>
		</Root>
	);
}

BookingSummary.propTypes = {
	score: PropTypes.number.isRequired,
	selectedItems: PropTypes.instanceOf(Array).isRequired,
};

export default BookingSummary;
