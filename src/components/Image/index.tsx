import className from "classnames";
import { ImageInterface } from "../../interfaces";

export function Image({ src, alt, productCard, ...rest }: ImageInterface) {
    const classes = className(
        rest.className,
        "flex justify-center align-center overflow-hidden",
        {
            "product card image classes": productCard,
        }
    );

    return productCard ? (
        <div className={classes}>
            <img src={src} alt={alt} className="object-contain w-full h-full" />
        </div>
    ) : null;
}
