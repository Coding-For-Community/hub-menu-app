import { ReactNode } from "react";
import { Pressable } from "react-native";

export function PressableIcon(args: {children: ReactNode, onPress?: () => void}) {
    return (
        <Pressable 
            onPress={args.onPress}
            style={({pressed}) => [
                {
                    opacity: pressed ? 0.5 : 1,
                    marginTop: pressed ? 5 : 0,
                    marginBottom: pressed ? 0 : 5
                }
            ]}
        >{args.children}</Pressable>
    )
}