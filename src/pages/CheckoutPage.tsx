import { useNavigate } from "react-router";
import CheckoutCartSummary from "../components/cart/CheckoutCartSummary";
import CheckoutForm, { type CheckoutFormValues } from "../components/cart/CheckoutForm";
import EmptyState from "../components/common/EmptyState";
import PageTitle from "../components/common/PageTitle";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../api/orders";
import ErrorMessage from "../components/common/ErrorMessage";
import { errorMessage } from "../utils/errors";
import giftBouquet from "../assets/gift-bouquet.svg";
import divider from "../assets/floral-divider.svg";

const CheckoutPage = () => {
    const { items, clearCart } = useCart()
    const { token } = useAuth()
    const navigate = useNavigate()

    const { mutate, isPending, error } = useMutation({
        mutationFn: (values: CheckoutFormValues) => createOrder({ ...values, items }, token ?? ""),
        onSuccess: () => {
            clearCart()
            navigate("/orders")
        }
    });

    const content = () => {
        if (items.length === 0)
            return <EmptyState message="הסל ריק, אין מה להזמין"></EmptyState>
        else
            return <>
                <ErrorMessage message={error ? errorMessage(error) : null}></ErrorMessage>
                <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] items-start">
                    <div className="flex flex-col gap-6 md:sticky md:top-36">
                        <CheckoutCartSummary items={items}></CheckoutCartSummary>
                        <div className="rounded-[2rem] bg-blush-50/60 border border-blush-100 p-6 flex flex-col items-center gap-3 text-center">
                            <img className="w-40" src={giftBouquet} alt="" />
                            <p className="font-display text-xl text-brand-800">עוד רגע הזר שלך בדרך 💐</p>
                            <p className="text-sm text-gray-500">כל זר נשזר ביד ביום המסירה, נעטף בנייר עדין ומגיע עם כרטיס ברכה אישי.</p>
                        </div>
                    </div>
                    <div className="rounded-[2rem] bg-white border border-blush-100 shadow-soft p-6 md:p-8">
                        <p className="font-display text-2xl text-brand-800 mb-1">פרטי המסירה 🌷</p>
                        <p className="text-sm text-gray-500 mb-6">למי הזר, לאן ומתי</p>
                        <CheckoutForm isPending={isPending} onSubmit={(values) => mutate(values)}></CheckoutForm>
                    </div>
                </div>
            </>
    }
    return <>
        <PageTitle>השלמת הזמנה</PageTitle>
        <img className="mb-8 w-48" src={divider} alt="" />
        {content()}
    </>
}
export default CheckoutPage;