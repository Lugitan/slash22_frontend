import React from 'react';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';

import './styles/index.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container!);
const app = <App />;
root.render(app);
