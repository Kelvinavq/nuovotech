import "./Style.css"
import logotipo from "../../../assets/images/nuovo.png"

const CallToAction = () => {
  return (
    <div className="container calltoaction">
      <div className="content">
        <img src={logotipo} alt="logotipo nuovotech" />

        <p>¡Únete a la revolución financiera con <strong>Nuovo</strong>! Regístrate hoy mismo para descubrir la comodidad de gestionar tu dinero de forma inteligente. Desde depósitos sin complicaciones hasta servicios personalizados, Nuovotech te ofrece una experiencia financiera moderna y segura. ¡No te pierdas la oportunidad de tomar el control de tu futuro financiero! Haz clic para comenzar ahora.</p>

        <button>Únete ahora</button>
      </div>
    </div>
  )
}

export default CallToAction
