import { useState, useEffect } from "react";
import data from "../../content.json";
import { Product } from "../../interfaces";

interface ProductResponse {
    product: Product | null;
    isLoading: boolean;
    isError: boolean;
}
export function useFetchProduct(id: string): ProductResponse {
    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getProduct() {
            try {
                setIsLoading(true);
                setIsError(false);

                const { apiEndpoint } = data.products;
                const response = await fetch(`${apiEndpoint}/${id}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();

                setProduct(json);
            } catch (error) {
                setIsError(true);
                console.error("Error fetching data: ", error);
            } finally {
                setIsLoading(false);
            }
        }
        if (id) {
            getProduct();
        }
    }, [id]);

    return { product, isLoading, isError };
}
