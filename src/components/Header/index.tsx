import data from "../../content.json";
import { Nav } from "../";

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
            <Nav items={navigation} />
        </header>
    );
}
