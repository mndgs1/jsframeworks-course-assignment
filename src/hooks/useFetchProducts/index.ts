import { useState, useEffect } from "react";
import data from "../../content.json";
import { Product } from "../../interfaces";

export function useFetchProducts() {
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
            } catch (error) {
                setIsError(true);
                console.error("Error fetching data: ", error);
            } finally {
                setIsLoading(false);
            }
        }

        getProducts();
    }, []);

    return { products, isLoading, isError };
}
