import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";

const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, storeEnhancer(applyMiddleware(thunk)));
export default store;
