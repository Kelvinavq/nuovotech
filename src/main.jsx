import React from "react";
import ReactDOM from "react-dom/client";

// configuration css
import "./css/config.css";

// routes import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import Home from "./pages/home/home";

// paths
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provides the previously created router for navigation */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
