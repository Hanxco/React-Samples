import React from 'react';
import './carrito.css';
import Producto from "./producto";

const Carrito = ({carrito, agregarProducto}) => (

    <div className="carrito">
        <h2>Carrito de compra</h2>

        {carrito.length == 0 ? 
        <p>No hay elementos</p> : 
        carrito.map(producto => (
            <Producto 
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
        ))}
    </div>

);
 
export default Carrito;