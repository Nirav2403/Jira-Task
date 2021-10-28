import { combineReducers } from "redux";
import { todoList, selectObj, todoDoneList, todoProgressList } from "./Todoos";

export default combineReducers({
    todo: todoList,
    progress: todoProgressList,
    done: todoDoneList,
    obj: selectObj
})