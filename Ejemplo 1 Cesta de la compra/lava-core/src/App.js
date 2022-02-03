import React, { Fragment, useState } from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import Producto from "./components/producto";
import Carrito from "./components/carrito";

function App() {

  // Crear listado de productos
  const [ productos, guardarProductos ] = useState([
    { id:1, nombre: "Camisa ReactJS", precio: 50},
    { id:2, nombre: "Camisa VueJS", precio: 20},
    { id:3, nombre: "Camisa JavaScript", precio: 10}
  ]);

  // state para carrito de compras
  const [ carrito, agregarProducto ] = useState([]);

  // Get current date
  const newDate = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo="Lava Audio"
      /> 

      <h1>Lista de productos</h1>

      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer newDate={newDate}/> 
    </Fragment>
  );
}

export default App;
