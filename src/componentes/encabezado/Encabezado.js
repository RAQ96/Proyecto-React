import './Encabezado.css';
import logo from '../../images/logo.png';

function Encabezado(props) {
  return (
    <div className="contenedorEncabezado">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}

export default Encabezado;
