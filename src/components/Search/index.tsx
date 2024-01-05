import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Product } from "../../interfaces";
import { Link } from "react-router-dom";

export function SearchBar({ products }: { products: Product[] }) {
    const [inputValue, setInputValue] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setIsDropdownVisible(true);

        const filteredProducts = products.filter((product) =>
            product.title.toLowerCase().includes(inputValue.toLowerCase())
        );

        setFilteredProducts(filteredProducts);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(inputValue);
    };

    const handleInputBlur = () => {
        // Optional: Hide dropdown when input loses focus
        setIsDropdownVisible(false);
    };

    return (
        <div>
            <search title="products" className="relative">
                <form
                    action="/search"
                    onSubmit={() => handleSubmit}
                    className="">
                    <input
                        type="search"
                        id="products-search"
                        name="title"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md px-4 w-full"
                        placeholder="Search..."
                    />
                    <button
                        type="submit"
                        className="absolute transform right-2 top-1/2 -translate-y-1/2">
                        <IoSearch className="" />
                    </button>
                </form>
            </search>
            {isDropdownVisible &&
                filteredProducts.map((product) => (
                    <div key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            {product.title}
                        </Link>
                    </div>
                ))}
        </div>
    );
}
