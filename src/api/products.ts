import type { Product, ProductFormValues } from "../types";
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

export const createProduct =async (data: ProductFormValues, token: string) => {
    const result=await apiRequest<{ product: Product }>(`/api/products`, {
        method: "POST",
        token,
        body: data
    })
    return result.product
}

export const updateProduct = async (id: number, data: ProductFormValues, token: string) => {
    const result= await apiRequest<{ product: Product }>(`/api/products/${id}`, {
        method: "PUT",
        token,
        body: data
    })
    return result.product
}
