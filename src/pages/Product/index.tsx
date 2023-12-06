import { useParams } from "react-router-dom";
import { useFetchProduct, useCart } from "../../hooks";
import { Heading, Button } from "../../components";

export function ProductPage() {
    const { handleAddToCart } = useCart();

    let { id } = useParams<{ id: string }>();

    const { product, isLoading, isError } = useFetchProduct(id ?? "");

    // Handle loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Handle error state
    if (isError || product === null) {
        return <div>Error loading product or product not found</div>;
    }

    // Inside your component

    // Now it's safe to assume product is not null
    return (
        <>
            <Heading h1>{product.title}</Heading>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.discountedPrice}</p>
            <img src={product.imageUrl} alt={product.title} />
            <Button success onClick={() => handleAddToCart(product)}>
                Add to cart
            </Button>
        </>
    );
}
