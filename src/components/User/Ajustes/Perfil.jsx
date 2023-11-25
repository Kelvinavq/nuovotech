import Saldo from "../Saldo/Saldo";
import Enlaces from "./Enlaces";
import foto from "../../../assets/icons/usuario.png";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const Perfil = () => {
  return (
    <div className="ajustes_perfil">
      <Saldo />

      <div className="content">
        <h2>Ajustes</h2>

        <Enlaces />

        <div className="imgPerfil">
          <div className="foto">
            <img src={foto} alt="" />
            <div className="input">
              <input type="file" name="foto" id="foto" />
              <label htmlFor="foto">
                <CameraAltOutlinedIcon />
              </label>
            </div>
          </div>

          <div className="text">
            <h2>Nombre Apellido</h2>
            <p>mail@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
