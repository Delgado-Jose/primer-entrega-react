import React from 'react';
import { Button } from '../button/Button.jsx';
import './itemDetail.css'; // Asegúrate de tener estilos para este componente
import { ItemCount } from '../itemCount/ItemCount.jsx';

const ItemDetail = ({ producto, onBack }) => {
  return (
    <div className="item-detail">
      <h2>{producto.descripcion}</h2>
      <img className="item-image" src={producto.imgUrl} alt={producto.descripcion} />
      <p>Precio: USD {producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <p>Categoria: {producto.categoria}</p>
      <ItemCount inicio={1} stock={producto.stock}/>
      <Button clase="back-button" funcion={onBack} texto="Volver a la lista" />
    </div>
  );
};

export default ItemDetail;
