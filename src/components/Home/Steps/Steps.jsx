import "./Style.css"
import registro from "../../../assets/images/register.svg";
import deposito from "../../../assets/images/Deposito.svg";
import retiro from "../../../assets/images/Retiro.svg";

// icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Steps = () => {
  return (
    <div className='container'>
      <div className='steps'>

        <div className="card">
            <div className="img">
                <img src={registro} alt="" />
            </div>

            <div className="content">
                <h2>Regístrate</h2>
                <p>Tu puerta de entrada al mundo financiero digital. Regístrate ahora para disfrutar de una experiencia bancaria moderna, segura y sin complicaciones. Con <strong>Nuovotech</strong>, tu dinero está en buenas manos.</p>
            </div>

            <div className="btn">
                <button>
                    <ArrowRightAltIcon/>
                </button>
            </div>
        </div>

        <div className="card">
            <div className="img">
                <img src={deposito} alt="" />
            </div>

            <div className="content">
                <h2>Deposita</h2>
                <p>Haz crecer tu patrimonio con facilidad. Con Nuovotech, depositar dinero es tan sencillo como un clic.</p>
            </div>

            <div className="btn">
                <button>
                    <ArrowRightAltIcon/>
                </button>
            </div>
        </div>

        <div className="card">
            <div className="img">
                <img src={retiro} alt="" />
            </div>

            <div className="content">
                <h2>Retira</h2>
                <p>Tu dinero, tu elección. Retira fondos de manera conveniente y segura con <strong>Nuovotech</strong>. Sea cual sea tu necesidad, estamos aquí para hacer que acceder a tu dinero sea rápido y sin complicaciones.</p>
            </div>

            <div className="btn">
                <button>
                    <ArrowRightAltIcon/>
                </button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Steps
