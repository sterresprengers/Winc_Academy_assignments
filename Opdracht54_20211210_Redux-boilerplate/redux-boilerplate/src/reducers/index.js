import counterReducer from "./counter";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer, // you can give it any name you want. 
    isLogged: loggedReducer
})
export default allReducers