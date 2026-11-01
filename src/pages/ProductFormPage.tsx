import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router"
import ProductForm from "../components/admin/ProductForm"
import ErrorMessage from "../components/common/ErrorMessage"
import Loader from "../components/common/Loader"
import PageTitle from "../components/common/PageTitle"
import { useAuth } from "../context/AuthContext"
import { getCategories } from "../api/categories"
import { errorMessage } from "../utils/errors"
import { createProduct, getProduct, updateProduct } from "../api/products"
import type { ProductFormValues } from "../types"
import vase from "../assets/vase.svg"
import divider from "../assets/floral-divider.svg"

const ProductFormPage = () => {
    const { token } = useAuth();

    const { id } = useParams()
    const productId = Number(id)
    const isEdit = id !== undefined
    const { data: categories, isPending: categoriesPending, error: categoriesError } = useQuery({
        queryKey: ["categories"],
        queryFn: () => { return getCategories() }
    });

    const { data: product, isPending: productPending, error: productError } = useQuery({
        queryKey: ["product", productId],
        queryFn: () => { return getProduct(productId) },
        enabled: isEdit
    });

    const defaultValues = product
        ? {
            name: product.name,
            description: product.description,
            price: product.price,
            imageUrl: product.imageUrl,
            categoryId: product.category.id,
        }
        : undefined;

    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { mutate, isPending, error } = useMutation({
        mutationFn: (values: ProductFormValues) =>
            isEdit ? updateProduct(productId, values, token ?? "")
                : createProduct(values, token ?? ""),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            queryClient.invalidateQueries({ queryKey: ["product", productId] });
            navigate("/admin/products");
        },
    });

    const content = () => {
        if ((isEdit && productPending) || categoriesPending) return <Loader />;
        if (productError || categoriesError) return <ErrorMessage message={errorMessage(categoriesError ?? productError)} />;
        else return <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] items-start">
            <div className="rounded-[2rem] bg-white border border-blush-100 shadow-soft p-6 md:p-8 flex flex-col gap-4">
                {error && <ErrorMessage message={errorMessage(error)} />}
                <ProductForm
                    categories={categories}
                    defaultValues={defaultValues}
                    isPending={isPending}
                    onSubmit={(values) => mutate(values)}
                ></ProductForm>
            </div>
            <aside className="rounded-[2rem] bg-blush-50/60 border border-blush-100 p-6 flex flex-col items-center gap-4 text-center">
                <img className="w-44" src={vase} alt="" />
                <p className="font-display text-xl text-brand-800">טיפים למוצר שנמכר ✨</p>
                <ul className="text-sm text-gray-600 flex flex-col gap-2 text-right">
                    <li>📸 תמונה בהירה, על רקע נקי, באור יום</li>
                    <li>✍️ תיאור שמספר מה בזר ולאיזה רגע הוא מתאים</li>
                    <li>🏷️ קטגוריה מדויקת עוזרת ללקוחות למצוא אותו</li>
                </ul>
            </aside>
        </div>
    }



    return <>
        <PageTitle>{isEdit ? "עריכת מוצר" : "מוצר חדש"}</PageTitle>
        <img className="mb-8 w-48" src={divider} alt="" />
        {content()}
    </>
}

export default ProductFormPage