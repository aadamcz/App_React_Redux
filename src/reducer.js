import { combineReducers } from "redux";
import comments from "./comments.js";

//Główny reducer
const reducer = combineReducers({
	comments
});

export default reducer;