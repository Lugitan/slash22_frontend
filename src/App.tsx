import React, { useState } from "react";

import Div100vh from "react-div-100vh";
import { StyledEngineProvider, styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import Iframe from "react-iframe";

import config from "./utils/config";
import ErrorFallbackComponent from "./components/FallBackComponent";
import backend from "./api/backend.api";
import { Services, ServicesContext } from "./services/Services";
import AppBar from "./components/Navigation/Appbar";
import Footer from "./components/Navigation/Footer.jsx";
import Mobile from "./views/Mobile";
import Main from "./views/screens/Main";
import theme from "./styles/defaultTheme";
import { screens } from "./utils/constants";
import LandingPage from "./views/LandingPage";
import { MapProvider } from "./Provider/MapProvider";
import MainMap from "./components/MainMap";
import { useTrash } from "./hooks/useTrash";

const Root = styled("div")(() => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch",
	minHeight: "100%",
	overflow: "hidden",
  backgroundImage: "url(./BG.png)"
}));

const Content = styled("div")(() => ({
	height: "calc(100vh - 118px)",
	flex: 1,
}));

const FooterContainer = styled("div")(() => ({
	flexShrink: 0,
}));

function App() {
	const api = backend();
	const services = React.useMemo(() => Services(api), [api]);
	const queryClient = new QueryClient();
	const [bottomRight, setBottomRight] = useState(true);
	const [screen, setScreen] = useState(screens.map);
	const [characterState, setCharacterState] = useState(0);
	const [charId, setCharId] = useState("");
	const [displayLandingPage, setDisplayLandingPage] = useState(false);
	const [location, setLocation] = useState({});
	const [trip, setTrip] = useState({});
	const [currentTrash, setCurrentTrash] = useState(null);

	const handleBottomRight = (bool) => {
		setBottomRight(bool);
	};

	const handleChangeCharState = (t, s) => {
		setCharacterState(s);
		setTrip(t);
	};

	const handleStart = () => {
		setDisplayLandingPage(false);
	};

	const handleChangeScreen = (s) => {
		setScreen(s);
	};

	React.useEffect(() => {
    if(!currentTrash) {
      setBottomRight(true)
    }
	}, [currentTrash]);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<ServicesContext.Provider value={services}>
						<MapProvider>
							<Div100vh>
								<CssBaseline />
								<Root>
									<AppBar />
									<Content>
										{/* <ErrorBoundary FallBackComponent={ErrorFallbackComponent}> */}
										{displayLandingPage ? (
											<LandingPage handleStart={handleStart} />
										) : (
											<>
												<MainMap
													changeScreen={handleChangeScreen}
													setCurrentTrash={setCurrentTrash}
                          handleBottomRight={handleBottomRight}
												/>
												{/* <Iframe
                            url="http://20.79.222.49:5000/"
                            width="100%"
                            height="100%"
                            id="myId"
                            className="myClassname"
                            display="block"
                            position="relative"
                            styles={{ height: '800px' }}
                          /> */}
												<Mobile bottomRight={bottomRight} handleBottomRight={handleBottomRight}>
													<Main
                              currentTrash={currentTrash}
                              setCurrentTrash={setCurrentTrash}
                            />
												</Mobile>
											</>
										)}
										{/* </ErrorBoundary> */}
									</Content>
									<FooterContainer>
										<Footer />
									</FooterContainer>
								</Root>
							</Div100vh>
						</MapProvider>
					</ServicesContext.Provider>
				</QueryClientProvider>
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export default App;
