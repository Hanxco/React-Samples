import React from 'react';
import styled from '@emotion/styled'
import { transformUppercase } from '../helper';

const ResumenStyled = styled.div`
    padding: 1rem;
    text-align : center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    const { marca, year, plan } = datos;
    return ( 
        <ResumenStyled>
            <h2>Resumen de cotización</h2>
            <table name="tableCot">
                <tbody>
                <tr>
                    <td><b>Marca</b></td>
                    <td>{transformUppercase(marca)}</td>
                </tr>
                <tr>
                    <td><b>Año</b></td>
                    <td>{year}</td>
                </tr>
                <tr>
                    <td><b>Plan</b></td>
                    <td>{transformUppercase(plan)}</td>
                </tr>
                </tbody>
            </table>
        </ResumenStyled>
    );
}
 
export default Resumen;