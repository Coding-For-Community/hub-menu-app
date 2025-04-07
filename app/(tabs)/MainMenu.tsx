import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions} from "react-native";
import {ProductWidget} from "@/components/ProductWidget";
import { XStack, YStack } from "@/components/View";
import { H1, H3 } from "@/rn-reusables/ui/typography";
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import { Separator } from "@/rn-reusables/ui/separator";
import { Size, useProductState } from "@/state/Product";
import { MediumCup } from "@/components/icons/MediumCup";
import { SmallCup } from "@/components/icons/SmallCup";
import { LargeCup } from "@/components/icons/LargeCup";
import { CupWrapper } from "@/components/CupWrapper";
import { DropdownSelect } from "@/components/DropdownSelect";
import { Button } from "@/rn-reusables/ui/button";
import { Link, useRouter } from "expo-router";

export default function Menu() {
	// TODO add dynamic rendering for products
	const allProducts = useProductState(state => state.allProducts)
	const currProduct = useProductState(state => state.currentProduct)
	const userResponses = useProductState(state => state.currentOrder)
	const addToCart = useProductState(state => state.addToCart)
	const setCurrentProduct = useProductState(state => state.setCurrentProduct)
	const { width } = useWindowDimensions()
	// Everytime currProduct changes, this function is run with the
	// item page(BottomSheet) object itself passed as a parameter.
	const itemPageCloser = useCallback((itemPage: BottomSheetModal | null) => {
		if (currProduct != null) itemPage?.expand()
	}, [currProduct])
	const backdropRenderFunction = useCallback(
		(props: BottomSheetBackdropProps) => (
			<BottomSheetBackdrop 
				{...props}
				opacity={0.5} 
				appearsOnIndex={0}
				disappearsOnIndex={-1}
			/>
		),
		[]
	)
	const router = useRouter()

	console.log("User responses: " + JSON.stringify(userResponses))
	
	return (
		<>
			<H1 style={{
				marginLeft: 15,
				marginTop: 40,
				marginBottom: 10
			}}>Order</H1>
			<Separator />
			<ScrollView>
				<YStack>
					<YStack style={styles.section}>
						<H3 style={styles.header}>Seasonal Specials</H3>
						<ScrollView horizontal>
							<XStack style={styles.sectionRow}>
								<ProductWidget />
								<ProductWidget />
								<ProductWidget />
								<ProductWidget />
							</XStack>
						</ScrollView>
					</YStack>
					<YStack style={styles.section}>
						<H3 style={styles.header}>Seasonal Specials</H3>
						<ScrollView horizontal={true}>
							<XStack style={styles.sectionRow}>
								<ProductWidget />
								<ProductWidget />
							</XStack>
						</ScrollView>
					</YStack>
				</YStack>
			</ScrollView>
			<BottomSheet 
				ref={itemPageCloser} 
				index={-1} 
				enablePanDownToClose 
				backdropComponent={backdropRenderFunction}
				onClose={() => setCurrentProduct(null)}
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
		</>
	)
}

const styles = StyleSheet.create({
	section: {
		justifyContent: "flex-start",
		alignItems: "flex-start",
		marginTop: 10,
		marginBottom: 30
	},
	sectionRow: {
		justifyContent: "flex-start",
		alignItems: "flex-start",
		gap: 20,
		marginTop: 10,
		paddingLeft: 15
	},
	header: {
		marginLeft: 15
	},
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