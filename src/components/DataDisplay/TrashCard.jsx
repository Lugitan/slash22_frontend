import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LeafIcon from "./LeafIcon";
import { usePickupTrash } from "../../hooks/useTrash";

export default function TrashCard(props) {
	const { currentTrash, setCurrentTrash } = props;
	const [disabled, setDisabled] = useState(false);
	const { mutate } = usePickupTrash();

	useEffect(() => {
		if (!currentTrash) {
      setDisabled(true)
		}
		return () => {
			setDisabled(false);
		};
	}, [currentTrash]);

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia component="img" height="140" image={currentTrash.image_url} alt="green iguana" />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{"Reported by: " + currentTrash.reported_by}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{"Report Number: " + currentTrash.report_number}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{"Reward: " + currentTrash.reward}
					<LeafIcon />
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size="small"
					disabled={disabled}
					onClick={() => {
						setDisabled(true);
					}}
				>
					Upvote
				</Button>
				<Button
					size="small"
					onClick={() => {
            setCurrentTrash(null)
						mutate({ id: currentTrash.id });
					}}
				>
					Pick Up
				</Button>
			</CardActions>
		</Card>
	);
}
