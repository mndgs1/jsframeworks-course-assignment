import { createSlice, createSelector } from "@reduxjs/toolkit";
import { Product } from "../interfaces";
import { RootState } from "../store";

interface CartItem {
    product: Product;
    quantity: number;
}

interface CartState {
    cart: CartItem[];
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
            const existingItem = state.cart.find(
                (item) => item.product.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ product: action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const existingItem = state.cart.find(
                (item) => item.product.id === action.payload
            );

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.cart = state.cart.filter(
                        (item) => item.product.id !== action.payload
                    );
                }
            }
        },
        clearCart: () => initialState,
    },
});

export const selectTotalQuantity = createSelector(
    (state: RootState) => state.cart.cart,
    (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectTotalPrice = createSelector(
    (state: RootState) => state.cart.cart,
    (cartItems) =>
        cartItems.reduce(
            (total, item) => total + item.product.discountedPrice,
            0
        )
);

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
