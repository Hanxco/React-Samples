import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Error from './components/Error'
import Clima from './components/Clima'

function App() {
  
  const [ busqueda, guardarBusqueda ] = useState( {
    ciudad: '',
    pais: ''
  });

  const [ consultar, guardarConsultar ] = useState(false);
  const [ resultado, guardarResultado ] = useState({});
  const [ error, guardarError ] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const getApi = async () => {
      if (consultar) {
        const apiKey = '';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;
        const respuesta = await fetch(url);
        const response = await respuesta.json();
        guardarResultado(response);
        guardarConsultar(false);
        if (resultado.cod === '404') {
          guardarError(true);
        } else {
          guardarError(false); 
        }
      }
    }
    getApi();
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error error="No hay resultados" />;
  } else {
    if (Object.keys(resultado).length > 0)
    componente = <Clima resultado={resultado} />;
  }


  return (
    <Fragment>
      <Header 
        titulo="Clima app"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
