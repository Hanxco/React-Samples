import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    background-color: #e2943a;
    padding: 10px;
    font-weight: bold;
    color: #ffffff;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', Serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>
                {titulo}
            </TextoHeader>
        </ContenedorHeader>
     );
}
 
export default Header;