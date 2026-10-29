export interface Category {
  id: number,
  name: string,
  createdAt: string,
}


export interface Product {
  id: number,
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  isActive: boolean,
  category: { id: number, name: string },
  createdAt: string,
  updatedAt: string,
}

export interface User {
  id: number,
  fullName: string,
  email: string,
  phone: string,
  role: Role,
  createdAt: string,
}

export type Role = "CUSTOMER" | "ADMIN";

export interface AuthResponse {
  user: User,
  token: string,
}

export interface ApiErrorBody {
  error: {
    message: string,
    code: string,
    details?: Array<{ field: string; message: string }>
  }
}

export interface FieldErrors {
  [key: string]: string,
}

export interface CartItem {
  productId: number
  name: string
  price: number
  imageUrl: string
  quantity: number
  preferredColor: string
  notes: string
}

export interface OrderSummary {
  id: number,
  totalAmount: number,
  itemsCount: number,
  status: string,
  deliveryMethod: string,
  recipientName: string,
  requestedDate: string,
  createdAt: string
}

export interface OrderItem {
  id: number,
  quantity: number,
  unitPrice: number,
  lineTotal: number,
  preferredColor: string,
  notes: string | null,
  product: { id: number; name: string; imageUrl: string }
}

export interface Order extends OrderSummary {
  deliveryAddress: string | null,
  greetingText: string | null,
  recipientPhone: string,
  items: OrderItem[]
}

export interface ProductFormValues {
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  categoryId: number,
}
