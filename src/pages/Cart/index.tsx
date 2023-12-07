import { useCart } from "../../hooks";
import { ProductCard, Button } from "../../components";
import { Link } from "react-router-dom";

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
                        <div key={cartItem.id}>
                            <ProductCard product={cartItem} loading={false} />
                        </div>
                    );
                })}
            </section>
            <section>
                Price: {totalPrice} Quantity: {totalQuantity}
            </section>
            <Link to="/checkout">
                <Button primary>Checkout</Button>
            </Link>
        </>
    );
}
