import React from 'react';
import { Button } from '../button/Button.jsx';
import './item.css';

export const Item = ({ producto, onShowDetails }) => {
  const handleButtonClick = () => {
    onShowDetails(producto.id);
  };

  return (
    <div>
      <h2>{producto.descripcion}</h2>
      <img className="vistaPrevia" src={producto.imgUrl} alt="Imagen" />
      <h4>Precio: USD {producto.precio}</h4>
      <Button clase="verDetalle" funcion={handleButtonClick} texto="Ver Detalles" />
    </div>
  );
};