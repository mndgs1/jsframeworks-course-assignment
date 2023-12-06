import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks";

export function CartIcon() {
    const { totalQuantity } = useCart();

    return (
        <Link to={"/cart"}>
            <div className="relative">
                <IoCartSharp size={"2.5em"} />
                {totalQuantity > 0 && (
                    <div className="absolute top-0 right-0 bg-red-500 leading-none h-4 w-4 p-1 rounded-full text-xs">
                        {totalQuantity}
                    </div>
                )}
            </div>
        </Link>
    );
}
