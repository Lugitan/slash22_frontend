import PropTypes from "prop-types";
import React from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";

const MenuBar = styled(AppBar)({
	position: "absolute",
	top: "auto",
	bottom: "0px",
	width: "367px",
	left: "9px",
	borderBottomLeftRadius: "30px",
	borderBottomRightRadius: "32px",
});

function MobileBottomMenu(props) {
	const { handleBottomRight } = props;

	const handleChangeScreen = (b) => {
		handleBottomRight(b);
	};
	return (
		<MenuBar color="primary">
			<Toolbar>
				<IconButton color="inherit" onClick={() => handleChangeScreen(false)}>
					<HomeIcon />
				</IconButton>
				<Box sx={{ flexGrow: 1 }} />
				<IconButton color="inherit" onClick={() => handleChangeScreen(true)}>
					<MapIcon />
				</IconButton>
				<Box sx={{ flexGrow: 1 }} />
				<IconButton color="inherit" onClick={() => handleChangeScreen(false)}>
					<AccountCircleIcon />
				</IconButton>
			</Toolbar>
		</MenuBar>
	);
}

MobileBottomMenu.propTypes = {
	handleBottomRight: PropTypes.func.isRequired,
};

export default MobileBottomMenu;
