import { Link } from "react-router-dom";

interface NavProps {
    items: { label: string; url: string; id: number }[];
}

export function Nav({ items }: NavProps) {
    return (
        <nav>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <Link to={item.url}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
