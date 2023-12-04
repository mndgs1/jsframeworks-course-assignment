import { Header, Footer } from "../";

export function Layout({ children }: any) {
    return (
        <>
            <Header />
            <main className="max-w-7xl m-auto px-2 sm:px-6">{children}</main>
            <Footer />
        </>
    );
}
