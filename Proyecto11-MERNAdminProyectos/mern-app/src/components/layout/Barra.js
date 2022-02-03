import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Barra = (props) => {

    //Get values of alertContext
    const authContext = useContext(AuthContext);
    const { user, getUserAuthenticated, logoutUser } = authContext;

    useEffect(() => {
        getUserAuthenticated();
    }, [])

    return (
        <header className="app-header">
            {user ? 
            <p className="nombre-usuario">
                Hola <span>{user.name}</span>
            </p>
            : null }
            <nav className="nav-principal">
                <button type="button"
                        className="btn btn-white cerrar-sesion" 
                        onClick={ () => logoutUser() } >Cerrar sesión</button>
            </nav>
        </header>
    );
}
 
export default Barra;