import { combineReducers } from "redux";
import { todoList, selectObj } from "./Todoos";

export default combineReducers({
    todo: todoList,
    obj: selectObj
})