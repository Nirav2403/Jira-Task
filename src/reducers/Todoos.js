export const todoList = (state=[],action) => {
    switch (action.type) {
        case "CREATE_TODOS":
            console.log(action.payload);
           return [...state,action.payload];
        default:
            return state;
    }
}