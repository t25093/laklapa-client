import type { CartItem } from "../../types";
import CartItemRow from "./CartItemRow";

interface CartItemsListProp {
    items: CartItem[]
}

const CartItemsList = ({ items }: CartItemsListProp) => {
    return <div>
        {items.map((item) => < CartItemRow item={item} key={`${item.productId} ${item.preferredColor}`} ></CartItemRow>)}
    </div>
}

export default CartItemsList;