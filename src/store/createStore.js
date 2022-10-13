import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import priceListReducer from "./priceList";
import signsReducer from "./signs";
import usersReducer from "./users";
const rootReducer = combineReducers({
    priceList: priceListReducer,
    signs: signsReducer,
    cart: cartReducer,
    users: usersReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
