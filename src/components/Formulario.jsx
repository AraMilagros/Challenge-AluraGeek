import React, { useState } from 'react'

export default function Formulario(props) {

  const [nombre, setNombre] = useState();
  const [precio, setPrecio] = useState();
  const [imagen, setImagen] = useState();
  const imagenesDisponibles = ['gameboy', 'headphones', 'playstation'];
  const URL ='https://alurageek-backend.onrender.com/api/items';

  const crearProducto = async () => {
    const conex = await fetch(URL, {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        // id: Math.random().toString(),
        nombre: nombre,
        precio: precio,
        imagen: imagen
      })
    })
    const conexConvertida = await conex.json();
    // console.log(conexConvertida);
    // return conexConvertida;
    creado();
    props.enviar(conexConvertida, true);
  }


  const submitForm = (e) => {
    e.preventDefault();
    crearProducto();
  }

  const creado = () => {
    const btn = document.getElementById('btn-submit');
    btn.classList.add('creado');
    btn.innerHTML = "Creado";
    setTimeout(() => {
      btn.classList.remove('creado');
      btn.innerHTML = "Enviar";
    }, 5000);

  }

  const limpiar = () => {
    setNombre('');
    setPrecio('');
    setImagen('');

    const inputs = document.querySelectorAll('.form--input');

    for (let index = 0; index < inputs.length; index++) {
      console.log(inputs[index].value);
      inputs[index].value = '';
    }
  }

  return (

    <div className='container-form'>
      <h2 className='form__tittle'>Agregar Producto:</h2>
      <form className="formulario" name="form" onSubmit={submitForm}>
        <input id="input--nombre" className='form--input' type='text'
          name="nombre" placeholder=' nombre...'
          // pattern='/{3,}/' title='Mínimo 3 carácteres' 
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input id="input-precio" className='form--input' type='number'
          name="precio" placeholder=' precio...'
          pattern='[0-9]+${3,}' title='Sólo números. Mínimo 3 números' 
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <input id="input-imagen" className='form--input' type='text'
          name="imagen" placeholder=' imagen...'
          onChange={(e) => setImagen(e.target.value)}
          // pattern='/{7,}/' title='Debe ingresar el nombre del archivo.extensión'  
          required
        />
        <span id="spanImage">Nota: en imagen se debe ingresar la url de la imagen.</span>

        <div className='form__btns'>
          <button id="btn-submit" type="submit" className="btn">Enviar</button>
          <button id="btn-limpiar" type="button" className="btn" onClick={limpiar}>Limpiar</button>
        </div>
      </form>
    </div>
  )
}
