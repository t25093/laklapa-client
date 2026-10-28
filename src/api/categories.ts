import type { Category } from "../types";
import { apiRequest } from "./client";

export const getCategories = async () => {
    const data = await apiRequest<{ categories: Category[] }>("/api/categories")
    return data.categories
}