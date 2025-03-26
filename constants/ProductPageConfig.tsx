export interface ProductPageConfig {
    name: string,
    options: Option[]
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