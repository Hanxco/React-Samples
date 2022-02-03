import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ModalContext = createContext();

function isNull(str) {
    var rettur = false;
    if (str === null || str === '') {
        rettur = true;
    }
    return rettur;
}

const ModalProvider = (props) => {

    const [ idReceta, guardarIdReceta ] = useState(null);
    const [ recetaSel, guardarReceta ] = useState({});
    const [lstIngredientes, guardarListadoIngredientes] = useState([]);

    function getIngredientes(recetaSel) {
        let ingredientes = [];
        console.log(recetaSel);
        for(let i=0; i<16; i++) {
            if (recetaSel[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{ recetaSel[`strIngredient${i}`] } - {recetaSel[`strMeasure${i}`] }</li>
                )
            }
        }
        guardarListadoIngredientes(ingredientes);
    }


    useEffect( () => {
        if (idReceta == null) return null;
        const obtenerReceta = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const resp = await axios.get(url);
            guardarReceta(resp.data.drinks[0]);
            getIngredientes(resp.data.drinks[0]);
        }
        obtenerReceta();
    }, [idReceta]);

    return (
        <ModalContext.Provider
            // Esta disponible en toda la app
            value={{
                recetaSel,
                lstIngredientes,
                guardarIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalProvider;