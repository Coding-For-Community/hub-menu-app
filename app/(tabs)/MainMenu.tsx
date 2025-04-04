import {SectionList, StyleSheet, Text, View} from "react-native";
import {H1, H2} from "@tamagui/text";
import {Card, H3, ScrollView, XStack, YGroup, YStack} from "tamagui";
import {ProductPage} from "@/app/ProductPage";
import {ProductWidget} from "@/components/ProductWidget";

const MENU_DATA = [
	{
		title: "Seasonal Specials",
		data: ["Food!"]
	},
	{
		title: "Hot Drinks",
		data: []
	},
	{
		title: "Cold Drinks",
		data: []
	}
]


export default function Menu() {
	return (
		<ScrollView>
			<YStack style={styles.main}>
				<YStack style={styles.section}>
					<H3>Seasonal Specials</H3>
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
					<H3>Seasonal Specials</H3>
					<ScrollView horizontal={true}>
						<XStack style={styles.sectionRow}>
							<ProductWidget />
							<ProductWidget />
						</XStack>
					</ScrollView>
				</YStack>
			</YStack>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	main: {},
	section: {
		justifyContent: "flex-start",
		alignItems: "flex-start",
		marginLeft: 20,
		marginTop: 10,
		marginBottom: 30
	},
	sectionRow: {
		justifyContent: "flex-start",
		alignItems: "flex-start",
		gap: 20,
		marginTop: 10
	},
	item: {},
	header: {},
	title: {}
})