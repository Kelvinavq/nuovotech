import "./Style.css";
import logotipo from "../../assets/images/nuovo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Register_Form = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div className="register">
      <form action="/user/dashboard">
        <div>
          <div className="content">
            <img src={logotipo} alt="logotipo nuovotech" />
            <p>Regístrate para comenzar</p>
          </div>

          <div className="inputs">
            <div className="grupo-input">
              <label htmlFor="name">Nombre completo</label>
              <input
                type="text"
                placeholder="Nombre/s y Apellido/s"
                id="name"
              />
            </div>

            <div className="grupo-input">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                placeholder="Ingresa tu correo electrónico"
                id="email"
              />
            </div>

            <div className="grupo-input ">
              <label htmlFor="phone">Teléfono</label>
              <PhoneInput
                country={"ve"}
                value={phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="grupo-input">
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                placeholder="Ingresa tu dirección"
                id="address"
              />
            </div>

            <div className="submit">
              <input type="submit" value="Crear Cuenta" />
            </div>

            <div className="enlace">
              <p>
                ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register_Form;
