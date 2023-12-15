import className from "classnames";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ImageInterface {
    src?: string;
    alt?: string;
    className?: string;
    loading: boolean;
}

export function Image({ src, alt, loading, ...rest }: ImageInterface) {
    const combinedClasses = className(
        rest.className,
        "flex justify-center align-center overflow-hidden"
    );

    return (
        <div className={combinedClasses}>
            {loading ? (
                <Skeleton
                    containerClassName={"flex-1"}
                    className={rest.className}
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
