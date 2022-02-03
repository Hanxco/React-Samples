import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Project from './Project';
import projectContext from '../../context/projects/projectState/projectContext';
import AlertContext from '../../context/alert/alertContext';

const ListProjects = () => {
    // extraer proyecto  del state inicial
    const projectsContext = useContext(projectContext);
    const { error, projects, getProjects } = projectsContext;

    // extraer proyecto  del state inicial
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    // get projects when load the component
    useEffect( () => {
        if(error) {
            showAlert(error.msg, error.category);
        }
        getProjects();
    }, [error]);

    // revisa si proyectos tiene contenido
    if(projects.length === 0) return null;

    return (
        <ul className="listado-proyectos" >
            { alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null }
            <TransitionGroup>
                {
                    projects.map(project => (
                        <CSSTransition
                            key={project._id}
                            timeout={200}
                            classNames="proyecto"
                        >
                            <Project
                                project={project} />
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </ul>    
    );
}
 
export default ListProjects;