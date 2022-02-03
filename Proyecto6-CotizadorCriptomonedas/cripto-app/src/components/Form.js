import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios'
import Error from './Error'

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 20px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326ac0;
    }
`;

const Form = ( {guardarMoneda, guardarCripto }) => {

    // state del listado de criptos
    const [ listadoCriptos, guardarCriptos ] = useState([]);
    const [ error, guardarError ] = useState(false);

    // Utiliza useMoneda
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de estados unidos' },
        { codigo: 'MXN', nombre: 'Pesos mexicanos' },
        { codigo: 'EUR', nombre: 'Euros' },
        { codigo: 'GBP', nombre: 'Libras esterlinas' }
    ]

    const [ moneda, SelectMonedas ] = useMoneda('Elige tu moneda', '', MONEDAS);
    const [ criptomoneda, SelectCriptomoneda ] = useCriptomoneda('Elige tu criptomoneda', '', 
    listadoCriptos);

    // Ejecutar llamado a la api 

    useEffect(() => {
        const getAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            console.log(resultado);
            guardarCriptos (resultado.data.Data);
        }
        getAPI();
    }, [] );

    const cotizarmoneda = e => {
        console.log('here');
        e.preventDefault();
        // Validar
        if (moneda === '' || criptomoneda === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // pasar datos al componente principal
        guardarMoneda(moneda);
        guardarCripto(criptomoneda);
    }

    return (
        <form
            onSubmit={cotizarmoneda}
        >
            { error ? <Error error="Todos los campos son obligatorios" /> : null }
            <SelectMonedas />
            <SelectCriptomoneda />
            <Boton
                type="submit"
                value="Calcular" />
        </form>
    );
}
 
export default Form;