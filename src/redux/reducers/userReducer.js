const userReducer = (state = {}, action) => {
    switch(action.type){
        case "SET_USER_DATA":
            return action.payload;
            case "CLEAR_DATA":
            return {};
            default:
                return state;
    }
}

export default userReducer;