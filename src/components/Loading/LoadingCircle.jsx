import React from "react";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";

function LoadingCircle() {
	return (
		<Box sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
			<CircularProgress sx={{ m: "auto" }} color="primary" />
		</Box>
	);
}

export default LoadingCircle;
