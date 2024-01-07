import { Product } from "../../interfaces";
import { Heading, Image } from "..";
import { Link } from "react-router-dom";
import className from "classnames";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Paragraph } from "../Paragraph";

interface ProductCardInterface {
    product?: Product;
    className?: string;
    loading: boolean;
    children?: React.ReactNode;
    imageClasses?: string;
}

type ProductCardProps = ProductCardInterface["loading"] extends true
    ? ProductCardInterface & { product: Product }
    : ProductCardInterface;

export function ProductCard({
    product,
    loading,
    children,
    imageClasses,
    ...rest
}: ProductCardProps) {
    const classes = className(rest.className, "", {});

    if (loading) {
        return (
            <div className={classes}>
                <Image className="h-64 sm:h-80" loading={loading} />
                <Heading h3>
                    <Skeleton />
                </Heading>
            </div>
        );
    }
    return product ? (
        <>
            <Link to={`/product/${product.id}`}>
                <div className={classes} key={product.id}>
                    <Image
                        src={product.imageUrl}
                        alt={product.title}
                        loading={loading}
                        className={`h-64 sm:h-80 ${imageClasses}`}
                    />
                    <div>
                        <Heading h3>{product.title}</Heading>
                        {product.discountedPrice < product.price ? (
                            <div>
                                <div className="flex justify-between">
                                    <Paragraph className="line-through">
                                        {product.price} kr
                                    </Paragraph>
                                    <Paragraph>
                                        -
                                        {Math.round(
                                            100 -
                                                (product.discountedPrice *
                                                    100) /
                                                    product.price
                                        )}
                                        %
                                    </Paragraph>
                                </div>
                                <Paragraph>
                                    {product.discountedPrice} kr
                                </Paragraph>
                            </div>
                        ) : (
                            <Paragraph>{product.price} kr</Paragraph>
                        )}
                    </div>
                </div>
            </Link>
            {children}
        </>
    ) : null;
}
