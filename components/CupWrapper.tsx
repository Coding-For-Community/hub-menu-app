import { Size, useProductState } from "@/state/Product";
import { ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";


export function CupWrapper(args: {size: Size, children: ReactNode}) {
    const userResponses = useProductState(state => state.userResponses)
    const setSize = useProductState(state => state.setSize)
    return (
        <TouchableOpacity 
            style={[
                styles.cup, 
                userResponses.size === args.size ? styles.selectedCup : null
            ]}
            onPress={() => setSize(args.size)}
        >{args.children}</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cup: {
		borderWidth: 3, 
		padding: 10, 
		borderRadius: 60,
		width: 70,
		height: 70,
		display: "flex",
		alignItems: "center"
	},
	selectedCup: {
		backgroundColor: "rgba(135,206,250, 0.4)", 
		borderColor: "blue"
	}
})