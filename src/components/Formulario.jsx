import React from 'react'


{/* <input id="inputName" className="formcontato__input"
  type="text" name="nombre"
  onChange={(e) => setNombre(e.target.value)}
  pattern='^[a-zA-Z ]+${3,}' title="Sólo letras. Mínimo 3 letras."
  required
/> */}
export default function Formulario() {

  const submit = () => {
    console.log('submit');
  }
  return (

    <div className='container-form'>
      <h2 className='form__tittle'>Agregar Producto:</h2>
      <form className="formulario" name="form" onSubmit={submit}>
        <input id="input--nombre" className='form--input' type='text' name="nombre" placeholder=' nombre...' />
        <input id="input-precio" className='form--input' type='number' name="precio" placeholder=' precio...' />
        <input id="input-imagen" className='form--input' type='text' name="imagen" placeholder=' imagen...' />

        <div className='form__btns'>
          <button id="btn-submit" type="submit" className="btn">Enviar</button>
          <button id="btn-limpiar" type="submit" className="btn">Limpiar</button>
        </div>
      </form>
    </div>
  )
}
