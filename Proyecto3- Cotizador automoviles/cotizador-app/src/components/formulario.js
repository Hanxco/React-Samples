import React, { useState } from 'react';
import styled from '@emotion/styled'
import Error from './Error'
import { getDifferenceYears, getPercentBranding, getPolicyType } from '../helper'

const CampoStyle = styled.div`
    padding: 5px;
    margin-bottom : 1rem;
    display: flex;
    align-items: center;
`;

const LabelStyle = styled.label`
    flex: 0 0 100px;
`;

const SelectStyle = styled.select`
    display: block;
    border: 1px solid #e1e1e1;
    padding: 1rem;
    width: 100%;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    transition-duration: background-color 3s ease;
    margin: 2rem;

    &:hover {
        background-color: #c9c9c9;
        cursor: pointer;
    }
`;

const Formulario = ({ guardarResultado, guardarCargando }) => {

    const [ datos, guardarDatos ] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [ error, guardarError ] = useState(false);

    const { marca, year, plan } = datos;

    const obtenerInfo = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    // Cuando presiona submit
    const cotizarSeguro = e => {
        e.preventDefault();
        if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        let precioBase = 200;

        // Obtener diferencia de años
        const yearDiff = getDifferenceYears(year);
        
        // por cada año hay que restar el 3%
        precioBase -= ( ( yearDiff  * 3 ) * precioBase ) / 100;
        precioBase = precioBase * getPercentBranding(marca);
        var planMan = getPolicyType(plan);
        precioBase = parseFloat(precioBase * planMan);

        guardarCargando(true);
        
        setTimeout(() => {
            guardarCargando(false);
            
            guardarResultado({
                cotizacion: precioBase,
                datos: datos
            });
        }, 3000);

    }

    return (
        <form
            onSubmit={cotizarSeguro}>

            { error === true ? <Error error="Campos obligatorios"/> : null }

            <CampoStyle>
                <LabelStyle>Marca</LabelStyle>
                <SelectStyle
                    name="marca"
                    value={marca}
                    onChange={obtenerInfo} >
                    <option value="">--- Seleccione ---</option>
                    <option value="honda">Honda</option>
                    <option value="bmw">BMW</option>
                    <option value="seat">Seat</option>
                </SelectStyle>
            </CampoStyle>

            <CampoStyle>
                <LabelStyle>Año</LabelStyle>
                <SelectStyle
                    name="year"
                    value={year}
                    onChange={obtenerInfo} >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option> 
                    <option value="2012">2011</option> 
                    <option value="2012">2010</option> 
                    <option value="2012">2009</option> 
                    <option value="2012">2008</option> 
                    <option value="2012">2007</option> 
                    <option value="2012">2006</option> 
                </SelectStyle>
            </CampoStyle>

            <CampoStyle>
                <LabelStyle>Plan</LabelStyle>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInfo} /> Básico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"} 
                    onChange={obtenerInfo} /> Completo
            </CampoStyle>

            <CampoStyle>
                <Button
                    type="submit">Cotizar
                </Button>
            </CampoStyle>
        </form>
    );
}
 
export default Formulario;