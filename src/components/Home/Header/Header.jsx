import device from "../../../assets/images/frame.png";
import "./Style.css";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="left">
          <h2>Mueve y usa tu dinero como y cuando quieras</h2>
          <p>
            Trae tu dinero de otras billeteras, recibe pagos y conviértelo en
            moneda local con una cuenta en dólares conectada con el mundo.
          </p>
          <button>Únete ahora</button>
        </div>

        <div className="right">
          <img src={device} alt="device nuovotech" />
        </div>
      </div>
    </div>
  );
};

export default Header;
