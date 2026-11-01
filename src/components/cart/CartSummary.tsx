import Icon from "../common/Icon";
import { useNavigate } from "react-router";
import type { CartItem } from "../../types";
import Button from "../common/Button";
import PriceTag from "../common/PriceTag";
import { getCartTotal } from "../../utils/cart";

interface CartSummaryProp {
    items: CartItem[]
}

const CartSummary = ({ items }: CartSummaryProp) => {

    const navigate = useNavigate()

    return <div className="rounded-[2rem] bg-white border border-blush-100 shadow-card p-6 flex flex-col gap-4">
        <p className="font-display text-xl text-brand-800"><Icon name="receipt" className="inline-block w-5 h-5 align-[-0.2em] me-1.5 text-brand-600" />סיכום הסל</p>
        <div className="flex justify-between text-sm text-gray-600">
            <span>מוצרים</span>
            <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
        </div>
        <div className="flex justify-between items-baseline border-t border-blush-100 pt-4">
            <span>סה"כ לתשלום:</span>
            <span className="font-display text-2xl"><PriceTag price={getCartTotal(items)}></PriceTag></span>
        </div>
        <Button onClick={() => navigate("/checkout")} fullWidth={true}>להמשך הזמנה</Button>
        <p className="text-xs text-center text-gray-500"><Icon name="lock" className="inline-block w-3.5 h-3.5 align-[-0.2em] me-1.5 text-brand-600" />התשלום בעת המסירה · <Icon name="envelope" className="inline-block w-3.5 h-3.5 align-[-0.2em] me-1.5 text-brand-600" />כרטיס ברכה בשלב הבא</p>
    </div>
}

export default CartSummary;