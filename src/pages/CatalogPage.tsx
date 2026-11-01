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
import { useEffect, useState } from "react";
import bouquet from "../assets/floral-bouquet.svg";
import divider from "../assets/floral-divider.svg";
import { Link, useLocation } from "react-router";


const CatalogPage = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState<undefined | number>(undefined)
    const location = useLocation()
    const added = location.state?.added;

    const [message, setMessage] = useState(added);

    useEffect(() => {
        if (!message) return;                               
        const timer = setTimeout(() => setMessage(undefined), 3000);  
        return () => clearTimeout(timer);                     
    }, [message]);

    const { data: products, isPending, error } = useQuery({
        queryKey: ["products", selectedCategoryId],
        queryFn: () => { return getProducts(selectedCategoryId) },
    });

    const { data: categories = [] } = useQuery({
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
        {message && <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-full bg-white border border-brand-100 px-6 py-3 text-brand-800 shadow-soft">✓ <span>{message} נוסף לסל 🌸</span>
            <Link to="/cart" className="ms-auto text-sm text-brand-600 hover:underline">לסל ←</Link></div>}
        <section className="mb-12 grid items-center gap-6 md:grid-cols-[1.3fr_1fr] rounded-[2rem] border border-blush-100 shadow-soft p-8 md:p-12 bg-[radial-gradient(circle_at_85%_20%,var(--color-blush-100)_0%,transparent_45%),radial-gradient(circle_at_10%_90%,var(--color-brand-50)_0%,transparent_50%),#ffffff]">
            <div className="flex flex-col gap-4">
                <p className="text-sm tracking-[0.3em] text-blush-600">✿ סטודיו לעיצוב פרחים ✿</p>
                <h1 className="font-hand text-5xl md:text-7xl leading-tight text-brand-800">שוזרת פרח שמדבר</h1>
                <p className="text-lg text-gray-600 max-w-md">זרים ומארזים שנשזרים ביד, באהבה ובפרטים הקטנים. לכל רגע שמגיע לו פרח.</p>
                <div className="flex flex-wrap gap-2 pt-2 text-sm">
                    <span className="px-4 py-1.5 rounded-full bg-white border border-blush-100 shadow-card">🌷 עבודת יד</span>
                    <span className="px-4 py-1.5 rounded-full bg-white border border-blush-100 shadow-card">🚚 משלוח עד הבית</span>
                    <span className="px-4 py-1.5 rounded-full bg-white border border-blush-100 shadow-card">💌 כרטיס ברכה אישי</span>
                </div>
            </div>
            <img className="w-56 md:w-72 justify-self-center" src={bouquet} alt="" />
        </section>
        <img className="mx-auto mb-4 w-48" src={divider} alt="" />
        <PageTitle>קטלוג מוצרים</PageTitle>
        <CategoryFilter onSelect={setSelectedCategoryId} selectedId={selectedCategoryId} categories={categories}></CategoryFilter>
        {content()}
    </>

}

export default CatalogPage;