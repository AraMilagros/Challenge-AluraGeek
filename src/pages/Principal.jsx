import React, { act, useEffect, useState } from 'react'


import Productos from './Productos'
import Formulario from '../components/Formulario'

export default function Principal() {

    const [nuevoProducto, setNuevoProducto] = useState([]);
    const [estado, setEstado] = useState();

    const agregarNuevoProducto = (obj, bandera) => {
        console.log("PRINCIPAL")
        console.log(obj)
    }

    return (
        <main>
            <Productos />
            <Formulario enviar={agregarNuevoProducto} />
        </main>
    )
}
