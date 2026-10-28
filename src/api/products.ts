import type { Product } from "../types";
import { apiRequest } from "./client";

export const getProducts = async (categoryId?: number) => {
    let url = "/api/products"
    if (categoryId)
        url += `?categoryId=${categoryId}`
    const data = await apiRequest<{ products: Product[] }>(url)
    return data.products
}

export const getProduct = async (id: number) => {
    const data = await apiRequest<{ product: Product }>(`/api/products/${id}`);
    return data.product
}