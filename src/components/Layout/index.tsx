import { Header, Footer } from "../";

export function Layout({ children }: any) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
