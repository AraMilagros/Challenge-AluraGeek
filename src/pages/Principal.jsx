import React, { act, useEffect, useState } from 'react'


import Productos from './Productos'
import Formulario from '../components/Formulario'

export default function Principal() {

    const [nuevoProducto, setNuevoProducto] = useState([]);
    const [estado, setEstado] = useState();

    const agregarNuevoProducto = (obj, bandera) => {
        console.log("PRINCIPAL")
        console.log(obj)
        if(bandera){
            console.log("desde dentro de la funcion")
            setNuevoProducto(obj);
            setEstado(bandera);
        }
    }

    return (
        <main>
            <Productos nuevoProducto={nuevoProducto} estado={estado} />
            <Formulario enviar={agregarNuevoProducto} />
        </main>
    )
}
