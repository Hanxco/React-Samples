import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {
    
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);
    
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();
        if (cantidad < 0.1) {
            guardarError(true);
            return;
        } 
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2>Añade tu presupuesto</h2>

            {error ? <Error mensaje="Presupuesto inválido"/> : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    name="numero"
                    type="number"
                    className="u-full-width"
                    placeholder="Presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;