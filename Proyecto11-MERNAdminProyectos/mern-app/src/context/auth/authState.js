import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import authToken from '../../config/authToken';

import clientAxios from '../../config/axios';

import { 
    GET_USER,
    AUTH_OK,
    AUTH_KO,
    LOGIN_OK,
    LOGIN_KO,
    LOGOUT } from "../../types";

const AuthState = props => {
    // Initial state
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        msgAuth: null,
        loading: true
    }
    // dispatch para ejecutar las siguientes acciones
    const [state, dispatch] = useReducer(authReducer, initialState);

    const registrarUsuario = async datos => {
        try {
            var resp = await clientAxios.post('/api/users', datos);
            dispatch({
                type: AUTH_OK,
                payload: resp.data
            });
            // Get user authenticated
            getUserAuthenticated();
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: AUTH_KO,
                payload: alert
            })
        }
    }

    const getUserAuthenticated = async () => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                // ALL: function for send by headers
                authToken(token);
            }
            const resp = await clientAxios.get('/api/auth');
            dispatch({
                type: GET_USER,
                payload: resp.data.user
            })
        } catch (error) {
            dispatch({
                type: LOGIN_KO
            })
        }
    }

    const loginUser = async datos => {
        try {
            const resp = await clientAxios.post('/api/auth', datos);
            dispatch({
                type: LOGIN_OK,
                payload: resp.data
            })
            getUserAuthenticated();
        } catch (error) {
            console.log(error);
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: LOGIN_KO,
                payload: alert
            })
        }
    }

    const logoutUser = async => {
        try {
            dispatch({
                type: LOGOUT
            })
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: LOGOUT,
                payload: alert
            })
        }
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                msgAuth: state.msgAuth,
                loading: state.loading,
                registrarUsuario,
                getUserAuthenticated,
                loginUser,
                logoutUser
            }}
        >
            { props.children }
        </authContext.Provider>
    )
}

export default AuthState;
