import { createStore } from "redux";
import { combineReducers } from "redux";
import addToCartReducer from "./reducer";
import CartReducer from "./reducer.cart";

const rootReducer = combineReducers({
    store : addToCartReducer,
})

export const store = createStore(rootReducer);