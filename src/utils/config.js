const config = {};

config.backendURL = import.meta.env.VITE_APP_BACKEND_URL;
config.accessToken = import.meta.env.VITE_APP_MAPBOX_TOKEN;
config.iFrameURL = import.meta.env.VITE_APP_IFRAME_URL;

export default config;
