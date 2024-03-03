import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {router} from "./router";
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from "./hoc";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider>
        <RouterProvider router={router}/>
    </ThemeProvider>
);


