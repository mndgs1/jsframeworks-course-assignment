import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart));
});

export type RootState = ReturnType<typeof store.getState>;
