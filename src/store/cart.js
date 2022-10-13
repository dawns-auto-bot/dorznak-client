import { createSlice } from "@reduxjs/toolkit";
import { setCart, getCart } from "../app/services/localStorageService";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        entities: [],
        isLoading: true,
        error: null,
        totalPrice: 0,
    },
    reducers: {
        cartUbdated: (state, action) => {
            state.entities.push(action.payload);
            setCart(state.entities);
        },
        totalPriceUddated: (state, action) => {
            state.totalPrice = state.entities.reduce(
                (prev, next) => prev + next.price * next.quantity,
                0
            );
        },

        cartRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        quantityUbdated: (state, action) => {
            console.log(action.payload);
            const index = state.entities.findIndex(
                item => item._id === action.payload._id
            );
            state.entities[index].quantity = action.payload.counter;
        },
        cartItemDeleted: (state, action) => {
            const delCart = state.entities.filter(
                item => item._id !== action.payload
            );
            console.log("del", delCart);
            state.entities = delCart;
        },
    },
});

const { reducer: cartReducer, actions } = cartSlice;
const {
    cartUbdated,
    totalPriceUddated,
    quantityUbdated,
    cartReceived,
    cartRequestFailed,
    cartItemDeleted,
} = actions;

export const ubdateCart = item => async (dispatch, getState) => {
    dispatch(cartUbdated(item));

    dispatch(totalPriceUddated());
};

export const deleteCartItem = _id => async (dispatch, getState) => {
    dispatch(cartItemDeleted(_id));
    dispatch(totalPriceUddated());
};

export const updateQuantity = (_id, counter) => (dispatch, getState) => {
    dispatch(quantityUbdated({ _id: _id, counter: counter }));
    dispatch(totalPriceUddated());
};

export const getcartList = () => state => {
    return state.cart.entities;
};

export const getcartTotalPrice = () => state => {
    return state.cart.totalPrice;
};

export const getCartLegnth = () => state => {
    return state.cart.entities.length;
};

export const getcartLoadingStatus = () => state => state.cart.isLoading;

export default cartReducer;
