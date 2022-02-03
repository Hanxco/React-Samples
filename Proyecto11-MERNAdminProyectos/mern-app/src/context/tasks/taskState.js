import { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import clientAxios from '../../config/axios';

import {
    TASK_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    STATUS_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    LOADING_TASK
} from '../../types/index';

const TaskState = props => {
    const initialState = {
        tasks: null,
        tasksProject: null,
        errorTask: false,
        currentTask: null,
        loading: true
    }

    // Create dispatch and state
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // FUNCTIONS
    const getTaskByProject = async projectId => {
        try {
            changeLoading(true);
            const resp = await clientAxios.get(`api/task/${projectId}`);
            dispatch({
                type: TASK_PROJECT,
                payload: resp.data
            })
        } catch (error) {
            console.error(error);
        }
    }

    // ADD_TASK function
    const addNewTask = async task => {
        try {
            changeLoading(true);
            const resp = await clientAxios.post('/api/task', task);
            dispatch({
                type: ADD_TASK,
                payload: resp.data
            })
        } catch (error) {
            console.error(error);
        }
    }

    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    const deleteTask = async id => {
        try {
            changeLoading(true);
            await clientAxios.delete(`api/task/${id}`);
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        } catch (error) {
            console.error(error);
        }
    }

    const changeStatusTask = async task => {
        try {
            changeLoading(true);
            const resp = await clientAxios.put(`api/task/${task._id}`, task);
            dispatch({
                type: STATUS_TASK,
                payload: resp
            })
        } catch (error) {
            console.error(error);
        }
    }

    const getCurrentTask = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        })
    }

    const updateTask = async task => {
        try {
            changeLoading(true);
            const resp = await clientAxios.put(`api/task/${task._id}`, task);
            dispatch({
                type: UPDATE_TASK,
                payload: resp
            })
        } catch (error) {
            console.error(error);
        }
    }

    const changeLoading = status => {
        dispatch({
            type: LOADING_TASK,
            payload: status
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksProject: state.tasksProject,
                errorTask: state.errorTask,
                currentTask: state.currentTask,
                loading: state.loading,
                getTaskByProject,
                addNewTask,
                validateTask,
                deleteTask,
                changeStatusTask,
                getCurrentTask,
                updateTask,
                changeLoading
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;