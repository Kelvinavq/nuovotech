import logotipo from "../../../assets/images/nuovo.png";
import "./Style.css";

const Head = () => {
  return (
    <div className="head">

        <div className="logo">
            <img src={logotipo} alt="nuovotech logo" />
        </div>

        <div className="buttons">
            <button>Iniciar Sesión</button>
            <button>Registrarme</button>
        </div>
      
    </div>
  )
}

export default Head
