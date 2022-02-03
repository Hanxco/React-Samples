import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTask from '../tasks/FormTask';
import TaskList from '../tasks/TaskList';
import Action from '../actionEngine/Action';

import AuthContext from '../../context/auth/authContext';

const Projects = () => {

    //Get values of alertContext
    const authContext = useContext(AuthContext);
    const { getUserAuthenticated } = authContext;

    useEffect(() => {
        getUserAuthenticated();
    }, [])

    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Barra />
                <main>
                    <Action />
                    <div className="contenedor-tareas">
                        <TaskList />
                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Projects;