import Loader from "../components/common/Loader";
import PageTitle from "../components/common/PageTitle";
import ProductGrid from "../components/products/ProductGrid";
import { useQuery } from "@tanstack/react-query";
import { errorMessage } from "../utils/errors";
import EmptyState from "../components/common/EmptyState";
import ErrorMessage from "../components/common/ErrorMessage";
import { getProducts } from "../api/products";
import CategoryFilter from "../components/products/CategoryFilter";
import { getCategories } from "../api/categories";
import { useState } from "react";


const CatalogPage = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState<undefined | number>(undefined)

    const { data: products, isPending, error } = useQuery({
        queryKey: ["products",selectedCategoryId],
        queryFn: () => { return getProducts(selectedCategoryId) },
    });

    const { data: categories=[] } = useQuery({
        queryKey: ["categories"],
        queryFn: () => { return getCategories() },
    });

    const content = () => {
        if (isPending) return <Loader />;
        if (error) return <ErrorMessage message={errorMessage(error)} />;
        if (products.length === 0) return <EmptyState message="הקטלוג ריק"></EmptyState>
        else return <ProductGrid products={products} />;
    }

    return <>
        <PageTitle>קטלוג מוצרים</PageTitle>
        <CategoryFilter onSelect={setSelectedCategoryId} selectedId={selectedCategoryId} categories={categories}></CategoryFilter>
        {content()}
    </>

}

export default CatalogPage;