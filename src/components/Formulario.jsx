import React, { useState } from 'react'


{/* <input id="inputName" className="formcontato__input"
  type="text" name="nombre"
  onChange={(e) => setNombre(e.target.value)}
  pattern='^[a-zA-Z ]+${3,}' title="Sólo letras. Mínimo 3 letras."
  required
/> */}
export default function Formulario() {

  const [nombre, setNombre] = useState();
  const [precio, setPrecio] = useState();
  const [pathImg, setPathImg] = useState();


  const agregarProducto = async () => {
    const conex = await fetch("http://localhost:3000/productos", {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: Math.random(),
        nombre: nombre,
        precio: precio,
        pathImg: pathImg
      })
    })
    const conexConvertida = conex.json();
    return conexConvertida;
  }


  const submitForm = (e) => {
    e.preventDefault();
    agregarProducto();
  }

  return (

    <div className='container-form'>
      <h2 className='form__tittle'>Agregar Producto:</h2>
      <form className="formulario" name="form" onSubmit={submitForm}>
        <input id="input--nombre" className='form--input' type='text' 
          name="nombre" placeholder=' nombre...' 
          // pattern='/^([a-zA-Z0-9_-]){1,16}$/+${3,}' title='Mínimo 3 carácteres' 
          onChange={(e) => setNombre(e.target.value)}    
          />
        <input id="input-precio" className='form--input' type='text' 
          name="precio" placeholder=' precio...' 
          pattern='[0-9]+' title='Sólo números' 
          onChange={(e)=>setPrecio(e.target.value)}
          />
        <input id="input-imagen" className='form--input' type='text' 
          name="imagen" placeholder=' imagen...' 
          onChange={(e)=>setPathImg(e.target.value)}  
          />

        <div className='form__btns'>
          <button id="btn-submit" type="submit" className="btn">Enviar</button>
          <button id="btn-limpiar" type="button" className="btn">Limpiar</button>
        </div>
      </form>
    </div>
  )
}
