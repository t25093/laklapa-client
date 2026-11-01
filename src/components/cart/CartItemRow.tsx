import Icon from "../common/Icon";
import { useCart } from "../../context/CartContext";
import type { CartItem } from "../../types";
import { COLOR_OPTIONS, getOptionLabel } from "../../utils/constants";
import Button from "../common/Button";
import PriceTag from "../common/PriceTag";
import ProductImage from "../products/ProductImage";

interface CartItemRowProp {
    item: CartItem
}

const CartItemRow = ({ item }: CartItemRowProp) => {
    const { removeItem, updateQuantity } = useCart()

    return <div className="rounded-[2rem] bg-white border border-blush-100 shadow-card p-4 flex flex-wrap items-center gap-4">
        <ProductImage size="w-20 h-20" alt={item.name} src={item.imageUrl}></ProductImage>
        <div className="flex flex-col gap-1 flex-1 min-w-40">
            <p className="font-display text-lg text-brand-800">{item.name}</p>
            <span className="self-start px-3 py-0.5 rounded-full bg-blush-50 text-xs text-blush-600"><Icon name="palette" className="inline-block w-3.5 h-3.5 align-[-0.2em] me-1.5 text-blush-600" />{getOptionLabel(COLOR_OPTIONS,item.preferredColor)}</span>
            {item.notes && <p className="text-sm text-gray-500"><Icon name="pencil" className="inline-block w-3.5 h-3.5 align-[-0.2em] me-1.5 text-brand-600" />{item.notes}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-blush-100 bg-blush-50/50 p-1">
                <Button size="sm" variant="secondary" disabled={item.quantity===1} onClick={()=>updateQuantity(item.productId,item.preferredColor,item.quantity-1)}>-</Button>
                <span className="w-6 text-center font-medium">{item.quantity}</span>
                <Button size="sm" variant="secondary" disabled={item.quantity===20} onClick={()=>updateQuantity(item.productId,item.preferredColor,item.quantity+1)}>+</Button>
            </div>
            <span className="font-display text-lg"><PriceTag price={(item.price) * (item.quantity)}></PriceTag></span>
            <Button size="sm" variant="danger" onClick={() => removeItem(item.productId, item.preferredColor)}>הסרה</Button>
        </div>
    </div>
}

export default CartItemRow;