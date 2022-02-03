import React, {useContext} from 'react';
import projectContext from '../../context/projects/projectState/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ( {task} ) => {
    // obtener state del project
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;
    const [projectCurrent] = project;

    // task context
    const tareaContexto = useContext(taskContext);
    const { 
        deleteTask,
        getTaskByProject,
        changeStatusTask,
        getCurrentTask
    } = tareaContexto;

    const eliminarTask = id => {
        deleteTask(id);
        getTaskByProject(projectCurrent.id);
    }

    const changeStatus = task => {
        if (task.Status === true) {
            task.Status = false;
        } else {
            task.Status = true;
        }
        changeStatusTask(task);
    }

    const selectTask = task => {
        getCurrentTask(task);
    }

    return (
        <li>
            <div className="tarea sombra">
                <p>{task.Name}</p>
                <div className="estado">
                    { task.Status 
                    ? 
                        (
                            <button type="button"
                                    className="completo"
                                    onClick={() => changeStatus(task)}
                                    >Completo</button>
                                    ) : 
                                    (
                                        <button type="button"
                                        className="incompleto"
                                        onClick={() => changeStatus(task)}
                                        >Incompleto</button>
                                        )
                                    }
                </div>
                <div className="acciones">
                    <button 
                        type="button"
                        className="btn btn-primario"
                        onClick={ () => selectTask(task) }
                        >Editar</button>
                    <button 
                        type="button"
                        className="btn btn-primario"
                        onClick={ () => eliminarTask(task._id)}
                    >Eliminar</button>
                </div>
            </div>

        </li>
    );
}
 
export default Task;