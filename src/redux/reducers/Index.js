import { combineReducers } from "redux";
import userReducer from "./userReducer";
import repositoriesReducer from "./repositoriesReducer";

// this will combine all the reducers neeeded in the application
export const rootReducer = combineReducers({
    // all reducers needed in the application
    userData: userReducer,
    repositoriesData: repositoriesReducer
});

export default rootReducer;

