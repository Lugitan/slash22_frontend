import React from "react";
import { styled } from "@mui/material/styles";

import { Container, Typography, Grid, Link } from "@mui/material";

const Root = styled("div")(() => ({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "row",
	flex: 1,
	boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
}));

const Links = styled(Typography)({
	marginRight: "10px",
	marginTop: "3px",
	textAlign: "right",
});

const Footer = () => (
	<Root>
		<Container sx={{ marginLeft: "2px", paddingLeft: "2px" }}>
			<Grid container direction="row" alignItems="center" justifyContent="flex-start">
				<Grid item xs={2}>
					<Links variant="body2" sx={{ textAlign: "left" }}>
						<Link href=" " rel="noopener noreferrer" underline="none" style={{color: "white"}}>
							Legal Imprint
						</Link>
					</Links>
				</Grid>
				<Grid item xs={2}>
					<Links variant="body2" sx={{ textAlign: "left" }}>
						<Link href=" " rel="noopener noreferrer" underline="none" style={{color: "white"}}>
							Priavcy Policy
						</Link>
					</Links>
				</Grid>
			</Grid>
			<Grid container direction="row" alignItems="flex-end" justifyContent="center">
				<Grid item xs={4}>
					<Typography sx={{ margin: "5px 0 5px 0" }} variant="body2" style={{color: "white"}}>
						&copy; Trash Hunter 2022
					</Typography>
				</Grid>
				<Grid item xs={8} />
			</Grid>
		</Container>
	</Root>
);

export default Footer;
