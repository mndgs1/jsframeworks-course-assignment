import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../interfaces";

interface CartState {
    cart: Product[];
}

const initialState: CartState = {
    cart: [],
};

export const cartSlice = createSlice({
    // The name of our reducer
    name: "cart",
    // The initial state of our reducer
    initialState,
    // These are the actions that will be made available
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            // Remove a product from the cart by id
            state.cart = state.cart.filter(
                (product) => product.id !== action.payload
            );
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
