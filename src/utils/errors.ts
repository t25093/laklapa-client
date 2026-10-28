import { ApiError } from "../api/client";
import type { FieldErrors } from "../types";

export function errorMessage(error: unknown): string {
    if (error instanceof ApiError) 
        return error.message;
    return "אירעה שגיאה. נסי שוב";
}

export function fieldErrors(error: unknown) :FieldErrors{
  if (error instanceof ApiError) {
    const result: FieldErrors = {};
    for (const detail of error.details || []) {
      if (detail.field) {
        result[detail.field] = detail.message;
      }
    }
    return result;
  }
  return {};
}   
 
