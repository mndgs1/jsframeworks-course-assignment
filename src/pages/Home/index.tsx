import { useEffect, useState } from "react";
import { Card } from "../../components";
import { Product } from "../../interfaces";

export function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setIsLoading] = useState(false);
    const [error, setIsError] = useState(false);

    useEffect(() => {
        async function getProducts() {
            try {
                setIsLoading(true);
                setIsError(false);
                const response = await fetch(
                    "https://api.noroff.dev/api/v1/online-shop"
                );
                const json = await response.json();

                setProducts(json);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        getProducts();
    }, []);

    return (
        <>
            <section>
                {products.map(
                    ({
                        id,
                        title,
                        description,
                        price,
                        discountedPrice,
                        imageUrl,
                        rating,
                        tags,
                        reviews,
                    }) => (
                        <Card
                            product
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            price={price}
                            discountedPrice={discountedPrice}
                            imageUrl={imageUrl}
                            rating={rating}
                            tags={tags}
                            reviews={reviews}
                        />
                    )
                )}
            </section>
        </>
    );
}
