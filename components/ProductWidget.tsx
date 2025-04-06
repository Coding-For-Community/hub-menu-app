import { RefObject, memo, useMemo, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { YStack } from "./View";
import { Text } from "@/rn-reusables/ui/text";
import { DUMMY_PRODUCT, ProductType, createQuestion, useProductState } from "@/state/Product";

export function ProductWidget() {
    const setCurrProduct = useProductState(state => state.setCurrentProduct)
    return (
        <YStack 
            onPress={() => setCurrProduct(DUMMY_PRODUCT)}    
            style={{ alignItems: "center" }}
        >
            <Image 
                source={require("../assets/images/coffee.jpeg")}    
                style={{
                    width: 120,
                    height: 120,
                    borderRadius: 60
                }}/>
            <Text>Latte</Text>
        </YStack>
    )
}