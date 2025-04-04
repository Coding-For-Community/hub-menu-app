import {Tabs} from "expo-router";

export default function TabLayout() {
	return (
		<Tabs>
			<Tabs.Screen name="MainMenu" options={{title: "Menu"}}/>
			<Tabs.Screen name="Cart"/>
			<Tabs.Screen name="UserProfile" options={{title: "User Profile"}}/>
		</Tabs>
	)
}