import {StyleSheet, Text, View} from "react-native";

export function ProductPage() {
	return (
		<View style={styles.main}>
			<Text>This is the product page. TODO</Text>
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