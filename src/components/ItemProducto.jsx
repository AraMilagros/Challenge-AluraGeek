import React from 'react'

import game from '../assets/img/gameboy.jpg';

export default function ItemProducto() {
  return (
    <div className='product__item'>
      <div className='product-img'>
        <img src={game} alt="img" />
      </div>
      <div className='product__text'>
        <h3 className='text--tittle'>Stormtrooper</h3>
        <div className='text--price-icon'>
          <span className='text--price'>$ 60,00</span>
          <span className='text-icon'>
            <i class="fa-solid fa-trash"></i>
          </span>
        </div>
      </div>
    </div>
  )
}
