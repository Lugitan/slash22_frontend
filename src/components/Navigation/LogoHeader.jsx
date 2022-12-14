import React from "react";
import { styled } from "@mui/material/styles";

import { Grid, Typography } from "@mui/material";
import logo from "../../images/Text.png"

const Root = styled("div")({
	width: "100%",
	paddingTop: "20px",
});

export const LogoHeader = () => (
	<Root>
		<Grid container direction="column" alignItems="center" justifyContent="center">
			<Grid item>
				<Grid container direction="row" alignItems="center" justifyContent="flex-start">
					<Grid item xs={4}>
						<img sx={{ width: "60px" }} alt="qrcart-logo" src="logo.png" />
					</Grid>
					<Grid item xs={8}>
						{/* <Typography variant="h3" style={{color: "white"}}>
							Trash Hunter
						</Typography> */}
						<img src={logo} /> 
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	</Root>
);

export default LogoHeader;
