import { useCart } from "../../hooks";
import { Card } from "../../components";

export function CartPage() {
    const {
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        totalQuantity,
        totalPrice,
    } = useCart();

    return (
        <>
            <section>
                {cart.map((cartItem) => {
                    return (
                        <div key={cartItem.product.id}>
                            {cartItem.product.title}
                        </div>
                    );
                })}
            </section>
            <section>
                Price: {totalPrice} Quantity: {totalQuantity}
            </section>
        </>
    );
}
