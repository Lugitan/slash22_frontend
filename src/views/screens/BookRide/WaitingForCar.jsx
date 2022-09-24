import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Grid, CircularProgress, Typography, Button } from "@mui/material";
import BookingSummary from "../../../components/BookingSummary";
import { useTrip, useGetInCar } from "../../../hooks/useTrip";
import { charStates, screens } from "../../../utils/constants";
import { useChar } from "../../../hooks/useCharacter";

const Root = styled(Grid)({
	width: "100%",
});

function WaitingForCar(props) {
	const { score, selectedItems, trip, charState, charId, handleChangeCharState } = props;
	const { isLoading, isError, data, refetch } = useTrip(trip.id);
	const { isLoading: charLoading, isError: charError, data: charData, refetch: charRefetch } = useChar(charId);
	const { isLoading: getInLoading, isError: getInError, data: getInData, mutate } = useGetInCar();

	React.useEffect(() => {
		if (!data && !isError) {
			refetch(trip.id);
		}
		if (charData) {
			if (charData.state === charStates.Ride) {
				handleChangeCharState(trip, charStates.Ride);
			}

			if (charData.state === charStates.TripFinished) {
				handleChangeCharState(trip, charStates.TripFinished);
			}
		}

		const checkCharStatus = setInterval(() => {
			if (
				(charData.state !== charStates.CarArrived || charData.state !== charStates.TripFinished) &&
				!charError
			) {
				charRefetch();
			}
		}, 1000);
		return () => {
			clearInterval(checkCharStatus);
		};
	}, [data, refetch, isError, trip.id, charData, charError, charLoading, charRefetch, handleChangeCharState, trip]);

	const handleGetInCar = async () => {
		if (data) await mutate({ characterId: charId, tripId: data.id });
	};

	if (!charData || charLoading) {
		return <CircularProgress />;
	}

	return (
		<Root container direction="column" justifyContent="center" alignItems="center">
			<Grid item>
				<BookingSummary score={score} selectedItems={selectedItems} />
			</Grid>
			{charData.state === charStates.Wait && (
				<>
					<Grid item sx={{ mt: 4 }}>
						<CircularProgress />
					</Grid>
					<Grid item sx={{ mt: 2 }}>
						<Typography variant="h6">
							{charState === charStates.Error ? "No Cars available" : "Waiting for car..."}
						</Typography>
					</Grid>
				</>
			)}
			{charData.state === charStates.CarArrived && (
				<Button variant="outlined" sx={{ mt: 2 }} onClick={handleGetInCar}>
					Pick up
				</Button>
			)}
			{charData.state === charStates.TripFinished && (
				<Button variant="outlined" sx={{ mt: 2 }} onClick={handleGetInCar}>
					End Ride
				</Button>
			)}
		</Root>
	);
}

WaitingForCar.propTypes = {
	score: PropTypes.number.isRequired,
	charState: PropTypes.number.isRequired,
	charId: PropTypes.string.isRequired,
	selectedItems: PropTypes.instanceOf(Array).isRequired,
	trip: PropTypes.shape({
		id: PropTypes.string,
	}).isRequired,
	handleChangeCharState: PropTypes.func.isRequired,
};

export default WaitingForCar;
