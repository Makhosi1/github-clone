import { combineReducers } from "redux";
import userReducer from "./userReducer";
import repositoriesReducer from "./repositoriesReducer";
import eachRepoReducer from "./eachRepoReducer";

// this will combine all the reducers neeeded in the application
export const rootReducer = combineReducers({
    // all reducers needed in the application
    userData: userReducer,
    repositoriesData: repositoriesReducer,
    eachRepoData: eachRepoReducer
});

export default rootReducer;

