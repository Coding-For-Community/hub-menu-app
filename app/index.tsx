import { Link } from "expo-router";
import {StyleSheet, Text, View} from "react-native";
import { Anchor } from "tamagui";

export default function Index() {
	return (
		<View style={styles.main}>
			<Text>Index. For testing: <Link href="/MainMenu">This</Link></Text>
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
