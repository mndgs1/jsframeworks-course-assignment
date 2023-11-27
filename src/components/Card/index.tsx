import { Product } from "../../interfaces";

export function Card({
    id,
    title,
    description,
    price,
    discountedPrice,
    imageUrl,
    rating,
    tags,
    reviews,
}: Product) {
    return <div key={id}></div>;
}
