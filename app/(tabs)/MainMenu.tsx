import {Image, ScrollView, SectionList, StyleSheet, Text, View} from "react-native";
import {ProductWidget} from "@/components/ProductWidget";
import { XStack, YStack } from "@/components/View";
import { H1, H3 } from "@/rn-reusables/ui/typography";
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from "@gorhom/bottom-sheet";
import { ForwardedRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Separator } from "@/rn-reusables/ui/separator";
import { useProductState } from "@/state/Product";

export default function Menu() {
	// TODO add dynamic rendering for products
	const allProducts = useProductState(state => state.allProducts)
	const currProduct = useProductState(state => state.currentProduct)
	// Everytime currProduct changes, this function is run with the
	// item page(BottomSheet) object itself passed as a parameter.
	const itemPageCloser = useCallback((itemPage: BottomSheetModal | null) => {
		if (currProduct == null) {
			itemPage?.close()
		} else {
			itemPage?.expand()
		}
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
	
	return (
		<>
			<H1 style={{
				marginLeft: 15,
				marginTop: 10,
				marginBottom: 10
			}}>Order</H1>
			<Separator />
			<ScrollView>
				<YStack style={styles.main}>
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
			>
				<BottomSheetView>
					<YStack style={{alignItems: "center"}}>
						<Image 
							source={require("../../assets/images/coffee.jpeg")}    
							style={{
								width: 120,
								height: 120,
								borderRadius: 60
							}}
						/>
						<Text>Latte</Text>
						<Text>50 trillion Callories LMAO</Text>
						<Separator style={{marginVertical: 4}} />
					</YStack>
				</BottomSheetView>
			</BottomSheet>
		</>
	)
}

const styles = StyleSheet.create({
	main: {},
	fadedMain: {

	},
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
	item: {},
})