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
            <section className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 20 }).map((_, index) => (
                    <Card loading={isLoading} key={index} />
                ))}
            </section>
        );
    }

    if (isError) {
        navigate("/404");
    }
    return (
        <section className="grid gap-4 sm:gap-8 xl:gap-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
                <Card product={product} loading={isLoading} key={product.id} />
            ))}
        </section>
    );
}
