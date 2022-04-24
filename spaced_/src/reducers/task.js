
const taskReducer = (tasks = [], action) => {
    switch(action.type){
        case 'GET_TASKS':
            return action.payload
        case 'CREATE_TASK':
            return [...tasks, action.payload]
        default:
            return tasks
                
    }
}

export default taskReducer
