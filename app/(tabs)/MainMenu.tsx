import { StyleSheet, Text, View } from "react-native";

export default function Menu() {
    return (
        <View style={styles.main}>
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