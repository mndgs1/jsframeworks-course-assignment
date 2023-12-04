import { useEffect, useState } from "react";
import { Card } from "../../components";
import { Product } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../api";

export function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        let isMounted = true; // flag to track if component is mounted

        const renderProducts = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                const { products, error } = await getProducts();
                if (isMounted) {
                    if (products) {
                        setProducts(products);
                    }
                    if (error) {
                        console.error(error); // Log the error or handle it as needed
                        setIsError(true);
                    }
                }
            } catch (error) {
                if (isMounted) {
                    console.error(error); // Log or display this error too
                    setIsError(true);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        renderProducts();

        return () => {
            isMounted = false;
        };
    }, []);

    //     async function getProducts() {
    //         try {
    //             setIsLoading(true);
    //             setIsError(false);

    //             const { apiEndpoint } = data.products;
    //             const response = await fetch(apiEndpoint);

    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }

    //             const json = await response.json();

    //             setProducts(json);
    //             setIsLoading(false);
    //         } catch (error) {
    //             setIsError(true);
    //             console.error("Error fetching data: ", error);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     }
    //     getProducts();
    // }, []);

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
