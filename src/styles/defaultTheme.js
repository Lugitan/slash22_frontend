import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

const theme = createTheme({
	palette: {
		primary: {
			main: "#011936",
		},
		secondary: {
			main: "#FFDA1A",
		},
		slotColors: {
			green: "#4CBB17",
			orange: "#EFB700",
			red: "#B81D13",
		},
	},
	typography: {
		fontFamily: ["Roboto", "Open Sans", "-apple-system", "sans-serif"].join(","),
		body2: {
			fontSize: "11px",
			[defaultTheme.breakpoints.up("sm")]: {
				fontSize: "14px",
			},
		},
	},
	overrides: {
		MuiTypography: {
			h6: {
				fontSize: "16px",
				[defaultTheme.breakpoints.up("sm")]: {
					fontSize: "24px",
				},
			},
			body1: "span",
		},
		MuiMenuItem: {
			root: {
				fontSize: "12px",
				[defaultTheme.breakpoints.up("sm")]: {
					fontSize: "24px",
				},
			},
		},
		MuiInputBase: {
			input: {
				fontSize: "12px",
				[defaultTheme.breakpoints.up("sm")]: {
					fontSize: "18px",
				},
			},
		},
	},
});

export default theme;
