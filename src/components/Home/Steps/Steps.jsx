import "./Style.css";
import { Link } from "react-router-dom";
import registro from "../../../assets/icons/registro.png";
import deposito from "../../../assets/icons/deposito.png";
import retiro from "../../../assets/icons/retiro.png";

// icons
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Steps = () => {
  return (
    <div className="container">
      <div className="steps">
        <div className="card">
          <div className="container">
            <img src={registro} alt="registro nuovo" />
          </div>

          <div className="content">
            <h2>Regístrate</h2>
            <p>
              Tu puerta de entrada al mundo financiero digital. Regístrate ahora
              para disfrutar de una experiencia bancaria moderna, segura y sin
              complicaciones. Con <strong>Nuovo</strong>, tu dinero está en
              buenas manos.
            </p>

            <Link to="/registro">
              <ArrowRightAltIcon />
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="container">
            <img src={registro} alt="registro nuovo" />
          </div>

          <div className="content">
            <h2>Deposita</h2>
            <p>
            Haz crecer tu patrimonio con facilidad. Con Nuovo, depositar dinero es tan sencillo como un clic. Te ofrecemos diferentes opciones para gestionar tu dinero de manera efectiva y segura.
            </p>

            <Link to="/registro">
              <ArrowRightAltIcon />
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="container">
            <img src={registro} alt="registro nuovo" />
          </div>

          <div className="content">
            <h2>Retira</h2>
            <p>
              Tu dinero, tu elección. Retira fondos de manera conveniente y
              segura con <strong>Nuovo</strong>. Sea cual sea tu necesidad,
              estamos aquí para hacer que acceder a tu dinero sea rápido y sin
              complicaciones.
            </p>

            <Link to="/registro">
              <ArrowRightAltIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
