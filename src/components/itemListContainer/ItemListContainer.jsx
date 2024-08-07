/*import React, {useState, useEffect} from 'react';
import './itemListContainer.css';
import { obtenerProductos } from '../../productos.js';
import { ItemList } from '../itemList/ItemList.jsx';

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      obtenerProductos().then(res => setProductos(res))
    }, [])

    return (
        <div className="container">
            <ItemList productos={productos}/>
        </div>
    );
}
 export default ItemListContainer;*/
 import React, { useState, useEffect } from 'react';
 import './itemListContainer.css';
 import { obtenerProductos } from '../../productos.js';
 import { ItemList } from '../itemList/ItemList.jsx';
 
 const ItemListContainer = ({ greeting, onShowDetails }) => {
   const [productos, setProductos] = useState([]);
 
   useEffect(() => {
     obtenerProductos().then(res => setProductos(res));
   }, []);
 
   return (
     <div className="container">
       <h2>{greeting}</h2>
       <ItemList productos={productos} onShowDetails={onShowDetails} />
     </div>
   );
 };
 
 export default ItemListContainer;
 
 