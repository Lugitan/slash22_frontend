import React from "react";
import { styled } from "@mui/material/styles";

import { Toolbar, AppBar, Typography, Grid } from "@mui/material";

const Root = styled(AppBar)({});

const Title = styled(Typography)(({ theme }) => ({
	textAlign: "left",
	lineHeight: "2rem",
	flexGrow: 1,
	overflow: "hidden",
	[theme.breakpoints.down("sm")]: {
		fontSize: "1rem",
	},
}));

const CustomAppBar = () => (
	<Root position="static" color="transparent">
		<Toolbar>
			<Grid container direction="row" alignItems="center" alignContent="center" justifyContent="center">
				<Grid item xs={12} md={12}>
					<Title variant="h4" color="primary">
						Trash Hunter
					</Title>
				</Grid>
			</Grid>
		</Toolbar>
	</Root>
);

export default CustomAppBar;
