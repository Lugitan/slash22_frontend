import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Grid, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

import { useStateMap } from "../../../Provider/MapProvider";
import { useAddTrip } from "../../../hooks/useTrip";
import BookingFormControl from "../../../components/BookingFormControl";
import { charStates, screens } from "../../../utils/constants";
import MobileMap from "../../../components/MobileMap";
import map from "../../images/map.png";

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

function BookRide(props) {
	const {
		changeScreen,
		charId,
		location,
		setLocation,
		bottomRight,
		handleBottomRight,
		handleChangeCharState,
		setScore,
		score,
		setSelectedItems,
	} = props;
	const [id, setId] = React.useState(charId);
	const [searchResult, setSearchResult] = React.useState("");
	const { markers } = useStateMap();
	const addTrip = useAddTrip();

	const handleInputChange = (e) => {
		setSearchResult(e.target.value);
	};

	const handleSubmit = (e) => {
		if (typeof e !== "number") {
			e.preventDefault();
			changeScreen(screens.bookRide);
			handleBottomRight(false);
		}
	};

	const handleBookCar = async () => {
		await addTrip.mutate({ characterId: id, destination: location });
	};

	React.useEffect(() => {
		if (addTrip.error) {
			// changeScreen(screens.waitingForCar);
			// handleChangeCharState({}, charStates.Error);
			console.log("error");
		}
		if (addTrip.data) {
			changeScreen(screens.waitingForCar);
			handleChangeCharState(addTrip.data, charStates.Wait);
		}
		setId(charId);
	}, [charId, addTrip, changeScreen, handleChangeCharState]);

	return (
		<Box component="form" onSubmit={handleSubmit}>
			{/* {bottomRight ? (
				<>
					<SearchGrid
						container
						spacing={1}
						direction="row"
						alignContent="center"
						alignItems="center"
						justifyContent="center"
					>
						<Grid item xs={9}>
							<SearchField
								id="location-input"
								name="location"
								label="Search location"
								size="small"
								type="text"
								variant="outlined"
								value={searchResult}
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={3}>
							<BookButton variant="outlined" color="primary" type="submit">
								Go
							</BookButton>
						</Grid>
					</SearchGrid>
					<StaticMap src={map} alt="phone-map" />
				</>
			) : ( */}
			<MobileMap
				width="332px"
				height="332px"
				searchResult={searchResult}
				setSearchResult={setSearchResult}
				location={location}
				setLocation={setLocation}
			/>
			{/* )} */}
			<BookingFormControl setScore={setScore} score={score} setSelectedItems={setSelectedItems} />
			<BookButton
				disabled={markers.length === 0}
				onClick={handleBookCar}
				variant="outlined"
				sx={{ margin: "15px auto 10px auto" }}
			>
				Book Car
			</BookButton>
		</Box>
	);
}

BookRide.propTypes = {
	bottomRight: PropTypes.bool.isRequired,
	changeScreen: PropTypes.func.isRequired,
	location: PropTypes.shape({
		latitude: PropTypes.number,
		longitude: PropTypes.number,
	}).isRequired,
	setLocation: PropTypes.func.isRequired,
	charId: PropTypes.string.isRequired,
	setScore: PropTypes.func.isRequired,
	handleBottomRight: PropTypes.func.isRequired,
	handleChangeCharState: PropTypes.func.isRequired,
	score: PropTypes.number.isRequired,
	setSelectedItems: PropTypes.func.isRequired,
};

export default BookRide;
