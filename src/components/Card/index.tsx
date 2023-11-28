import { Product, ProductCardInterface } from "../../interfaces";
import { Heading, Image } from "../";
import className from "classnames";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
    const classes = className(rest.className, "", {
        "product card classes": product,
    });

    return product ? (
        <div className={classes} key={id}>
            <Heading h3>{!loading ? title : <Skeleton />}</Heading>
            <Image src={imageUrl} alt={title} productCard loading={loading} />
        </div>
    ) : null;
}
