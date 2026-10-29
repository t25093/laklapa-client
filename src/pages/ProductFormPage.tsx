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

const ProductFormPage = () => {
    const { token } = useAuth();

    const { id } = useParams()
    const productId = Number(id)
    const isEdit = id !== undefined
    const { data: categories, isPending: categoriesPending, error: categoriesError } = useQuery({
        queryKey: ["categories"],
        queryFn: () => { return getCategories() },
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
            navigate("/admin/products");
        },
    });

    const content = () => {
        if ((isEdit && productPending) || categoriesPending) return <Loader />;
        if (productError || categoriesError) return <ErrorMessage message={errorMessage(categoriesError ?? productError)} />;
        else return <>{error && <ErrorMessage message={errorMessage(error)} />}
            <ProductForm
                categories={categories}
                defaultValues={defaultValues}
                isPending={isPending}
                onSubmit={(values) => mutate(values)}
            ></ProductForm>
        </>
    }



    return <>
        <PageTitle>{isEdit ? "עריכת מוצר" : "מוצר חדש"}</PageTitle>
        {content()}
    </>
}

export default ProductFormPage