import {StyleSheet, Text, View} from "react-native";

export default function Index() {
	return (
		<View style={styles.main}>
			<Text>Index.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	}
})
