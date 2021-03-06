import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import DevTools from './DevTools';
import reducer from "./reducer.js";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { addComment } from "./actions.js";

const store = createStore(reducer, DevTools.instrument());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

//dispatch - wysyłanie informacji o akcji do store. 
//argumentem jest kreator akcji

store.dispatch(addComment("pierwszy komentarz "));
store.dispatch(addComment("drugi komentarz "));
