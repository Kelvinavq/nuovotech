import "./Style.css"
import Saldo from "../Saldo/Saldo";

const Depositar = () => {
  return (
    <div className="depositar">
      <Saldo />

      <div className="content">
        <h2>Depositar</h2>

        <div className="form">
          <form action="">
            <div className="grupo-input">
              <label htmlFor="medio">Seleccione el medio de pago</label>
              <select name="medio" id="medio">
                <option value="transferencia">Transferencia</option>
              </select>
            </div>


            <div className="grupo-input monto">
              <label htmlFor="monto">Ingrese el monto a depositar</label>
              <div className="input">
                <span>$</span>
                <input type="text" id="monto" name="monto" />
                <label htmlFor="">Min. 1 dólar</label>
              </div>
            </div>

            <div className="grupo-submit">
              <input type="submit" value="Enviar Solicitud" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Depositar;
