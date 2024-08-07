import {useState, useEffect} from 'react'
import './itemDetailContainer.css'
import { obtenerProductoId } from '../../productos.js';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { Item } from '../item/Item.jsx';

const ItemDetailContainer = ({id}) => {
    const [producto, setProducto] = useState([]);
    useEffect(() => {
      obtenerProductoId(id).then(res => setProducto(res))
      
    }, [])

    return (
    <div className = "container">
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer