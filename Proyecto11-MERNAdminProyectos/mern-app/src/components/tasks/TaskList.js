import React, { useContext, Fragment, useEffect } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectState/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Map from './Map'

const TaskList = () => {

    // get project context
    const projectsContext = useContext(projectContext);
    const { project, deleteProject } = projectsContext;

    // get task context
    const tareasContexto = useContext(taskContext);
    const { loading, tasksProject, changeLoading } = tareasContexto;

    // if not select project 
    if (!project) {
        return <h2>Selecciona un mapa</h2>
    }

    // Array destructuring for extract current project
    const [currentProject] = project;

    // remove project
    const onClickEliminar = () => {
        deleteProject(currentProject._id);
    }

    return (
        <Fragment>
            <h2>{currentProject.Name}</h2>
            <ul className="listado-tareas">
                {
                    loading ? 
                    <p>No hay puntos de interés</p>
                    : <TransitionGroup>
                    {tasksProject.map(task => (
                        <CSSTransition
                            key={task._id} 
                            timeout={200}
                            classNames="tarea"
                        >
                            <Task
                                task={task}
                            />
                        </CSSTransition>
                    ))} 
                    </TransitionGroup>
                }
            </ul>
            <Map />
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Mapa &times;</button>
        </Fragment>
    );
}
 
export default TaskList;