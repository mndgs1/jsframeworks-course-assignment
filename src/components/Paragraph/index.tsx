import className from "classnames";

export interface ParagraphInterface {
    children: React.ReactNode;
    className?: string;
    description?: boolean;
    username?: boolean;
    price?: boolean;
    discountedPrice?: boolean;
    rating?: boolean;
    tag?: boolean;
    error?: boolean;
    success?: boolean;
}

export function Paragraph({
    children,
    description,
    username,
    price,
    discountedPrice,
    rating,
    tag,
    error,
    success,
    ...rest
}: ParagraphInterface) {
    const classes = className(rest.className, "text-dark-gray", {
        "mb-2": description,
        "text-2xl": username,
        "text-xl md:text-2xl mb-2": price,
        "text-lg md:text-xl mb-2": discountedPrice,
        "md:text-lg mb-2": rating,
        "this is tag": tag,
        "text-red-500": error,
        "bg-green-500 text-white": success,
    });

    return <p className={classes}>{children}</p>;
}

Paragraph.propTypes = {
    checkVariationValue: ({
        description,
        username,
        price,
        discountedPrice,
        rating,
        tag,
        error,
        success,
    }: ParagraphInterface) => {
        const count =
            Number(!!description) +
            Number(!!username) +
            Number(!!price) +
            Number(!!discountedPrice) +
            Number(!!rating) +
            Number(!!tag) +
            Number(!!error) +
            Number(!!success);

        if (count > 1) {
            return new Error(
                "Only one of primary, secondary, success, warning, danger can be true"
            );
        }
    },
};
