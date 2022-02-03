import { 
    FORMULARIO_PROYECTO, 
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM_PROJECT,
    CURRENT_PROJECT,
    DELETE_PROJECT, 
    PROJECT_ERROR} from "../../../types";

export default (state, action) => {
    switch(action.type) {
        case FORMULARIO_PROYECTO: 
            return {
                ...state,
                formulario: true
            }
        case GET_PROJECTS: 
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                formulario: false,
                errorForm: false
            }
        case VALIDATE_FORM_PROJECT:
            return {
                ...state,
                errorForm: true
            }
        case CURRENT_PROJECT:
            return {
                ...state,
                project: state.projects.filter( project => 
                    project._id === action.payload )
            }
        case DELETE_PROJECT: 
            return {
                ...state,
                projects: state.projects.filter( project => 
                    project._id !== action.payload ),
                project: null
            }
        case PROJECT_ERROR:
            return {
                ...state,
                project: null,
                error: action.payload
            }
        default:
            return state;
    }
}