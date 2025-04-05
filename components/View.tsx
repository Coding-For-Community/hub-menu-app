import { TouchableOpacity, View, ViewProps } from "react-native";

// Simple aliases for horizontal and vertical Views that are more clear in their orientation.

export function XStack(props: StackProps) {
    const base = <View {...props} style={{flexDirection: "row"}}/>
    if (props.onPress == null) {
        return base
    } else {
        return <TouchableOpacity onPress={props.onPress}>{base}</TouchableOpacity>
    }
}

export function YStack(props: StackProps) {
    const base = <View {...props} style={{flexDirection: "column"}}/>
    if (props.onPress == null) {
        return base
    } else {
        return <TouchableOpacity onPress={props.onPress}>{base}</TouchableOpacity>
    }
}

export interface StackProps extends ViewProps {
    onPress?: () => void
}