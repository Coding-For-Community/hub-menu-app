import GenUUID from "react-native-uuid"

export interface Product {
    name: string
    type: ProductType
    hasSizeOptions: boolean
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

/** TODO remove this after debugging is done */
export const DUMMY_PRODUCT = {
    name: "latte",
    type: ProductType.COLD_DRINK,
    hasSizeOptions: true,
    questions: [
        createQuestion("Fruit", ["Orange", "Banana", "Apple"], 0)
    ]
}