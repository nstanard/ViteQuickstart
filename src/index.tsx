import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Main from './main';
import './index.css';
import 'normalize.css';

// TODO: probably have to move browser router lower (providers file hopefully)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>,
);
