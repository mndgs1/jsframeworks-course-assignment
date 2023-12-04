import className from "classnames";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ImageInterface {
    src?: string;
    alt?: string;
    className?: string;
    productCard?: boolean;
    productSpecific?: boolean;
    loading: boolean;
}

export function Image({
    src,
    alt,
    productCard,
    productSpecific,
    loading,
    ...rest
}: ImageInterface) {
    const imgClasses: any = {
        productCard: "w-full h-64 sm:h-80",
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
                    alt={alt || "Placeholder image"}
                    className="object-cover w-full h-full"
                />
            )}
        </div>
    );
}
