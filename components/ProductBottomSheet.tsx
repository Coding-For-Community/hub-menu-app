import {Image, StyleSheet, Text, useWindowDimensions} from "react-native";
import { XStack, YStack } from "@/components/View";
import { H1, H3 } from "@/rn-reusables/ui/typography";
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { memo, useCallback } from "react";
import { Separator } from "@/rn-reusables/ui/separator";
import { MediumCup } from "@/components/icons/MediumCup";
import { SmallCup } from "@/components/icons/SmallCup";
import { LargeCup } from "@/components/icons/LargeCup";
import { CupWrapper } from "@/components/CupWrapper";
import { DropdownSelect } from "@/components/DropdownSelect";
import { Button } from "@/rn-reusables/ui/button";
import { useRouter } from "expo-router";
import { useProductState } from "@/state/ProductState";

export function ProductBottomSheet() {
	const currProduct = useProductState(state => state.productToOrder)
	const addToCart = useProductState(state => state.addOrderToCart)
	const clearLastOrder = useProductState(state => state.clearLastOrder)
    const router = useRouter()
	const { width } = useWindowDimensions() // the width of the device
	// Everytime currProduct changes, this function is run with the
	// item page(BottomSheet) object itself passed as a parameter.
	const itemPageCloser = useCallback((itemPage: BottomSheetModal | null) => {
		if (currProduct != null) itemPage?.expand()
	}, [currProduct])
	
	return (
        <BottomSheet 
            ref={itemPageCloser} 
            index={-1} 
            enablePanDownToClose 
            backdropComponent={Backdrop}
            onClose={clearLastOrder}
        >
            <BottomSheetScrollView>
                <YStack style={{alignItems: "center"}}>
                    <Image 
                        source={require("../../assets/images/coffee.jpeg")}    
                        style={{
                            width: 200,
                            height: 200,
                            borderRadius: 100
                        }}
                    />
                    <Text style={{fontSize: 30}}>Latte</Text>
                    <Text style={{fontSize: 30, fontWeight: 200}}>Calories: 10000</Text>
                </YStack>
                <YStack style={{paddingHorizontal: 25, marginBottom: 55}}>
                    { // boolean && (stuff) renders (stuff) only if the boolean is true.
                        currProduct?.hasSizeOptions && 
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
                        </>
                    }
                    <H3>Customize</H3>
                    <Separator style={[{width: width - 50}, styles.separator]} />
                    {
                        currProduct?.questions?.map(question => <DropdownSelect question={question} />)
                    }
                </YStack>
            </BottomSheetScrollView>
            <Button 
                style={[styles.addToCartBtn, {width: width - 50}]}
                onPress={() => {
                    addToCart()
                    router.navigate("/(tabs)/Cart")
                }}
            >
                <Text style={{color: "white", fontSize: 15}}>Add to Cart</Text>
            </Button>
        </BottomSheet>
	)
}


const Backdrop = memo(BackdropImpl)
function BackdropImpl(props: BottomSheetBackdropProps) {
    return (
        <BottomSheetBackdrop 
            {...props}
            opacity={0.5} 
            appearsOnIndex={0}
            disappearsOnIndex={-1}
        />
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
	addToCartBtn: {
		backgroundColor: "blue", 
		borderRadius: 60, 
		position: "absolute", 
		bottom: 10, 
		left: 25
	}
})