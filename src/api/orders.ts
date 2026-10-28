export function register(data:RegisterData): Promise<AuthResponse> {
    return apiRequest<AuthResponse>("/api/auth/register", {
        method: "POST",
        body: data,
    });
}   