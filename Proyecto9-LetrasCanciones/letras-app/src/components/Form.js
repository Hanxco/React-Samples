import React, { useState } from 'react';
import Error from './Error';

const Form = ( {saveSearchLyric} ) => {

    const [ data, setData ] = useState({
        artista: '',
        cancion: ''
    });

    const { artista, cancion } = data;
    const [ error, setError ] = useState(false);

    const updateState = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }

    const saveForm = e => {
        e.preventDefault();
        // Validacion
        if (artista.trim() === '' || cancion.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        saveSearchLyric(data);
    }

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={saveForm}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                            <fieldset>
                                <legend className="text-center">Buscador letras canciones</legend>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Artista</label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                name="artista"
                                                onChange={updateState}
                                                value={artista}
                                                placeholder="Nombre del artista" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Canción</label>
                                            <input 
                                                type="text"
                                                className="form-control"
                                                value={cancion}
                                                onChange={updateState}
                                                name="cancion"
                                                placeholder="Canción" />
                                        </div>
                                    </div>
                                </div>
                                { error ? <Error msg="Campos obligatorios" /> : null }
                                <button 
                                    type="submit"
                                    className="btn btn-primary float-right"
                                >Buscar</button>
                            </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Form;