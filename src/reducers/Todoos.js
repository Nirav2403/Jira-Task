

export const todoList = (state=[],action) => {
    switch (action.type) {
        case "CREATE_TODOS":
            const newData = {...action.payload,id: state.length + 1}
            return [...state,newData];
        case "UPDATE_TODOS":
            const newState = state.map((item)=>{
                if(item.id===action.payload.id){
                    return action.payload;
                }return item;
            })
            return newState;
        case "DELETE_TODOS":
            const newTodos = state.filter((item)=>item.id !== action.payload.id);
            return newTodos;
        default:
            return state;
    }
}

export const selectObj = (state=[],action) => {
    switch (action.type) {
        case "SELECT_TODOS":
            return action.payload
        default:
            return state;
    }
}

export const  todoProgressList = (state=[],action) => {

    switch (action.type) {
        case "CREATE_TODOS_PROGRESS":
            const newData = {...action.payload,id: state.length + 1}
            return [...state,newData];
        case "UPDATE_TODOS_PROGRESS":
            console.log("updated todos progress",action.payload,state)
            if(state.length===0){
                return [...state,action.payload]
            }else{
                return [...state,action.payload]
            }
        case "DELETE_TODOS_PROGRESS":
            const newTodos = state.filter((item)=>item.id !== action.payload.id);
            return newTodos;
        default:
            return state;
    }
}

export const  todoDoneList = (state=[],action) => {
    
    switch (action.type) {
        case "CREATE_TODOS_DONE":
            const newData = {...action.payload,id: state.length + 1}
            return [...state,newData];
        case "UPDATE_TODOS_DONE":
            console.log(action.payload)
            if(state.length===0){
                return [...state,action.payload]
            }else{
                return [...state,action.payload];
            }
        case "DELETE_TODOS_DONE":
            const newTodos = state.filter((item)=>item.id !== action.payload.id);
            return newTodos;
        default:
            return state;
    }
}