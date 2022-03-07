import { createStore } from "redux";
import { initialState, reducer } from "./reducers";


export const store = createStore(reducer, initialState);
