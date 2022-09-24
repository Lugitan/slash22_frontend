import PropTypes from "prop-types";
import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const Root = styled("div")({
	width: "100%",
	height: "100%",
});

function LandingPage(props) {
	const { handleStart } = props;
	return (
		<Root>
			<div>Display Landing Page here</div>
			<Button onClick={() => handleStart()}>Start</Button>
		</Root>
	);
}

LandingPage.propTypes = {
	handleStart: PropTypes.func.isRequired,
};

export default LandingPage;
