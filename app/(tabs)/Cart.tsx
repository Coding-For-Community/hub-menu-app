import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import {StyleSheet, Text, View} from "react-native";

export default function Cart() {
	return (
		<View style={styles.main}>
			<BottomSheet>
				<BottomSheetView>
					<Text>This is the cart. TODO</Text>
				</BottomSheetView>
			</BottomSheet>
		</View>
	)
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	}
})