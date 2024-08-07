import React from 'react'
import './button.css'

export const Button = ({texto, clase, funcion}) => {
  return (
    <button className={clase} onClick={funcion}>{texto}</button>
  )
}