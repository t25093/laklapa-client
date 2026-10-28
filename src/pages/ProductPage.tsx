import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getProduct } from "../api/products";
import ErrorMessage from "../components/common/ErrorMessage";
import Loader from "../components/common/Loader";
import PageTitle from "../components/common/PageTitle";
import { errorMessage } from "../utils/errors";
import ProductDetails from "../components/products/ProductDetails";
import AddToCartForm from "../components/products/AddToCartForm";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const ProductPage = () => {
    const {user}=useAuth();
    const { id } = useParams();
    const { addItem } = useCart();
    const productId = Number(id)
    const { data: product, isPending, error } = useQuery({
        queryKey: ["product", productId],
        queryFn: () => { return getProduct(productId) },
    });

    const content = () => {
        if (isPending) return <Loader />;
        if (error) return <ErrorMessage message={errorMessage(error)} />;
        else return <>
            <ProductDetails product={product}></ProductDetails>
            {user?.role==="CUSTOMER" && <AddToCartForm onSubmit={(values) => addItem({ productId: product.id, name: product.name, price: product.price, imageUrl: product.imageUrl, ...values })}></AddToCartForm>}
        </>
    }
    return <>
        <PageTitle>{product?.name}</PageTitle>
        {content()}
    </>
}
export default ProductPage;