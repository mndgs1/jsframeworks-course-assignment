import { useEffect, useState } from "react";

interface Reviews {
    id: number;
    username: string;
    rating: number;
    description: string;
}

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountedPrice: number;
    imageUrl: string;
    rating: number;
    tags: string[];
    reviews: Reviews[];
}

export function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function getProducts() {
            const response = await fetch(
                "https://api.noroff.dev/api/v1/online-shop"
            );
            const json = await response.json();

            setProducts(json);
        }
        getProducts();
    }, []);

    return (
        <>
            <section>
                {products.map((product) => (
                    <article key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <img src={product.imageUrl} alt={product.title} />
                    </article>
                ))}
            </section>
        </>
    );
}
