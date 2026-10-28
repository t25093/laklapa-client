import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { CartItem } from "../types";
import { loadJson, saveJson } from "../utils/storage";

const CART_KEY = "laklapa_cart"

interface CartContextValue {
    items: CartItem[],
    addItem: (cartItem: CartItem) => void,
    removeItem: (productId: number, preferredColor: string) => void,
    updateQuantity: (productId: number, preferredColor: string, quantity: number) => void,
    clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null);


export function CartProvider({ children }: { children: ReactNode }) {

    const [items, setItems] = useState<CartItem[]>(() => loadJson<CartItem[]>(CART_KEY, []))

    function clearCart() {
        setItems([]);
    }

    function removeItem(productId: number, preferredColor: string) {
        setItems(items.filter((item) => item.productId !== productId || item.preferredColor !== preferredColor));
    }

    function updateQuantity(productId: number, preferredColor: string, quantity: number) {
        setItems(items.map((item) =>
            item.productId === productId && item.preferredColor === preferredColor
                ? { ...item, quantity: quantity }
                : item
        ));
    }

    function addItem(itemNew: CartItem) {
        const existingItem = items.find((item) => (item.productId === itemNew.productId && item.preferredColor === itemNew.preferredColor))
        if (existingItem !== undefined && existingItem.notes === itemNew.notes) {
            if ((itemNew.quantity + existingItem.quantity) > 20)
                updateQuantity(itemNew.productId, itemNew.preferredColor, 20)
            updateQuantity(itemNew.productId, itemNew.preferredColor, itemNew.quantity + existingItem.quantity)
        }
        else
            setItems([itemNew, ...items])
    }

    useEffect(() => {
        saveJson(CART_KEY, items)
    }, [items]);

    return (
        <CartContext.Provider value={{ items, clearCart, removeItem, updateQuantity, addItem }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(): CartContextValue {
    const context = useContext(CartContext);
    if (context === null) {
        throw new Error("useCart חייב להיות בתוך CartProvider");
    }
    return context;
}