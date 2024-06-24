import React, { useEffect, useState } from 'react'
import ItemProducto from '../components/ItemProducto';

export default function Productos(props) {
  


  const actualizarProductos = (lista, setLista) => {
    console.log("PRODUCTOS")
    console.log(props.estado);
    console.log(props.nuevoProducto);
    if(props.estado){
      setLista([...lista, props.nuevoProducto]);
    }
  }

  return (
    <div className='container-product'>
      <h2 className='product__tittle'>Mis productos:</h2>
      <section className='product'>
        <ItemProducto actualizarProductos={actualizarProductos} nuevoProducto={props.nuevoProducto} />
      </section>
    </div>

  )
}
