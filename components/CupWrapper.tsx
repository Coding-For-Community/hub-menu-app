import { Size } from "@/state/ProductOrder";
import { useProductState } from "@/state/ProductState";
import { ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";


export function CupWrapper(args: {size: Size, children: ReactNode}) {
    const size = useProductState(state => state.sizeOfOrder)
    const setSize = useProductState(state => state.setSize)
    return (
        <TouchableOpacity 
            style={[styles.cup, size === args.size ? styles.selectedCup : null]}
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
		alignItems: "center",
        justifyContent: "center"
	},
	selectedCup: {
		backgroundColor: "rgba(135,206,250, 0.4)", 
		borderColor: "blue"
	}
})