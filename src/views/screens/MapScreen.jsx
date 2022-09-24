import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Grid, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

import { charStates, screens } from "../../utils/constants";
import map from "../images/map.png";

const SearchGrid = styled(Grid)({
	width: "100%",
	marginBottom: "20px",
});

const SearchField = styled(TextField)({
	width: "100%",
	borderRadius: "50px",
	background: "white",
	"& .MuiInputBase-root": {
		borderRadius: "50px",
	},
});

const StaticMap = styled("img")({
	border: "1px solid grey",
	borderRadius: "15px",
	overflow: "hidden",
	width: "100%",
});

const BookButton = styled(Button)({
	width: "100%",
	background: "white",
});

function MapScreen(props) {
	const { handleBottomRight, charState } = props;
	// const [searchResult, setSearchResult] = React.useState("");
	// const handleInputChange = (e) => {
	// 	setSearchResult(e.target.value);
	// };

	// const handleSubmit = (e) => {
	// 	if (typeof e !== "number") {
	// 		e.preventDefault();
	// 		changeScreen(screens.bookRide);
	// 	}
	// };

	return (
		<Box
			onClick={() => {
				handleBottomRight(false);
			}}
		>
			{/* <SearchGrid
				container
				spacing={1}
				direction="row"
				alignContent="center"
				alignItems="center"
				justifyContent="center"
			>
				<Grid item xs={9}>
					<SearchField
						disabled
						id="location-input"
						name="location"
						label="Search location"
						size="small"
						type="text"
						variant="outlined"
						// value={searchResult}
						// onChange={handleInputChange}
					/>
				</Grid>
				<Grid item xs={3}>
					<BookButton variant="outlined" color="primary">
						Go
					</BookButton>
				</Grid>
			</SearchGrid> */}
			<StaticMap src={map} alt="phone-map" />
		</Box>
	);
}

MapScreen.propTypes = {
	handleBottomRight: PropTypes.func.isRequired,
	charState: PropTypes.number.isRequired,
};

export default MapScreen;
