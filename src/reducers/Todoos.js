export const todoList = (state=[],action) => {
    switch (action.type) {
        case "CREATE_TODOS":
            const newData = {...action.payload,id: state.length + 1}
            console.log(newData)
            return [...state,newData];
        case "UPDATE_TODOS":
            const newState = state.map((item)=>{
                if(item.id===action.payload.id){
                    return action.payload;
                }return item;
            })
            console.log(newState, action.payload)
            return newState;
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