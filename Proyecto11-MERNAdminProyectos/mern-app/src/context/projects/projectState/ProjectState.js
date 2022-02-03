import React, { useReducer, useContext } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import uuid from 'uuid';
import clientAxios from '../../../config/axios';

import { 
        FORMULARIO_PROYECTO, 
        GET_PROJECTS,
        ADD_PROJECT,
        VALIDATE_FORM_PROJECT,
        CURRENT_PROJECT,
        DELETE_PROJECT,
        PROJECT_ERROR } from '../../../types/index';


const ProjectState = props => {
    
    const initialState = {
        projects: [],
        formulario: false,
        errorForm: false,
        project: null,
        error: null
    }

    // dispatch para ejecutar las siguientes acciones
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // serie de funciones para el CRUD
    const mostrarFormulario = () => {
        // Solo manda a llamar las funciones del reducer
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // obtener los proyectos
    const getProjects = async () => {
        try {
            const resp = await clientAxios.get('/api/project');
            dispatch({
                type: GET_PROJECTS,
                payload: resp.data.projects
            })
        } catch (error) {
            console.error('getProjects error');
            console.error(error);
        }
    }

    // add new project
    const addProject = async project => {
        try {
            const resp = await clientAxios.post('/api/project', project);
            // Inserta proyecto con dispatch
            dispatch({
                type: ADD_PROJECT,
                payload: resp.data
            })
        } catch (error) {
            console.error('addProject error');
            console.error(error);
        }
    }
    
    // validate project
    const showErrorForm = project => {
        dispatch({
            type: VALIDATE_FORM_PROJECT
        })
    }

    // select project onclick event
    const projectCurrent = projectId => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: projectId
        })
    }

    // remove project
    const deleteProject = async projectId => {
        try {
            const resp = await clientAxios.delete(`api/project/${projectId}`);
            dispatch({
                type: DELETE_PROJECT, 
                payload: projectId
            })
        } catch (error) {
            const alert = {
                msg: 'Error unexpected',
                category: 'alerta-error'
            }
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
        }
    }

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                formulario: state.formulario,
                errorForm: state.errorForm,
                project: state.project,
                error: state.error,
                mostrarFormulario,
                getProjects,
                addProject,
                showErrorForm,
                projectCurrent,
                deleteProject
            }}
        >
            { props.children }
        </projectContext.Provider>
    )
}

export default ProjectState;