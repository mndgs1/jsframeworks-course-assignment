import { Header, Footer } from "../";

export function Layout({ children }: any) {
    return (
        <>
            <Header />
            <main className="px-6 max-w-7xl m-auto">{children}</main>
            <Footer />
        </>
    );
}
