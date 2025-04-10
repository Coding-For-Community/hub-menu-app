import { StyleSheet, Text, View } from "react-native"

export default function UserProfile() {
    return (
        <View style={styles.main}>
            <Text>This is the user profile. TODO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
