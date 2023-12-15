import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

export function SearchBar() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(inputValue);
    };
    return (
        <search title="products">
            <form
                action="/search"
                onSubmit={() => handleSubmit}
                className="relative">
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
    );
}
