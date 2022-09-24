import PropTypes from "prop-types";
import React from "react";
import { styled } from "@mui/material/styles";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Typography } from "@mui/material";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

const Title = styled(DialogTitle)(() => ({
	margin: "auto",
	textAlign: "center",
}));

const Body = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "0 16px 16px 16px",
	textAlign: "center",
});

const NoConnectionDialog = (props) => {
	const { open } = props;

	return (
		<Dialog aria-labelledby="simple-dialog-title" open={open}>
			<Title id="simple-dialog-title">Error</Title>
			<Body>
				<ReportProblemOutlinedIcon
					style={{
						width: "100px",
						height: "100px",
						marginBottom: "16px",
					}}
				/>
				<Typography variant="body2">Technical Dificulties. Please try again in a few moments.</Typography>
			</Body>
		</Dialog>
	);
};

NoConnectionDialog.propTypes = {
	open: PropTypes.bool.isRequired,
};

export default NoConnectionDialog;
