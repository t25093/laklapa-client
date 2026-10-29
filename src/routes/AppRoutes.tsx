import { Routes, Route } from "react-router"
import LoginPage from "../components/LoginPage";
import Layout from "../components/layout/Layout"
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import CatalogPage from "../pages/CatalogPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import MyOrdersPage from "../pages/MyOrdersPage";

const AppRoutes = () => {
    return <Routes>
        <Route element={<Layout></Layout>}>
            <Route path="/" element={<CatalogPage></CatalogPage>}></Route>
            <Route path="/products/:id" element={<ProductPage></ProductPage>}></Route>
            <Route path="/contact" element={<div>צור קשר</div>}></Route>
            <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route element={<ProtectedRoute role="CUSTOMER"></ProtectedRoute>}>
                <Route path="/orders" element={<MyOrdersPage></MyOrdersPage>}></Route>
                <Route path="/cart" element={<CartPage></CartPage>}></Route>
                <Route path="/checkout" element={<CheckoutPage></CheckoutPage>}></Route>
            </Route>
            <Route element={<ProtectedRoute role="ADMIN"></ProtectedRoute>}>
                <Route path="/admin/orders" element={<div>ניהול הזמנות</div>}></Route>
            </Route>
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Route>
    </Routes>
}

export default AppRoutes;