import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import imagen from './cryptomonedas.png'
import Form from './components/Form'
import Spinner from './components/Spinner'
import Cotizacion from './components/Cotizacion'
import axios from 'axios'

const Contenedor = styled.div`
  margin: 0 auto;
  max-width: 900px;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  margin-top: 5rem;
  max-width: 100%;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {

  const [moneda, guardarMoneda] = useState('');
  const [cripto,  guardarCripto] = useState('');
  const [resultado,  guardarResultado] = useState({});
  const [cargando,  cambiarCargando] = useState(false);

  useEffect( () => {

    const cotizarCripto = async () => {
      if (moneda === '') {
        return;
      }
      
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=${cripto},${moneda}`; 
      const response = await axios.get(url);
      cambiarCargando(true);
      
      guardarResultado(response.data.DISPLAY[cripto][moneda]);
      setTimeout(() => {
        cambiarCargando(false);
      }, 3000);
    }
    cotizarCripto();

  }, [moneda, cripto]);

  const componente = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado} />;

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="Imagen cripto" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Form 
          guardarMoneda={guardarMoneda}
          guardarCripto={guardarCripto}
        />
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
