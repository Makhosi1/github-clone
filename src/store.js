import { createStore } from "redux";
import rootReducer from "./redux/reducers/Index";

const store = createStore(rootReducer);

export default store; 

