import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el context
export const CategoriasContext = createContext();

// Crea el provider, es donde se encuentra las funciones y el state
const CategoriasProvider = (props) => {
    
    // Crea el state del context
    const [categorias, saveCategorias] = useState([]);

    // ejecutar llamada a la api
    useEffect(() => {
        const getCategorias = async () => {
            let url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const resp = await axios.get(url);
            saveCategorias(resp.data.drinks);
        }
        getCategorias();
    }, [] );

    return (
        <CategoriasContext.Provider
            // Esta disponible en toda la app
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;