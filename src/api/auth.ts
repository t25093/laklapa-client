import { apiRequest } from "./client";
import type { AuthResponse, User } from "../types";

export async function getMe(token: string): Promise<User> {
  const data = await apiRequest<{ user: User }>("/api/auth/me", { token });
  return data.user;
}

export function login(email: string, password: string): Promise<AuthResponse> {
    return apiRequest<AuthResponse>("/api/auth/login", {
        method: "POST",
        body: { email, password },
    });
}

export interface RegisterData {
    fullName: string;
    email: string;
    phone: string;
    password: string;
}   

export function register(data:RegisterData): Promise<AuthResponse> {
    return apiRequest<AuthResponse>("/api/auth/register", {
        method: "POST",
        body: data,
    });
}