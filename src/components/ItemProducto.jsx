import React, { useEffect, useState } from 'react'

export default function ItemProducto(props) {

  const imgs = require.context('../assets/img/', true);
  const [listado, setListado] = useState([]);
  const [duplicado, setDuplicado] = useState([]);

  useEffect(() => {
    const conexionApi = async () => {

      try {
        const response = await fetch("http://localhost:3000/productos");
        const data = await response.json();
        setListado(data);
        setDuplicado(data);
      } catch (err) {
        console.log("Error al obtener datos: ", err);
      }
    };

    conexionApi();
  }, []);

  const eliminarProducto = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/productos/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const actualizar = duplicado.filter((item) => item.id !== id);
        setDuplicado(actualizar);
      }
    } catch (err) {
      console.log("Error conex al querer eliminar elemento. " + err);
    }
  }

  useEffect(() => {
    setListado(duplicado);
  }, [duplicado]);

  //este useEffect sera llamado cuando el obj nuevoProducto enviado desde otros componentes (Principal > Productos > ItemProducto) 
  // entonces, cuando nuevoProducto sufra algun cambio, se llamara a la funcion pasada desde Productos (actualizarProductos)
    // se enviara las listas duplicadas de los productos y una vez que se haya realizado, regresara para modificar la lista original

  useEffect(() => {
    props.actualizarProductos(duplicado, setDuplicado);
    setListado(duplicado)
  }, [props.nuevoProducto])

  return (
    <>
      {
        listado.map(item => {
          return (
            <div key={item.id} className='product__item'>
              <div className='product-img'>
                {/* <img src={imgs(item.pathImg)} alt="img" /> */}
                <img src={imgs(`./${item.pathImg}.jpg`)} alt="img" />
              </div>
              <div className='product__text'>
                <h3 className='text--tittle'>{item.nombre}</h3>
                <div className='text--price-icon'>
                  <span className='text--price'>{`$ ${item.precio}`}</span>
                  <span className='text-icon'>
                    <i className="fa-solid fa-trash"
                      onClick={() => eliminarProducto(item.id)}></i>
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