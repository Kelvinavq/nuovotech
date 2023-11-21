import "./Style.css";

// images
import seguridad from "../../../assets/images/seguridad.png";
import transacciones_rapidas from "../../../assets/images/transacciones-rapidas.png";
import comisiones from "../../../assets/images/comisiones.png";
import atencion from "../../../assets/images/atencion.png";


const Advantages = () => {
  return (
    <div className="container">

        <div className="advantages">

            <div className="content">
                <h2>Explora las ventajas que tienes con </h2>
                <strong>NuovoTech</strong>
                <p>Descubre un mundo de posibilidades financieras con NuovoTech, donde la innovación se encuentra con la comodidad. En nuestro espacio digital, puedes depositar fondos de manera segura, retirarlos con facilidad y realizar transferencias fluidas a otros usuarios.</p>
            </div>

            <div className="cards">
                <div className="card">
                    <div className="img">
                        <img src={seguridad} alt="seguridad integral icono" />
                    </div>

                    <div className="content">
                        <h2>Seguridad Integral</h2>
                        <p>Deposita con confianza sabiendo que NuovoTech prioriza la seguridad de tus fondos con las últimas medidas de protección.</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Advantages
