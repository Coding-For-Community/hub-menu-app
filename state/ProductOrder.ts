import { Product } from "./Product"

export type Size = "small" | "medium" | "large"

export interface CustomizationOptions {
    [questionUUID: string]: string
}

export interface ProductOrder {
    product: Product
    size: Size
    customization: CustomizationOptions
}
