import { Link } from "react-router-dom";

export interface NavProps {
    items: { label: string; url: string; id: number }[];
    className?: string;
}

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
