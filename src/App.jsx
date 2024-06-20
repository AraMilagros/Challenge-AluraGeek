import React from 'react'
import Header from './components/Header';
import Productos from './pages/Productos'
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import './assets/css/estilos.css';

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Productos />
                <Formulario />
            </main>
            <Footer />
        </> 
    )
}