import data from "../../content.json";
import { CartIcon, Nav } from "../";
import { Link } from "react-router-dom";

interface NavigationItem {
    id: number;
    label: string;
    url: string;
}

interface Navigation {
    navigation: NavigationItem[];
}

export function Header() {
    const { navigation } = data as Navigation;

    return (
        <header>
            <div className="flex justify-between items-center py-4 max-w-7xl m-auto px-2 sm:px-6">
                <Link to={"/"}>{data.brand.name}</Link>
                <div className="flex items-center gap-2">
                    <Nav items={navigation} />
                    <CartIcon />
                </div>
            </div>
        </header>
    );
}
