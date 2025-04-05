import { RefObject, memo, useMemo, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { YStack } from "./View";
import { Text } from "@/rn-reusables/ui/text";
import { Button } from "@/rn-reusables/ui/button";
import BottomSheet, { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { ProductType, useProductState } from "@/state/Product";

export function ProductWidget() {
    const setCurrProduct = useProductState(state => state.setCurrentProduct)
    return (
        <YStack 
            onPress={() => setCurrProduct({
                name: "latte",
                type: ProductType.COLD_DRINK,
                options: []
            })}    
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

const SheetContents = memo(SheetContentsImpl)
function SheetContentsImpl(args: {closeModal: () => void}) {
    return (
        <View>
            <Text>Tbd...</Text>
            <Button onPress={args.closeModal}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    productImg: { 
        width: 120, 
        height: 120, 
        borderRadius: 60 
    }
})