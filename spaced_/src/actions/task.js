import * as api from '../api'

export const createTask = (taskData) => async (dispatch) => {
    try {
        const { data } = await api.createTask(taskData) 
        const action = { // create the action object with found data 
            type: 'CREATE_TASK',
            payload: data
        } 
        dispatch(action) // send all programs to reducer
    } catch (e) {
        console.log(e)
    }
}
