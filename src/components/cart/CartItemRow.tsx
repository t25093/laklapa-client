import { useCart } from "../../context/CartContext";
import type { CartItem } from "../../types";
import { COLOR_OPTIONS } from "../../utils/constants";
import Button from "../common/Button";
import PriceTag from "../common/PriceTag";

interface CartItemRowProp {
    item: CartItem
}

const CartItemRow = ({ item }: CartItemRowProp) => {
    const { removeItem, updateQuantity } = useCart()

    return <div className="flex justify-between items-center border-b py-4">
        <div className="flex flex-col gap-1">
            <p className="font-semibold">שם: {item.name}</p>
            <p className="text-sm text-gray-500">{COLOR_OPTIONS.find((color) => color.value === item.preferredColor)?.label}</p>
            {item.notes && <p className="text-sm text-gray-500">הערות: {item.notes}</p>}
        </div>
        {/* <img src={item.imageUrl} alt={item.name} /> */}
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <Button variant="secondary" disabled={item.quantity===1} onClick={()=>updateQuantity(item.productId,item.preferredColor,item.quantity-1)}>-</Button>
                <span>{item.quantity}</span>
                <Button variant="secondary" disabled={item.quantity===20} onClick={()=>updateQuantity(item.productId,item.preferredColor,item.quantity+1)}>+</Button>
            </div>
            <PriceTag price={(item.price) * (item.quantity)}></PriceTag>
            <Button variant="danger" onClick={() => removeItem(item.productId, item.preferredColor)}>הסרה</Button>
        </div>
    </div>
}

export default CartItemRow;