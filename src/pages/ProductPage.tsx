import Icon from "../components/common/Icon";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router";
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
    const { user } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate()
    const { addItem } = useCart();
    const productId = Number(id)
    const { data: product, isPending, error } = useQuery({
        queryKey: ["product", productId],
        queryFn: () => { return getProduct(productId) },
    });

    const content = () => {
        if (isPending) return <Loader />;
        if (error) return <ErrorMessage message={errorMessage(error)} />;
        else return <ProductDetails product={product}>
            {user?.role === "CUSTOMER" && <div className="rounded-[2rem] bg-blush-50/60 border border-blush-100 p-6 flex flex-col gap-4">
                <p className="font-display text-xl text-brand-800"><Icon name="cart" className="inline-block w-5 h-5 align-[-0.2em] me-1.5 text-brand-600" />להוסיף לסל</p>
                <AddToCartForm onSubmit={(values) => {
                    addItem({ productId: product.id, name: product.name, price: product.price, imageUrl: product.imageUrl, ...values });
                    navigate("/", { state: { added: product.name } })
                }}></AddToCartForm>
            </div>}
            {!user && <div className="rounded-[2rem] bg-blush-50/60 border border-blush-100 p-6 text-center flex flex-col gap-2">
                <p className="font-display text-xl text-brand-800"><Icon name="sparkle" className="inline-block w-5 h-5 align-[-0.2em] me-1.5 text-brand-600" />אהבת את הזר?</p>
                <p className="text-sm text-gray-600"><Link className="text-brand-600 hover:underline" to="/login">התחברי</Link> או <Link className="text-brand-600 hover:underline" to="/register">הירשמי</Link> כדי להזמין</p>
            </div>}
        </ProductDetails>
    }
    return <>
        <PageTitle>{product?.name}</PageTitle>
        {content()}
    </>
}
export default ProductPage;