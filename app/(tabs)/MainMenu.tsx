import {Image, ScrollView, SectionList, StyleSheet, Text, View} from "react-native";
import {ProductWidget} from "@/components/ProductWidget";
import { XStack, YStack } from "@/components/View";
import { H3 } from "@/rn-reusables/ui/typography";
import BottomSheet, { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from "@gorhom/bottom-sheet";
import { ForwardedRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Separator } from "@/rn-reusables/ui/separator";
import { useProductState } from "@/state/Product";

export default function Menu() {
	// stores a ref of the actual HTML/react element.
	const measuredRef = useCallback((thisElement: BottomSheetModal | null) => {
		console.log("ref being triggered")
		if (currProduct == null) {
			thisElement?.close()
		} else {
			thisElement?.expand()
		}
		return true
	}, [])
    const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);
	const allProducts = useProductState(state => state.allProducts)
	const currProduct = useProductState(state => state.currentProduct)
	const setCurrProduct = useProductState(state => state.setCurrentProduct)
	console.log("current product: " + currProduct)

	return (
		<BottomSheetModalProvider>
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
			<BottomSheet ref={measuredRef} enablePanDownToClose>
				<BottomSheetView style={{alignItems: "center"}} >
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
				</BottomSheetView>
			</BottomSheet>
		</BottomSheetModalProvider>
	)
}

const styles = StyleSheet.create({
	main: {},
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