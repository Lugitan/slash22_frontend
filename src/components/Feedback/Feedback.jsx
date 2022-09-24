import React from "react";
import { styled } from "@mui/material/styles";
import { Rating, Typography, useMediaQuery, Button } from "@mui/material";

import config from "../../utils/config";

const Root = styled("div")({
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
});

const StarsContainer = styled("div")({
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
	marginRight: "15px",
});

const StyledRating = styled(Rating)(({ theme }) => ({
	"& .MuiRating-iconFilled": {
		color: theme.palette.slotColors.orange,
	},
	"& .MuiRating-iconHover": {
		color: theme.palette.slotColors.orange,
	},
}));

const Feedback = () => {
	const [rating, setRating] = React.useState(0);
	const mobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	const [clicked, setClicked] = React.useState(false);
	const onSetClicked = async () => {
		try {
			const resp = await fetch(`${config.backendURL}/api/stars/${rating}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (resp.status === 200) {
				setClicked(true);
			} else {
				throw Error(`[${resp.status}]`);
			}
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log(e);
		}
	};
	return (
		<Root className="box flex">
			<StarsContainer>
				<StyledRating
					name="simple-controlled"
					value={rating}
					size={mobile ? "medium" : "large"}
					onChange={(event, newValue) => {
						setRating(newValue);
					}}
				/>
			</StarsContainer>
			{!clicked ? (
				<Button
					disabled={rating === 0 || clicked}
					onClick={onSetClicked}
					color="primary"
					variant="outlined"
					size={mobile ? "small" : "medium"}
				>
					Bewerten
				</Button>
			) : (
				<div style={{ height: "36px", paddingTop: "9px" }}>
					<Typography variant="body2">Vielen Dank!</Typography>
				</div>
			)}
		</Root>
	);
};

export default Feedback;
