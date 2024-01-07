import { useCart } from "../../hooks";
import { ProductCard, Button, Paragraph } from "../../components";
import { Link } from "react-router-dom";

export function CartPage() {
    const {
        cart,
        // handleAddToCart,
        // handleRemoveFromCart,
        totalQuantity,
        totalPrice,
    } = useCart();

    return (
        <>
            <section className="mb-4">
                {cart.map((cartItem) => {
                    return (
                        <div key={cartItem.id} className="mb-2">
                            <ProductCard
                                product={cartItem}
                                loading={false}
                                className="flex gap-4 border border-gray-300 rounded-md"
                                imageClasses="h-40 w-40"
                            />
                        </div>
                    );
                })}
            </section>
            <section className="flex flex-col">
                <Paragraph price>Total Price: {totalPrice} kr</Paragraph>
                <Paragraph price>Total Quantity: {totalQuantity}</Paragraph>
            </section>
            {cart.length === 0 ? (
                <Paragraph description>
                    Your cart is empty. Please add some products.
                </Paragraph>
            ) : (
                <Link to="/checkout">
                    <Button primary>Checkout</Button>
                </Link>
            )}
        </>
    );
}
