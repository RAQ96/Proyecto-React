import React from 'react';
import './MenuSuperior.css';
import { Link } from 'react-router-dom';

function OpcionMenu(props) {
  return (
    <li className="opcionMenu">
      <Link to={props.opcion.enlace} className="linkMenu">
        {props.opcion.nombre}
      </Link>
    </li>
  );
}

export default function MenuSuperior(props) {
  const opcionesMenu = props.opciones.map((opcion) => (
    <OpcionMenu key={opcion.nombre.toString()} opcion={opcion} />
  ));

  return <div className="menuSuperior">{opcionesMenu}</div>;
}
