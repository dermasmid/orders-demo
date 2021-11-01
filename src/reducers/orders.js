
const ordersReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_ORDERS":
            return action.payload
        default:
            return state
    }
}

export default ordersReducer;
