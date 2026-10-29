import type { CheckoutFormValues } from "../components/cart/CheckoutForm";
import type { CartItem } from "../types";
import { apiRequest } from "./client";

export interface CreateOrderData extends CheckoutFormValues {
    items: CartItem[]
}

export async function createOrder(data: CreateOrderData, token: string | null): Promise<{ id: number }> {
    const result = await apiRequest<{ order: { id: number } }>("/api/orders", {
        method: "POST",
        body: data,
        token: token
    })
    return result.order;
}   