export const fetchTodo = (data) =>  {
    console.log(data)
    return{
        type:"CREATE_TODOS",
        payload: data
    }
}

export const updateTodos = (data) => {
    console.log(data)
    return{
        type: "UPDATE_TODOS",
        payload: data
    }
}

export const selectObject = (data) => {
    return{
        type: "SELECT_TODOS",
        payload: data
    }
}