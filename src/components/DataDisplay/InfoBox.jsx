import PropTypes from "prop-types";
import React from "react";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Root = styled("div")(() => ({
	display: "flex",
	flexDirection: "row",
	border: "1px solid lightGrey",
	borderRadius: "5px",
	padding: "10px",
	color: "grey",
	flexGrow: "1",
	flewWrap: "wrap",
	justifyContent: "center",
	margin: "0 auto 16px auto",
	minWidth: "250px",
	maxWidth: "850px",
}));

const InfoBox = (props) => {
	const { children } = props;
	return (
		<Root>
			<InfoOutlined style={{ marginRight: "5px" }} />
			<Typography variant="body2">{children}</Typography>
		</Root>
	);
};

InfoBox.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

InfoBox.defaultProps = {
	children: "Put info text here!",
};

export default InfoBox;
