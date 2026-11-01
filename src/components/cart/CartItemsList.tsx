import type { CartItem } from "../../types";
import CartItemRow from "./CartItemRow";

interface CartItemsListProp {
    items: CartItem[]
}

const CartItemsList = ({ items }: CartItemsListProp) => {
    return <div className="flex flex-col gap-4">
        {items.map((item) => < CartItemRow item={item} key={`${item.productId} ${item.preferredColor}`} ></CartItemRow>)}
    </div>
}

export default CartItemsList;