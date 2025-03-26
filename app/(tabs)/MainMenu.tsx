import { StyleSheet, Text, View } from "react-native";
import { H2 } from "tamagui";

export default function Menu() {
    return (
        <View style={styles.main}>
            <H2>Seasonal Specials</H2>
            <H2>Hot Drinks</H2>
            <H2>Cold Drinks</H2>
            <Text>This is the menu. TODO</Text>
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