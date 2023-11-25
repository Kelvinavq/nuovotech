import Saldo from "../Saldo/Saldo";
import Enlaces from "./Enlaces";
import "./Style.css";

import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import imgDni from "../../../assets/images/dni.png";
import ImgSelfie from "../../../assets/images/selfie.jpg";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Verificacion = () => {
  const openModal = (modalConfig) => {
    MySwal.fire({
      text: modalConfig.text ,
      imageUrl: modalConfig.imageUrl,
      imageWidth: 350,
      imageHeight: 250,
      imageAlt: "Imagen modal",
    });
  };
  return (
    <div className="ajustes_verificacion">
      <Saldo />

      <div className="content">
        <h2>Ajustes</h2>

        <Enlaces />

        <div className="estatus active">
          <div className="danger">
            <DangerousOutlinedIcon />
            <span>Su cuenta no se encuentra verificada</span>
          </div>

          <div className="text">
            <p>
              Para verificar su cuenta debe subir una foto de su documento de
              identidad legible y una foto selfie con el mismo.
              <ErrorOutlineOutlinedIcon />
            </p>
          </div>

          <div className="fotosVerificacion">
            <div className="fotoVerificacion">
              <label
                htmlFor="dni"
                onClick={() =>
                  openModal({
                    text: "Por favor, asegúrate de que la foto del DNI sea clara y legible. Todos los detalles, incluyendo el nombre, la fecha de nacimiento y la fotografía, deben ser fácilmente distinguibles. Evita sombras, desenfoques o reflejos que puedan afectar la calidad de la imagen.",
                    imageUrl: imgDni,
                  })
                }
              >
                Subir Foto DNI
              </label>
              <input type="file" name="dni" id="dni" />
            </div>

            <div className="fotoVerificacion">
              <label
                htmlFor="selfie"
                onClick={() =>
                  openModal({
                    text: "Por favor, asegúrate de que la foto del selfie sea clara y legible. Todos los detalles, incluyendo el rostro y cualquier información adicional requerida, deben ser fácilmente distinguibles. Evita sombras, desenfoques o reflejos que puedan afectar la calidad de la imagen.",
                    imageUrl: ImgSelfie,
                  })
                }
              >
                Subir Foto Selfie
              </label>
              <input type="file" name="selfie" id="selfie" />
            </div>
          </div>
        </div>

        <div className="verificado ">
          <VerifiedIcon />
          <p>TU CUENTA ESTÁ VERIFICADA.</p>
        </div>
      </div>
    </div>
  );
};

export default Verificacion;
