import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'
import PropTypes from 'prop-types'

function App() {

  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarPregunta, actualizarPregunta ] = useState(true);
  const [ lstGastos, guardarGastos ] = useState([]);

  const [ gasto, guardarForm ] = useState({});
  const [ gastoNuevo, crearGastoNuevo ] = useState(false);

  // Actualiza restante 
  useEffect( () => {
    if(gastoNuevo) {

      // Agrega nuevo presupuesto
      guardarGastos([
        ...lstGastos,
        gasto]);
      
      const presuRestante = restante - gasto.gasto;
      guardarRestante(presuRestante);

    }
  }, [gasto]);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          { mostrarPregunta ?           
            ( <Pregunta 
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta} /> )
          : ( <div className="row">
            <div className="one-half column">
              <Formulario 
                guardarForm={guardarForm}
                crearGastoNuevo={crearGastoNuevo}
              />
            </div>
            <div className="one-half column">
              <Listado 
                lstGastos={lstGastos}
              />
              <ControlPresupuesto 
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div> ) }
        </div>
      </header>
    </div>
  );
}

export default App;
