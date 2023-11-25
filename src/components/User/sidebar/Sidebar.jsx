import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Style.css";

import InicioIcon from "../../../assets/icons/Home.svg";
import DepositoIcon from "../../../assets/icons/Depositos.svg";
import RetirosIcon from "../../../assets/icons/Retiros.svg";
import AjustesIcon from "../../../assets/icons/Ajustes.svg";
import LogoutIcon from "../../../assets/icons/Logout.svg";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname ? "active" : "";
  };

  return (
    <div className="sidebar">
      <div className="items">
        <div className={`item i-dashboard ${isActive("/user/dashboard")}`}>
          <div className="icon">
            <Link to="/user/dashboard">
              <img src={InicioIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className={`item i-retirar ${isActive("/user/retirar")}`}>
          <div className="icon">
            <Link to="/user/retirar">
              <img src={RetirosIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className={`item i-depositar ${isActive("/user/depositar")}`}>
          <div className="icon">
            <Link to="/user/depositar">
              <img src={DepositoIcon} alt="" />
            </Link>
          </div>
        </div>
        <div
          className={`item i-ajustes ${isActive(
            "/user/ajustes/perfil"
          )} ${isActive("/user/ajustes/verificacion")} ${isActive(
            "/user/ajustes/seguridad"
          )}`}
        >
          <div className="icon">
            <Link to="/user/ajustes/perfil">
              <img src={AjustesIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="icon">
            <Link>
              <img src={LogoutIcon} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
