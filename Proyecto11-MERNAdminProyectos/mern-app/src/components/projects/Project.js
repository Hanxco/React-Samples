import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectState/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Project = ( {project} ) => {

    // obtener state del project
    const projectsContext = useContext(projectContext);
    const { 
        projectCurrent
    } = projectsContext;

    const tareaContexto = useContext(taskContext);
    const { 
        getTaskByProject,
        changeLoading
    } = tareaContexto;

    // Function for add current project
    const selectProject = id => {
        projectCurrent(id); // Set current project init
        getTaskByProject(id);
    }
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => selectProject(project._id) }
            >{project.Name} </button>
        </li>
    );
}
 
export default Project;