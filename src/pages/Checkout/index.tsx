import { Link } from "react-router-dom";
import { Button } from "../../components";

export function CheckoutPage() {
    return (
        <>
            <Link to="/checkout/success">
                <Button primary>Checkout</Button>
            </Link>
        </>
    );
}
