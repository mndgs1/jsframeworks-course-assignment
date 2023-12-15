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
    ContactPage,
    CheckoutSuccessPage,
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
                <Route
                    path="/checkout/success"
                    element={<CheckoutSuccessPage />}
                />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route
                    path="/checkout/success"
                    element={<CheckoutSuccessPage />}
                />
            </Routes>
        </Layout>
    );
}

export default App;
