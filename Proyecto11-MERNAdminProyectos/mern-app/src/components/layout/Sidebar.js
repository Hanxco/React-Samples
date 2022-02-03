import React from 'react';
import NewProject from '../projects/NewProject';
import ListProjects from '../projects/ListProjects';

const Sidebar = () => {
    return (
        <aside>
            <h1>Map<span>Routes</span></h1>
            <NewProject />
            <div className="proyectos">
                <h2>Tus mapas</h2>
                <ListProjects />
            </div>
        </aside>
    );
}
 
export default Sidebar;