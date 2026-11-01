import CartItemsList from "../components/cart/CartItemsList";
import CartSummary from "../components/cart/CartSummary";
import EmptyState from "../components/common/EmptyState";
import PageTitle from "../components/common/PageTitle";
import { useCart } from "../context/CartContext";
import divider from "../assets/floral-divider.svg";

const CartPage = () => {
    const { items } = useCart()

    const content = () => {
        if (items.length === 0)
            return <EmptyState message="הסל ריק"></EmptyState>
        else
            return <div className="grid gap-8 md:grid-cols-[1.6fr_1fr] items-start">
                <CartItemsList items={items}></CartItemsList>
                <div className="md:sticky md:top-36">
                    <CartSummary items={items}></CartSummary>
                </div>
            </div>
            
    }

    return <>
        <PageTitle>סל קניות</PageTitle>
        <img className="mb-8 w-48" src={divider} alt="" />
        {content()}
    </>
}

export default CartPage;