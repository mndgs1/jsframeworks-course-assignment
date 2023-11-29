import data from "../../content.json";
import { Nav } from "../";
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
            <div className="flex justify-between py-4 px-6 max-w-7xl m-auto">
                <div>
                    <Link to={"/"}>{data.brand.name}</Link>
                </div>
                <div>
                    <Nav items={navigation} />
                </div>
            </div>
        </header>
    );
}
