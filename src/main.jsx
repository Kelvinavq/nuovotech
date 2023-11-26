import React from "react";
import ReactDOM from "react-dom/client";

// configuration css
import "./css/config.css";

// routes import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import Home from "./pages/Home/Index";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/User/Dashboard";
import Retiros from "./pages/User/Retiros";
import Depositos from "./pages/User/Depositos";
import Perfil from "./pages/User/Ajustes_Perfil";
import Ajustes_Verificacion from "./pages/User/Ajustes_Verificacion";
import Ajustes_Seguridad from "./pages/User/Ajustes_Seguridad";

// paths
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Register />,
  },
  {
    path: "/user/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/user/retirar",
    element: <Retiros />,
  },
  {
    path: "/user/depositar",
    element: <Depositos />,
  },
  {
    path: "/user/ajustes/perfil",
    element: <Perfil />,
  },
  {
    path: "/user/ajustes/verificacion",
    element: <Ajustes_Verificacion />,
  },
  {
    path: "/user/ajustes/seguridad",
    element: <Ajustes_Seguridad />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provides the previously created router for navigation */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
