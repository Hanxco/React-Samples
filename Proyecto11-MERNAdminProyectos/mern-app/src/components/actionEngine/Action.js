import React, { useState } from 'react';
import FormTask from '../tasks/FormTask';

const Action = () => {
    const [ statusBtn1, showButton1 ] = useState(false);
    
    const addNewPoint = e => {
        showButton1(true);
    }

    return (
        <div>
            <div class="container contenedor-actions">
                <div class="row justify-content-center">
                    <div class="col">
                        <button 
                            class="btn btn-styleh2"
                            onClick={() => addNewPoint()} >
                            Añadir nuevo punto
                        </button>
                    </div>
                    <div class="col">
                        <button class="btn btn-styleh1">Iniciar itinerario</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-styleh3">Compartir</button>
                    </div>
                </div>
            </div>
            { statusBtn1 ? <FormTask /> : null }
        </div>
    );
}

export default Action;
