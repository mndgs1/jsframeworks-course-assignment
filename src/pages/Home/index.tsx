import { useEffect, useState } from "react";
import { Card } from "../../components";
import { Product } from "../../interfaces";
import data from "../../content.json";
import { useNavigate } from "react-router-dom";

export function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getProducts() {
            try {
                setIsLoading(true);
                setIsError(false);

                const { apiEndpoint } = data.products;
                const response = await fetch(apiEndpoint);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();

                setProducts(json);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
                console.error("Error fetching data: ", error);
            } finally {
                setIsLoading(false);
            }
        }
        getProducts();
    }, []);

    const navigate = useNavigate();

    if (isLoading) {
        return (
            <section>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Card
                        loading={true}
                        id={index}
                        key={index}
                        title="title"
                        description="desc"
                        price={0}
                        discountedPrice={0}
                        imageUrl="default"
                        rating={0}
                        tags={["tag1", "tag2"]}
                        reviews={[]}
                        product
                    />
                ))}
            </section>
        );
    }

    if (isError) {
        navigate("/404");
    }
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
