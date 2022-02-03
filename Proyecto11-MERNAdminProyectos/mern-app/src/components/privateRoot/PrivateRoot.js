import React, { Component, useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoot = ({ component: Component, ...props }) => {

    const authContext = useContext(AuthContext);
    const { authenticated, loading, getUserAuthenticated } = authContext;

    useEffect(() => {
        return () => {
            getUserAuthenticated();
        }
    }, [])
    
    return (
        <Route { ...props } render={ props => !authenticated && !loading ? (
            <Redirect to="/" />
        ) : (
            <Component {...props} />
        )} 
        />
    );
}

export default PrivateRoot;