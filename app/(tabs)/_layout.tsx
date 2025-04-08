import {Tabs} from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import { View } from "react-native";

export default function TabLayout() {
	return (
		<Tabs>
			<Tabs.Screen 
				name="MainMenu" 
				options={{
					title: "Order", 
					headerShown: false,
					tabBarIcon: ({color, size}) => (
						<Feather name="coffee" size={size} color={color} />
					)
				}}
			/>
			<Tabs.Screen 
				name="Cart" 
				options={{
					headerShown: false,
					tabBarIcon: ({color, size}) => (
						<Feather name="shopping-cart" size={size} color={color} style={{marginRight: 5}} />
					)
				}} 
			/>
			<Tabs.Screen 
				name="UserProfile" 
				options={{
					title: "Profile", 
					headerShown: false
				}}
			/>
		</Tabs>
	)
}