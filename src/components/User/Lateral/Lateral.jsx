import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import usuarioIcon from "../../../assets/icons/usuario.png";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Lateral = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdownOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdownOutsideClick);

    return () => {
      document.removeEventListener("mousedown", closeDropdownOutsideClick);
    };
  }, []);

  return (
    <div className="lateral">
      <div className="profile">
        <div className="img">
          <img src={usuarioIcon} alt="" />
          <div className="dropdown" ref={dropdownRef}>
            <button onClick={toggleDropdown}>
              <KeyboardArrowDownIcon/>
            </button>
            {isOpen && (
              <div className="dropdown-content">
                <Link>Perfil</Link>
                <Link>Verificación</Link>
                <Link>Seguridad</Link>
                <Link>Ajustes</Link>
              </div>
            )}
          </div>
          <p>Nombre Apellido</p>
        </div>

        <div className="notification">
          <button>
            <NotificationsNoneOutlinedIcon />
          </button>
        </div>
      </div>
    </div>




















  );
};

export default Lateral;
