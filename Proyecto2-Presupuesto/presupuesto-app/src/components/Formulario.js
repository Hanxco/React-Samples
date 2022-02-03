import React, { useState } from 'react';
import shortid from 'shortid'
import PropTypes from 'prop-types'
import Error from './Error'

const Formulario = ({ guardarForm, crearGastoNuevo }) => {

    const [nombre, guardarNombre] = useState('');
    const [gasto, guardarGasto] = useState(0);
    const [error, mostrarError] = useState(false);
    
    const saveGasto = e => {
        guardarGasto(parseInt(e.target.value, 10));
    }

    const addGasto = e => {
        e.preventDefault();
        // Validar
        if (gasto < 0.1 || isNaN(gasto) || nombre.trim() === '') {
            mostrarError(true);
            return;
        }
        mostrarError(false);

        // construir el gasto
        const gastoObj = {
            nombre,
            gasto,
            id: shortid.generate()
        }
        // pasar el valor al componente principal
        guardarForm(gastoObj);
        crearGastoNuevo(true);

        guardarNombre('');
        guardarGasto(0);

    }

    return ( 
        <form
            onSubmit={addGasto}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null }

            <h2>Agrega tus gastos aquí</h2>

            <div className="campo">
                <label>Nombre gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 100"
                    value={gasto}
                    onChange={saveGasto}
                />
            </div>

            <input 
                type="submit"
                className="u-full-width button-primary"
                value="Agregar gasto"
            />
        </form>
    );
}

Formulario.propTypes = {
    guardarForm: PropTypes.func.isRequired,
    crearGastoNuevo: PropTypes.func.isRequired
}
 
export default Formulario;