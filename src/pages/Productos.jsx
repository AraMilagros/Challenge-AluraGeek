import React from 'react'
import ItemProducto from '../components/ItemProducto';

export default function Productos(props) {
  
  // Una vez que el nuevo elemento es enviado desde Principal se manejara en la funcion actualizarProductos

  // Entonces, desde este componente, pasamos a ItemProducto una funcion actualizarProductos 
    // esta funcion recibira de parametros (en el componente ItemProducto) los duplicados de las listas de elementos
    //entonces en este componente agregaremos en la lista duplicada, el elemento nuevo que se paso desde Principal (que a su vez fue enviada desde Formulario)
    //tambien se envia el obj del elemento (nuevoProducto) para usarse en itemProducto en un useEfect
  const actualizarProductos = (lista, setLista) => {
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
