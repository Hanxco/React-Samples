import React from 'react';
import styled from '@emotion/styled';

const RESULTADODIV = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`;

const INFO = styled.p`
    color: #fff;
    font-size: 18px;
    span {
        font-weight: bold;
    }
`;

const PRECIO = styled.p`
    color: #fff;
    font-size: 30px;
`;

const Cotizacion = ( {resultado} ) => {
    if (Object.keys(resultado).length === 0) return null;

    console.log('Cotizacion');
    console.log(resultado);

    return ( 
        <RESULTADODIV>
            <INFO>El precio es: <span>{resultado.PRICE}</span></INFO>
            <INFO>Precio más alto del día: <span>{resultado.HIGHDAY}</span></INFO>
            <INFO>Precio más bajo del día: <span>{resultado.LOWDAY}</span></INFO>
            <INFO>Variación ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></INFO>
            <INFO>Última actualización: <span>{resultado.LASTUPDATE}</span></INFO>
        </RESULTADODIV>
    );
}
 
export default Cotizacion;