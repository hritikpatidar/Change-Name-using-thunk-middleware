import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import initialState from "../initialState/InitialState";
import rootReducer from "../reducer/Reducer";

let store = legacy_createStore(rootReducer,initialState,applyMiddleware(thunk))
console.log(store)

export default store;