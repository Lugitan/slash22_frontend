import PropTypes from "prop-types";
import React from "react";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Root = styled("div")(() => ({
	display: "flex",
	flexDirection: "row",
	alignContent: "center",
	alignItems: "center",
	justifyContent: "space-around",
	minWidth: "250px",
	maxWidth: "850px",
}));

const Terms = (props) => {
	const { checked, setChecked, children } = props;
	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	return (
		<Root>
			<FormControlLabel
				control={<Checkbox checked={checked} onChange={handleChange} name="checkedB" color="primary" />}
				labelPlacement="end"
				label={
					<Typography variant="body2" style={{ marginInlineStart: "10px" }}>
						{children}
					</Typography>
				}
			/>
		</Root>
	);
};

Terms.propTypes = {
	checked: PropTypes.bool.isRequired,
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
	setChecked: PropTypes.func.isRequired,
};

Terms.defaultProps = {
	children: "Put Terms here!",
};

export default Terms;
