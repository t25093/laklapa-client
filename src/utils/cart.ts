import type { CartItem } from "../types"

export const getCartTotal = (items: CartItem[]) => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
}