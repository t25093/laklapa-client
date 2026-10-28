import CheckoutCartSummary from "../components/cart/CheckoutCartSummary";
import CheckoutForm from "../components/cart/CheckoutForm";
import EmptyState from "../components/common/EmptyState";
import PageTitle from "../components/common/PageTitle";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
    const { items } = useCart()

    const content = () => {
        if (items.length === 0)
            return <EmptyState message="הסל ריק, אין מה להזמין"></EmptyState>
        else
            return <div className="grid gap-8 md:grid-cols-2">
                <CheckoutCartSummary items={items}></CheckoutCartSummary>
                <CheckoutForm onSubmit={(values) => console.log(values)}></CheckoutForm>
            </div>
    }
    return <>
        <PageTitle>השלמת הזמנה</PageTitle>
        {content()}
    </>
}
export default CheckoutPage;