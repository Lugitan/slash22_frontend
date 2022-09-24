import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

import { charStates, screens } from "../../utils/constants";
import BookRide from "./BookRide/BookRide";
import InCar from "./BookRide/InCar";
import WaitingForCar from "./BookRide/WaitingForCar";
import MapScreen from "./MapScreen";

const Root = styled("div")({
	width: "100%",
});
function Main(props) {
	const {
		bottomRight,
		changeScreen,
		handleBottomRight,
		handleChangeCharState,
		charId,
		location,
		setLocation,
		charState,
		trip,
	} = props;
	const [score, setScore] = useState(0);
	const [selectedItems, setSelectedItems] = useState([]);

	const content = () => {
		if (charState === charStates.Wait)
			return (
				<WaitingForCar
					score={score}
					selectedItems={selectedItems}
					trip={trip}
					charState={charState}
					charId={charId}
					handleChangeCharState={handleChangeCharState}
				/>
			);
		if (charState === charStates.Ride)
			return <InCar handleChangeCharState={handleChangeCharState} charId={charId} trip={trip} />;
		return (
			<BookRide
				bottomRight={bottomRight}
				changeScreen={changeScreen}
				charId={charId}
				location={location}
				setLocation={setLocation}
				setScore={setScore}
				score={score}
				setSelectedItems={setSelectedItems}
				handleChangeCharState={handleChangeCharState}
				handleBottomRight={handleBottomRight}
			/>
		);
		// return <MapScreen handleBottomRight={handleBottomRight} />;
	};

	return (
		<Root>
			<div>{content()}</div>
		</Root>
	);
}

Main.propTypes = {
	bottomRight: PropTypes.bool.isRequired,
	charId: PropTypes.string,
	location: PropTypes.shape({
		latitude: PropTypes.number,
		longitude: PropTypes.number,
	}).isRequired,
	setLocation: PropTypes.func.isRequired,
	changeScreen: PropTypes.func.isRequired,
	handleChangeCharState: PropTypes.func.isRequired,
	handleBottomRight: PropTypes.func.isRequired,
	charState: PropTypes.number.isRequired,
	trip: PropTypes.shape({}).isRequired,
};

Main.defaultProps = {
	charId: "",
};

export default Main;
