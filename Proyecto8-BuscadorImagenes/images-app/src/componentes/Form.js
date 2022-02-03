import React, { useState } from 'react';
import Error from './Error';

const Form = ( {setSearch} ) => {

    const [termino, setTermino] = useState('');
    const [error, setError] = useState(false);

    const buscarImg = e => {
        e.preventDefault();

        // validar
        if (termino.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        // enviar el termino de busqueda inicial al cmp padre
        setSearch(termino);
    }

    return (
        <form
            onSubmit={buscarImg}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen"
                        onChange={ e => setTermino(e.target.value) } />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar" />
                </div>
                { error ? <Error mensaje="Agrega una nueva busqueda" /> : null }
            </div>
        </form>

    );
}
 
export default Form;