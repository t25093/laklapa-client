import type { ApiErrorBody } from "../types";

export class ApiError extends Error {
  status: number;
  code: string;
  details?: Array<{ field: string; message: string }>;

  constructor(status: number, code: string, message: string, details?: Array<{ field: string; message: string }>) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export async function apiRequest<T>(
  path: string,
  options: {
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: unknown;
    token?: string | null;
  } = {}
): Promise<T> {
  const { method = "GET", body, token } = options;

  const url = import.meta.env.VITE_API_URL + path;

  const headers: Record<string, string> = {};
  if (body !== undefined) headers["Content-Type"] = "application/json";
  if (token) headers["Authorization"] = `Bearer ${token}`;

  let response: Response;
  try {
    response = await fetch(url, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new ApiError(0, "NETWORK_ERROR", "אין חיבור לשרת. נסי שוב בעוד רגע");
  }

  if (response.status === 204) {
    return undefined as T;
  }

  if (!response.ok) {
    let errorBody: ApiErrorBody | null = null;
    try {
      errorBody = await response.json();
    } catch {
      errorBody = null;
    }
    throw new ApiError(
      response.status,
      errorBody?.error?.code ?? "UNKNOWN_ERROR",
      errorBody?.error?.message ?? "אירעה שגיאה. נסי שוב",
      errorBody?.error?.details
    );
  }

  return response.json();
}
