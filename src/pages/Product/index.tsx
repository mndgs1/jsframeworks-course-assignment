import { useParams } from "react-router-dom";
import { useFetchProduct, useCart } from "../../hooks";
import { Heading, Button, Image } from "../../components";
import Skeleton from "react-loading-skeleton";

export function ProductPage() {
    const { handleAddToCart } = useCart();

    let { id } = useParams<{ id: string }>();

    const { product, isLoading, isError } = useFetchProduct(id ?? "");

    if (isError) {
        return <div>Error loading product or product not found</div>;
    }

    return (
        <>
            {product ? (
                <div className="lg:flex lg:gap-4">
                    <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="lg:w-1/2"
                    />
                    <div>
                        <Heading h1>{product.title}</Heading>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <p>{product.discountedPrice}</p>

                        <Button
                            success
                            onClick={() => handleAddToCart(product)}>
                            Add to cart
                        </Button>
                    </div>
                </div>
            ) : (
                <>
                    <Heading h1>
                        <Skeleton />
                    </Heading>
                    <p>
                        <Skeleton />
                    </p>
                    <p>
                        <Skeleton />
                    </p>
                    <p>
                        <Skeleton />
                    </p>
                    <Image loading={isLoading} />
                </> // or any other placeholder/fallback content
            )}
        </>
    );
}
