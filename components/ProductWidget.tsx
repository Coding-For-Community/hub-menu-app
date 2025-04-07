import { RefObject, memo, useMemo, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { YStack } from "./View";
import { Text } from "@/rn-reusables/ui/text";
import { useProductState } from "@/state/ProductState";
import { DUMMY_PRODUCT } from "@/state/Product";

export function DemoProductWidget() {
    const startOrder = useProductState(state => state.startOrder)
    return (
        <YStack 
            onPress={() => startOrder(DUMMY_PRODUCT)}    
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