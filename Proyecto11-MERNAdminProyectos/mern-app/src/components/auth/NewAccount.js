import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const NewAccount = props => {

    //Get values of alertContext
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    //Get values of alertContext
    const authContext = useContext(AuthContext);
    const { msgAuth, authenticated, registrarUsuario } = authContext;

    // If user authenticated or duplicated record
    useEffect( () => {
        if (authenticated) {
            props.history.push('/projects');
        }
        if (msgAuth) {
            showAlert(msgAuth.msg, 'alerta-error');
        }
    }, [msgAuth, authenticated, props.history]);

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // extraer de usuario
    const { name, email, password, confirmPassword } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();
        // Validate empty fields
        if (name.trim() === '' || email.trim() === '' || password.trim() === ''  || confirmPassword.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        // Password minimo 6 caracteres
        if (password.length < 6 || confirmPassword < 6) {
            showAlert('Longitud mínima de 6 caracteres para la contraseña ', 'alerta-error');
            return;
        }
        // 2 password son iguales
        if (password !== confirmPassword) {
            showAlert('Las contraseñas no coinciden', 'alerta-error');
            return;
        }
        // Pasar el action
        registrarUsuario({
            name, email, password
        });
    }

    return (
        <div className="form-usuario">
            {
                alert ? ( <div className={`alerta ${alert.category}`}>{alert.msg}</div> ) : null
            }
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="name">Nombre del usuario</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Tu nombre"
                            onChange={onChange}
                         />
                    </div>
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
                            name="password"
                            value={password}
                            placeholder=""
                            onChange={onChange}
                         />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmPassword">Confirmar Password</label>
                        <input 
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder=""
                            onChange={onChange}
                         />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block" 
                            value="Crear cuenta" />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver
                </Link>
            </div>
        </div>
    );
}
 
export default NewAccount;