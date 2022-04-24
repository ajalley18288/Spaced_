import { combineReducers } from "redux";
import taskReducer from "./task";

const allReducers = combineReducers({
    // userReducer
    task: taskReducer
})

export default allReducers