import React from 'react';
import { REACT_STRICT_MODE } from 'src/constants';
import App from './app';

export default function Main(): JSX.Element {
    return REACT_STRICT_MODE ? (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    ) : (
        <App />
    );
}
