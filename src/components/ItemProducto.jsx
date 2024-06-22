import React, { useEffect, useState } from 'react'

import game from '../assets/img/gameboy.jpg';

export default function ItemProducto() {

  const imgs = require.context('../assets/img/', true);
  const [listado, setListado] = useState([]);

  useEffect(() => {
    const conexionApi = async () => {

      try {
        const response = await fetch("http://localhost:3000/productos");
        const data = await response.json();
        setListado(data);
      } catch (err) {
        console.log("Error al obtener datos: ", err);
      }
    };

    conexionApi();
    console.log(listado)
  }, []);
  // src={logo(props.logo)}
  return (
    <>
      {
        listado.map((item, id) => {
          return (
            <div key={id} className='product__item'>
              <div className='product-img'>
                <img src={imgs(item.pathImg)} alt="img" />
              </div>
              <div className='product__text'>
                <h3 className='text--tittle'>{item.nombre}</h3>
                <div className='text--price-icon'>
                  <span className='text--price'>{item.precio}</span>
                  <span className='text-icon'>
                    <i className="fa-solid fa-trash"></i>
                  </span>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

{/* <div className='product__item'>
      <div className='product-img'>
        <img src={game} alt="img" />
      </div>
      <div className='product__text'>
        <h3 className='text--tittle'>Stormtrooper</h3>
        <div className='text--price-icon'>
          <span className='text--price'>$ 60,00</span>
          <span className='text-icon'>
            <i onClick={() => verListado} className="fa-solid fa-trash"></i>
          </span>
        </div>
      </div>
    </div> */}