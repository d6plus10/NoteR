import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

//Import reducers
import {addNoteReducer, viewNoteReducer} from "./reducers/noteReducer";

//Create store

//Create store creates a store object

//CombineReducers combines several reducers into one, in order to be used in createStore
//Middle JSON object determines initial state, but will be handled elsewhere
//applyMiddleware applies any middleware that I'm using
export default createStore( combineReducers({addNoteReducer: addNoteReducer, viewNoteReducer: viewNoteReducer}) , {} , applyMiddleware(logger(), thunk) );