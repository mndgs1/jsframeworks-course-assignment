import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Product } from "../../interfaces";

interface SearchBarProps {
    products?: Product[];
}

export function SearchBar({ products }: { products: Product[] }) {
    const [inputValue, setInputValue] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(inputValue);
    };

    const handleInputFocus = () => {
        setIsDropdownVisible(true);
    };

    const handleInputBlur = () => {
        // Optional: Hide dropdown when input loses focus
        setIsDropdownVisible(false);
    };

    return (
        <search title="products" className="relative">
            <form action="/search" onSubmit={() => handleSubmit} className="">
                <input
                    type="search"
                    id="products-search"
                    name="title"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md px-4 w-full"
                    placeholder="Search..."
                    onClick={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                <button
                    type="submit"
                    className="absolute transform right-2 top-1/2 -translate-y-1/2">
                    <IoSearch className="" />
                </button>
            </form>
            {isDropdownVisible &&
                products.map((product) => (
                    <div key={product.id}>{product.title}</div> // Assuming each product has a unique 'id'
                ))}
        </search>
    );
}
