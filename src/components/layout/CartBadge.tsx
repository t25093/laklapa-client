import { useCart } from "../../context/CartContext";

const CartBadge=()=>{
    const {items}=useCart();
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems===0)
        return null
    return <span className="bg-blush-600 text-xs px-2 rounded-full text-white ms-1">{totalItems}</span>
}

export default CartBadge;