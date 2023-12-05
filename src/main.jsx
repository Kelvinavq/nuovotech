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

// admin
import Dashboard_a from "./pages/Admin/Dashboard_a";
import Retiros_admin from "./pages/Admin/Retiros_admin";
import Depositos_admin from "./pages/Admin/Depositos_admin";
import Verificaciones_admin from "./pages/Admin/Verificaciones_admin";
import Ajustes_admin from "./pages/Admin/Ajustes_admin";
import Verificacion from "./pages/Admin/Verificacion";
import Ajustes_a_Seguridad from "./pages/Admin/Ajustes_a_Seguridad";

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

  // admin
  {
    path: "/admin/dashboard",
    element: <Dashboard_a />,
  },
  {
    path: "/admin/retiros",
    element: <Retiros_admin />,
  },
  {
    path: "/admin/depositos",
    element: <Depositos_admin />,
  },
  {
    path: "/admin/verificaciones",
    element: <Verificaciones_admin />,
  },
  {
    path: "/admin/verificacion",
    element: <Verificacion />,
  },
  {
    path: "/admin/ajustes",
    element: <Ajustes_admin />,
  },
  {
    path: "/admin/ajustes/seguridad",
    element: <Ajustes_a_Seguridad />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provides the previously created router for navigation */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
