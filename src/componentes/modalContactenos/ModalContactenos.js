import React from 'react';
import './ModalContactenos.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class ModalContactenos extends React.Component {
  render() {
    return (
      <div className="contenedorModal">
        <div className="encabezadoModal">
          <label className="tituloModal">
            <b>Déjanos un mensaje</b>
          </label>
        </div>
        <br />
        <label className="textoModal">
          Déjanos tus datos y el mensaje, e intentaremos responderte lo antes
          posible.
        </label>
        <br />
        <Formik
          initialValues={{ nombre: '', correo: '', telefono: '', mensaje: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.nombre) {
              errors.nombre = '* Requerido';
            }

            if (!values.correo) {
              errors.correo = '* Requerido';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)
            ) {
              errors.correo = '* Dirección de correo electrónico incorrecta';
            }

            if (!values.mensaje) {
              errors.mensaje = '* Requerido';
            }

            if (
              values.telefono &&
              (values.telefono > 99999999 || values.telefono < 10000000)
            ) {
              errors.telefono = '* Formato incorrecto debe contener 8 dígitos';
            }

            return errors;
          }}
          onSubmit={() => {
            this.props.cerrarModal();
            this.props.mostrarMensajeExitoso();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="formModal">
              <Field
                type="text"
                name="nombre"
                placeholder="Nombre y Apellidos"
                className="inputModal"
                maxLength="50"
              />
              <ErrorMessage
                name="nombre"
                component="span"
                className="spanError"
              />
              <Field
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                className="inputModal"
                maxLength="20"
              />
              <ErrorMessage
                name="correo"
                component="span"
                className="spanError"
              />
              <Field
                type="number"
                name="telefono"
                placeholder="Teléfono"
                className="inputModal"
                maxLength="8"
              />
              <ErrorMessage
                name="telefono"
                component="span"
                className="spanError"
              />
              <Field
                as="textarea"
                type="text"
                name="mensaje"
                placeholder="Mensaje"
                className="inputModal"
                maxLength="100"
              />
              <ErrorMessage
                name="mensaje"
                component="span"
                className="spanError"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="botonModal"
              >
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default ModalContactenos;
