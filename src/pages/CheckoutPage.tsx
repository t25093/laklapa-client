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
                <div className="grid gap-8 md:grid-cols-2">
                    <CheckoutCartSummary items={items}></CheckoutCartSummary>
                    <CheckoutForm isPending={isPending} onSubmit={(values) => mutate(values)}></CheckoutForm>
                </div>
            </>
    }
    return <>
        <PageTitle>השלמת הזמנה</PageTitle>
        {content()}
    </>
}
export default CheckoutPage;