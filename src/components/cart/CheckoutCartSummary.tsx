import Icon from "../common/Icon";
import type { CartItem } from "../../types";
import { getCartTotal } from "../../utils/cart";
import PriceTag from "../common/PriceTag";
import CartItemsList from "./CartItemsList";

interface CheckoutCartSummaryProp {
    items: CartItem[]
}

const CheckoutCartSummary = ({ items }: CheckoutCartSummaryProp) => {
    return <div className="rounded-[2rem] bg-white border border-blush-100 shadow-card p-6 flex flex-col gap-3">
        <p className="font-display text-xl text-brand-800"><Icon name="bag" className="inline-block w-5 h-5 align-[-0.2em] me-1.5 text-brand-600" />סיכום ההזמנה</p>
        <CartItemsList items={items}></CartItemsList>
        <div className="flex justify-between border-t border-blush-100 pt-3 font-medium">
            <span>סה"כ:</span>
            <PriceTag price={getCartTotal(items)}></PriceTag>
        </div>
    </div>
}

export default CheckoutCartSummary;