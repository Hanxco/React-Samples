import React, { useState, useContext, useEffect } from 'react';
import NewAccount from './NewAccount';
import { Link } from 'react-router-dom';
import { geolocated } from 'react-geolocated';

import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {

    //Get values of alertContext
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    //Get values of alertContext
    const authContext = useContext(AuthContext);
    const { msgAuth, authenticated, loginUser } = authContext;

    // If user authenticated or duplicated record
    useEffect( () => {
        if (msgAuth) {
            showAlert(msgAuth.msg, 'alerta-error');
        }
        if (authenticated) {
            props.history.push('/projects');
        }
    }, [msgAuth, authenticated, props.history]);

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // extraer de usuario
    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();
        // Validar campos 
        if (email.trim() === '' || password.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alerta-error');
        }
        // Pasar el action
        loginUser({
            email,password
        })
    }

    const MainWithGeoloc = geolocated({
        positionOptions: {
          enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
      })(Main);

    return (
        <div className="form-usuario">
            {
                alert ? ( <div className={`alerta ${alert.category}`}>{alert.msg}</div> ) : null
            }
            <div className="contenedor-form sombra-dark">
                <h1>
                    Iniciar sesión
                </h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Tu e-mail"
                            onChange={onChange}
                         />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            value={password}
                            name="password"
                            placeholder="Tu password"
                            onChange={onChange}
                         />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block" 
                            value="Iniciar sesión" />
                    </div>
                </form>
                <Link to={'/new-account'} className="enlace-cuenta">
                    Obtener cuenta
                </Link>
            </div>
        </div>
    );
}
 
export default Login;