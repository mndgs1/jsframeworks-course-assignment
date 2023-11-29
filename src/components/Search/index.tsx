import React, { useState } from "react";

export function SearchBar() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <search title="products">
            <form action="/search">
                <input
                    type="search"
                    id="products-search"
                    name="title"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md px-4 w-full"
                />
                {/* <button type="submit">Search</button> */}
            </form>
        </search>
    );
}
