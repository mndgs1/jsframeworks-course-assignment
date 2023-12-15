import { Link } from "react-router-dom";
import { Button, Heading, Paragraph } from "../../components";

export function CheckoutSuccessPage() {
    return (
        <>
            <Heading h1>Order Succesful</Heading>
            <Paragraph>Yipii ka yeah mothafucka</Paragraph>
            <Link to="/">
                <Button primary>Back to Home</Button>
            </Link>
        </>
    );
}
