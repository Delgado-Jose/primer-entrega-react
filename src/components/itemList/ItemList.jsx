/*import React from 'react'
import { Item } from '../item/Item'
export const ItemList = ({productos}) => {
  return (
    <div>
      {productos.map((producto) => {
        return(
            <Item key={producto.id} producto={producto}/>
        )
      })}
    </div>
  )
}*/
import React from 'react';
import { Item } from '../item/Item';

export const ItemList = ({ productos, onShowDetails }) => {
  return (
    <div>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} onShowDetails={onShowDetails} />
      ))}
    </div>
  );
};
