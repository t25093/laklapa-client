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

    return <div className="mt-6 p-4 border rounded-xl bg-blush-50 flex flex-col gap-4">
        <div className="flex justify-between">
            <span>סה"כ לתשלום:</span>
            <PriceTag price={getCartTotal(items)}></PriceTag>
        </div>
        <Button onClick={() => navigate("/checkout")} fullWidth={true}>להמשך הזמנה</Button>
    </div>
}

export default CartSummary;