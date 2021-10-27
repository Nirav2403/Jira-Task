import { combineReducers } from "redux";
import { todoList } from "./Todoos";

export default combineReducers({
    todo: todoList
})