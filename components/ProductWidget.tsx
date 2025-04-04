import { View } from "react-native";
import { Circle, Image, Text, YStack } from "tamagui";

export function ProductWidget() {
    console.log("widget")
    return (
        <YStack>
            <Circle backgroundColor="$black"></Circle>
            <Text>Latte</Text>
        </YStack>
    )
}