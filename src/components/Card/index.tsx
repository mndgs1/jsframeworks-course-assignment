import { Product, ProductCardInterface } from "../../interfaces";
import { Heading, Image } from "../";
import className from "classnames";

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
    product,
    loading,
    ...rest
}: Product & ProductCardInterface) {
    const classes = className(rest.className, "text-dark-gray", {
        "product card classes": product,
    });

    return product ? (
        <div className={classes} key={id}>
            <Heading h3>{title}</Heading>
            <Image src={imageUrl} alt={title} productCard />
        </div>
    ) : null;
}
