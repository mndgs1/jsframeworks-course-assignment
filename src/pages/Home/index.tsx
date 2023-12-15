import { ProductCard } from "../../components";
import { useNavigate } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { SearchBar } from "../../components/Search";

export function HomePage() {
    const { products, isLoading, isError } = useFetchProducts();

    const navigate = useNavigate();

    if (isLoading) {
        return (
            <>
                <SearchBar />
                <section className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <ProductCard loading={isLoading} key={index} />
                    ))}
                </section>
            </>
        );
    }

    if (isError) {
        navigate("/404");
    }
    return (
        <>
            <SearchBar />

            <section className="grid gap-4 sm:gap-8 xl:gap-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard
                        product={product}
                        loading={isLoading}
                        key={product.id}
                    />
                ))}
            </section>
        </>
    );
}
