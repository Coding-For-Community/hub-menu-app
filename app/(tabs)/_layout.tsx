import { useProductState } from "@/state/Product";
import {Tabs} from "expo-router";

export default function TabLayout() {
	const currentProduct = useProductState(state => state.currentProduct)
	return (
		<Tabs>
			<Tabs.Screen name="MainMenu" options={{title: "Order", headerShown: false}}/>
			<Tabs.Screen name="Cart" options={{headerShown: false}} />
			<Tabs.Screen name="UserProfile" options={{title: "Profile", headerShown: false}}/>
		</Tabs>
	)
}