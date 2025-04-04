export interface Product {
    name: string,
    type: ProductType
    options: Option[]
}

export enum ProductType {
    HOT_DRINK, COLD_DRINK, SEASONAL_SPECIAL
}

export interface Option {
    name: string,
    choices: Choice[],
    exclusive: boolean
}

export interface Choice {
    image: string,
    name: string,
    price: number,
    description?: string
}