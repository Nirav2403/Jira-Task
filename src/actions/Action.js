export const fetchTodo = (data) =>  {
    console.log(data)
    return{
        type:"CREATE_TODOS",
        payload: data
    }
}