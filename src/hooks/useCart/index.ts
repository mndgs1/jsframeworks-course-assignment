import { useSelector, useDispatch } from "react-redux";
import {
    addToCart,
    removeFromCart,
    selectTotalQuantity,
} from "../../slices/cartSlice";
import { RootState } from "../../store";
import { Product } from "../../interfaces";

export function useCart() {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = (productId: string) => {
        dispatch(removeFromCart(productId));
    };

    const totalQuantity = useSelector(selectTotalQuantity);

    return { cart, handleAddToCart, handleRemoveFromCart, totalQuantity };
}
