import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import HomePage from "./Pages/HomePage.jsx";
import Spacecrafts from "./Pages/Spacecrafts.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import Planets from "./Pages/PlanetsPage.jsx";
import SpacecraftInfoPage from "./Pages/SpacecraftInfoPage.jsx";
import BuildSpacecraftPage from "./Pages/BuildSpacecraftPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/spacecrafts",
    element: <Spacecrafts />,
  },
  {
    path: "/spacecrafts/:id",
    element: <SpacecraftInfoPage />,
  },
  {
    path: "/build-spacecraft",
    element: <BuildSpacecraftPage />,
  },
  {
    path: "/planets",
    element: <Planets />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
], {
  basename: "/Space-Travel-Project"
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
