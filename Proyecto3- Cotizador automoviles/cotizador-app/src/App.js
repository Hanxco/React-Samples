import React, { useState } from 'react';
import Formulario from './components/formulario'
import Header from './components/header'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinner from './components/spinner'
import styled from '@emotion/styled'

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;


function App() {

  const [ resultado, guardarResultado ] = useState({});

  const { cotizacion, datos } = resultado;

  const [ cargando, guardarCargando ] = useState(false);

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />

      <ContenedorFormulario>
        <Formulario 
          guardarResultado={guardarResultado}
          guardarCargando={guardarCargando}
        />
        { datos && !cargando ? ( <Resumen 
                      datos={datos} /> ) : null}

        { cargando ? <Spinner /> : null }

        { !cargando ? 
          <Resultado cotizacion={cotizacion} /> 
        : null }
                  
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
