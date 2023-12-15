import { Header, Footer } from "../";

export function Layout({ children }: any) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow">
                <div className="max-w-7xl m-auto px-2 sm:px-6">{children}</div>
            </main>
            <Footer />
        </div>
    );
}
