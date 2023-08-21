import React from 'react';
import './Contactenos.css';
import { FaSms } from 'react-icons/fa';
import { FaRegTimesCircle } from 'react-icons/fa';
import ModalContactenos from '../modalContactenos/ModalContactenos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Contactenos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { iconoContactenos: true, leyendaContactenos: '' };
    this.ejecutarCambioIcono = this.ejecutarCambioIcono.bind(this);
    this.ocultarLeyenda = this.ocultarLeyenda.bind(this);
    this.mostrarLeyenda = this.mostrarLeyenda.bind(this);
  }

  ejecutarCambioIcono() {
    this.setState((state) => ({
      iconoContactenos: !state.iconoContactenos,
      leyendaContactenos: ''
    }));
  }

  cerrarModal = () => {
    return this.setState({ iconoContactenos: true });
  };

  mostrarMensajeExitoso = () => {
    toast.success('Gracias por dejarnos tu mensaje.', {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  };

  ocultarLeyenda = () => {
    return this.setState({ leyendaContactenos: '' });
  };

  mostrarLeyenda = () => {
    return this.setState({
      leyendaContactenos: (
        <div>
          <p className="leyendaContactenos">
            <b>Contáctenos</b>
          </p>
        </div>
      )
    });
  };

  render() {
    return (
      <div>
        {!this.state.iconoContactenos && (
          <div className="contenedorContactenos">
            <ModalContactenos
              cerrarModal={this.cerrarModal}
              mostrarMensajeExitoso={this.mostrarMensajeExitoso}
            ></ModalContactenos>
          </div>
        )}
        <div className="contenedorGeneralContactenos">
          {this.state.leyendaContactenos}
          {this.state.iconoContactenos ? (
            <FaSms
              className="botonContactenos"
              onClick={this.ejecutarCambioIcono}
              onMouseOver={this.mostrarLeyenda}
              onMouseLeave={this.ocultarLeyenda}
            />
          ) : (
            <FaRegTimesCircle
              onClick={this.ejecutarCambioIcono}
              className="botonX"
            />
          )}
          <ToastContainer autoClose={4000} />
        </div>
      </div>
    );
  }
}

export default Contactenos;
