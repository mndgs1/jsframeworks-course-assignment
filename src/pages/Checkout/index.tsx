import { Link } from "react-router-dom";
import { Button, Paragraph } from "../../components";
import { useCart } from "../../hooks";

export function CheckoutPage() {
    const { handleClearCart } = useCart();

    return (
        <>
            <Paragraph description>Payment info etc...</Paragraph>
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
