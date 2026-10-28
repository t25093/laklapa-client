import CartItemsList from "../components/cart/CartItemsList";
import CartSummary from "../components/cart/CartSummary";
import EmptyState from "../components/common/EmptyState";
import PageTitle from "../components/common/PageTitle";
import { useCart } from "../context/CartContext";

const CartPage = () => {
    const { items } = useCart()

    const content = () => {
        if (items.length === 0)
            return <EmptyState message="הסל ריק"></EmptyState>
        else
            return <>
            <CartItemsList items={items}></CartItemsList>
            <CartSummary items={items}></CartSummary>
            </>
            
    }

    return <>
        <PageTitle>סל קניות</PageTitle>
        {content()}
    </>
}

export default CartPage;