import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Button, CircularProgress } from "@mui/material";

import map from "../../images/map.png";
import { charStates, screens } from "../../../utils/constants";
import { useGetOutCar } from "../../../hooks/useTrash";

const Root = styled("div")({
	textAlign: "center",
});

const Map = styled("img")({
	marginTop: "20px",
	width: "100%",
	border: "1px solid grey",
	borderRadius: "15px",
	overflow: "hidden",
});

const EndRideButton = styled(Button)({
	width: "100%",
	background: "white",
});

function InCar(props) {
	const { handleChangeCharState, charId, trip } = props;
	const { isLoading, data, mutate } = useGetOutCar();

	const handleGetOutCar = async () => {
		await mutate({ characterId: charId, tripId: trip.id });
	};

	React.useEffect(() => {
		if (data && charStates.CarArrived) {
			handleChangeCharState(trip, charStates.Roam);
		}
	}, [data, handleChangeCharState, trip]);

	if (isLoading) {
		return <CircularProgress />;
	}

	return (
		<Root>
			<Map src={map} alt="navigation" />
			{/* <CarDisplay />
            <CarDetails />
            <RideDetails /> */}
			<EndRideButton variant="outlined" onClick={handleGetOutCar}>
				End Ride
			</EndRideButton>
		</Root>
	);
}

InCar.propTypes = {
	charId: PropTypes.string.isRequired,
	handleChangeCharState: PropTypes.func.isRequired,
	trip: PropTypes.shape({
		id: PropTypes.string,
	}).isRequired,
};

export default InCar;
