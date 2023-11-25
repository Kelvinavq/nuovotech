import "./Style.css";
import logotipo from "../../assets/images/nuovo.png";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="login">
      <form action="">
        <div className="content">
          <img src={logotipo} alt="logotipo nuovotech" />
          <h2>Iniciar Sesión</h2>
        </div>

        <div className="inputs">
          <div className="grupo-input">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo electrónico"
            />
          </div>

          <div className="grupo-input">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <div className="submit">
            <Link to="/">¿Olvidaste tu contraseña?</Link>
            <input type="submit" value="Ingresar" />
          </div>
          <div className="enlace">
            <p>
            ¿Aún no tienes una cuenta? <Link to="/registro">Regístrate</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
