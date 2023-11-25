import "./Style.css";

// images
import seguridad from "../../../assets/icons/seguridad.png";
import transacciones_rapidas from "../../../assets/icons/transacciones_rapidas.png";
import comisiones from "../../../assets/icons/comisiones.png";
import atencion from "../../../assets/icons/atencion_personalizada.png";


const Advantages = () => {
  return (
    <div className="container">

        <div className="advantages">

            <div className="content">
                <h2>Explora las ventajas que tienes con </h2>
                <strong>Nuovo</strong>
                <p>Descubre un mundo de posibilidades financieras con <strong>Nuovo</strong>, donde la innovación se encuentra con la comodidad. En nuestro espacio digital, puedes depositar fondos de manera segura, retirarlos con facilidad y realizar transferencias fluidas a otros usuarios.</p>
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

                <div className="card">
                    <div className="img">
                        <img src={transacciones_rapidas} alt="transacciones rapidas icono" />
                    </div>

                    <div className="content">
                        <h2>Transacciones Rápidas</h2>
                        <p>Experimenta la velocidad en tus transacciones: retira fondos o realiza transferencias de manera rápida.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="img">
                        <img src={comisiones} alt="comisiones icono" />
                    </div>

                    <div className="content">
                        <h2>Sin Comisiones Ocultas</h2>
                        <p>Disfruta de tus transacciones  sin preocupaciones, ya que no aplicamos comisiones ocultas.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="img">
                        <img src={atencion} alt="atencion icono" />
                    </div>

                    <div className="content">
                        <h2>Atención Personalizada</h2>
                        <p>Asistencia personalizada en todo momento, asegurando una experiencia tranquila y sin contratiempos.</p>
                    </div>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Advantages
