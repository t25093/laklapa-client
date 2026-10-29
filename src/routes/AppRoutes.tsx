import { Route, Routes } from "react-router";
import LoginPage from "../components/LoginPage";
import Layout from "../components/layout/Layout";
import CartPage from "../pages/CartPage";
import CatalogPage from "../pages/CatalogPage";
import CheckoutPage from "../pages/CheckoutPage";
import MyOrdersPage from "../pages/MyOrdersPage";
import NotFoundPage from "../pages/NotFoundPage";
import OrderDetailsPage from "../pages/OrderDetailsPage";
import ProductPage from "../pages/ProductPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import ProductsAdminPage from "../pages/ProductsAdminPage";
import ProductFormPage from "../pages/ProductFormPage";

const AppRoutes = () => {
    return <Routes>
        <Route element={<Layout></Layout>}>
            <Route path="/" element={<CatalogPage></CatalogPage>}></Route>
            <Route path="/products/:id" element={<ProductPage></ProductPage>}></Route>
            {/* <Route path="/contact" element={<div>צור קשר</div>}></Route> */}
            <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route element={<ProtectedRoute role="CUSTOMER"></ProtectedRoute>}>
                <Route path="/orders" element={<MyOrdersPage></MyOrdersPage>}></Route>
                <Route path="/cart" element={<CartPage></CartPage>}></Route>
                <Route path="/checkout" element={<CheckoutPage></CheckoutPage>}></Route>
                <Route path="/orders/:id" element={<OrderDetailsPage></OrderDetailsPage>}></Route>
            </Route>
            <Route element={<ProtectedRoute role="ADMIN"></ProtectedRoute>}>
                <Route path="/admin/orders" element={<div>ניהול הזמנות</div>}></Route>
                <Route path="/admin/products" element={<ProductsAdminPage></ProductsAdminPage>}></Route>
                <Route path="/admin/products/:id/edit" element={<ProductFormPage></ProductFormPage>}></Route>
                <Route path="/admin/products/new" element={<ProductFormPage></ProductFormPage>}></Route>
            </Route>
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Route>
    </Routes>
}

export default AppRoutes;