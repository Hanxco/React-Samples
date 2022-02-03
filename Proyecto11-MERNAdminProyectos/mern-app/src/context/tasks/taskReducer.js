import { 
    TASK_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    STATUS_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    LOADING_TASK
} from "../../types";

export default (state, action) => {
    switch(action.type) {
        case TASK_PROJECT:
            return {
                ...state,
                loading: false,
                tasksProject: action.payload
            }
        case ADD_TASK: 
            return {
                ...state,
                tasksProject: [action.payload, ...state.tasksProject],
                loading: false,
                errorTask: false
            }
        case VALIDATE_TASK:
            return {
                ...state,
                errorTask: true
            }
        case DELETE_TASK:
            return {
                ...state,
                loading: false,
                tasksProject: state.tasksProject.filter( task =>
                    task._id !== action.payload )
            }
        case STATUS_TASK:
        case UPDATE_TASK: 
            console.log('tasksProject');
            console.log(state.tasksProject);
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                tasksProject: state.tasksProject.map( task =>
                    task._id === action.payload.data._id ? action.payload.data : task )
            }
        case CURRENT_TASK:
            return {
                ...state,
                currentTask: action.payload
            }
        case LOADING_TASK: 
            return {
                ...state,
                loading: action.payload
            }
        default: 
            return state;
    }
}