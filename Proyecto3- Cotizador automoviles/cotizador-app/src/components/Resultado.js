import React from 'react';
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const ResultadoStyled = styled.p`
    margin-top: 2rem;
    text-align: center;
    background-color: rgb(127,224,237);
    padding: 1rem;
    border: 10px solid rgb(127,224,899);
`;

const Resultado = ({ cotizacion }) => {
    return ( 
        <ResultadoStyled>
            {cotizacion === undefined ? 
                'Elige marca, año y tipo de seguro' : 
                ( 
                    <TransitionGroup
                        component="p"
                        className="resultado"
                    >
                        <CSSTransition
                            classNames="resultado"
                            key={cotizacion}
                            timeout={{  enter: 500, exit: 500 }}
                        >
                            <p>EL TOTAL ES: {cotizacion} EUROS</p>
                        </CSSTransition>
                    </TransitionGroup>
                )
            }
        </ResultadoStyled>
    );
}
 
export default Resultado;