import className from "classnames";
import { ImageInterface } from "../../interfaces";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function Image({
    src,
    alt,
    productCard,
    loading,
    ...rest
}: ImageInterface) {
    const classes = className(
        rest.className,
        "flex justify-center align-center overflow-hidden",
        {
            "w-32 h-32": productCard,
        }
    );

    return productCard ? (
        <div className={classes}>
            {loading ? (
                <Skeleton containerClassName="flex-1" className=" w-32 h-32" />
            ) : (
                <img
                    src={src}
                    alt={alt}
                    className="object-contain w-full h-full"
                />
            )}
        </div>
    ) : null;
}
