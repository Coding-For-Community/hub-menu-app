import { create } from "zustand/react"
import { DUMMY_PRODUCT, Product } from "./Product"
import { CustomizationOptions, ProductOrder, Size } from "./ProductOrder"


export interface ProductState {
    allProducts: Product[],
    productToOrder: Product | null,
    sizeOfOrder: Size,
    customizationOfOrder: CustomizationOptions,
    cart: ProductOrder[],

    clearLastOrder: () => void, // clears the last order & its cache
    startOrder: (productToOrder: Product) => void, // starts a new order with a target product
    addProduct: (product: Product) => void, // adds a product to the list of all available products
    addCustomization: (optionUUID: string, response: string) => void, // adds an answer for a specific question(extra milk, etc)
    setSize: (size: Size) => void, // sets the user's desired size
    addOrderToCart: () => void, // pushes the order to cart and clears cache
    editOrder: (cartIndex: number) => void, // removes an order from cart, pushing it into the cache for editing
    loadFromStorage: (products: Product[]) => void, // loads state from remote storage
}


export const useProductState = create<ProductState>((set, get) => ({
    allProducts: [DUMMY_PRODUCT],
    productToOrder: null,
    sizeOfOrder: "large",
    customizationOfOrder: {},
    cart: [],
    clearLastOrder: () => set({
        productToOrder: null,
        sizeOfOrder: "large",
        customizationOfOrder: {}
    }),
    startOrder: (productToOrder) => {
        const state = get()
        if (state.productToOrder != null) {
            state.clearLastOrder()
            console.error("Last order was not cleared before setOrder called")
        }
        set({ productToOrder })
    },
    addProduct: (product) => {
        const currentProducts = get().allProducts
        if (currentProducts.indexOf(product) != -1) {
            console.error("Product already added")
        } else {
            set({ allProducts: currentProducts.concat(product) })
        }
    },
    addCustomization: (uuid, response) => set({ 
        customizationOfOrder: {...get().customizationOfOrder, [uuid]: response } 
    }),
    setSize: (size) => set({ sizeOfOrder: size }),
    addOrderToCart: () => {
        const state = get()
        if (state.productToOrder == null) {
            console.error("Customization without a product")
            return
        }
        const newCart = state.cart.concat({
            product: state.productToOrder,
            size: state.sizeOfOrder,
            customization: state.customizationOfOrder
        })
        set({ 
            cart: newCart,
            productToOrder: null, 
            sizeOfOrder: "large",
            customizationOfOrder: {}
        })
        console.log("cart: " + JSON.stringify(newCart))
    },
    editOrder: (index) => {
        const state = get()
        if (index < 0 || index >= state.cart.length) {
            console.error("editOrder index out of range.")
            return
        }
        const newCart = state.cart.slice(0, index).concat(state.cart.slice(index + 1))
        const orderToEdit = state.cart[index]
        set({
            cart: newCart,
            productToOrder: orderToEdit.product,
            sizeOfOrder: orderToEdit.size,
            customizationOfOrder: orderToEdit.customization
        })
    },
    loadFromStorage: (products) => set({ 
        allProducts: products,
        productToOrder: null, 
        sizeOfOrder: "large",
        customizationOfOrder: {},
        cart: []
    }),
}))