import PropTypes from "prop-types";
import React from "react";
import { Divider, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import LabeledSwitch from "./DataDisplay/LabeledSwitch";
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
	width: "100%",
});

function BookingFormControl(props) {
	const { score, setScore, setSelectedItems } = props;

	const handleChecked = (c, s, l) => {
		if (c) {
			setScore(score + s);
			setSelectedItems((items) => [...items, l]);
		} else {
			setSelectedItems((items) => [...items.filter((i) => i !== l)]);
			setScore(score - s);
		}
	};

	return (
		<Root>
			<Typography variant="h6" sx={{ mt: 1 }}>
				Booking Details
			</Typography>
			<Divider sx={{ mb: 1 }} />
			<StyledGrid container direction="column" alignItems="center" justifyContent="flex-start" spacing={1}>
				<LabeledSwitch label="Public Pickup" score={25} handleChecked={handleChecked} />
				<LabeledSwitch label="Optimal Start" score={15} handleChecked={handleChecked} />
				<LabeledSwitch label="Optimal Dropoff" score={15} handleChecked={handleChecked} />
				<LabeledSwitch label="Optimal Route" score={10} handleChecked={handleChecked} />
			</StyledGrid>
			<Divider sx={{ mt: 1, mb: 1 }} />
			<Grid container direction="row" justifyContent="flex-end">
				<Grid item xs={6}>
					<NatureScore label={`Score: ${score}`} />
				</Grid>
			</Grid>
		</Root>
	);
}

BookingFormControl.propTypes = {
	score: PropTypes.number.isRequired,
	setScore: PropTypes.func.isRequired,
	setSelectedItems: PropTypes.func.isRequired,
};

export default BookingFormControl;
