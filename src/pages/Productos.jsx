import React, { useEffect, useState } from 'react'
import ItemProducto from '../components/ItemProducto';

export default function Productos(props) {
  
  return (
    <div className='container-product'>
      <h2 className='product__tittle'>Mis productos:</h2>
      <section className='product'>
        <ItemProducto />
      </section>
    </div>

  )
}
