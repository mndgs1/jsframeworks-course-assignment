import Header from "../Header";
import Footer from "../Footer";

function Layout({ children }: any) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
