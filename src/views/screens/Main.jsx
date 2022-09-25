import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import TrashCard from "./../../components/DataDisplay/TrashCard";

const Root = styled("div")({
	width: "100%",
});
function Main(props) {
	const { currentTrash, setCurrentTrash } = props;
	const [counter, setCounter] = useState(0);

	console.log(currentTrash);

	const content = () => {
		if (currentTrash) {
			return <TrashCard currentTrash={currentTrash} setCurrentTrash={setCurrentTrash} />;
		} else {
			return <span style={{ color: "white" }}>Select Trash</span>;
		}
	};

	return (
		<Root>
			<div>{content()}</div>
		</Root>
	);
}

export default Main;
