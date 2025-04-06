import { create } from "zustand/react";
import {v4 as uuidv4} from 'uuid';

export interface ProductSchema {
    name: string
    type: ProductType
    options: Option[]
}

export enum ProductType {
    HOT_DRINK, COLD_DRINK, SEASONAL_SPECIAL
}

export interface Option {
    name: string
    uuid: string
    choices: string[]
}

export function createOption(name: string, choices: string[]): Option {
    return { name, choices, uuid: uuidv4() }
}

export type Size = "small" | "medium" | "large"

/** An interface that maps the uuid of a question to the user's response. */
export interface UserResponses {
    size: Size
    [optionUuid: string]: string
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

// TODO see if using get() in updating state works
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