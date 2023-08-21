import React, { useState, useEffect } from 'react';
import './Inicio.css';
import { obtenerProductos } from '../../utilitarios/obtenerProductos';
import Producto from '../producto/Producto';

const Inicio = () => {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    setProductos(await obtenerProductos());
  };

  useEffect(() => {
    getProductos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card-grid">
      {productos.map((producto) => (
        <Producto key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default Inicio;
