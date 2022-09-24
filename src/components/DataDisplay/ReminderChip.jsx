import PropTypes from "prop-types";
import React from "react";
import { Chip, Typography } from "@mui/material";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import { styled } from "@mui/material/styles";

const StyledChip = styled(Chip)(() => ({
	marginBottom: "15px",
	fontSize: "0.75rem",
}));

const ReminderChip = (props) => {
	const { children } = props;
	return (
		<StyledChip
			icon={<NotificationImportantIcon />}
			label={<Typography variant="body2">{children}</Typography>}
			color="secondary"
		/>
	);
};

ReminderChip.propTypes = {
	children: PropTypes.PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

ReminderChip.defaultProps = {
	children: "Bitte Text einfügen!",
};

export default ReminderChip;
