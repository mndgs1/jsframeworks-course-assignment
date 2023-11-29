import data from "../../content.json";
import { Nav } from "../";
import { Link, useLocation } from "react-router-dom";
import { SearchBar } from "../Search";

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

    const { pathname } = useLocation();

    return (
        <header>
            <div className="flex justify-between py-4 max-w-7xl m-auto">
                <div>
                    <Link to={"/"}>{data.brand.name}</Link>
                </div>
                {pathname === "/" && <SearchBar />}
                <div>
                    <Nav items={navigation} />
                </div>
            </div>
        </header>
    );
}
