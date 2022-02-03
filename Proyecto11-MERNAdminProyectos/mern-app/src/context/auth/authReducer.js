import { 
    GET_USER,
    AUTH_OK,
    AUTH_KO,
    LOGIN_OK,
    LOGIN_KO,
    LOGOUT } from "../../types";

export default (state, action) => {
    switch(action.type) {
        case GET_USER:
            return {
                ...state,
                authenticated: true,
                user: action.payload,
                msgAuth: null,
                loading: false
            }
        case LOGIN_OK:
        case AUTH_OK:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                msgAuth: null,
                loading: false
            }
        case LOGIN_KO:
        case AUTH_KO:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                authenticated: false,
                msgAuth: action.payload,
                user: null,
                loading: false
            }
        default:
            return state;
    }
}