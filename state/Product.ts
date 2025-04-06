import { create } from "zustand/react";

/** Stores data for one product, including what options the user has selected. */
export interface ProductData {
    name: string,
    type: ProductType,
    options: Option[]
}

export enum ProductType {
    HOT_DRINK, COLD_DRINK, SEASONAL_SPECIAL
}

/** A configuration option(ice amount, sugar amount, etc.) for a product. */
export interface Option {
    name: string,
    choices: string[],
    currentChoice: string
}

/** Represents the current "state" of products on the hub menu.  */
export interface ProductState {
    currentProduct: ProductData | null,
    allProducts: ProductData[],
    setCurrentProduct: (product: ProductData | null) => void,
    addProduct: (product: ProductData) => void,
    loadProducts: (products: ProductData[]) => void
}

// TODO see if using get() in updating state works
export const useProductState = create<ProductState>((set, get) => ({
    currentProduct: null,
    allProducts: [],
    setCurrentProduct: (product) => {
        console.log("product being set: " + JSON.stringify(product))
        set({ currentProduct: product })
    },
    addProduct: (product) => set({ 
        allProducts: get().allProducts.concat(product)
    }),
    loadProducts: (products) => set({ allProducts: products })
}))
