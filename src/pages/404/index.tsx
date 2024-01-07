import { Heading, Paragraph, Button } from "../../components";
import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <>
            <Heading h1>Oops! Something went wrong!</Heading>
            <Paragraph description>
                Sorry, we couldn't find the page you were looking for.
            </Paragraph>
            <Paragraph description>
                Try going back to the previous page or click the button below to
                go back to the homepage.
            </Paragraph>
            <Link to="/">
                <Button primary>Back to Home</Button>
            </Link>
        </>
    );
}
