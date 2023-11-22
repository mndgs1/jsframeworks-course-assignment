import Nav from "../Nav";
import data from "../../content.json";

interface NavigationItem {
    id: number;
    label: string;
    url: string;
}

interface DataStructure {
    navigation: NavigationItem[];
}

function Header() {
    const { navigation } = data as DataStructure;

    return (
        <header>
            <Nav items={navigation} />
        </header>
    );
}

export default Header;
