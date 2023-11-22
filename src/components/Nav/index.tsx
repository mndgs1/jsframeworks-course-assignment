interface NavProps {
    items: { label: string; url: string; id: number }[];
}

function Nav({ items }: NavProps) {
    return (
        <nav>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <a href={item.url}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
