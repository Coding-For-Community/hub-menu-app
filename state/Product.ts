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
export interface UserResponses {
    size: Size
    [questionUUID: string]: string
}

export interface ProductState {
    currentProduct: ProductSchema | null,
    allProducts: ProductSchema[],
    userResponses: UserResponses,
    setCurrentProduct: (product: ProductSchema | null) => void,
    addProduct: (product: ProductSchema) => void,
    loadState: (products: ProductSchema[]) => void,
    addUserResponse: (optionUUID: string, response: string) => void,
    setSize: (size: Size) => void
}

export const useProductState = create<ProductState>((set, get) => ({
    currentProduct: null,
    allProducts: [],
    userResponses: { size: "large" },
    setCurrentProduct: (product) => {
        console.log("product being set: " + JSON.stringify(product))
        set({ currentProduct: product })
    },
    addProduct: (product) => set({ 
        allProducts: get().allProducts.concat(product)
    }),
    loadState: (products) => set({ 
        allProducts: products,
        currentProduct: null, 
        userResponses: { size: "large" }
    }),
    addUserResponse: (uuid, response) => set({ 
        userResponses: {...get().userResponses, [uuid]: response } 
    }),
    setSize: size => set({
        userResponses: {...get().userResponses, size } 
    })
}))