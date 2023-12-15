import { Link } from "react-router-dom";
import { Button } from "../../components";
import { useCart } from "../../hooks";

export function CheckoutPage() {
    const { handleClearCart } = useCart();

    return (
        <>
            <Link to="/checkout/success">
                <Button
                    primary
                    onClick={() => {
                        handleClearCart();
                    }}>
                    Checkout
                </Button>
            </Link>
        </>
    );
}
