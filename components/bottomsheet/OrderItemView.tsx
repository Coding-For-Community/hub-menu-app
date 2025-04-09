import { Image, StyleSheet, Text, useWindowDimensions } from "react-native";
import { XStack, YStack } from "@/components/XYStack";
import { H3 } from "@/rn-reusables/ui/typography";
import { Separator } from "@/rn-reusables/ui/separator";
import { MediumCup } from "@/components/icons/MediumCup";
import { SmallCup } from "@/components/icons/SmallCup";
import { LargeCup } from "@/components/icons/LargeCup";
import { CupWrapper } from "@/components/CupWrapper";
import { QuestionDropdown } from "@/components/QuestionDropdown";
import { useProductState } from "@/state/ProductState";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React from "react";

export function OrderItemView() {
	const productToOrder = useProductState(state => state.productToOrder)
	const { width } = useWindowDimensions()

    return (
        <BottomSheetScrollView>
            <YStack style={{alignItems: "center"}}>
                <Image 
                    source={require("../../assets/images/coffee.jpeg")}    
                    style={styles.productImg}
                />
                <Text style={{fontSize: 30}}>Latte</Text>
                <Text style={{fontSize: 30, fontWeight: 200}}>Calories: 10000</Text>
            </YStack>
            <YStack style={{paddingHorizontal: 25, marginBottom: 55}}>
                {
                    productToOrder?.hasSizeOptions && 
                    <>
                        <H3>Size</H3>
                        <Separator style={[{width: width - 50}, styles.separator]} />
                        <XStack style={styles.sizeSelection}>
                            <CupWrapper size="small">
                                <SmallCup width={50} height={42} />
                            </CupWrapper>
                            <CupWrapper size="medium">
                                <MediumCup width={50} height={45} />
                            </CupWrapper>
                            <CupWrapper size="large">
                                <LargeCup width={50} height={50} />
                            </CupWrapper>
                        </XStack>
                    </> // boolean && (stuff) renders (stuff) only if the boolean is true.
                }
                <H3>Customize</H3>
                <Separator style={[{width: width - 50}, styles.separator]} />
                {
                    productToOrder?.questions?.map((question, index) => <QuestionDropdown question={question} key={index} />)
                }
            </YStack>
        </BottomSheetScrollView>
    )
}

const styles = StyleSheet.create({
	separator: { 
		marginVertical: 4, 
		height: 4, 
		backgroundColor: "lightskyblue", 
		opacity: 0.3, 
		borderRadius: 1
	},
	sizeSelection: {
		alignItems: "flex-end", 
		justifyContent: "center", 
		paddingVertical: 10, 
		gap: 40
	},
    productImg: {
        width: 200,
        height: 200,
        borderRadius: 100
    }
})