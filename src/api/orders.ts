import type { CheckoutFormValues } from "../components/cart/CheckoutForm";
import type { CartItem, Order, OrderSummary } from "../types";
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

export async function getMyOrders(token: string): Promise<OrderSummary[]> {
    const result = await apiRequest<{ orders: OrderSummary[] }>("/api/orders/my", {
        token
    })
    return result.orders;
}

export async function getOrder(id: number, token: string): Promise<Order> {
    const result = await apiRequest<{ order: Order }>(`/api/orders/${id}`, {
        token
    })
    return result.order;
}

export async function cancelOrder(id: number, token: string): Promise<Order> {
    const result = await apiRequest<{ order: Order }>(`/api/orders/${id}/cancel`, {
        method:"PATCH",
        token
    })
    return result.order;
}   