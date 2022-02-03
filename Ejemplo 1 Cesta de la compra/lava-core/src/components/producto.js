import React from 'react';

const Producto = ({producto, productos, carrito, agregarProducto}) => {

    const { nombre, precio, id } = producto

    const selProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);
        agregarProducto(productos);
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <h4>{precio}</h4>
            { productos ? 
              ( <button 
                    type="button"
                    onClick={ () => selProducto(id) }>
                    Comprar 
                </button> ) :  
                ( <button 
                    type="button"
                    onClick={ () => eliminarProducto(id) }>
                    Eliminar 
                </button> )
            }
        </div>
    );
}
 
export default Producto;