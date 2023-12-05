import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "normalize.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "./index.css";
import "./app.scss";


import { App } from "./app";
import { Home } from "./home";
import { Quiz } from "./quiz";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "quiz",
                element: <Quiz />
            }
        ]
    }

]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);