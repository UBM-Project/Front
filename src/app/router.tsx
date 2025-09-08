// src/app/routes.tsx
import { createBrowserRouter } from "react-router";
import App from "./App";
import LandingPage from "../pages/LandingPage/LandingPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <LandingPage /> },
        ],
    },
]);
