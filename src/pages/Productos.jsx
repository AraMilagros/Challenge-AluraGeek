import React from 'react'
import ItemProducto from '../components/ItemProducto'
export default function Productos() {
  return (
    <div className='container-product'>
      <h2 className='product__tittle'>Mis productos:</h2>
      <section className='product'>
        <ItemProducto />
        <ItemProducto />
        <ItemProducto />
        <ItemProducto />
        <ItemProducto />
        <ItemProducto />
        <ItemProducto />
        <ItemProducto />
        <ItemProducto />
        <ItemProducto />
        <ItemProducto />
        <ItemProducto />
      </section>
    </div>

  )
}
