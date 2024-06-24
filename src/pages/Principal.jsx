import React, { useState } from 'react'


import Productos from './Productos'
import Formulario from '../components/Formulario'

export default function Principal() {

    // COMENZANDO DESDE Formulario, AL MOMENTO DE CREAR UN ELEMENTO... 
    //Formulario tiene un props 'enviar' que recibe una funcion, que es agregarNuevoProducto
        // Entonces desde Formulario, se utiliza el props.agregarNuevoProducto y se le pasa como paramentros
        // el reciente elemento creado
    //Aqui en la función, se cambia el valor del usestate nuevoProducto con el objeto enviado desde formulario
    //Este useState se enviará al componente Productos
    const [nuevoProducto, setNuevoProducto] = useState([]);
    const [estado, setEstado] = useState();

    const agregarNuevoProducto = (obj, bandera) => {
        console.log("PRINCIPAL")
        console.log(obj)
        if(bandera){
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
