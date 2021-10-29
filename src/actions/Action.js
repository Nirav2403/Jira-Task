export const fetchTodo = (data) =>  {
    console.log(data)
    return{
        type:"CREATE_TODOS",
        payload: data
    }
}

export const updateTodos = (data,prevData) => {
    console.log(prevData)
    return{
        type: "UPDATE_TODOS",
        payload: data,
        prevPayload: prevData
    }
}

export const deleteTodos = (data) => {
    return{
        type: "DELETE_TODOS",
        payload: data
    }
}
export const progressCreateTodos = (data) => {
    console.log("progress",data)
    return{
        type: "CREATE_TODOS_PROGRESS",
        payload: data
    }
}
export const progressUpdateTodos = (data) => {
    console.log("progress updated data",data)
    return{
        type: "UPDATE_TODOS_PROGRESS",
        payload: data
    }
}
export const progressDeleteTodos = (data) => {
    return{
        type: "DELETE_TODOS_PROGRESS",
        payload: data
    }
}
export const doneCreateTodos = (data) => {
    console.log("done",data)
    return{
        type: "CREATE_TODOS_DONE",
        payload: data
    }
}
export const doneUpdateTodos = (data) => {
    console.log(data)
    return{
        type: "UPDATE_TODOS_DONE",
        payload: data
    }
}
export const doneDeleteTodos = (data) => {
    return{
        type: "DELETE_TODOS_DONE",
        payload: data
    }
}

export const selectObject = (data) => {
    return{
        type: "SELECT_TODOS",
        payload: data
    }
}