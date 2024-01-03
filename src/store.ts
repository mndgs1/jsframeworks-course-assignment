import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { loadState, saveState } from "./helpers";

const persistedState = loadState();

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: persistedState,
});

store.subscribe(() => {
    const { cart } = store.getState();
    localStorage.setItem("cart", JSON.stringify(cart));
});

export type RootState = ReturnType<typeof store.getState>;
