import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

interface CartIconProps {
    count: number;
}

export function CartIcon({ count }: CartIconProps) {
    return (
        <Link to={"/cart"}>
            <div className="relative">
                <IoCartSharp size={"2.5em"} />
                {count > 0 && (
                    <div className="absolute top-0 right-0 bg-red-500 leading-none h-4 w-4 p-1 rounded-full text-xs">
                        {count}
                    </div>
                )}
            </div>
        </Link>
    );
}
