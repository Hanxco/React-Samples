import React, {Fragment, useState, useContext} from 'react';
import projectContext from '../../context/projects/projectState/projectContext';

const NewProject = () => {

    // obtener state del formulario
    const projectsContext = useContext(projectContext);
    const { formulario, errorForm, mostrarFormulario, addProject, showErrorForm } = projectsContext;

    const [proyecto, guardarProyecto] = useState({
        Name: ''
    });

    const { Name } = proyecto;

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar el proyecto
        if (Name.trim() === '') {
            showErrorForm();
            return;
        }

        // Agregarlo en el state
        addProject(proyecto);

        // Reiniciar el form
        guardarProyecto({
            Name: ''
        })
    }

    return (
        <Fragment>
            <button 
                    type="button"
                    className="btn btn-styleh1 btn-block"
                    onClick={ () => mostrarFormulario() } >
                    Nuevo mapa
            </button>

            { 
                formulario ? 
                ( <form
                    onSubmit={onSubmitProyecto}
                    className="formulario-nuevo-proyecto" >
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre"
                            name="Name"
                            value={Name}
                            onChange={onChangeProyecto}
                            />
                        <input 
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Agregar mapa"
                        />
                </form>
            ) : null }

            { 
                errorForm ? 
                <p className="mensaje error">La tarea es obligatoria</p> 
                : null 
            }
        </Fragment>
    );
}
 
export default NewProject;