import className from "classnames";
import { ImageInterface } from "../../interfaces";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function Image({
    src,
    alt,
    productCard,
    productSpecific,
    loading,
    ...rest
}: ImageInterface) {
    const imgClasses: any = {
        productCard: "w-32 h-32",
        productSpecific: "w-64 h-64",
    };

    const allProps: any = { productCard, productSpecific };

    const imgClassesByType = Object.keys(allProps).find(
        (key) => allProps[key] === true
    );

    const combinedClasses = className(
        rest.className,
        "flex justify-center align-center overflow-hidden",
        imgClassesByType ? imgClasses[imgClassesByType] : ""
    );

    return (
        <div className={combinedClasses}>
            {loading ? (
                <Skeleton
                    containerClassName="flex-1"
                    className={
                        imgClassesByType ? imgClasses[imgClassesByType] : ""
                    }
                />
            ) : (
                <img
                    src={src}
                    alt={alt}
                    className="object-contain w-full h-full"
                />
            )}
        </div>
    );
}
