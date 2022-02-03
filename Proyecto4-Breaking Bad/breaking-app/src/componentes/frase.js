import React from 'react';
import styled from '@emotion/styled'

const Contenedor = styled.div`
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    padding: 20px;
    @media (min-width: 992px) {
        margin-top: 10rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-align: right;
        color: #666;
    }
`;

const Frase = ( {fraseObj} ) => {
    var fraseTxt;
    var author;
    console.log("fraseObj");
    console.log(fraseObj);
    if (fraseObj.length > 0) {
        fraseTxt = fraseObj[0].quote;
        author = fraseObj[0].author;
    }

    return (
         fraseObj.length > 0 ? 
            ( <Contenedor>
                <h1>{ fraseTxt }</h1>
                <p> - {author} - </p>
            </Contenedor> )
            : null
    );
}
 
export default Frase;