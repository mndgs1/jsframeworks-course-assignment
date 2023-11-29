import { Link } from "react-router-dom";
import { NavProps } from "../../interfaces";

export function Nav({ items, ...rest }: NavProps) {
    return (
        <nav>
            <ul className="flex gap-4">
                {items.map((item) => (
                    <li key={item.id}>
                        <Link to={item.url}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
