const eachRepoReducer = (state ={}, action) => {
    switch(action.type){
        case "SET_EACH_REPO_DETAIL":
            return action.payload;
            case "CLEAR_DATA":
            return {};
            default:
                return state;
    }
}

export default eachRepoReducer;