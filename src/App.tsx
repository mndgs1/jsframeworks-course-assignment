import "./index.css";
import { Layout } from "./components";
import { Routes, Route } from "react-router-dom";
import {
    HomePage,
    AboutPage,
    ProductPage,
    CartPage,
    CheckoutPage,
    NotFoundPage,
} from "./pages";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" index element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Layout>
    );
}

export default App;
