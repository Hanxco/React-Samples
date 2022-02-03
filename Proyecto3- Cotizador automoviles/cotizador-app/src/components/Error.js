import React from 'react';
import styled from '@emotion/styled'

const ErrorStyled = styled.div`
    background-color: rgba(255,61,61,0.77);
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
    border-radius: 5px;
`;

const Error = ({error}) => {
    return ( 
        <ErrorStyled>{error}</ErrorStyled>
    );
}
 
export default Error;