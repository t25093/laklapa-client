import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import Loader from "../components/common/Loader";
import EmptyState from "../components/common/EmptyState";
import ProductsTable from "../components/admin/ProductsTable";
import PageTitle from "../components/common/PageTitle";
import ErrorMessage from "../components/common/ErrorMessage";
import { errorMessage } from "../utils/errors";
import { Link } from "react-router";

const ProductsAdminPage = () => {
    const { data: products, isPending, error } = useQuery({
        queryKey: ["products"],
        queryFn: () => getProducts()
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
            <Link className="px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700" to="/admin/products/new">+ מוצר חדש</Link>
        </div>
        {content()}
    </>
}

export default ProductsAdminPage;
