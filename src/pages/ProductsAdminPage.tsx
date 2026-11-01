import { useQuery } from "@tanstack/react-query";
import { getAdminProducts } from "../api/products";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/common/Loader";
import EmptyState from "../components/common/EmptyState";
import ProductsTable from "../components/admin/ProductsTable";
import PageTitle from "../components/common/PageTitle";
import ErrorMessage from "../components/common/ErrorMessage";
import { errorMessage } from "../utils/errors";
import { Link } from "react-router";

const ProductsAdminPage = () => {
    const { token } = useAuth()
    const { data: products, isPending, error } = useQuery({
        queryKey: ["products", "admin"],
        queryFn: () => getAdminProducts(token ?? "")
    });

    const content = () => {
        if (isPending) return <Loader />;
        if (error) return <ErrorMessage message={errorMessage(error)} />;
        if (products.length === 0) return <EmptyState message="עוד אין מוצרים"></EmptyState>
        else return <ProductsTable products={products}></ProductsTable>;
    }

    return <>
        <div className="flex justify-between items-center">
            <PageTitle>ניהול מוצרים</PageTitle>
            <Link className="px-6 py-2.5 rounded-full font-brand font-medium bg-brand-600 text-white shadow-card transition duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-soft" to="/admin/products/new">+ מוצר חדש</Link>
        </div>
        {content()}
    </>
}

export default ProductsAdminPage;
