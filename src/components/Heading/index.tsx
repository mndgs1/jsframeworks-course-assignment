import className from "classnames";

interface HeadingInterface {
    children: React.ReactNode;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    className?: string;
}
export function Heading({
    children,
    h1,
    h2,
    h3,
    h4,
    h5,
    ...rest
}: HeadingInterface) {
    const classes = className(rest.className, "text-dark-gray", {
        "text-4xl md:text-5xl mb-4": h1,
        "text-2xl": h2,
        "text-xl md:text-2xl mb-2": h3,
        "text-lg md:text-xl mb-2": h4,
        "md:text-lg mb-2": h5,
    });

    return h1 ? (
        <h1 className={classes}>{children}</h1>
    ) : h2 ? (
        <h2 className={classes}>{children}</h2>
    ) : h3 ? (
        <h3 className={classes}>{children}</h3>
    ) : h4 ? (
        <h4 className={classes}>{children}</h4>
    ) : h5 ? (
        <h5 className={classes}>{children}</h5>
    ) : null;
}

Heading.propTypes = {
    checkVariationValue: ({ h1, h2, h3, h4, h5 }: HeadingInterface) => {
        const count =
            Number(!!h1) +
            Number(!!h2) +
            Number(!!h3) +
            Number(!!h4) +
            Number(!!h5);

        if (count > 1) {
            return new Error(
                "Only one of primary, secondary, success, warning, danger can be true"
            );
        }
    },
};
