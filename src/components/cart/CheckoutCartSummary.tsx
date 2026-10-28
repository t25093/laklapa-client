import type { CartItem } from "../../types";
import { getCartTotal } from "../../utils/cart";
import PriceTag from "../common/PriceTag";
import CartItemsList from "./CartItemsList";

interface CheckoutCartSummaryProp {
    items: CartItem[]
}

const CheckoutCartSummary = ({ items }: CheckoutCartSummaryProp) => {
    return <div className="p-4 border rounded-xl bg-blush-50 flex flex-col gap-2">
        <p className="font-semibold">סיכום הזמנה</p>
        <CartItemsList items={items}></CartItemsList>
        <div className=" flex justify-between border-t pt-2 font-semibold">
            <span>סה"כ:</span>
            <PriceTag price={getCartTotal(items)}></PriceTag>
        </div>
    </div>
}

export default CheckoutCartSummary;