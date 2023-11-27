import className from "classnames";
import { ParagraphInterface } from "../../interfaces";

export function Paragraph({
    children,
    description,
    username,
    price,
    discountedPrice,
    rating,
    tag,
    ...rest
}: ParagraphInterface) {
    const classes = className(rest.className, "text-dark-gray", {
        "text-4xl md:text-5xl": description,
        "text-2xl": username,
        "text-xl md:text-2xl mb-2": price,
        "text-lg md:text-xl mb-2": discountedPrice,
        "md:text-lg mb-2": rating,
        "this is tag": tag,
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
    }: ParagraphInterface) => {
        const count =
            Number(!!description) +
            Number(!!username) +
            Number(!!price) +
            Number(!!discountedPrice) +
            Number(!!rating) +
            Number(!!tag);

        if (count > 1) {
            return new Error(
                "Only one of primary, secondary, success, warning, danger can be true"
            );
        }
    },
};
