import { useState } from 'react'
import {Button} from '../button/Button.jsx'
import './itemCount.css'
export const ItemCount = ({inicio, stock}) => {
    const [cantidad, setCantidad] = useState(inicio);

    const incremento = ()=>{
        if(cantidad < stock){
            setCantidad(cantidad+1)
        }
    }
    const decremento = ()=>{
        if(cantidad >1){
            setCantidad(cantidad-1)
        }
    }
  return (
    <>
        <div className ="contador">
            <Button clase="botonDecremento" funcion={decremento} texto="-"/>
            <h4 className='cantidad'>{cantidad}</h4>
            <Button clase="botonIncremento" funcion={incremento} texto="+"/>
            
        </div>
        <div className ="contador">
            <Button clase = "botonAgregar" texto="Agregar al Carrito"/>
        </div>
    </>
    
  )
}