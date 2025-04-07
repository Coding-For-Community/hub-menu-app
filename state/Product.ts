import { create } from "zustand/react";
import GenUUID from "react-native-uuid"

export interface ProductSchema {
    name: string
    type: ProductType,
    hasSizeOptions: boolean,
    questions: Question[]
}

export enum ProductType {
    HOT_DRINK, COLD_DRINK, SEASONAL_SPECIAL
}

export interface Question {
    name: string
    uuid: string
    choices: string[],
    defaultChoiceIdx: number
}

export function createQuestion(name: string, choices: string[], defaultChoiceIdx: number): Question {
    return { name, uuid: GenUUID.v4(), choices, defaultChoiceIdx }
}

export type Size = "small" | "medium" | "large"

/** An interface that maps the uuid of a question to the user's response. */
export interface ProductOrder {
    size: Size
    [questionUUID: string]: string
}

/** TODO remove this after debugging is done */
export const DUMMY_PRODUCT = {
    name: "latte",
    type: ProductType.COLD_DRINK,
    hasSizeOptions: true,
    questions: [
        createQuestion("Fruit", ["Orange", "Banana", "Apple"], 0)
    ]
}

export interface ProductState {
    currentProduct: ProductSchema | null,
    allProducts: ProductSchema[],
    currentOrder: ProductOrder,
    cart: ProductOrder[],
    setCurrentProduct: (product: ProductSchema | null) => void,
    addProduct: (product: ProductSchema) => void,
    loadState: (products: ProductSchema[]) => void,
    addUserResponse: (optionUUID: string, response: string) => void,
    setSize: (size: Size) => void,
    addToCart: () => void
}

export const useProductState = create<ProductState>((set, get) => ({
    currentProduct: null,
    allProducts: [DUMMY_PRODUCT],
    currentOrder: { size: "large" },
    cart: [],
    setCurrentProduct: (product) => {
        console.log("product being set: " + JSON.stringify(product))
        set({ currentProduct: product })
        // clears order if switching to a different product
        if (product != null) set({ currentOrder: { size: "large" } })
    },
    addProduct: (product) => {
        const currentProducts = get().allProducts
        if (currentProducts.indexOf(product) != -1) {
            console.error("Product already added")
        } else {
            set({ allProducts: currentProducts.concat(product) })
        }
    },
    loadState: (products) => set({ 
        allProducts: products,
        currentProduct: null, 
        currentOrder: { size: "large" }
    }),
    addUserResponse: (uuid, response) => set({ 
        currentOrder: {...get().currentOrder, [uuid]: response } 
    }),
    setSize: size => set({
        currentOrder: {...get().currentOrder, size } 
    }),
    addToCart: () => {
        const currentOrder = get().currentOrder
        set({ 
            cart: get().cart.concat(currentOrder),
            currentOrder: { size: "large" } 
        })
        console.log("cart: " + get().cart)
    }
}))