const repositoriesReducer = (state = [], action) => {
    switch(action.type){
        case "SET_REPOSITORIES_DATA":
            return action.payload;
            case "CLEAR_DATA":
                return [];
            default:
                return state;
    }
}

export default repositoriesReducer;