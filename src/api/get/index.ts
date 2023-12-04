import data from "../../content.json";

export async function getProducts() {
    try {
        const { apiEndpoint } = data.products;
        const response = await fetch(apiEndpoint);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const products = await response.json();

        return { products, error: null };
    } catch (error) {
        return { products: null, error };
    }
}
