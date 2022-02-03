import React, { useContext, useState, useEffect } from 'react';
import projectContext from '../../context/projects/projectState/projectContext';
import taskContext from '../../context/tasks/taskContext';

const FormTask = () => {

   // get project context
   const projectsContext = useContext(projectContext);
   const { project } = projectsContext;

   const tareaContexto = useContext(taskContext);
    const { 
        currentTask,
        errorTask,
        getTaskByProject,
        addNewTask,
        validateTask,
        updateTask,
        getCurrentTask
    } = tareaContexto;

    // event that detect if there is a task selected
    useEffect(() => {
        if (currentTask === null) {
            saveTask({
                Name: ''
            });
        } else {
            saveTask(currentTask);
        }
    }, [currentTask]);

   const [ task, saveTask ] = useState({
       Name: ''
   })

   // extract name of project
   const { Name } = task;

   // if not select project 
   if (!project) return null;

   // Array destructuring for extract current project
   const [currentProject] = project;

   // read values from form
   const handleChange = e => {
       saveTask({
           ...task, 
           [e.target.name] : e.target.value
       })
   }

   // on Submit
   const onSubmit = e => {
       e.preventDefault();
       // validate
       if (Name.trim() === '') {
           validateTask();
           return;
       }
       if (currentTask === null) {
           // add new task to state task array
           task.ProjectId = currentProject._id;
           task.status = false;
           addNewTask(task);
        } else {
            updateTask(task);
        }
        getTaskByProject(currentProject._id);
        saveTask({
            Name: ''
        })
        getCurrentTask(null);
   }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit} >
                <div className="contenedor-input">
                    <input
                        type="text"
                        id="Name"
                        className="input-text"
                        placeholder="Name"
                        onChange={handleChange}
                        value={Name}
                        name="Name" />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={currentTask === null ? 'Agregar punto': 'Editar punto'} />
                </div>
            </form>

            {
                errorTask ? 
                    <p className="mensaje error">El nombre del mapa es obligatorio</p> 
                : null
            }
        </div>
    );
}
 
export default FormTask;