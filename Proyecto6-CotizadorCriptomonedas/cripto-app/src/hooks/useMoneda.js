import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    padding: 1rem;
    display: block;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none
    font-size: 1.2rem;
    margin-top: 1rem;
`;

const useMoneda = ( label, stateInicial, opciones ) => {

    // State de nuestro custom hook
    const [state, actualizaState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e => actualizaState(e.target.value) }
                value={state} >
                <option value="" key="">--- Selecione una opción ---</option>
                {opciones.map(opcion => (
                    <option 
                        key={opcion.codigo}
                        value={opcion.codigo} >
                        {opcion.nombre}
                    </option>
                ))}
            </Select>
        </Fragment>
    );

    // Retorna state, interfaz y fn que modifica el state
    return [state, Seleccionar, actualizaState];
}

export default useMoneda;